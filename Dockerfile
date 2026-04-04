# OPTIMIZED BUILD: v14.4 - Size reduction (Multi-stage)
FROM atendai/evolution-api:latest AS base

USER root

# Install only runtime dependencies (no build tools)
RUN apk add --no-cache \
    nginx supervisor python3 py3-pip libpq nodejs npm \
    bash curl redis dos2unix && \
    mkdir -p /var/log/nginx /var/cache/nginx /var/run /run/nginx \
    /var/lib/nginx /var/lib/redis /etc/redis /etc/supervisor/conf.d && \
    rm -rf /var/cache/apk/*

# Python dependencies (Early layer for robustness)
COPY requirements.txt /opt/nexus/requirements.txt

# Install n8n, GWS CLI and Community Nodes (v14.5 Fusion)
RUN npm install n8n@1.97.1 \
    @googleworkspace/cli \
    n8n-nodes-mcp-connector \
    n8n-nodes-groq -g --omit=dev && \
    npm cache clean --force && \
    rm -rf /root/.npm /root/.cache /tmp/*

# Python dependencies (Ensure requests and psycopg2 work)
RUN pip3 install --break-system-packages --no-cache-dir -r /opt/nexus/requirements.txt && \
    rm -rf /root/.cache

WORKDIR /opt/nexus

# Copy only necessary files and Workflows (v14.6 Fusion)
COPY --chown=1000:1000 . .
# Aseguramos que los flujos maestros se copien para la importación automática
COPY --chown=1000:1000 "Plantillas Maestras n8n/" /opt/nexus/blueprints/

# Setup and cleanup in one layer
RUN REAL_MAIN=$(find /evolution -path "*/node_modules" -prune -o -name "main.js" -print | head -n 1) && \
    ln -sf "$REAL_MAIN" /opt/nexus/evolution_main.js && \
    mkdir -p /opt/nexus/web /opt/nexus/.n8n && \
    cp -r assets /opt/nexus/web/ 2>/dev/null || true && \
    cp -r manager /opt/nexus/web/ 2>/dev/null || true && \
    cp index.html /opt/nexus/web/ 2>/dev/null || true && \
    find /opt/nexus -name "*.sh" -exec dos2unix {} \; 2>/dev/null || true && \
    find /opt/nexus -name "*.sh" -exec chmod +x {} \; 2>/dev/null || true && \
    # Remove unnecessary files (but keep crucial .py for status)
    rm -rf /opt/nexus/*.ps1 /opt/nexus/*.sql /opt/nexus/*.md /opt/nexus/*.txt 2>/dev/null || true && \
    rm -rf /opt/nexus/check_* /opt/nexus/fix_* /opt/nexus/audit_* /opt/nexus/analyze_* 2>/dev/null || true && \
    rm -rf /opt/nexus/Contraseña* 2>/dev/null || true && \
    chown -R 1000:1000 /opt/nexus /evolution /var/log /var/run \
    /var/cache/nginx /var/lib/redis /run/nginx /var/lib/nginx \
    /etc/supervisor /etc/nginx /etc/redis && \
    rm -rf /tmp/* /var/cache/apk/* /root/.npm /root/.cache /root/.local

# Copy configs last
COPY --chown=1000:1000 nginx.conf /etc/nginx/nginx.conf
COPY --chown=1000:1000 supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY --chown=1000:1000 supervisord.conf /opt/nexus/supervisord.conf
COPY --chown=1000:1000 redis.conf /etc/redis/redis.conf

EXPOSE 7860
USER 1000
ENTRYPOINT []
CMD ["/usr/bin/supervisord", "-c", "/opt/nexus/supervisord.conf"]
