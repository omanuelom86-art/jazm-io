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
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; background: #0b0e14; color: #e1e1e1; display: flex; flex-direction: column; align-items: center; min-height: 100vh; }
        .container { width: 90%; max-width: 800px; margin-top: 50px; }
        .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; border-bottom: 1px solid #1f2937; padding-bottom: 20px; }
        h1 { color: #00d4aa; margin: 0; font-size: 24px; }
        .clock { font-family: monospace; font-size: 18px; color: #9ca3af; }
        .server-status { padding: 10px 20px; border-radius: 50px; font-weight: bold; font-size: 14px; display: flex; align-items: center; gap: 8px; margin-bottom: 20px; }
        .status-up { background: rgba(0, 212, 170, 0.1); color: #00d4aa; border: 1px solid rgba(0, 212, 170, 0.2); }
        .status-down { background: rgba(239, 68, 68, 0.1); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.2); }
        .card { background: #111827; padding: 20px; border-radius: 12px; margin-bottom: 15px; border: 1px solid #1f2937; display: flex; flex-direction: column; transition: transform 0.2s; }
        .card:hover { transform: translateY(-2px); border-color: #374151; }
        .service-info { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
        .service-name { font-weight: 600; font-size: 16px; color: #f3f4f6; }
        .status-badge { padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: bold; text-transform: uppercase; }
        .badge-ok { background: #064e3b; color: #34d399; }
        .badge-error { background: #7f1d1d; color: #f87171; }
        .preview-box { width: 100%; height: 150px; background: #0b0e14; border-radius: 8px; border: 1px solid #1f2937; overflow: hidden; position: relative; cursor: pointer; transition: border-color 0.3s; }
        .preview-box:hover { border-color: #00d4aa; }
        .preview-box iframe { width: 100%; height: 400px; border: none; transform: scale(0.375); transform-origin: 0 0; pointer-events: none; }
        .preview-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 212, 170, 0); transition: background 0.3s; display: flex; align-items: center; justify-content: center; }
        .preview-box:hover .preview-overlay { background: rgba(0, 212, 170, 0.1); }
        .preview-box:hover .preview-overlay::after { content: 'Abrir Aplicación ↗'; font-size: 12px; color: #00d4aa; font-weight: bold; padding: 8px 16px; background: #111827; border: 1px solid #00d4aa; border-radius: 4px; }
        .preview-label { position: absolute; top: 5px; right: 10px; font-size: 10px; color: #6b7280; font-family: monospace; z-index: 10; }
        .pulse { width: 10px; height: 10px; border-radius: 50%; background: currentColor; animation: pulse 2s infinite; }
        .log-section { margin-top: 30px; width: 100%; }
        .log-container { background: #000; color: #0f0; font-family: 'Courier New', Courier, monospace; font-size: 12px; padding: 15px; border-radius: 8px; border: 1px solid #333; height: 200px; overflow-y: auto; white-space: pre-wrap; margin-bottom: 20px; }
        .log-title { color: #00d4aa; font-size: 14px; margin-bottom: 10px; font-weight: bold; }
        .footer { margin-top: 50px; padding: 20px; border-top: 1px solid #1f2937; width: 100%; text-align: center; font-size: 12px; color: #6b7280; }
        .footer-highlight { color: #00d4aa; font-weight: bold; }
        @keyframes pulse { 0% { opacity: 1; transform: scale(1); } 50% { opacity: 0.4; transform: scale(1.2); } 100% { opacity: 1; transform: scale(1); } }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 Jazmio Nexus - Sistema</h1>
            <div id="clock" class="clock">00:00:00</div>
        </div>
        
        <div id="server-indicator" class="server-status status-up">
            <div class="pulse"></div>
            <span>SERVIDOR: EN LÍNEA</span>
        </div>

        <div id="status-list">
            <!-- Cards will be injected here -->
        </div>

        <div class="log-section">
            <div class="log-title">📄 LOGS DE SISTEMA (TIEMPO REAL)</div>
            <div id="logs-view"></div>
        </div>

        <div class="footer">
            <div>OBJETIVO: <span class="footer-highlight">Estabilización de Assets, Ruteo Nativo n8n y Desbloqueo de Iframes.</span></div>
            <div style="margin-top: 10px;">ÚLTIMA ACTUALIZACIÓN (CÓDIGO): <span class="footer-highlight">2026-03-22 16:10:00 (UTC-6)</span></div>
            <div style="margin-top: 5px;">VERSIÓN DE AUDITORÍA: <span id="version-tag" class="footer-highlight">ESPERANDO ACTUALIZACIÓN...</span></div>
            <div style="margin-top: 5px;">ESTADO DEL SERVIDOR (LIVE): <span id="server-time" class="footer-highlight">...</span></div>
            <div style="margin-top: 5px; font-style: italic;">"Auditoría técnica aplicada: Aislamiento de carpetas y limpieza de cabeceras de seguridad."</div>
        </div>
    </div>

    <script>
        function updateClock() {
            const now = new Date();
            document.getElementById('clock').innerText = now.toLocaleTimeString();
        }
        setInterval(updateClock, 1000);
        updateClock();

        const serviceUrls = {
            "crm": "/",
            "n8n": "/n8n/login",
            "manager": "/manager/",
            "evolution_api": "/manager/" // Mostramos el manager para que sea visual
        };

        async function loadStatus() {
            try {
                const r = await fetch('/api/status');
                const d = await r.json();
                let html = '';
                let anyError = false;

                for (const [key, ok] of Object.entries(d.services)) {
                    if (key === "redis" || key === "supabase" || key === "nginx" || key === "evolution_api") {
                         html += `
                            <div class="card">
                                <div class="service-info">
                                    <span class="service-name">${key.toUpperCase()}</span>
                                    <span class="status-badge ${ok ? 'badge-ok' : 'badge-error'}">
                                        ${ok ? '● Funcionando' : '○ Fallando'}
                                    </span>
                                </div>
                            </div>
                        `;
                        continue;
                    }
                    if (!ok) anyError = true;
                    const previewUrl = serviceUrls[key] || "#";
                    html += `
                        <div class="card">
                            <div class="service-info">
                                <span class="service-name">${key.toUpperCase()}</span>
                                <span class="status-badge ${ok ? 'badge-ok' : 'badge-error'}">
                                    ${ok ? '● Funcionando' : '○ Fallando'}
                                </span>
                            </div>
                            <div class="preview-box" onclick="window.open('${previewUrl}', '_blank')">
                                <div class="preview-label">VISTA PREVIA REAL</div>
                                <div class="preview-overlay"></div>
                                <iframe src="${previewUrl}" scrolling="no" loading="lazy"></iframe>
                            </div>
                        </div>
                    `;
                }
                document.getElementById('status-list').innerHTML = html;
                
                // Actualizar Logs
                let logsHtml = '';
                if (d.logs) {
                    for (const [service, lines] of Object.entries(d.logs)) {
                        const content = lines.join('\n').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                        logsHtml += `<div class="log-title">${service.toUpperCase()}</div><div class="log-container" id="log-${service}">${content}</div>`;
                    }
                }
                document.getElementById('logs-view').innerHTML = logsHtml;
                
                // Auto-scroll logs to bottom
                for (const service in d.logs) {
                    const el = document.getElementById(`log-${service}`);
                    if (el) el.scrollTop = el.scrollHeight;
                }
                
                const indicator = document.getElementById('server-indicator');
                if (d.timestamp) {
                    document.getElementById('server-time').innerText = d.timestamp;
                }
                if (d.version_tag) {
                    document.getElementById('version-tag').innerText = d.version_tag;
                }
                if (anyError) {
                    indicator.className = 'server-status status-down';
                    indicator.innerHTML = '<div class="pulse"></div><span>SERVIDOR: ALERTA DE SERVICIO</span>';
                } else {
                    indicator.className = 'server-status status-up';
                    indicator.innerHTML = '<div class="pulse"></div><span>SERVIDOR: TOTALMENTE OPERATIVO</span>';
                }
            } catch(e) {
                document.getElementById('server-indicator').className = 'server-status status-down';
                document.getElementById('server-indicator').innerHTML = '<div class="pulse"></div><span>SERVIDOR: DESCONECTADO</span>';
            }
        }
        loadStatus();
        setInterval(loadStatus, 10000); // Actualizar previews cada 10s para no saturar
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
        "n8n": test_url("http://127.0.0.1:5678/healthz"),
        "manager": test_url("http://127.0.0.1:7860/manager/"),
        "nginx": test_url("http://127.0.0.1:7860/")
    }
    
    # Logs check - Enhanced for debugging
    logs = {}
    service_log_paths = {
        "n8n": "/tmp/n8n.log",
        "evolution": "/tmp/evolution.log",
        "nginx": "/tmp/nginx.log",
        "status": "/tmp/status.log",
        "supervisord": "/tmp/supervisord.log"
    }
    
    for service, path in service_log_paths.items():
        try:
            if os.path.exists(path):
                # Usar comando tail para ser más eficiente y evitar problemas de lectura
                res = subprocess.run(["tail", "-n", "30", path], capture_output=True, text=True)
                if res.stdout:
                    logs[service] = res.stdout.splitlines()
                else:
                    logs[service] = [f"Log file exists but is empty: {path}"]
            else:
                logs[service] = [f"Log file not found at: {path}"]
        except Exception as e:
            logs[service] = [f"Error reading log: {str(e)}"]

    # Calcular porcentaje de salud
    total = len(services)
    up = sum(1 for ok in services.values() if ok)
    health = int((up / total) * 100)
    
    return {
        "services": services,
        "health": health,
        "server": "Hugging Face Space (Docker)",
        "specs": "Shared CPU / 16GB RAM",
        "logs": logs,
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "version_tag": "AUDIT-FIX-2026-03-22-17-00-SLEEP-FIX" # TAG ÚNICO PARA VALIDAR ACTUALIZACIÓN
    }

def test_cmd(cmd, expected):
    try:
        res = subprocess.run(cmd, capture_output=True, timeout=2)
        return res.stdout.decode().strip().upper() == expected.upper()
    except: return False

def test_url(url):
    try:
        r = requests.get(url, timeout=3, allow_redirects=True)
        # 401 es OK para Evolution (pide apikey), 200 para el resto
        return r.status_code in [200, 401]
    except: return False

def test_db():
    try:
        # Usamos el URI del supervisor para probar, eliminando el parámetro ?schema que psycopg2 no soporta directamente en la URI
        uri = "postgresql://postgres.htabdguydyysolkzdilm:*Mm0101mM****@aws-0-us-west-2.pooler.supabase.com:5432/postgres"
        import psycopg2
        conn = psycopg2.connect(uri, connect_timeout=3)
        conn.close()
        return True
    except Exception as e:
        print(f"DEBUG DB ERROR: {e}")
        return False

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
