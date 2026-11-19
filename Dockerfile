# Dockerfile
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies first (cache layer)
# Install dependencies first (cache layer)
COPY package*.json ./
# Prisma's postinstall (`prisma generate`) needs the schema present,
# so copy it in before running npm install. It only needs a syntactically
# valid Postgres URL at generate-time — no live DB connection required.
COPY prisma ./prisma
ENV DATABASE_URL="postgresql://user:password@localhost:5432/db"
RUN npm install

# Copy all project files
COPY . .

EXPOSE 3020

# Real DATABASE_URL/BLOB_READ_WRITE_TOKEN are provided at runtime via
# .env.local (see docker-compose.yml). Migrations now target the shared
# Neon Postgres DB, so `prisma migrate deploy` is safe to run repeatedly.
CMD ["sh", "-c", "npx prisma migrate deploy && npm run dev"]
