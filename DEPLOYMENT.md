# Deployment Guide

This app has an admin/CMS-lite backend (Postgres DB + uploaded images), but
all the stateful parts live in **free managed services**, not on the app
server's own disk. That means the app itself stays stateless and deploys
fine on **Vercel** — no VPS, no extra monthly cost.

## Architecture

| Piece | Where | Why |
|---|---|---|
| App hosting | **Vercel** (Hobby/free plan) | `git push` → auto build & deploy, same as before |
| Database | **Neon** Postgres (free tier) | Prisma talks to it over the network; survives serverless cold starts/redeploys |
| Uploaded images | **Vercel Blob** (free tier) | Admin-uploaded images are stored here, not on local disk |

Vercel's serverless functions have a **read-only filesystem** (except a
per-invocation `/tmp` that doesn't persist), so SQLite-on-disk and
`fs.writeFile` for uploads — the original approach — silently break there.
Moving the DB and uploads to these two free services fixes that with **$0
added cost**.

## One-time setup

1. **Create a free Neon project**: https://neon.tech → New Project. Copy the
   connection string it gives you (starts with `postgresql://...`,
   include `?sslmode=require`).
2. **Enable Vercel Blob** on your Vercel project: Project → **Storage** tab →
   **Create Database** → **Blob** (free tier). Connecting it to the project
   auto-injects a `BLOB_READ_WRITE_TOKEN` env var for you.
3. **Set environment variables** in Vercel (Project → Settings →
   Environment Variables), for Production (and Preview if you want):
   - `DATABASE_URL` — the Neon connection string from step 1
   - `ADMIN_PASSWORD_HASH` — **base64-encoded** bcrypt hash of your admin
     password (base64 avoids a real bug where a raw hash full of literal `$`
     characters gets corrupted somewhere in the env-loading chain — Next.js
     dev/Turbopack env propagation). Generate with:
     ```bash
     docker compose exec doctor-site node -e \
       "console.log(Buffer.from(require('bcryptjs').hashSync('your-strong-password', 10)).toString('base64'))"
     ```
   - `NEXT_PUBLIC_SITE_URL` — your real domain
   - `BLOB_READ_WRITE_TOKEN` is already set automatically by step 2
   - `NEXT_PUBLIC_CF_BEACON_TOKEN` — (optional) Cloudflare Web Analytics
     token. Cloudflare's "automatic" beacon injection only fires while the
     domain's DNS record is proxied (orange-clouded) through Cloudflare —
     which is commonly turned off (DNS only / grey cloud) once a domain
     points at Vercel, silently breaking analytics. Get the token from
     Cloudflare dashboard → **Analytics & Logs → Web Analytics** → your
     site → "Manage site" → copy the token out of the `data-cf-beacon`
     snippet. `components/CloudflareAnalytics.tsx` loads the beacon
     explicitly using this token so it works regardless of proxy status.
4. **Create tables + generate the first migration** �� run this once,
   locally, against the real Neon DB (all commands run inside the dev
   container):
   ```bash
   # put the same DATABASE_URL from step 1 into .env.local first, then:
   docker compose exec doctor-site npx prisma migrate dev --name init
   ```
   This both creates the tables in Neon **and** writes a migration file under
   `prisma/migrations/` — commit that file, it's what `prisma migrate deploy`
   (run automatically on every Vercel build via the `vercel-build` script in
   `package.json`) uses to keep the schema in sync on every deploy.
5. **Seed initial content** (migrates the current hardcoded
   chambers/services/achievements/about text into the DB so the site isn't
   blank, and uploads the existing images to Blob):
   ```bash
   docker compose exec doctor-site npm run db:seed
   ```
6. **Connect the GitHub repo to Vercel** (if not already): Vercel dashboard →
   Add New → Project → import the repo. Vercel auto-detects Next.js.
7. `git push` to `main` → Vercel builds and deploys automatically, exactly
   like before. Visit `/admin/login` once it's live.

## Redeploying after code changes

Nothing new here — this is unchanged from before:
```bash
git push
```
Vercel picks it up automatically. If you added/changed a Prisma model, run
step 4's `prisma migrate dev --name <description>` locally first and commit
the new migration file — Vercel's build runs `prisma migrate deploy`
automatically against Neon via the `vercel-build` script before `next build`.

## Backups

Neon's free tier includes automatic point-in-time recovery for a short
window. For your own backup, export a SQL dump periodically:
```bash
docker compose exec doctor-site npx pg_dump "$DATABASE_URL" > backups/db-$(date +%F).sql
```
Uploaded images live in Vercel Blob — list/manage them from the Vercel
dashboard's Storage tab, or back them up with the `@vercel/blob` SDK's
`list()` API in a small script if you want an off-platform copy.

## Rotating the admin password

```bash
docker compose exec doctor-site node -e \
  "console.log(Buffer.from(require('bcryptjs').hashSync('new-password', 10)).toString('base64'))"
```
Update `ADMIN_PASSWORD_HASH` in Vercel's Environment Variables (and
`.env.local` if you want the same password locally), then redeploy (Vercel →
Deployments → ⋯ → Redeploy) so the new value is picked up.

## Logs & monitoring

Vercel dashboard → your project → **Logs** (runtime) and **Deployments** →
a specific deploy → **Build Logs**.

---

## Alternative: self-hosted VPS + Docker

The repo also keeps a self-hosted path (`Dockerfile.prod`,
`docker-compose.prod.yml`, `Caddyfile`) for if you ever want to move off
Vercel — it now targets the **same** Neon Postgres + Vercel Blob storage
(just set the same env vars in `.env.production` instead of Vercel's
dashboard), so switching between the two doesn't require touching the
database/storage layer at all.




