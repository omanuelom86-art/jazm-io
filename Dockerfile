# JAZMIO SLIM: v16.0 - REDUCCIÓN DE PESO Y ARRANQUE PURO
FROM atendai/evolution-api:latest

USER root

# 1. Limpieza y preparación (Alpine nativo v16.5 - RESCUE MODE)
RUN apk add --no-cache nginx supervisor python3 py3-pip bash curl nodejs npm dos2unix redis postgresql-dev gcc python3-dev musl-dev

# 1.1 Instalación de Voz y Monitor (Pip nativo v36.0 - FORCE MODE)
RUN pip3 install --no-cache-dir --break-system-packages fastapi uvicorn requests psycopg2-binary

# 2. Instalación de n8n (Sin caché innecesaria para no pesar)
RUN npm install n8n@1.97.1 -g --omit=dev && \
    npm cache clean --force && \
    rm -rf /root/.npm /tmp/*

WORKDIR /opt/nexus
COPY . .

# 3. Anular scripts de la imagen base que causan el crash
# Eliminamos el ENTRYPOINT original para usar nuestro mando directo
ENTRYPOINT []

RUN chmod +x *.sh && \
    mkdir -p /opt/nexus/web /opt/nexus/.n8n /opt/nexus/blueprints /opt/nexus/redis && \
    mkdir -p /tmp/nginx/logs /tmp/nginx/tmp && \
    chown -R 1000:1000 /opt/nexus /evolution /tmp/nginx

EXPOSE 7860
USER 1000

# 4. Arranque puro: Saltamos los scripts defectuosos de la base
CMD ["/usr/bin/supervisord", "-n", "-c", "/opt/nexus/supervisord.conf"]
