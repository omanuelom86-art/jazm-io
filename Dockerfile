# FORCE FULL REBUILD: 2026-03-29T15:00:00 (v6.0.0-GOLDEN)
FROM atendai/evolution-api:latest

USER root

# 1. Install system dependencies in one go
RUN apk update && apk add --no-cache \
    nginx supervisor python3 py3-pip libpq nodejs npm \
    bash curl git make gcc g++ musl-dev linux-headers python3-dev \
    findutils procps net-tools dos2unix redis && \
    mkdir -p /var/log/nginx /var/cache/nginx /var/run /run/nginx /var/lib/nginx /var/lib/redis /etc/redis /etc/supervisor/conf.d

# 2. Python & n8n Layer (Heavily cached)
COPY ./requirements.txt /tmp/requirements.txt
RUN pip3 install --break-system-packages --no-cache-dir -r /tmp/requirements.txt && \
    npm install n8n@1.97.1 -g --omit=dev && \
    n8n --version > /opt/n8n_v.txt

# 3. App Setup
WORKDIR /opt/nexus
COPY . .

# 4. Permissions & Symlinks
RUN ln -sf $(find /evolution -name main.js | grep -v "node_modules" | head -n 1) /opt/nexus/evolution_main.js && \
    mkdir -p /opt/nexus/web /opt/nexus/.n8n && \
    cp -r assets /opt/nexus/web/ 2>/dev/null || true && \
    cp -r manager /opt/nexus/web/ 2>/dev/null || true && \
    cp index.html /opt/nexus/web/ 2>/dev/null || true && \
    find /opt/nexus -name "*.sh" -exec dos2unix {} + 2>/dev/null || true && \
    find /opt/nexus -name "*.sh" -exec chmod +x {} + 2>/dev/null || true && \
    chown -R 1000:1000 /opt/nexus /evolution /var/log /var/run /var/cache/nginx /var/lib/redis /run/nginx /var/lib/nginx /etc/supervisor /etc/nginx /etc/redis

# 5. Overwrite configs
COPY nginx.conf /etc/nginx/nginx.conf
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY redis.conf /etc/redis/redis.conf

EXPOSE 7860
USER 1000
ENTRYPOINT []
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
