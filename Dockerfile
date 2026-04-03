# FORCE FULL REBUILD: 2026-04-03T02:05:00 (v12.0-N8N-ROOT-MODE)
FROM atendai/evolution-api:latest

USER root

# 1. Install system dependencies
RUN echo "Installing system dependencies..." && \
    apk update && apk add --no-cache \
    nginx supervisor python3 py3-pip libpq nodejs npm \
    bash curl git make gcc g++ musl-dev linux-headers python3-dev \
    findutils procps net-tools dos2unix redis && \
    mkdir -p /var/log/nginx /var/cache/nginx /var/run /run/nginx \
    /var/lib/nginx /var/lib/redis /etc/redis /etc/supervisor/conf.d

# 2. Python & n8n Layer
COPY requirements.txt /tmp/requirements.txt
RUN echo "Installing Python dependencies..." && \
    pip3 install --break-system-packages --no-cache-dir -r /tmp/requirements.txt && \
    echo "Installing n8n..." && \
    npm install n8n@1.97.1 -g --omit=dev && \
    n8n --version > /opt/n8n_v.txt

# 3. App Setup
WORKDIR /opt/nexus
COPY . .

# 4. Permissions & Symlinks
RUN echo "Setting up permissions and symlinks..." && \
    REAL_MAIN=$(find /evolution -path "*/node_modules" -prune -o -name "main.js" -print | head -n 1) && \
    ln -sf "$REAL_MAIN" /opt/nexus/evolution_main.js && \
    mkdir -p /opt/nexus/web /opt/nexus/.n8n && \
    cp -r assets /opt/nexus/web/ 2>/dev/null || true && \
    cp -r manager /opt/nexus/web/ 2>/dev/null || true && \
    cp index.html /opt/nexus/web/ 2>/dev/null || true && \
    find /opt/nexus -name "*.sh" -exec dos2unix {} \; 2>/dev/null || true && \
    find /opt/nexus -name "*.sh" -exec chmod +x {} \; 2>/dev/null || true && \
    chown -R 1000:1000 /opt/nexus /evolution /var/log /var/run \
    /var/cache/nginx /var/lib/redis /run/nginx \
    /var/lib/nginx /etc/supervisor /etc/nginx /etc/redis

# 5. Overwrite configs
COPY nginx.conf /etc/nginx/nginx.conf
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY supervisord.conf /opt/nexus/supervisord.conf
COPY redis.conf /etc/redis/redis.conf

EXPOSE 7860
USER 1000
ENTRYPOINT []
CMD ["/usr/bin/supervisord", "-c", "/opt/nexus/supervisord.conf"]
