# JAZMIO MASTER PLATINUM: v17.0 - RESTAURACIÓN DE CÓDIGO MAESTRO
FROM evoapicloud/evolution-api:latest

USER root

# 1. Preparación del Sistema
RUN apk add --no-cache nginx supervisor python3 py3-pip bash curl nodejs npm dos2unix redis git libpq && \
    apk add --no-cache --virtual .build-deps gcc python3-dev musl-dev postgresql-dev && \
    pip3 install --no-cache-dir --break-system-packages fastapi uvicorn requests psycopg2-binary python-dotenv && \
    apk del .build-deps && \
    npm install n8n@1.97.1 -g --omit=dev && \
    npm cache clean --force

WORKDIR /opt/nexus

# 2. RESTAURACIÓN CRÍTICA: Limpiar el contenedor antes de clonar el código REAL del usuario
# Esto borra mis "stubs" y trae el CRM, Prospecting, Kanban y n8n real.
RUN rm -rf * && \
    git clone https://github.com/omanuelom86-art/jazm-io . && \
    chmod +x *.sh && \
    mkdir -p /opt/nexus/web /opt/nexus/.n8n /tmp/nginx/logs /tmp/nginx/tmp && \
    # Mover archivos estáticos cargados en el repo original del usuario
    cp -r assets/* /opt/nexus/web/ 2>/dev/null || true && \
    cp -r manager/* /opt/nexus/web/ 2>/dev/null || true && \
    cp -r nexus-assets/* /opt/nexus/web/ 2>/dev/null || true && \
    cp index.html /opt/nexus/web/ 2>/dev/null || true && \
    cp favicon.svg /opt/nexus/web/ 2>/dev/null || true && \
    chown -R 1000:1000 /opt/nexus /evolution /tmp/nginx

EXPOSE 7860
USER 1000

# 3. Arranque supervisado
CMD ["/usr/bin/supervisord", "-n", "-c", "/opt/nexus/supervisord.conf"]
