import requests
import time

URLS = {
    "Login Page": "https://info86-new-espacio-jazmio.hf.space/",
    "n8n": "https://info86-new-espacio-jazmio.hf.space/n8n/",
    "Status Dashboard": "https://info86-new-espacio-jazmio.hf.space/status",
    "Evolution API Health": "https://info86-new-espacio-jazmio.hf.space/evolution/health"
}

def check_remote():
    print("--- Verificando Servidor Remoto Jazm.io ---")
    for name, url in URLS.items():
        try:
            r = requests.get(url, timeout=10)
            print(f"{name}: [{r.status_code}] {'OK' if r.status_code in [200, 401] else 'FALLO'}")
        except Exception as e:
            print(f"{name}: ERROR DE CONEXIÓN ({e})")

if __name__ == "__main__":
    check_remote()
