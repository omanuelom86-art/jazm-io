#!/bin/bash

# --- NEXUS STARTUP MANAGER: EVOLUTION API ---
echo "--- NEXUS STARTUP MANAGER ---"

# 1. Cargar variables desde .env si existe
if [ -f "/opt/nexus/.env" ]; then
    echo "✅ Cargando variables de .env..."
    export $(grep -v '^#' /opt/nexus/.env | xargs)
fi

# 2. Configuración Forzada de Identidad Evolution
export AUTHENTICATION_TYPE="apikey"
export AUTHENTICATION_API_KEY="Supera"
export AUTHENTICATION_EXPOSE_IN_FETCH_INSTANCES="true"
export CONFIG_SESSION_PHONE_VERSION="2.2413.51"

# Detectar REAL_MAIN de Evolution
POSSIBLE_PATHS=(
    "/evolution/dist/main.js"
    "/evolution/dist/src/main.js"
    "/evolution/main.js"
    "/opt/nexus/evolution_main.js"
)

REAL_MAIN=""
for path in "${POSSIBLE_PATHS[@]}"; do
    if [ -f "$path" ]; then
        REAL_MAIN="$path"
        break
    fi
done

if [ -z "$REAL_MAIN" ]; then
    REAL_MAIN=$(find /evolution -name main.js | grep -v "node_modules" | head -n 1)
fi

echo "✅ Entrypoint: $REAL_MAIN"

# Determinar APP_ROOT
if [[ "$REAL_MAIN" == *"/evolution/"* ]]; then
    APP_ROOT="/evolution"
else
    APP_ROOT=$(dirname $(dirname "$REAL_MAIN"))
    if [ ! -d "$APP_ROOT/node_modules" ]; then
        APP_ROOT=$(dirname "$APP_ROOT")
    fi
fi

if [ ! -d "$APP_ROOT/node_modules" ]; then
    APP_ROOT="/evolution"
fi

echo "✅ WD: $APP_ROOT"
cd "$APP_ROOT"

# Log evolution
LOG_FILE="/opt/nexus/web/evolution.log"
echo "--- NEW START $(date) ---" > "$LOG_FILE"
chmod 666 "$LOG_FILE"

# Loop de arranque
while true; do
    echo "--- Starting Node $(node -v) ---" | tee -a "$LOG_FILE"
    
    # Forzamos DATABASE_CONNECTION_URI y DATABASE_URL
    export DATABASE_CONNECTION_URI="postgresql://postgres.htabdguydyysolkzdilm:%2AMm0101mM%2A%2A%2A%2A@aws-0-us-west-2.pooler.supabase.com:5432/postgres?schema=evolution_api"
    export DATABASE_URL="$DATABASE_CONNECTION_URI"
    export DATABASE_ENABLED="true"
    
    echo "--- Sincronizando Base de Datos (Prisma) ---" | tee -a "$LOG_FILE"    
    PRISMA_SCHEMA=$(find . -name schema.prisma | head -n 1)
    if [ -z "$PRISMA_SCHEMA" ]; then
        PRISMA_SCHEMA=$(find /evolution -name schema.prisma | head -n 1)
    fi

    echo "✅ Usando schema: $PRISMA_SCHEMA" | tee -a "$LOG_FILE"
    timeout 60s npx prisma db push --schema="$PRISMA_SCHEMA" --accept-data-loss --skip-generate 2>&1 | tee -a "$LOG_FILE"
    
    echo "🚀 Iniciando Proceso Node con API_KEY: Supera" | tee -a "$LOG_FILE"
    node "$REAL_MAIN" 2>&1 | tee -a "$LOG_FILE"
    RET=$?
    echo "--- Node exited with code $RET ---" | tee -a "$LOG_FILE"
    
    if [ $RET -eq 0 ]; then
        echo "⚠️ Exit status 0 detected. Re-trying with 'npm start'..." | tee -a "$LOG_FILE"
        npm start 2>&1 | tee -a "$LOG_FILE"
        sleep 5
    fi
    sleep 10
done
