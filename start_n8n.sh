#!/bin/bash
export N8N_PORT="3100"
# Eliminamos N8N_PATH para evitar bugs de assets de n8n v1.x
unset N8N_PATH
export N8N_LISTEN_ADDRESS="0.0.0.0"
export N8N_ENCRYPTION_KEY="nexus_secret_key"
export N8N_USER_FOLDER="/opt/nexus/.n8n"
export HOME="/opt/nexus"
export N8N_PROTOCOL="http"
export N8N_HOST="127.0.0.1"
export WEBHOOK_URL="https://jazm-io-production.up.railway.app/n8n/"
export N8N_EDITOR_BASE_URL="https://jazm-io-production.up.railway.app/n8n/"
# Variables críticas para que el frontend sepa dónde está
export VUE_APP_URL_BASE_API="https://jazm-io-production.up.railway.app/n8n/"

echo ">>> Starting n8n in ROOT MODE (v14.0 - Strip Prefix Strategy)"
n8n start
