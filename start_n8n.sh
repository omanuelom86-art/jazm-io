#!/bin/bash
# Nexus Master n8n Bootstrapper (v11.22 - PERMISSION LIBERATOR)

# 0. 🛠️ Reparación de Permisos en Caliente
mkdir -p /tmp/nginx/logs /tmp/nginx/tmp /tmp/nginx/conf
chmod -R 777 /tmp/nginx
chmod -R 755 /opt/nexus/web
export N8N_LISTEN_ADDRESS="0.0.0.0"
export N8N_PROTOCOL="http"
export N8N_HOST="0.0.0.0"
export N8N_PORT="3100"
# N8N_PATH NO se define -> n8n corre en raiz (/)
# Nginx hace strip del prefix /n8n/ antes de pasar al proxy
# X-Forwarded-Prefix=/n8n le indica a n8n su URL publica
export WEBHOOK_URL="https://jazm-io-production.up.railway.app/n8n/"
export N8N_EDITOR_BASE_URL="https://jazm-io-production.up.railway.app/n8n/"

# 2. 🛡️ Seguridad y Permisos
export N8N_ENCRYPTION_KEY="nexus_secret_key"
export N8N_USER_FOLDER="/opt/nexus/.n8n"
export HOME="/opt/nexus"
export N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS="false"
export N8N_BLOCK_FS_WRITE_ACCESS="false"

# 3. 🛡️ Inyección de Nodos de Inteligencia (v16.5)
echo ">>> Intentando instalar nodos (timeout 30s)..."
timeout 30s npm install -g n8n-nodes-mcp-connector n8n-nodes-groq --omit=dev || echo ">>> [SKIP] Instalación de nodos falló o excedió tiempo."

python3 /opt/nexus/setup_gws.py || echo ">>> [SKIP] GWS setup skipped."

# 4. 🧹 Importación Masiva de Flujos
echo ">>> Importando flujos maestros (timeout 10s)..."
timeout 10s n8n import:workflow --separate "/opt/nexus/Plantillas Maestras n8n/" || echo ">>> [SKIP] Carga de flujos omitida."

# 5. 🚀 Lanzamiento Oficial Atómico
echo ">>> Iniciando n8n (Plan B 4.0: Fresh Start) en puerto 7860..."
# No usamos 'exec' para permitir que el contenedor permanezca vivo si algo falla
n8n start
