# Etapa de construcción
FROM node:22-slim AS builder

WORKDIR /app

# Instalar dependencias
COPY package*.json ./
RUN npm ci

# Copiar código y construir
COPY . .
RUN npm run build

# Etapa de producción
FROM node:22-slim

WORKDIR /app

# Instalar solo dependencias de producción (necesitamos express)
COPY package*.json ./
RUN npm ci --omit=dev

# Copiar los activos construidos y el servidor
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.js ./

# Configuración de red
ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080

# Comando de arranque
CMD ["node", "server.js"]
