#!/bin/bash
# Nexus Master n8n Bootstrapper (v13.0 - RAILWAY SAFE)

# 0. Crear directorios
mkdir -p /tmp/nginx/logs /tmp/nginx/tmp /tmp/nginx/conf /opt/nexus/.n8n 2>/dev/null || true
chmod -R 777 /tmp/nginx 2>/dev/null || true
chmod -R 755 /opt/nexus/web 2>/dev/null || true
chmod -R 755 /opt/nexus/.n8n 2>/dev/null || true

# 1. Configuracion de Red
export N8N_LISTEN_ADDRESS="0.0.0.0"
export N8N_PROTOCOL="http"
export N8N_HOST="0.0.0.0"
export N8N_PORT="3100"
export WEBHOOK_URL="https://jazm-io-production.up.railway.app/n8n/"
export N8N_EDITOR_BASE_URL="https://jazm-io-production.up.railway.app/n8n/"

# 2. Seguridad y Permisos
export N8N_ENCRYPTION_KEY="nexus_secret_key_2026"
export N8N_USER_FOLDER="/opt/nexus/.n8n"
export HOME="/opt/nexus"
export N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS="false"
export N8N_BLOCK_FS_WRITE_ACCESS="false"

# 3. Base de Datos
export DB_TYPE="postgresdb"
export DB_POSTGRESDB_HOST="aws-0-us-west-2.pooler.supabase.com"
export DB_POSTGRESDB_PORT="5432"
export DB_POSTGRESDB_DATABASE="postgres"
export DB_POSTGRESDB_USER="postgres.htabdguydyysolkzdilm"
export DB_POSTGRESDB_PASSWORD="*Mm0101mM****"
export DB_POSTGRESDB_SCHEMA="n8n_fresh_access"
export DB_POSTGRESDB_SSL="true"
export DB_POSTGRESDB_SSL_REJECT_UNAUTHORIZED="false"

echo ">>> [n8n] Installing custom nodes..."
npm install -g n8n-nodes-mcp-connector n8n-nodes-groq --omit=dev 2>&1 | head -20 || echo ">>> [n8n] Nodes already installed or skipped."

echo ">>> [n8n] GWS setup..."
python3 /opt/nexus/setup_gws.py 2>&1 || echo ">>> [n8n] GWS setup skipped."

echo ">>> [n8n] Importing workflows..."
n8n import:workflow --separate "/opt/nexus/Plantillas Maestras n8n/" 2>&1 | head -20 || echo ">>> [n8n] Import skipped."

echo ">>> [n8n] STARTING on port 3100..."
exec n8n start
