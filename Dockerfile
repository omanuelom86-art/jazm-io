# Build stage
FROM node:22-slim AS builder
WORKDIR /app

# Bust Docker build cache
ARG CACHE_BUST=3
ENV CACHE_BUST=${CACHE_BUST}

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage (NGINX)
FROM nginx:alpine

# The NGINX image automatically substitutes environment variables in templates
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose relies on the dynamic $PORT provided by Railway
CMD ["nginx", "-g", "daemon off;"]
