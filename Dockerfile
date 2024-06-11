# Етап 1: збірка
FROM node:14 AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

# Етап 2: створення мінімального образу
FROM node:14-alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app .

EXPOSE 3000
CMD ["node", "app.js"]
