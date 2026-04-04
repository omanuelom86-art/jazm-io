#!/bin/bash
# Nexus Master n8n Bootstrapper (v11.8 Fix)

# 1. 🌐 Configuración de Red
export N8N_PORT="7860"
export N8N_PATH="/"
export N8N_LISTEN_ADDRESS="0.0.0.0"
export N8N_PROTOCOL="http" 
export N8N_HOST="0.0.0.0"
export WEBHOOK_URL="https://jazm-io-production.up.railway.app/"
export N8N_EDITOR_BASE_URL="https://jazm-io-production.up.railway.app/"

# 2. 🛡️ Configuración de Seguridad y Permisos (Fix Trabajo Hormiga)
export N8N_ENCRYPTION_KEY="nexus_secret_key"
export N8N_USER_FOLDER="/opt/nexus/.n8n"
export HOME="/opt/nexus"
export N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS="false" # CRÍTICO: Previene errores de Docker
export N8N_BLOCK_FS_WRITE_ACCESS="false"

# 3. 🧠 Setup de Agentes IA y GWS
echo ">>> Configurando Autenticación Google Workspace..."
python3 /opt/nexus/setup_gws.py || echo "GWS setup skipped or already exists."

# 4. 🚀 Lanzamiento Oficial (Velocidad Máxima)
echo ">>> Iniciando n8n (Plan B 2.0: Instant Boot) en puerto 7860..."
n8n start
