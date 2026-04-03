import os
import json
import base64

def setup_gws():
    auth_json = os.getenv("GWS_AUTH_JSON")
    if not auth_json:
        print(">>> GWS_AUTH_JSON not found. Skipping GWS setup.")
        return

    try:
        # Intentar cargar como JSON directo
        creds = json.loads(auth_json)
        with open("/opt/nexus/gws-auth.json", "w") as f:
            json.dump(creds, f)
        
        # Configurar variable de entorno para el CLI
        os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "/opt/nexus/gws-auth.json"
        os.environ["GOOGLE_WORKSPACE_CLI_CREDENTIALS_FILE"] = "/opt/nexus/gws-auth.json"
        
        print(">>> Google Workspace CLI configured successfully.")
    except Exception as e:
        print(f">>> Error setting up GWS: {e}")

if __name__ == "__main__":
    setup_gws()
