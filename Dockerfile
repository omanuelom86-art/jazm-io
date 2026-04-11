# Build stage
FROM node:22-slim AS builder
WORKDIR /app

# Bust Docker build cache
ARG CACHE_BUST=5
ENV CACHE_BUST=${CACHE_BUST}

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage (NGINX)
FROM nginx:alpine

# Copy static configuration with port 80 strictly aligned
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
