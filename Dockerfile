# Build stage
FROM node:18 as builder

WORKDIR /app

COPY serverApp/package*.json ./serverApp/
WORKDIR /app/serverApp
RUN npm install
COPY serverApp .

# Copy frontend build into NestJS public folder
COPY clientApp/dist ./public

RUN npm run build

# Production image
FROM node:18-slim

WORKDIR /app
COPY --from=builder /app/serverApp .

EXPOSE 3000
CMD ["node", "dist/main"]
