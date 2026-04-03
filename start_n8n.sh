#!/bin/bash
export N8N_PORT="3100"
export N8N_PATH="/n8n/"
export N8N_LISTEN_ADDRESS="0.0.0.0"
export N8N_ENCRYPTION_KEY="nexus_secret_key"
export N8N_USER_FOLDER="/opt/nexus/.n8n"
export HOME="/opt/nexus"
export N8N_PROTOCOL="https"
export N8N_HOST="0.0.0.0"
export WEBHOOK_URL="https://jazm-io-production.up.railway.app/n8n/"
export N8N_EDITOR_BASE_URL="https://jazm-io-production.up.railway.app/n8n/"

# --- NUEVO: Reset Owner Password via CLI para asegurar acceso ---
echo ">>> Resetting n8n owner credentials..."
n8n user-management:reset-password --email omanuelom86@gmail.com --password "Nexus2026*" || echo "Admin already exists or CLI not ready, continuing..."

echo ">>> Starting n8n v14.1 (Isolated Path Mode)"
n8n start
