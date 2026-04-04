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

# 3. 🧠 Setup de Agentes IA
echo ">>> Configurando entorno de Agentes..."
python3 /opt/nexus/setup_gws.py || echo "GWS setup skipped."

# 4. 🧹 Limpieza de Usuarios (Protocolo Tabula Rasa - FORZAR REGISTRO)
echo ">>> Limpiando base de datos para habilitar registro nuevo..."
# Borramos los usuarios existentes en Supabase para que n8n muestre la pantalla de "Crea tu Cuenta" al entrar.
PGPASSWORD="*Mm0101mM****" psql -h aws-0-us-west-2.pooler.supabase.com -p 5432 -U postgres.htabdguydyysolkzdilm -d postgres -c "DELETE FROM \"user\";" || echo "SQL: Tabla de usuarios no encontrada o limpia."

# 5. 🚀 Lanzamiento Oficial Atómico
echo ">>> Iniciando n8n (Plan B 4.0: Fresh Start) en puerto 7860..."
# No usamos 'exec' para permitir que el contenedor permanezca vivo si algo falla
n8n start
