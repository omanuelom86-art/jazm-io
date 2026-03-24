import requests, time, os, threading, subprocess
from dotenv import load_dotenv

load_dotenv()
# URL Base de Hugging Face
BASE_URL = os.getenv("SERVER_URL", "https://info86-new-espacio-jazmio.hf.space").rstrip('/')
DB_URI = os.getenv("DATABASE_CONNECTION_URI") or os.getenv("DATABASE_URL")

# Rutas clave para mantener vivo el Space
ENDPOINTS = [
    "/",
    "/n8n/",
    "/manager/",
    "/evolution/",
    "/status",
    "/api/status"
]

print(f"🚀 INICIANDO NEXUS KEEPALIVE V4 (DB CHECK + SELF-HEAL) (@ {time.strftime('%H:%M:%S')})")

def check_db():
    if not DB_URI: return False
    try:
        import psycopg2
        # Limpiar URI para psycopg2
        uri = DB_URI.split("?")[0] if "?" in DB_URI else DB_URI
        conn = psycopg2.connect(uri, connect_timeout=5)
        conn.close()
        return True
    except Exception as e:
        print(f"⚠️ DB Check Fail: {str(e)[:50]}")
        return False

def restart_service(service_name):
    print(f"🔧 Intentando reiniciar servicio: {service_name}...")
    try:
        # Usar supervisorctl para reiniciar el programa
        subprocess.run(["supervisorctl", "restart", f"{service_name}"], capture_output=True)
    except Exception as e:
        print(f"❌ Error al reiniciar {service_name}: {e}")

def internal_ping():
    while True:
        print(f"\n--- 🕒 Ciclo Interno: {time.strftime('%H:%M:%S')} ---")
        
        # 1. Check DB
        db_ok = check_db()
        print(f"🗄️ DB Status -> {'✅ OK' if db_ok else '❌ FAIL'}")
        
        # 2. Check Endpoints
        for endpoint in ENDPOINTS:
            target = f"http://127.0.0.1:7860{endpoint}"
            try:
                r = requests.get(target, timeout=10)
                print(f"🤖 Local Ping -> {endpoint} ✅ [{r.status_code}]")
                
                # Auto-heal si n8n o evolution dan error 502/504
                if r.status_code in [502, 504]:
                    if "n8n" in endpoint.lower(): restart_service("n8n")
                    if "evolution" in endpoint.lower(): restart_service("evolution")
                    
            except Exception as e:
                print(f"❌ Local Ping -> {endpoint} [Error: {str(e)[:30]}]")
        
        time.sleep(300) # Cada 5 minutos interno

def external_sim():
    while True:
        print(f"\n--- 🌐 Simulador Externo: {time.strftime('%H:%M:%S')} ---")
        try:
            # Usar un User-Agent real para parecer tráfico humano
            headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}
            r = requests.get(BASE_URL, headers=headers, timeout=20)
            print(f"🌍 Public Ping -> {BASE_URL} ✅ [{r.status_code}]")
        except Exception as e:
            print(f"❌ Public Ping Error: {str(e)[:50]}")
        
        # Pings cada 10 minutos
        time.sleep(600)

if __name__ == "__main__":
    t1 = threading.Thread(target=internal_ping, daemon=True)
    t2 = threading.Thread(target=external_sim, daemon=True)
    t1.start()
    t2.start()
    
    # Mantener el hilo principal vivo
    while True:
        time.sleep(1)
