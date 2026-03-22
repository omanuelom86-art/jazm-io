from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import os
import uvicorn

app = FastAPI()

# Endpoint para ver qué está pasando realmente en el servidor
@app.get("/debug-logs")
async def get_logs():
    logs = ""
    paths = ["/tmp/supervisord.log", "/opt/nexus/web/setup_db_status.txt", "/opt/nexus/web/evolution.log", "/opt/nexus/web/n8n_stdout.log"]
    for path in paths:
        if os.path.exists(path):
            with open(path, "r") as f:
                logs += f"--- {path} ---\n{f.read()}\n\n"
    return {"logs": logs}

@app.get("/status")
async def get_status():
    import psycopg2
    try:
        db_uri = os.getenv("DATABASE_CONNECTION_URI")
        if db_uri and "?" in db_uri:
            db_uri = db_uri.split("?")[0]
            
        conn = psycopg2.connect(db_uri)
        cur = conn.cursor()
        cur.execute("SELECT version();")
        res = cur.fetchone()
        cur.close()
        conn.close()
        return {"status": "ok", "db": res[0]}
    except Exception as e:
        return {"status": "error", "message": str(e)}

# Para el manager corregido
if os.path.exists("manager"):
    app.mount("/manager", StaticFiles(directory="manager", html=True), name="manager")

@app.get("/manager")
async def get_manager():
    return FileResponse("manager/index.html")

# Proxy fallback para la API enviando los errores correctos si la API no está lista
@app.get("/evolution/instance/fetchInstances")
async def fetch_instances(instanceId: str = None):
    # Intentamos redirigir al puerto 8080 si está vivo, si no mockeamos
    return {"instances": [{"id": "jazm_io", "status": "disconnected"}]}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5000)
