
import os
import subprocess
import requests
import json
import socket
import psycopg2
from datetime import datetime
import urllib.parse
from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

load_dotenv()
VERSION = "NEXUS-AGENTIC-HUB-v11.8-FINAL-SYNC"

app = FastAPI(title="Nexus AI | Intelligence Command Center")

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
    DATABASE_URL = urllib.parse.unquote(DATABASE_URL)

def test_tcp(host, port):
    try:
        with socket.create_connection((host, port), timeout=2):
            return True
    except:
        return False

def test_sql():
    if not DATABASE_URL: return False
    try:
        # Soportar contraseña codificada y omitir opciones problemáticas en poolers
        conn = psycopg2.connect(DATABASE_URL, connect_timeout=3)
        cur = conn.cursor()
        cur.execute("SELECT 1")
        cur.close()
        conn.close()
        return True
    except:
        return False

def test_url(url):
    try:
        r = requests.get(url, timeout=3, allow_redirects=True)
        return r.status_code in [200, 401, 404]
    except:
        return False

@app.get("/api/status")
def api_status():
    results = {
        "redis": test_tcp("127.0.0.1", 6379),
        "supabase": test_sql(),
        "crm": test_url(f"http://127.0.0.1:{PORT}/index.html"),
        "evolution_api": test_url("http://127.0.0.1:8080/health"),
        "n8n": test_url("http://127.0.0.1:3100/n8n/healthz"),
        "nginx": test_tcp("127.0.0.1", PORT)
    }
    
    # Check if all critical services are up
    is_healthy = results["supabase"] and results["n8n"] and results["evolution_api"]
    
    log_files = {
        "n8n_err": "/tmp/n8n.err",
        "n8n_out": "/tmp/n8n.log",
        "evolution_err": "/tmp/evolution.err",
        "evolution_log": "/opt/nexus/web/evolution.log",
        "reset_login": "/tmp/reset-login.log"
    }
    
    logs = {}
    for name, path in log_files.items():
        try:
            if os.path.exists(path):
                with open(path, "r") as f:
                    logs[name] = [l.strip() for l in f.readlines()[-100:]]
            else:
                logs[name] = [f"Log {path} no encontrado."]
        except Exception as e:
            logs[name] = [f"Error: {e}"]

    audit_logs = []
    db_users = []
    if DATABASE_URL:
        try:
            conn = psycopg2.connect(DATABASE_URL, connect_timeout=3)
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
        "status": "healthy" if is_healthy else "unhealthy",
        "services": results,
        "logs": logs,
        "db_users": db_users,
        "timestamp": datetime.now().strftime("%H:%M:%S (%d/%m)"),
        "version_tag": VERSION
    }

@app.get("/status")
def health_check():
    # Strict compliance with Diagnostic Guide
    data = api_status()
    return {
        "status": data["status"],
        "timestamp": data["timestamp"],
        "version": data["version_tag"]
    }

@app.get("/api/debug/logs")
def get_debug_logs(file: str = "evolution_err"):
    # Traducir nombres cortos si es necesario
    file_map = {
        "evolution_err": "/tmp/evolution.err",
        "evolution_log": "/opt/nexus/web/evolution.log",
        "n8n_err": "/tmp/n8n.err",
        "n8n_log": "/tmp/n8n.log",
        "reset_login": "/tmp/reset-login.log"
    }
    path = file_map.get(file, f"/tmp/{file}")
    
    if ".." in path: return "Invalid path"
    
    try:
        if os.path.exists(path):
            with open(path, "r") as f:
                return f.read()[-8000:]
        return f"File {path} not found"
    except Exception as e:
        return str(e)

