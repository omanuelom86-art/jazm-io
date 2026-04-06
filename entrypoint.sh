#!/bin/bash
# JAZMIO ATOMIC ENTRYPOINT (v23.0 ESTABLE)
set -e

echo ">>> [SYSTEM] Jazmio Platinum Starting..."

# Crear directorios necesarios
mkdir -p /opt/nexus/redis /tmp/nginx/logs /tmp/nginx/tmp /opt/nexus/.n8n
chmod -R 777 /tmp/nginx
chmod -R 755 /opt/nexus/.n8n

# 1. Redis (Cache)
echo ">>> [SYSTEM] Starting Redis..."
redis-server --protected-mode no --dir /opt/nexus/redis/ &
REDIS_PID=$!
sleep 2
if ! kill -0 $REDIS_PID 2>/dev/null; then
    echo "❌ [SYSTEM] Redis failed to start"
    exit 1
fi
echo ">>> [SYSTEM] Redis OK (PID: $REDIS_PID)"

# 2. Status Dashboard
echo ">>> [SYSTEM] Starting Status Dashboard..."
python3 /opt/nexus/status.py &
DASHBOARD_PID=$!
sleep 1
echo ">>> [SYSTEM] Dashboard OK (PID: $DASHBOARD_PID)"

# 3. Evolution API (Background)
echo ">>> [SYSTEM] Starting Evolution API..."
/bin/bash /opt/nexus/start_evolution.sh &
EVOLUTION_PID=$!
sleep 3
echo ">>> [SYSTEM] Evolution API OK (PID: $EVOLUTION_PID)"

# 4. n8n (Foreground - mantiene el contenedor vivo)
echo ">>> [SYSTEM] Starting n8n Automation..."
exec /bin/bash /opt/nexus/start_n8n.sh
