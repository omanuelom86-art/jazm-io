# JAZMIO ULTIMATE STABLE: v51.0 - RAILWAY OPTIMIZED
FROM evoapicloud/evolution-api:latest

USER root

# 1. Instalación de dependencias críticas
RUN apk add --no-cache nginx supervisor python3 py3-pip bash curl nodejs npm dos2unix redis git libpq && \
    mv /usr/bin/supervisord /usr/bin/supervisord-conf-error 2>/dev/null || true && \
    ln -sf /usr/bin/supervisord /usr/bin/supervisord-real 2>/dev/null || true

# 2. Instalación de Python y n8n
RUN apk add --no-cache --virtual .build-deps gcc python3-dev musl-dev postgresql-dev && \
    pip3 install --no-cache-dir --break-system-packages fastapi uvicorn requests psycopg2-binary python-dotenv && \
    apk del .build-deps && \
    npm install n8n@1.97.1 -g --omit=dev && \
    npm cache clean --force

WORKDIR /opt/nexus
COPY . .

# 3. Configuración de permisos y directorios
RUN chmod +x *.sh && \
    mkdir -p /opt/nexus/web /opt/nexus/.n8n /tmp/nginx/logs /tmp/nginx/tmp /opt/nexus/redis && \
    cp -r assets/* /opt/nexus/web/ 2>/dev/null || true && \
    cp -r manager/* /opt/nexus/web/ 2>/dev/null || true && \
    cp -r nexus-assets/* /opt/nexus/web/ 2>/dev/null || true && \
    cp index.html /opt/nexus/web/ 2>/dev/null || true && \
    cp favicon.svg /opt/nexus/web/ 2>/dev/null || true && \
    chown -R 1000:1000 /opt/nexus /evolution /tmp/nginx

EXPOSE 7860
USER 1000

# 4. ENTRYPOINT PRINCIPAL
ENTRYPOINT ["/opt/nexus/entrypoint.sh"]
