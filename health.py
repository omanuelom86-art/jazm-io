from fastapi import FastAPI
import subprocess, psutil, os
from dotenv import load_dotenv
import psycopg2

load_dotenv()
app = FastAPI(title="Jazmio Health")

@app.get("/health")
def health():
    checks = {
        "timestamp": subprocess.run(["date"], capture_output=True).stdout.decode().strip(),
        "memory_percent": psutil.virtual_memory().percent,
        "cpu_percent": psutil.cpu_percent(interval=1),
        "redis": subprocess.run(["redis-cli", "ping"], capture_output=True).stdout.decode().strip() == "PONG",
        "supabase": False
    }
    try:
        conn = psycopg2.connect(os.getenv("DATABASE_CONNECTION_URI"))
        cur = conn.cursor()
        cur.execute("SELECT 1")
        checks["supabase"] = True
        cur.close()
        conn.close()
    except:
        checks["supabase"] = False
    return checks

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
