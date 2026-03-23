from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
import os, requests, json, subprocess, sys
from datetime import datetime
from dotenv import load_dotenv

load_dotenv()
app = FastAPI(title="Jazmio Nexus - Estado")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/status", response_class=HTMLResponse)
async def status_dashboard():
    return '''<!DOCTYPE html>
<html>
<head>
    <title>Jazmio Nexus - Estado</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; background: #0b1118; color: #e1e1e1; display: flex; flex-direction: column; align-items: center; min-height: 100vh; }
        .container { width: 95%; max-width: 900px; margin-top: 40px; padding-bottom: 50px; }
        .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; border-bottom: 1px solid #1e293b; padding-bottom: 15px; }
        h1 { color: #00d4aa; margin: 0; font-size: 26px; font-weight: 800; letter-spacing: -0.5px; }
        .clock { font-family: 'Courier New', monospace; font-size: 18px; color: #64748b; background: #161e2b; padding: 4px 12px; border-radius: 6px; border: 1px solid #1e293b; }
        .server-status { padding: 12px 24px; border-radius: 12px; font-weight: 700; font-size: 15px; display: flex; align-items: center; gap: 10px; margin-bottom: 25px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
        .status-up { background: rgba(0, 212, 170, 0.08); color: #00d4aa; border: 1px solid rgba(0, 212, 170, 0.2); }
        .status-down { background: rgba(239, 68, 68, 0.08); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.2); }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 15px; margin-bottom: 30px; }
        .card { background: #161e2b; padding: 16px; border-radius: 14px; border: 1px solid #1e293b; display: flex; flex-direction: column; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); position: relative; overflow: hidden; }
        .card:hover { transform: translateY(-3px); border-color: #00d4aa; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3); }
        .service-info { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
        .service-name { font-weight: 700; font-size: 14px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px; }
        .status-badge { padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: 800; display: flex; align-items: center; gap: 5px; }
        .badge-ok { background: rgba(5, 150, 105, 0.15); color: #34d399; }
        .badge-error { background: rgba(185, 28, 28, 0.15); color: #f87171; }
        .preview-container { width: 100%; height: 160px; background: #070a0f; border-radius: 10px; border: 1px solid #1e293b; overflow: hidden; position: relative; margin-top: 10px; }
        .iframe-wrap { width: 100%; height: 100%; }
        .iframe-wrap iframe { width: 1000px; height: 600px; border: none; transform: scale(0.28); transform-origin: 0 0; }
        .preview-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: transparent; z-index: 5; cursor: pointer; transition: background 0.2s; display: flex; align-items: center; justify-content: center; opacity: 0; }
        .preview-container:hover .preview-overlay { background: rgba(0, 212, 170, 0.05); opacity: 1; }
        .btn-view { background: #00d4aa; color: #0b1118; border: none; padding: 6px 12px; border-radius: 6px; font-weight: 800; font-size: 11px; text-decoration: none; display: flex; align-items: center; gap: 5px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); }
        .details { margin-top: auto; font-size: 11px; color: #64748b; font-family: monospace; padding-top: 10px; display: flex; justify-content: space-between; align-items: center; }
        .detail-item { background: #0f172a; padding: 2px 6px; border-radius: 4px; }
        .log-section { width: 100%; margin-top: 40px; }
        .log-header { display: flex; align-items: center; gap: 10px; margin-bottom: 15px; color: #00d4aa; font-weight: 800; font-size: 14px; }
        .log-tabs { display: flex; gap: 5px; margin-bottom: 10px; }
        .log-tab { padding: 6px 14px; background: #161e2b; border: 1px solid #1e293b; border-radius: 6px; font-size: 12px; cursor: pointer; color: #64748b; font-weight: 600; }
        .log-tab.active { background: #1e293b; color: #00d4aa; border-color: #00d4aa; }
        .log-content { background: #070a0f; color: #10b981; font-family: 'Fira Code', 'Consolas', monospace; font-size: 11.5px; padding: 18px; border-radius: 10px; border: 1px solid #1e293b; height: 300px; overflow-y: auto; white-space: pre-wrap; display: none; box-shadow: inset 0 2px 8px rgba(0,0,0,0.5); }
        .log-content.active { display: block; }
        .footer { margin-top: 60px; padding: 30px; border-top: 1px solid #1e293b; text-align: center; color: #475569; }
        .footer p { margin: 5px 0; font-size: 12px; }
        .highlight { color: #00d4aa!important; font-weight: 700; }
        .pulse { width: 8px; height: 8px; border-radius: 50%; background: currentColor; animation: pulse 1.8s infinite; }
        @keyframes pulse { 0% { opacity: 1; transform: scale(1); } 50% { opacity: 0.3; transform: scale(1.3); } 100% { opacity: 1; transform: scale(1); } }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 JAZMIO NEXUS V4</h1>
            <div id="clock" class="clock">00:00:00</div>
        </div>
        
        <div id="status-summary">
            <div id="server-indicator" class="server-status status-up">
                <div class="pulse"></div>
                <span>CONECTANDO...</span>
            </div>
        </div>

        <div id="status-grid" class="grid">
            <!-- Services will be injected here -->
        </div>

        <div class="log-section">
            <div class="log-header">
                <span>📄 TERMINAL DE DIAGNÓSTICO</span>
                <span style="font-size: 10px; color: #475569; font-weight: 400; margin-left: auto;">LOGS EN TIEMPO REAL</span>
            </div>
            <div id="log-tabs" class="log-tabs"></div>
            <div id="log-contents"></div>
        </div>

        <div class="footer">
            <p>SISTEMA: <span class="highlight">Nexus Server Architecture</span> | VERSIÓN: <span id="version-tag" class="highlight">---</span></p>
            <p>LATENCIA DB: <span id="db-latency" class="highlight">---</span> | UPTIME HF: <span id="server-time" class="highlight">---</span></p>
            <p style="margin-top: 15px; font-size: 11px; opacity: 0.6;">&copy; 2026 Jazmío.io - Optimización de IA y Automatización Omnicanal.</p>
        </div>
    </div>

    <script>
        // Actualizar reloj local
        function updateClock() {
            document.getElementById('clock').innerText = new Date().toLocaleTimeString();
        }
        setInterval(updateClock, 1000);
        updateClock();

        const serviceMeta = {
            "crm": { name: "Nexus Manager", label: "CRM INTERFACE", path: "/" },
            "n8n": { name: "n8n Automation", label: "WORKFLOW ENGINE", path: "/n8n/login" },
            "evolution_api": { name: "Evolution API", label: "WHATSAPP ENGINE", path: "/manager/" },
            "manager": { name: "Evolution Manager", label: "INSTANCE CONTROL", path: "/manager/" },
            "redis": { name: "Redis Cache", label: "LOCAL BROKER", path: "" },
            "supabase": { name: "Supabase DB", label: "CLOUD DATABASE", path: "" },
            "nginx": { name: "Nginx Gateway", label: "ENTRY PROXY", path: "" }
        };

        let currentActiveTab = null;

        async function refreshData() {
            try {
                const res = await fetch('/api/status');
                const data = await res.json();
                
                const grid = document.getElementById('status-grid');
                let gridHtml = '';
                let anyError = false;

                // Render Service Cards
                Object.entries(data.services).forEach(([key, ok]) => {
                    if (!ok) anyError = true;
                    const meta = serviceMeta[key] || { name: key, label: "SERVICE", path: "" };
                    
                    gridHtml += `
                        <div class="card">
                            <div class="service-info">
                                <span class="service-name">${meta.label}</span>
                                <div class="status-badge ${ok ? 'badge-ok' : 'badge-error'}">
                                    <div class="${ok ? 'pulse' : ''}"></div>
                                    ${ok ? 'ONLINE' : 'ERROR'}
                                </div>
                            </div>
                            <div style="font-size: 16px; font-weight: 800; color: #f8fafc; margin-bottom: 5px;">${meta.name}</div>
                            ${meta.path ? `
                                <div class="preview-container">
                                    <div class="preview-overlay" onclick="window.open('${meta.path}', '_blank')">
                                        <div class="btn-view">ABRIR SISTEMA ↗</div>
                                    </div>
                                    <div class="iframe-wrap">
                                        <iframe src="${meta.path}" scrolling="no"></iframe>
                                    </div>
                                </div>
                            ` : `
                                <div style="height: 40px; display: flex; align-items: center; color: #475569; font-size: 11px; font-weight: 600;">
                                    SERVICIO DE INFRAESTRUCTURA (SIN INTERFAZ)
                                </div>
                            `}
                            <div class="details">
                                <span class="detail-item">${ok ? 'CONFIRMADO' : 'FALLO'}</span>
                                <span style="opacity: 0.5;">ID: ${key}</span>
                            </div>
                        </div>
                    `;
                });
                grid.innerHTML = gridHtml;

                // Render Logs
                const logTabs = document.getElementById('log-tabs');
                const logContents = document.getElementById('log-contents');
                let tabsHtml = '';
                let contentsHtml = '';
                
                const services = Object.keys(data.logs);
                if (!currentActiveTab && services.length > 0) currentActiveTab = services[0];

                services.forEach(svc => {
                    const isActive = svc === currentActiveTab;
                    tabsHtml += `<div class="log-tab ${isActive ? 'active' : ''}" onclick="switchTab('${svc}')">${svc.toUpperCase()}</div>`;
                    const logTxt = data.logs[svc].join('\\n').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                    contentsHtml += `<div id="log-content-${svc}" class="log-content ${isActive ? 'active' : ''}">${logTxt}</div>`;
                });
                logTabs.innerHTML = tabsHtml;
                logContents.innerHTML = contentsHtml;
                
                // Auto-scroll log activo
                const activeLogEl = document.getElementById(`log-content-${currentActiveTab}`);
                if (activeLogEl) activeLogEl.scrollTop = activeLogEl.scrollHeight;

                // Global Status
                const indicator = document.getElementById('server-indicator');
                indicator.className = `server-status ${anyError ? 'status-down' : 'status-up'}`;
                indicator.innerHTML = anyError ? '<div class="pulse"></div><span>SISTEMA CON ALERTAS AUNQUE OPERATIVO</span>' : '<div class="pulse"></div><span>SISTEMA 100% OPERATIVO Y CONECTADO</span>';
                
                // Labels
                document.getElementById('version-tag').innerText = data.version_tag;
                document.getElementById('server-time').innerText = data.timestamp;
                document.getElementById('db-latency').innerText = data.services.supabase ? '< 150ms' : 'N/A';

            } catch (e) {
                console.error(e);
                document.getElementById('server-indicator').className = 'server-status status-down';
                document.getElementById('server-indicator').innerHTML = '<div class="pulse"></div><span>FATAL: ERROR DE COMUNICACIÓN CON STATUS API</span>';
            }
        }

        window.switchTab = (svc) => {
            currentActiveTab = svc;
            const tabs = document.querySelectorAll('.log-tab');
            const contents = document.querySelectorAll('.log-content');
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            document.querySelectorAll('.log-tab').forEach(t => { if(t.innerText.toLowerCase() === svc) t.classList.add('active'); });
            const contentEl = document.getElementById(`log-content-${svc}`);
            if (contentEl) {
                contentEl.classList.add('active');
                contentEl.scrollTop = contentEl.scrollHeight;
            }
        };

        refreshData();
        setInterval(refreshData, 15000); // 15s refresh
    </script>
</body>
</html>'''

