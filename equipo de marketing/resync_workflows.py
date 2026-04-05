import requests
import json

# JAZMIO WORKFLOW RESYNC v1.0
API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxZGQwNWI5OS1mNmQxLTQ5N2QtYWMwOC0wNzg4MmNlZjdhNzciLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzc1Mjc5OTIxLCJleHAiOjE3ODMwNTEyMDB9.cdKpbFNHhT4kn09rH8iQHlafaZ0cZUx6eWayVHI4Qpo"
BASE_URL = "https://jazm-io-production.up.railway.app/api/v1/workflows"
NEW_CRED_ID = "EKmWQFzhonVIp8QQ" # ID de OpenRouter JAZMIO

headers = {
    "X-N8N-API-KEY": API_KEY,
    "Content-Type": "application/json"
}

def resync():
    print(f"🚀 Iniciando Sincronización Atómica en Jazm.io...")
    
    # 1. Obtener lista de todos los flujos
    try:
        r = requests.get(BASE_URL, headers=headers)
        if r.status_code != 200:
            print(f"❌ Error al listar flujos: {r.status_code}")
            return
        
        # n8n API v1 returns data in "data" or direct list
        workflows = r.json().get("data", r.json())
        print(f"🔍 Detectados {len(workflows)} flujos para sincronizar.")
        
        count = 0
        for wf in workflows:
            wf_id = wf.get("id")
            wf_name = wf.get("name")
            print(f"📦 Sincronizando: {wf_name} ({wf_id})")
            
            # 2. Descargar detalle del flujo
            rwf = requests.get(f"{BASE_URL}/{wf_id}", headers=headers)
            wf_data = rwf.json()
            
            # 3. Modificar nodos para usar la nueva credencial
            updated = False
            for node in wf_data.get("nodes", []):
                # Buscamos nodos que usen OpenAI u otros modelos
                if "credentials" in node:
                    # n8n suele usar 'openAiApi' o 'googleGeminiChatApi'
                    for cred_type in list(node["credentials"].keys()):
                        print(f"   🔗 Cambiando credencial {cred_type} en nodo {node['name']}")
                        # CAMBIO MAESTRO: Forzamos a que use OpenRouter JAZMIO
                        # Nota: Cambiamos el tipo a openAiApi porque OpenRouter es compatible
                        node["credentials"] = { "openAiApi": { "id": NEW_CRED_ID } }
                        # También cambiamos el tipo del nodo si es necesario
                        if "googleGemini" in node["type"] or "mistral" in node["type"]:
                             node["type"] = "n8n-nodes-base.openAi"
                        updated = True
            
            if updated:
                # 4. Volver a subir el flujo actualizado (v24.1: PURE PAYLOAD)
                clean_payload = {
                    "name": wf_data.get("name"),
                    "nodes": wf_data.get("nodes"),
                    "connections": wf_data.get("connections"),
                    "settings": wf_data.get("settings"),
                    "staticData": wf_data.get("staticData", {})
                }
                
                try:
                    u_res = requests.put(f"{BASE_URL}/{wf_id}", headers=headers, json=clean_payload, timeout=30)
                    if u_res.status_code == 200:
                        print(f"✅ ÉXITO: {wf_name} actualizado.")
                        count += 1
                    else:
                        print(f"⚠️ ERROR en {wf_name}: {u_res.status_code} - {u_res.text}")
                except Exception as put_e:
                    print(f"⚠️ ERROR DE RED en {wf_name}: {put_e}")
            else:
                print(f"ℹ️ {wf_name} ya estaba sincronizado o no requiere IA.")

        print(f"\n--- 🏆 MISIÓN CUMPLIDA: {count} flujos sincronizados con éxito ---")

    except Exception as e:
        print(f"❌ FALLO CRÍTICO: {e}")

if __name__ == "__main__":
    resync()
