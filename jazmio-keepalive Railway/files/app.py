import os
import time
import threading
import requests
from datetime import datetime
from flask import Flask, jsonify

app = Flask(__name__)

# ============================================================
# CONFIGURACIÓN — edita estas URLs
# ============================================================
TARGETS = [
    {
        "name": "Jazmio CRM (HF Main)",
        "url": os.environ.get("HF_SPACE_URL", "https://info86-new-espacio-jazmio.hf.space"),
        "interval": int(os.environ.get("PING_INTERVAL", "240")),  # segundos
    },
    # Agrega más spaces si tienes:
    # {
    #     "name": "Jazmio Evolution (HF Space 2)",
    #     "url": os.environ.get("HF_SPACE2_URL", ""),
    #     "interval": 240,
    # },
]

# Estado en memoria
status_log = []
MAX_LOG = 50  # últimos 50 pings


def ping(target):
    """Hace ping a un target y registra el resultado."""
    while True:
        try:
            start = time.time()
            response = requests.get(target["url"], timeout=15)
            elapsed = round((time.time() - start) * 1000)  # ms

            entry = {
                "ts": datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S UTC"),
                "name": target["name"],
                "url": target["url"],
                "status": response.status_code,
                "ms": elapsed,
                "ok": response.status_code < 400,
            }
            print(f"[PING] {entry['ts']} | {entry['name']} | {entry['status']} | {entry['ms']}ms")

        except Exception as e:
            entry = {
                "ts": datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S UTC"),
                "name": target["name"],
                "url": target["url"],
                "status": 0,
                "ms": -1,
                "ok": False,
                "error": str(e),
            }
            print(f"[ERROR] {entry['ts']} | {entry['name']} | {str(e)}")

        status_log.insert(0, entry)
        if len(status_log) > MAX_LOG:
            status_log.pop()

        time.sleep(target["interval"])


# ============================================================
# ENDPOINTS
# ============================================================

@app.route("/")
def dashboard():
    """Dashboard HTML simple."""
    rows = ""
    for e in status_log:
        color = "#2ecc71" if e["ok"] else "#e74c3c"
        ms_str = f"{e['ms']}ms" if e["ms"] >= 0 else "timeout"
        rows += f"""
        <tr>
            <td>{e['ts']}</td>
            <td>{e['name']}</td>
            <td style="color:{color}; font-weight:bold">{e.get('status','ERR')}</td>
            <td>{ms_str}</td>
            <td style="color:{color}">{'✅ OK' if e['ok'] else '❌ FAIL'}</td>
        </tr>"""

    targets_info = "".join(
        f"<li><b>{t['name']}</b> → {t['url']} (cada {t['interval']}s)</li>"
        for t in TARGETS
    )

    return f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="refresh" content="30">
        <title>Jazmio Keepalive</title>
        <style>
            body {{ font-family: monospace; background: #1a1a2e; color: #eee; padding: 20px; }}
            h1 {{ color: #00d4ff; }}
            h2 {{ color: #aaa; font-size: 14px; }}
            ul {{ color: #ccc; }}
            table {{ width: 100%; border-collapse: collapse; margin-top: 20px; }}
            th {{ background: #16213e; color: #00d4ff; padding: 10px; text-align: left; }}
            td {{ padding: 8px 10px; border-bottom: 1px solid #222; font-size: 13px; }}
            tr:hover {{ background: #16213e; }}
        </style>
    </head>
    <body>
        <h1>🚀 Jazmio Keepalive Monitor</h1>
        <h2>Targets activos:</h2>
        <ul>{targets_info}</ul>
        <p style="color:#888; font-size:12px">Auto-refresh cada 30s | Últimos {MAX_LOG} pings</p>
        <table>
            <tr>
                <th>Timestamp</th>
                <th>Servicio</th>
                <th>Status</th>
                <th>Latencia</th>
                <th>Resultado</th>
            </tr>
            {rows if rows else '<tr><td colspan="5" style="color:#888">Esperando primer ping...</td></tr>'}
        </table>
    </body>
    </html>
    """


@app.route("/health")
def health():
    """Endpoint de salud para Railway."""
    return jsonify({"status": "ok", "pings": len(status_log)})


@app.route("/api/status")
def api_status():
    """Retorna el estado en JSON."""
    return jsonify({
        "targets": [{"name": t["name"], "url": t["url"], "interval": t["interval"]} for t in TARGETS],
        "log": status_log[:10],
    })


# ============================================================
# ARRANQUE
# ============================================================
if __name__ == "__main__":
    # Lanzar un hilo por cada target
    for target in TARGETS:
        if target.get("url"):
            t = threading.Thread(target=ping, args=(target,), daemon=True)
            t.start()
            print(f"[INIT] Iniciando pings a: {target['name']} cada {target['interval']}s")

    port = int(os.environ.get("PORT", 8080))
    print(f"[INIT] Dashboard en http://0.0.0.0:{port}")
    app.run(host="0.0.0.0", port=port, debug=False)
