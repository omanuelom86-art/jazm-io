# Build stage
FROM node:22-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Runner stage
FROM node:22-slim
WORKDIR /app
# Note: No npm install needed for native server
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.js ./
# Ensure we have type: module support
COPY --from=builder /app/package.json ./

CMD ["node", "server.js"]
