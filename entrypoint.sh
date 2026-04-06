#!/bin/bash
# JAZMIO ATOMIC ENTRYPOINT (v22.0) - FINAL SYNC
echo ">>> [SYSTEM] Jazmio Platinum Starting..."

# 1. Redis
redis-server --protected-mode no --dir /opt/nexus/redis/ &
echo ">>> [SYSTEM] Redis Started."

# 2. Status Dashboard
python3 /opt/nexus/status.py &
echo ">>> [SYSTEM] Dashboard Started."

# 3. Evolution API (Lanzado en background)
/bin/bash /opt/nexus/start_evolution.sh &
echo ">>> [SYSTEM] Evolution API Initialization Sent to Background."

# 4. n8n (Lanzado en FOREGROUND para depuración y retención)
# Inyectamos variables críticas de base de datos desde el entorno de Railway si existen
echo ">>> [SYSTEM] n8n Automation Starting..."
export N8N_PORT="3100"
export N8N_PATH="/n8n/"

# Lanzamos el script de n8n que ya tiene el logic de importación y el n8n start
/bin/bash /opt/nexus/start_n8n.sh
