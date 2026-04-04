# JAZMIO ULTRALIGHT: v14.8 - Rescate de Emergencia
FROM atendai/evolution-api:latest

USER root

# Instalación mínima para evitar errores de memoria/build
RUN apk add --no-cache nginx supervisor python3 bash curl nodejs npm dos2unix

# Instalación de n8n estable
RUN npm install n8n@1.97.1 -g --omit=dev

WORKDIR /opt/nexus
COPY . .

# Permisos y limpieza
RUN chmod +x *.sh && \
    mkdir -p /opt/nexus/web /opt/nexus/.n8n /opt/nexus/blueprints && \
    chown -R 1000:1000 /opt/nexus /evolution

EXPOSE 7860
USER 1000
CMD ["/usr/bin/supervisord", "-c", "/opt/nexus/supervisord.conf"]
