#!/bin/bash
# JAZMIO ATOMIC ENTRYPOINT (v20.0)
echo ">>> [SYSTEM] Jazmio Platinum Starting..."

# 1. Redis
redis-server --protected-mode no --dir /opt/nexus/redis/ &
echo ">>> [SYSTEM] Redis Started."

# 2. Status Dashboard
python3 /opt/nexus/status.py &
echo ">>> [SYSTEM] Dashboard Started."

# 3. Evolution API (Lanzado en background vía su script original)
/bin/bash /opt/nexus/start_evolution.sh &
echo ">>> [SYSTEM] Evolution API Initialization Sent to Background."

# 4. n8n (Lanzado en background vía su script original)
/bin/bash /opt/nexus/start_n8n.sh &
echo ">>> [SYSTEM] n8n Automation Initialization Sent to Background."

# 5. Nginx (Lanzado en FOREGROUND para mantener el contenedor vivo)
echo ">>> [SYSTEM] Nginx Gateway Starting on 7860..."
/usr/sbin/nginx -p /tmp/nginx -c /opt/nexus/nginx.conf -g "daemon off;"
