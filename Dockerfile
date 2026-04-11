# Build stage
FROM node:22-slim AS builder
WORKDIR /app

# Bust Docker build cache
ARG CACHE_BUST=6
ENV CACHE_BUST=${CACHE_BUST}

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:22-slim
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.js ./
COPY --from=builder /app/package.json ./

# Start native server which will use $PORT seamlessly
CMD ["node", "server.js"]
