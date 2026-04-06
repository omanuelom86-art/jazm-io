# JAZMIO ULTIMATE STABLE: v50.0 - THE CLEAN SLATE
FROM evoapicloud/evolution-api:latest

USER root

# 1. Neutralización de Scripts Fantasma
# La imagen base tiene un script en /usr/bin/supervisord que causa el crash. Lo reemplazamos con el binario real.
RUN apk add --no-cache nginx supervisor python3 py3-pip bash curl nodejs npm dos2unix redis git libpq && \
    # Forzamos que /usr/bin/supervisord sea el binario real de Alpine y no el script de la imagen base
    mv /usr/bin/supervisord /usr/bin/supervisord-conf-error 2>/dev/null || true && \
    ln -sf /usr/bin/supervisord /usr/bin/supervisord-real 2>/dev/null || true

# 2. Preparación del Sistema
RUN apk add --no-cache --virtual .build-deps gcc python3-dev musl-dev postgresql-dev && \
    pip3 install --no-cache-dir --break-system-packages fastapi uvicorn requests psycopg2-binary python-dotenv && \
    apk del .build-deps && \
    npm install n8n@1.97.1 -g --omit=dev && \
    npm cache clean --force

WORKDIR /opt/nexus
COPY . .

# 3. Restauración Atómica de Contenido
RUN chmod +x *.sh && \
    mkdir -p /opt/nexus/web /opt/nexus/.n8n /tmp/nginx/logs /tmp/nginx/tmp /opt/nexus/redis && \
    # Mover archivos estáticos cargados en el repo original
    cp -r assets/* /opt/nexus/web/ 2>/dev/null || true && \
    cp -r manager/* /opt/nexus/web/ 2>/dev/null || true && \
    cp -r nexus-assets/* /opt/nexus/web/ 2>/dev/null || true && \
    cp index.html /opt/nexus/web/ 2>/dev/null || true && \
    cp favicon.svg /opt/nexus/web/ 2>/dev/null || true && \
    chown -R 1000:1000 /opt/nexus /evolution /tmp/nginx

EXPOSE 7860
USER 1000

# 4. ARRANQUE SEGURO: Usando el binario real de supervisor
CMD ["/usr/bin/supervisord", "-n", "-c", "/opt/nexus/supervisord.conf"]
