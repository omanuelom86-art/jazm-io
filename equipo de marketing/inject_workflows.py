import os
import json
import requests

# JAZMIO WORKFLOW INJECTOR v1.0
API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxZGQwNWI5OS1mNmQxLTQ5N2QtYWMwOC0wNzg4MmNlZjdhNzciLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzc1Mjc5OTIxLCJleHAiOjE3ODMwNTEyMDB9.cdKpbFNHhT4kn09rH8iQHlafaZ0cZUx6eWayVHI4Qpo"
BASE_URL = "https://jazm-io-production.up.railway.app/api/v1/workflows"
BLUEPRINTS_DIR = r"C:\Jazmio servidor Hunnging\Plantillas Maestras n8n"

headers = {
    "X-N8N-API-KEY": API_KEY,
    "Content-Type": "application/json"
}

def inject_workflows():
    print(f"🚀 Iniciando Inyección Directa en Jazm.io...")
    count = 0
    
    # Buscamos archivos JSON recursivamente
    for root, dirs, files in os.walk(BLUEPRINTS_DIR):
        for file in files:
            if file.endswith(".json"):
                file_path = os.path.join(root, file)
                print(f"📦 Procesando: {file}")
                
                try:
                    with open(file_path, "r", encoding="utf-8") as f:
                        wf_data = json.load(f)
                    
                    # Preparar el nombre recortado para la base de datos (v17.2)
                    wf_name = wf_data.get("name", file.replace(".json", ""))[:64]
                    
                    # Preparar el cuerpo SIMPLE para la API de n8n (v17.1)
                    payload = {
                        "name": wf_name,
                        "nodes": wf_data.get("nodes", []),
                        "connections": wf_data.get("connections", {}),
                        "settings": wf_data.get("settings", {})
                    }
                    
                    try:
                        response = requests.post(BASE_URL, headers=headers, json=payload, timeout=30)
                        
                        if response.status_code in [200, 201]:
                            print(f"✅ ÉXITO: {file} inyectado correctamente.")
                            count += 1
                        else:
                            print(f"⚠️ ERROR en {file}: {response.status_code} - {response.text}")
                    except Exception as res_e:
                        print(f"⚠️ ERROR DE RED en {file}: {res_e}")
                
                except Exception as e:
                    print(f"❌ FALLO CRÍTICO en {file}: {e}")

    print(f"\n--- 🏆 MISIÓN CUMPLIDA: {count} flujos inyectados en Jazm.io ---")

if __name__ == "__main__":
    inject_workflows()