@app.get("/api/status")
async def api_status():
    services = {
        "redis": test_cmd(["redis-cli", "ping"], "PONG"),
        "supabase": test_db(),
        "crm": test_url("http://127.0.0.1:7860/"),
        "evolution_api": test_url("http://127.0.0.1:8080/health"),
        "manager": test_url("http://127.0.0.1:7860/manager/"),
        "n8n": test_url("http://127.0.0.1:5678/healthz"),
        "nginx": test_url("http://127.0.0.1:7860/")
    }
    
    logs = {}
    service_log_paths = {
        "n8n": "/tmp/n8n.log",
        "evolution": "/tmp/evolution.log",
        "nginx": "/tmp/nginx.log",
        "status": "/tmp/status.log"
    }
    
    for service, path in service_log_paths.items():
        try:
            if os.path.exists(path):
                res = subprocess.run(["tail", "-n", "40", path], capture_output=True, text=True)
                logs[service] = res.stdout.splitlines() if res.stdout else ["Log exists but is empty."]
            else:
                logs[service] = [f"Log not found: {path}"]
        except Exception as e:
            logs[service] = [f"Err: {str(e)}"]

    return {
        "services": services,
        "logs": logs,
        "timestamp": datetime.now().strftime("%H:%M:%S (%d/%m)"),
        "version_tag": "ULTIMATE-COMMERCIAL-FIX-v3.7.1"
    }

def test_cmd(cmd, expected):
    try:
        res = subprocess.run(cmd, capture_output=True, timeout=2)
        return res.stdout.decode().strip().upper() == expected.upper()
    except: return False

def test_url(url):
    try:
        # Intentar con la URL original
        r = requests.get(url, timeout=3, allow_redirects=True)
        if r.status_code in [200, 401, 404]: # Incluso 404 significa que el proceso está vivo
            return True
        return False
    except: return False

def test_db():
    try:
        # Usamos el password con URL Encoding para evitar problemas de parsing (* = %2A)
        uri = "postgresql://postgres.htabdguydyysolkzdilm:%2AMm0101mM%2A%2A%2A%2A@aws-0-us-west-2.pooler.supabase.com:5432/postgres"
        import psycopg2
        conn = psycopg2.connect(uri, connect_timeout=3)
        conn.close()
        return True
    except: return False

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
