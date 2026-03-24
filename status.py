
import os
import subprocess
import requests
import json
import socket
import psycopg2
from datetime import datetime
from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Jazmio Nexus Diagnostic V3.17-FINAL-FIX")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

PORT = int(os.getenv("PORT", 7860))

# Limpiar URL de base de datos
DATABASE_URL = os.getenv("DATABASE_CONNECTION_URI") or os.getenv("DATABASE_URL")
if DATABASE_URL and "?" in DATABASE_URL:
    DATABASE_URL = DATABASE_URL.split("?")[0]
if DATABASE_URL:
    DATABASE_URL = DATABASE_URL.strip('"').strip("'")

def test_tcp(host, port):
    try:
        with socket.create_connection((host, port), timeout=2):
            return True
    except:
        return False

def test_sql():
    if not DATABASE_URL: return False
    try:
        conn = psycopg2.connect(DATABASE_URL, connect_timeout=3, options="-c search_path=evolution_api,public")
        cur = conn.cursor()
        cur.execute("SELECT 1")
        cur.close()
        conn.close()
        return True
    except:
        return False

@app.get("/api/status")
def api_status():
    results = {
        "redis": test_tcp("127.0.0.1", 6379),
        "supabase": test_sql(),
        "crm": test_url(f"http://127.0.0.1:{PORT}/index.html"),
        "evolution_api": test_url("http://127.0.0.1:8080/health"),
        "n8n": test_url("http://127.0.0.1:5678/healthz"),
        "nginx": test_tcp("127.0.0.1", PORT)
    }
    
    log_files = {
        "n8n_err": "/tmp/n8n.err",
        "n8n_out": "/tmp/n8n.log",
        "reset_login": "/tmp/reset-login.log",
        "evolution_err": "/tmp/evolution.err"
    }
    
    logs = {}
    for name, path in log_files.items():
        try:
            if os.path.exists(path):
                with open(path, "r") as f:
                    logs[name] = [l.strip() for l in f.readlines()[-50:]]
            else:
                logs[name] = [f"Log {path} no encontrado."]
        except Exception as e:
            logs[name] = [f"Error: {e}"]

    audit_logs = []
    db_users = []
    if DATABASE_URL:
        try:
            conn = psycopg2.connect(DATABASE_URL, connect_timeout=3, options="-c search_path=auth,public")
            cur = conn.cursor()
            cur.execute("""
                SELECT created_at, ip_address, payload 
                FROM auth.audit_log_entries 
                ORDER BY created_at DESC LIMIT 15
            """)
            audit_rows = cur.fetchall()
            audit_logs = [f"[{r[0]}] IP: {r[1]} - Event: {r[2].get('name', 'unknown')} - Msg: {r[2].get('error', 'Success')}" for r in audit_rows]
            
            cur.execute("SELECT id, email, created_at FROM auth.users ORDER BY created_at DESC LIMIT 5")
            u_rows = cur.fetchall()
            db_users = [{"id": str(r[0]), "email": r[1], "created": str(r[2])} for r in u_rows]
            
            cur.close()
            conn.close()
        except Exception as e:
            audit_logs = [f"Error leyendo Auditoría: {e}"]
    
    logs["AUTH_AUDIT"] = audit_logs

    return {
        "services": results,
        "logs": logs,
        "db_users": db_users,
        "timestamp": datetime.now().strftime("%H:%M:%S (%d/%m)"),
        "version_tag": "ULTIMATE-COMMERCIAL-FIX-v3.17-FINAL-FIX"
    }

def test_url(url):
    try:
        r = requests.get(url, timeout=3, allow_redirects=True)
        return r.status_code in [200, 401, 404]
    except:
        return False

