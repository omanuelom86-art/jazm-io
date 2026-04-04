#!/bin/bash
# Nexus Master n8n Bootstrapper (v11.19 - PLAN B 4.0 "TABULA RASA")

# 1. 🌐 Configuración de Red (Modo Raíz Directo)
export N8N_PORT="7860"
export N8N_PATH="/"
export N8N_LISTEN_ADDRESS="0.0.0.0"
export N8N_PROTOCOL="http" 
export N8N_HOST="0.0.0.0"
export WEBHOOK_URL="https://jazm-io-production.up.railway.app/"
export N8N_EDITOR_BASE_URL="https://jazm-io-production.up.railway.app/"

# 2. 🛡️ Seguridad y Permisos
export N8N_ENCRYPTION_KEY="nexus_secret_key"
export N8N_USER_FOLDER="/opt/nexus/.n8n"
export HOME="/opt/nexus"
export N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS="false"
export N8N_BLOCK_FS_WRITE_ACCESS="false"

python3 /opt/nexus/setup_gws.py || echo "GWS setup skipped."

# 4. 🧹 Importación Masiva de Innovación (Protocolo de Carga Total)
echo ">>> Importando Flujos Maestros desde Blueprints..."
# Importamos todos los flujos de la carpeta de plantillas de forma individual
n8n import:workflow --separate /opt/nexus/blueprints/ || echo "Carga de flujos omitida o ya realizada."

# 5. 🚀 Lanzamiento Oficial Atómico
echo ">>> Iniciando n8n (Plan B 4.0: Fresh Start) en puerto 7860..."
# No usamos 'exec' para permitir que el contenedor permanezca vivo si algo falla
n8n start
