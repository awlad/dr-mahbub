# Deploy with Docker

This project ships two separate Docker setups: one for **production** and one for **development**. Never run the dev server (`next dev`) inside your production container — it recompiles routes on demand, skips caching/optimization, and can become slow or unresponsive under real traffic.

## Production

`Dockerfile` is a multi-stage build: it runs `npm run build` (contentlayer build + `next build`) in a builder stage, then copies only the build output (`node_modules`, `.next`, `public`, `prisma`) into a lean runtime image. On startup it runs `npx prisma migrate deploy` (safe to run repeatedly) and then `npm run serve` (`next start -p 3020`).

Real secrets (`DATABASE_URL`, `BLOB_READ_WRITE_TOKEN`, etc.) are provided at runtime via `.env.local` (see `docker-compose.yml`'s `env_file`), not baked into the image. The builder stage only needs a syntactically valid `DATABASE_URL` to run `prisma generate` during `npm install` — no live DB connection required at build time.

```bash
# Build & run via compose (recommended)
docker compose build
docker compose up -d

# Or plain docker
docker build -t doctor-site .
docker run -p 3020:3020 --env-file .env.local doctor-site
```

`docker-compose.yml` does **not** bind-mount the source directory — the image contains the already-built app, so a fresh `docker compose up -d --build` is required after every code change/deploy.

## Development (hot reload)

Use `Dockerfile.dev` + `docker-compose.dev.yml` instead. This runs `npm run dev` (Turbopack dev server) and bind-mounts your source code so edits are picked up live, while keeping `node_modules`/`.next` inside the container (not overwritten by the host).

```bash
docker compose -f docker-compose.dev.yml up --build
```

Stop it with:

```bash
docker compose -f docker-compose.dev.yml down
```

## Reference

This setup is based on the [official Next.js repo docker build example](https://github.com/vercel/next.js/tree/canary/examples/with-docker). If you want an even smaller production image, you can switch `next.config.js` to use `output: 'standalone'` and adjust the Dockerfile's runtime stage to copy `.next/standalone` + `.next/static` instead of the full `node_modules`.