@app.get("/", response_class=HTMLResponse)
@app.get("/status", response_class=HTMLResponse)
async def status_dashboard():
    return '''<!DOCTYPE html>
<html>
<head>
    <title>Jazmio Nexus - Estado v3.17</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { font-family: sans-serif; margin: 0; background: #0b1118; color: #e1e1e1; display: flex; flex-direction: column; align-items: center; }
        .container { width: 95%; max-width: 1000px; margin-top: 40px; padding-bottom: 40px; }
        h1 { color: #00d4aa; text-align: center; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 15px; margin-bottom: 30px; }
        .card { background: #161e2b; padding: 16px; border-radius: 12px; border: 1px solid #1e293b; }
        .badge { padding: 4px 8px; border-radius: 10px; font-size: 11px; font-weight: bold; }
        .badge-ok { background: #065f46; color: #34d399; }
        .badge-err { background: #7f1d1d; color: #f87171; }
        .log-section { width: 100%; margin-top: 30px; }
        .log-tabs { display: flex; gap: 5px; margin-bottom: 5px; overflow-x: auto; -webkit-overflow-scrolling: touch; }
        .log-tab { padding: 8px 12px; border: 1px solid #1e293b; cursor: pointer; font-size: 10px; white-space: nowrap; background: #161e2b; }
        .log-tab.active { background: #1e293b; color: #00d4aa; border-color: #00d4aa; }
        .log-content { background: #070a0f; color: #10b981; font-family: monospace; font-size: 11px; padding: 15px; border-radius: 8px; height: 350px; overflow-y: auto; white-space: pre-wrap; display: none; }
        .log-content.active { display: block; }
        table { width: 100%; border-collapse: collapse; font-size: 11px; margin-top: 10px; color: #94a3b8; }
        th, td { border: 1px solid #1e293b; padding: 8px; text-align: left; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 JAZMIO NEXUS V3.17-FINAL-FIX</h1>
        <div id="status-grid" class="grid">Conectando...</div>
        
        <div class="log-section">
            <h3 style="color: #00d4aa;">📄 TELEMETRÍA N8N Y AUTH</h3>
            <div id="log-tabs" class="log-tabs"></div>
            <div id="log-contents"></div>
        </div>

        <div class="log-section">
            <h3 style="color: #00d4aa;">👥 ÚLTIMOS USUARIOS</h3>
            <div id="user-view"></div>
        </div>

        <div style="margin-top: 30px; text-align: center; font-size: 12px; opacity: 0.6;">
            VERSIÓN: <span id="vtag">---</span> | HORA: <span id="stime">---</span>
        </div>
    </div>

    <script>
        let currentTab = 'n8n_err';
        async function update() {
            try {
                const r = await fetch('/api/status');
                const d = await r.json();
                
                document.getElementById('status-grid').innerHTML = Object.entries(d.services).map(([k, ok]) => `
                    <div class="card">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <b>${k.toUpperCase()}</b>
                            <span class="badge ${ok?'badge-ok':'badge-err'}">${ok?'ONLINE':'ERROR'}</span>
                        </div>
                    </div>
                `).join('');

                const logKeys = Object.keys(d.logs);
                document.getElementById('log-tabs').innerHTML = logKeys.map(k => `
                    <div class="log-tab ${k===currentTab?'active':''}" onclick="currentTab='${k}';update();">${k.toUpperCase()}</div>
                `).join('');
                document.getElementById('log-contents').innerHTML = logKeys.map(k => `
                    <div class="log-content ${k===currentTab?'active':''}">${d.logs[k].join('\\n').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
                `).join('');

                document.getElementById('user-view').innerHTML = `<table>${d.db_users.map(u => `<tr><td>${u.email}</td><td>${u.id}</td></tr>`).join('')}</table>`;
                document.getElementById('vtag').innerText = d.version_tag;
                document.getElementById('stime').innerText = d.timestamp;
                const activeEl = document.querySelector('.log-content.active');
                if (activeEl) activeEl.scrollTop = activeEl.scrollHeight;
            } catch(e) {}
        }
        setInterval(update, 10000); update();
    </script>
</body>
</html>'''

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
