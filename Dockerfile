FROM node:22-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY .swcrc ./
COPY tsconfig.json ./
COPY .env ./
COPY prisma ./prisma/
COPY locales ./locales/
COPY src/ ./src/

RUN npm install && npm cache clean --force
RUN npx prisma generate
RUN npm run build