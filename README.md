# TGBot Dockerized Template

Docker template for develop Telegram bots.

Include:

- Redis
- Postgres
- Grammy initial template with i18n, sessions, throttler, parse-mode modules

# Setup

1. Install dependencies

npm i

2. Start Docker

docker compose up -d --build

3. Add migrations (setup your schema before migrate)

docker exec app npx prisma migrate dev
