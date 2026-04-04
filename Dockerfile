# JAZMIO ATÓMICO: v15.2 - ADN ALPINE LIMPIO Y ESTABLE (ALTA COMPATIBILIDAD)
FROM atendai/evolution-api:latest AS evolution

# Fase 2: Construimos sobre Alpine Puro (Compatible con Evolution)
FROM alpine:latest

USER root

# Instalamos los componentes tácticos limpios (Sin scripts heredados)
RUN apk add --no-cache \
    nginx supervisor python3 py3-pip bash curl redis nodejs npm dos2unix \
    postgresql-client build-base && \
    mkdir -p /var/log/nginx /var/cache/nginx /var/run /run/nginx \
    /var/lib/nginx /var/lib/redis /etc/redis /etc/supervisor/conf.d && \
    rm -rf /var/cache/apk/*

# Copiamos solo los archivos cerebrales (El motor)
COPY --from=evolution /evolution /evolution

# Instalamos n8n de forma Global
RUN npm install n8n@latest -g --omit=dev

# Preparamos el terreno
WORKDIR /opt/nexus
COPY . .

# Permisos Master
RUN mkdir -p /opt/nexus/web /opt/nexus/.n8n /opt/nexus/blueprints && \
    find /opt/nexus -name "*.sh" -exec dos2unix {} \; && \
    find /opt/nexus -name "*.sh" -exec chmod +x {} \; && \
    chown -R 1000:1000 /opt/nexus /evolution /var/log /var/run \
    /var/cache/nginx /var/lib/redis /run/nginx /var/lib/nginx \
    /etc/supervisor /etc/nginx /etc/redis

EXPOSE 7860
USER 1000

# Iniciamos con el Binario de Alpine Supervisord
CMD ["/usr/bin/supervisord", "-n", "-c", "/opt/nexus/supervisord.conf"]