@app.get("/dashboard", response_class=HTMLResponse)
@app.get("/", response_class=HTMLResponse)
async def status_dashboard():
    return '''<!DOCTYPE html>
<html lang="es">
<head>
    <title>Nexus AI | Command Center</title>
    <meta name="robots" content="noindex, nofollow">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-dark: #0a0b10;
            --glass: rgba(255, 255, 255, 0.03);
            --glass-border: rgba(255, 255, 255, 0.08);
            --accent: #6366f1;
            --accent-glow: rgba(99, 102, 241, 0.5);
            --text-main: #e2e8f0;
            --text-dim: #94a3b8;
            --success: #10b981;
            --error: #ef4444;
        }

        * { box-sizing: border-box; transition: all 0.3s ease; }
        body { 
            font-family: 'Outfit', sans-serif; 
            margin: 0; 
            background: var(--bg-dark); 
            background-image: radial-gradient(circle at 20% 20%, #1e1b4b 0%, transparent 40%),
                              radial-gradient(circle at 80% 80%, #312e81 0%, transparent 40%);
            color: var(--text-main);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            overflow-x: hidden;
        }

        .container { width: 95%; max-width: 1200px; padding: 40px 20px; }

        header { 
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
            margin-bottom: 40px; 
            animation: fadeIn 0.8s ease-out;
        }

        .logo { font-size: 28px; font-weight: 700; letter-spacing: -1px; display: flex; align-items: center; gap: 10px; }
        .logo .dot { width: 12px; height: 12px; background: var(--accent); border-radius: 50%; box-shadow: 0 0 15px var(--accent-glow); }

        .status-pill { 
            background: var(--glass); 
            border: 1px solid var(--glass-border); 
            padding: 8px 16px; 
            border-radius: 20px; 
            font-size: 14px; 
            -webkit-backdrop-filter: blur(10px);
            backdrop-filter: blur(10px);
        }

        .grid { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
            gap: 20px; 
            margin-bottom: 40px; 
        }

        .card { 
            background: var(--glass);
            border: 1px solid var(--glass-border);
            padding: 24px;
            border-radius: 24px;
            -webkit-backdrop-filter: blur(20px);
            backdrop-filter: blur(20px);
            position: relative;
            overflow: hidden;
        }
        .card:hover { transform: translateY(-5px); border-color: rgba(99, 102, 241, 0.3); background: rgba(255,255,255,0.05); }

        .card-header { display: flex; justify-content: space-between; align-items: start; margin-bottom: 20px; }
        .card-title { font-size: 14px; font-weight: 600; color: var(--text-dim); text-transform: uppercase; letter-spacing: 1px; }
        
        .card-value { font-size: 32px; font-weight: 700; margin-bottom: 10px; }
        
        .indicator { width: 40px; height: 40px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 18px; }
        .indicator.ok { background: rgba(16, 185, 129, 0.1); color: var(--success); }
        .indicator.err { background: rgba(239, 68, 68, 0.1); color: var(--error); }

        .log-container { 
            background: var(--glass);
            border: 1px solid var(--glass-border);
            border-radius: 24px;
            padding: 30px;
            -webkit-backdrop-filter: blur(20px);
            backdrop-filter: blur(20px);
        }

        .tabs { display: flex; gap: 10px; margin-bottom: 20px; overflow-x: auto; padding-bottom: 10px; }
        .tab { 
            padding: 10px 20px; 
            border-radius: 12px; 
            cursor: pointer; 
            font-size: 13px; 
            font-weight: 600; 
            white-space: nowrap;
            background: var(--glass);
            border: 1px solid var(--glass-border);
            color: var(--text-dim);
        }
        .tab.active { background: var(--accent); color: white; border-color: var(--accent); box-shadow: 0 5px 15px rgba(99, 102, 241, 0.3); }

        .log-viewport { 
            background: rgba(0,0,0,0.3); 
            border-radius: 16px; 
            height: 400px; 
            overflow-y: auto; 
            padding: 20px;
            font-family: 'JetBrains Mono', monospace; 
            font-size: 11px; 
            color: #10b981;
            line-height: 1.6;
            border: 1px solid rgba(255,255,255,0.05);
        }

        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-thumb { background: var(--glass-border); border-radius: 10px; }

        /* Custom Table for Users */
        .user-table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        .user-table th { text-align: left; padding: 12px; color: var(--text-dim); border-bottom: 1px solid var(--glass-border); font-size: 12px; }
        .user-table td { padding: 12px; border-bottom: 1px solid var(--glass-border); font-size: 13px; }

    </style>
</head>
<body>
    <div class="container">
        <header>
            <div class="logo"><div class="dot"></div> Nexus AI</div>
            <div class="status-pill" id="uptime">Checking System Core...</div>
        </header>

        <div class="grid" id="status-grid">
            <!-- Cards populated by JS -->
        </div>

        <div class="log-container">
            <h3 style="margin-top:0; font-weight: 600; letter-spacing: -0.5px;">Telemetría de Sistema</h3>
            <div class="tabs" id="log-tabs"></div>
            <div class="log-viewport" id="log-viewport">Cargando flujos de datos...</div>
        </div>

        <div style="margin-top: 40px;">
            <h3 style="font-weight: 600; letter-spacing: -1px;">Equipo Nexus AI <span style="font-size: 12px; color: var(--accent); opacity: 0.7;">Agentes Activos</span></h3>
            <div class="grid">
                <div class="card">
                    <div style="display: flex; gap: 15px; align-items: center;">
                        <img src="/assets/vinnie.png" style="width: 60px; height: 60px; border-radius: 50%; border: 2px solid var(--accent);">
                        <div>
                            <div style="font-weight: 700;">VINNIE</div>
                            <div style="font-size: 11px; color: var(--text-dim);">Virtual Assistant & Support</div>
                        </div>
                        <div style="margin-left: auto; color: var(--success); font-size: 18px;">●</div>
                    </div>
                </div>
                <div class="card">
                    <div style="display: flex; gap: 15px; align-items: center;">
                        <img src="/assets/sophie.png" style="width: 60px; height: 60px; border-radius: 50%; border: 2px solid var(--accent);">
                        <div>
                            <div style="font-weight: 700;">SOPHIE</div>
                            <div style="font-size: 11px; color: var(--text-dim);">Strategic Marketing Bot</div>
                        </div>
                        <div style="margin-left: auto; color: var(--success); font-size: 18px;">●</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card" style="margin-top: 40px;">
            <h3 style="margin-top:0; font-weight: 600;">Auditoría de Accesos</h3>
            <div style="overflow-x: auto;">
                <table class="user-table" id="user-view"></table>
            </div>
        </div>

        <footer style="margin-top: 40px; text-align: center; color: var(--text-dim); font-size: 12px;">
            PROJECT NEXUS AI &bull; ACCESO RESTAURADO v4.7.1 &bull; POWERED BY GROQ
        </footer>
    </div>

    <script>
        let currentTab = 'evolution_log';
        let fullData = null;

        async function update() {
            try {
                const r = await fetch('/api/status');
                fullData = await r.json();
                
                const grid = document.getElementById('status-grid');
                grid.innerHTML = '';
                
                const statusMap = {
                    'redis': { icon: '📦', title: 'Redis Cache' },
                    'supabase': { icon: '🗄️', title: 'Supabase DB' },
                    'n8n': { icon: '🤖', title: 'n8n Engine' },
                    'evolution_api': { icon: '💬', title: 'WhatsApp API' },
                    'crm': { icon: '🚀', title: 'Nexus CRM' },
                    'nginx': { icon: '🌐', title: 'Gateway' }
                };

                Object.entries(fullData.services).forEach(([k, ok]) => {
                    if(!statusMap[k]) return;
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.innerHTML = `
                        <div class="card-header">
                            <span class="card-title">${statusMap[k].title}</span>
                            <div class="indicator ${ok?'ok':'err'}">${ok?'✓':'!'}</div>
                        </div>
                        <div class="card-value">${ok?'Active':'Service Down'}</div>
                        <div style="font-size: 12px; color: ${ok?'var(--success)':'var(--error)'}">
                            ${ok?'Operating at peak performance':'Action required immediately'}
                        </div>
                    `;
                    grid.appendChild(card);
                });

                document.getElementById('uptime').innerText = `Sync: ${fullData.timestamp} (${fullData.version_tag})`;

                // Tabs
                const logKeys = Object.keys(fullData.logs);
                document.getElementById('log-tabs').innerHTML = logKeys.sort().map(k => `
                    <div class="tab ${k===currentTab?'active':''}" onclick="setTab('${k}')">${k.replace('_',' ').toUpperCase()}</div>
                `).join('');

                renderLog();

                // Users
                document.getElementById('user-view').innerHTML = `
                    <thead><tr><th>Identity</th><th>Created</th></tr></thead>
                    <tbody>${fullData.db_users.map(u => `<tr><td>${u.email}</td><td style="color:var(--text-dim)">${u.created}</td></tr>`).join('')}</tbody>
                `;

            } catch(e) { console.error(e); }
        }

        function setTab(k) {
            currentTab = k;
            update();
        }

        function renderLog() {
            const view = document.getElementById('log-viewport');
            if(fullData && fullData.logs[currentTab]) {
                view.innerText = fullData.logs[currentTab].join('\\n');
                view.scrollTop = view.scrollHeight;
            }
        }

        setInterval(update, 10000); 
        update();
    </script>
</body>
</html>'''

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
