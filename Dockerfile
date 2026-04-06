# JAZMIO SLIM: v16.0 - REDUCCIÓN DE PESO Y ARRANQUE PURO
FROM evoapicloud/evolution-api:latest

USER root

# 1. Limpieza y preparación (Alpine nativo v16.6 - ULTRA LITE)
# Instalamos librerías ligeras. Luego instalamos compiladores virtualizados para Python/Postgres, instalamos PIP, y borramos los pesados compiladores.
RUN apk add --no-cache nginx supervisor python3 py3-pip bash curl nodejs npm dos2unix redis libpq && \
    apk add --no-cache --virtual .build-deps gcc python3-dev musl-dev postgresql-dev && \
    pip3 install --no-cache-dir --break-system-packages fastapi uvicorn requests psycopg2-binary python-dotenv && \
    apk del .build-deps && \
    npm install n8n@1.97.1 -g --omit=dev && \
    npm cache clean --force && \
    rm -rf /root/.npm /tmp/* /var/cache/apk/*

WORKDIR /opt/nexus
COPY . .

# 3. Anular scripts de la imagen base que causan el crash
# Eliminamos el ENTRYPOINT original para usar nuestro mando directo
ENTRYPOINT []

RUN chmod +x *.sh && \
    mkdir -p /opt/nexus/web /opt/nexus/.n8n /opt/nexus/blueprints /opt/nexus/redis && \
    mkdir -p /tmp/nginx/logs /tmp/nginx/tmp && \
    mv assets /opt/nexus/web/ 2>/dev/null || true && \
    mv manager /opt/nexus/web/ 2>/dev/null || true && \
    mv nexus-assets /opt/nexus/web/ 2>/dev/null || true && \
    mv index.html /opt/nexus/web/ 2>/dev/null || true && \
    mv favicon.svg /opt/nexus/web/ 2>/dev/null || true && \
    chown -R 1000:1000 /opt/nexus /evolution /tmp/nginx

EXPOSE 7860
USER 1000

# 4. Arranque puro: Saltamos los scripts defectuosos de la base
CMD ["/usr/bin/supervisord", "-n", "-c", "/opt/nexus/supervisord.conf"]
