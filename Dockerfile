# Dockerfile - production build
# ---- Dependencies & build stage ----
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies first (cache layer)
COPY package*.json ./
# Prisma's postinstall (`prisma generate`) needs the schema present,
# so copy it in before running npm install. It only needs a syntactically
# valid Postgres URL at generate-time — no live DB connection required.
COPY prisma ./prisma
ENV DATABASE_URL="postgresql://user:password@localhost:5432/db"
RUN npm install

# Copy all project files and build the production bundle
COPY . .
RUN npm run build

# ---- Production runtime stage ----
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Only copy what's needed to run the app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/next.config.cjs ./next.config.cjs
COPY --from=builder /app/prisma ./prisma

EXPOSE 3020

# Real DATABASE_URL/BLOB_READ_WRITE_TOKEN are provided at runtime via
# .env.local (see docker-compose.yml). Migrations now target the shared
# Neon Postgres DB, so `prisma migrate deploy` is safe to run repeatedly.
# IMPORTANT: this must run the *production* server (`next start` via
# `npm run serve`), never `npm run dev` — the dev server recompiles routes
# on every request and caused the slow/unavailable production site.
CMD ["sh", "-c", "npx prisma migrate deploy && npm run serve"]
