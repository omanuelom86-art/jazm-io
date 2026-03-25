# FORCE FULL REBUILD: 2026-03-25T03:45:00 (v5.1.0-FINAL)
# REBUILD TRIGGER

FROM atendai/evolution-api:latest

RUN echo "Triggering rebuild for code synchronization..."

USER root

# 1. Instalamos dependencias y herramientas
RUN apk update && apk add --no-cache nginx supervisor python3 py3-pip libpq nodejs npm \
    bash curl git make gcc g++ musl-dev linux-headers python3-dev findutils procps net-tools dos2unix redis

# 2. Preparamos TU CARPETA personalizada
WORKDIR /opt/nexus
COPY . .

# 3. Instalamos dependencias de Python y n8n
RUN pip3 install --break-system-packages --no-cache-dir -r requirements.txt && \
    npm install n8n@1.93.5 -g --omit=dev && \
    node -v > /opt/nexus/node_v.txt && \
    n8n --version > /opt/nexus/n8n_v.txt && \
    mkdir -p /opt/nexus/.n8n && \
    chown -R 1000:1000 /opt/nexus

# 4. Buscador Dinámico de la Evolution API (Symlink para retrocompatibilidad)
RUN if [ -f "/evolution/dist/main.js" ]; then \
        ln -s /evolution/dist/main.js /opt/nexus/evolution_main.js; \
    elif [ -f "/evolution/dist/src/main.js" ]; then \
        ln -s /evolution/dist/src/main.js /opt/nexus/evolution_main.js; \
    else \
        ACTUAL_PATH=$(find /evolution -name main.js | grep -v "node_modules" | head -n 1); \
        ln -s "$ACTUAL_PATH" /opt/nexus/evolution_main.js; \
    fi

# 5. Organizamos el Manager y CRM
RUN mkdir -p /opt/nexus/web && \
    cp -r assets /opt/nexus/web/ || true && \
    cp index.html /opt/nexus/web/ || true && \
    chmod -R 777 /opt/nexus/web /opt/nexus/manager

# 6. Copiamos configuraciones
COPY nginx.conf /etc/nginx/nginx.conf
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY redis.conf /etc/redis/redis.conf

# 7. Ajuste total de permisos
RUN dos2unix /opt/nexus/*.sh && \
    chmod +x /opt/nexus/*.sh && \
    mkdir -p /var/log/nginx /var/cache/nginx /var/run /run/nginx /var/lib/nginx /var/lib/redis /etc/redis /etc/supervisor/conf.d && \
    chown -R 1000:1000 /opt/nexus /evolution /var/log /var/run /var/cache/nginx /var/lib/redis /run/nginx /var/lib/nginx /etc/supervisor /etc/nginx /etc/redis

ENTRYPOINT []
USER 1000

CMD ["/usr/bin/supervisord", "-c", "/opt/nexus/supervisord.conf"]
