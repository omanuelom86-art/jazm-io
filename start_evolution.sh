#!/bin/bash
# --- NEXUS STARTUP MANAGER: EVOLUTION API (v2.0 ESTABLE) ---
echo "--- NEXUS STARTUP MANAGER: EVOLUTION API ---"

set -e

# 1. Cargar variables desde .env si existe
if [ -f "/opt/nexus/.env" ]; then
    echo "✅ Cargando variables de .env..."
    export $(grep -v '^#' /opt/nexus/.env | xargs)
fi

# 2. Configuración Forzada de Identidad Evolution
export AUTHENTICATION_TYPE="apikey"
export AUTHENTICATION_API_KEY="Supera"
export AUTHENTICATION_EXPOSE_IN_FETCH_INSTANCES="true"

# Parches para Evolution v2 en entornos cloud
export CONFIG_SESSION_PHONE_VERSION="2.3000.1028450369"
export NODE_OPTIONS="--network-family-autoselection-attempt-timeout=1000"
export CACHE_REDIS_ENABLED="true"
export CACHE_REDIS_URI="redis://127.0.0.1:6379/1"
export CACHE_REDIS_PREFIX_KEY="evolution"
export LOG_LEVEL="ERROR,WARN,INFO"
export DATABASE_CONNECTION_URI="postgresql://postgres.htabdguydyysolkzdilm:%2AMm0101mM%2A%2A%2A%2A@aws-0-us-west-2.pooler.supabase.com:5432/postgres?schema=evolution_api"
export DATABASE_URL="$DATABASE_CONNECTION_URI"
export DATABASE_ENABLED="true"

# 3. Detectar REAL_MAIN de Evolution
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

if [ -z "$REAL_MAIN" ]; then
    echo "❌ ERROR: No se encontro el archivo main.js de Evolution API"
    exit 1
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
mkdir -p /opt/nexus/web
echo "--- NEW START $(date) ---" > "$LOG_FILE"
chmod 666 "$LOG_FILE"

# 4. Sincronización de Base de Datos
echo "--- Sincronizando Base de Datos (Prisma) ---" | tee -a "$LOG_FILE"
PRISMA_SCHEMA=$(find . -name schema.prisma | head -n 1)
if [ -z "$PRISMA_SCHEMA" ]; then
    PRISMA_SCHEMA=$(find /evolution -name schema.prisma | head -n 1)
fi

if [ -n "$PRISMA_SCHEMA" ]; then
    echo "✅ Usando schema: $PRISMA_SCHEMA" | tee -a "$LOG_FILE"
    timeout 60s npx prisma db push --schema="$PRISMA_SCHEMA" --accept-data-loss --skip-generate 2>&1 | tee -a "$LOG_FILE" || true
else
    echo "⚠️ No se encontro schema.prisma" | tee -a "$LOG_FILE"
fi

# 5. Lanzar Evolution API
echo "🚀 Iniciando Evolution API (API_KEY: Supera)" | tee -a "$LOG_FILE"
exec node "$REAL_MAIN" 2>&1 | tee -a "$LOG_FILE"
