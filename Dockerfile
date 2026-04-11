# Build stage
FROM node:22-slim AS builder
WORKDIR /app

# Bust Docker build cache
ARG CACHE_BUST=4
ENV CACHE_BUST=${CACHE_BUST}

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage (NGINX)
FROM nginx:alpine

# Copy static configuration with hardcoded port 8080
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Explicitly expose port 8080 to override NGINX base image default EXPOSE 80
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
