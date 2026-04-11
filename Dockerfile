# Build stage
FROM node:22-slim AS builder
WORKDIR /app

# Bust Docker build cache
ARG CACHE_BUST=1
ENV CACHE_BUST=${CACHE_BUST}

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Runner stage
FROM node:22-slim
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.js ./
# Ensure we have type: module support
COPY --from=builder /app/package.json ./

CMD ["node", "server.js"]
