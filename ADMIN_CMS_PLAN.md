# Admin Dashboard Plan (CMS-lite)

Decision: build a lightweight, self-hosted admin dashboard instead of migrating
to a third-party CMS. Stack stays Next.js (App Router) + Docker. Storage is
SQLite via Prisma so it works with the existing Docker volume mount, no extra
services to run.

## 1. Goals

- Doctor (non-technical user) can log in to `/admin` and edit site content
  without touching code or waiting for a rebuild/redeploy.
- Content changes take effect immediately (server-rendered from DB, not from
  build-time constants).
- Single admin user for now; password-based login via env var + hashed
  session cookie (no NextAuth needed at this scale).
- Keep the public site's visual design/components unchanged — only swap their
  data source from `data/siteMetadata.js` constants to DB queries.

## 2. Scope (v1 content types)

Editable from the dashboard:

1. **Chambers** — location, name, phone, address, schedule, Google Maps embed URL (list, reorderable, add/remove).
2. **Services** — header text + list of {name, description} (add/remove/reorder).
3. **Achievements and Awards** — list of {title, year, description, image}, each with its own uploaded image (add/remove/reorder). Matches the existing `components/achievements.tsx` section exactly, just made editable.
4. **Qualifications** — list of {title, description}.
5. **About Me** — free text / rich text content shown on About page + homepage section, plus an optional profile/about image.
6. **Hero image** — site-wide setting: admin picks one image to use as the homepage/header hero banner, chosen from the image library (upload new or reuse an existing one).
7. **Blog posts** — title, date, tags, summary, cover image, body (rich text / Markdown editor), draft toggle. Replaces the current MDX+Contentlayer blog pipeline so posts can be authored without a rebuild.

Deferred to a later phase (not in v1 unless requested): site-wide SEO
metadata/keywords, nav links, social links, newsletter/comments provider
config — these rarely change and stay in `siteMetadata.js` for now.

### 2.1 Image management (new)

- **Storage**: plain static files on disk under `public/static/uploads/`
  (e.g. `public/static/uploads/achievements/...`, `.../hero/...`,
  `.../blog/...`) — no S3/cloud storage needed since the site is self-hosted
  with a Docker volume. Files are served directly by Next.js as static
  assets, same as current images in `public/static/images/`.
- **Media Library model**: every uploaded file is tracked in a DB table so it
  can be (a) reused across sections (e.g. pick an already-uploaded image as
  the hero) and (b) safely deleted (checked for references before removal).

  ```prisma
  model MediaAsset {
    id         String   @id @default(cuid())
    filename   String   // stored filename on disk
    path       String   // public path, e.g. /static/uploads/achievements/xyz.jpg
    altText    String?
    width      Int?
    height     Int?
    sizeBytes  Int?
    createdAt  DateTime @default(now())
  }
  ```
- **Upload flow**: server action accepts `FormData` with the file → validate
  type/size (jpg/png/webp, e.g. max 5MB) → resize/optimize (use `sharp`, same
  library family as `image-size` already in deps) → save to disk → create
  `MediaAsset` row → return its id/path to the form.
- **Reusable `<ImagePicker />` admin component**: shows a grid of existing
  `MediaAsset`s + an "Upload new" button; used in Achievements form, About
  form, Hero image setting, and Blog cover image — one component, one upload
  endpoint, consistent UX everywhere.
- **Hero image** stored as a singleton setting:
  ```prisma
  model SiteSettings {
    id            String  @id @default("site")
    heroImageId   String?
    heroImage     MediaAsset? @relation(fields: [heroImageId], references: [id])
    // room to grow: future site-wide fields (phase 4) live here too
  }
  ```
- Public components (`Achievements`, `AboutMe`, homepage hero section, Blog
  post page) read `image.path` from the DB-populated data the same way they
  read `image` today — no change to rendering logic, just the data source.

## 3. Data model (Prisma + SQLite)

```prisma
model Chamber {
  id          String  @id @default(cuid())
  location    String
  name        String
  phone       String
  address     String
  schedule    String
  mapsEmbedUrl String
  order       Int     @default(0)
}

model Service {
  id          String @id @default(cuid())
  name        String
  description String
  order       Int    @default(0)
}

model Achievement {
  id          String       @id @default(cuid())
  title       String
  year        String?
  description String?
  imageId     String?
  image       MediaAsset?  @relation(fields: [imageId], references: [id])
  order       Int          @default(0)
}

model Qualification {
  id          String @id @default(cuid())
  title       String
  description String
  order       Int    @default(0)
}

model AboutContent {
  id        String      @id @default("about") // singleton row
  content   String      // markdown/rich text
  imageId   String?
  image     MediaAsset? @relation(fields: [imageId], references: [id])
}

model BlogPost {
  id         String   @id @default(cuid())
  slug       String   @unique
  title      String
  summary    String?
  content    String   // markdown
  coverImageId String?
  coverImage MediaAsset? @relation(fields: [coverImageId], references: [id])
  tags       String   // comma-separated or JSON string
  draft      Boolean  @default(false)
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
}

// Media library: every uploaded image, reusable across sections
model MediaAsset {
  id         String   @id @default(cuid())
  filename   String
  path       String   // public path, e.g. /static/uploads/xyz.jpg
  altText    String?
  width      Int?
  height     Int?
  sizeBytes  Int?
  createdAt  DateTime @default(now())

  achievements Achievement[]
  aboutUses    AboutContent[]
  blogUses     BlogPost[]
  siteSettings SiteSettings[]
}

// Singleton site-wide settings, incl. hero image
model SiteSettings {
  id          String      @id @default("site")
  heroImageId String?
  heroImage   MediaAsset? @relation(fields: [heroImageId], references: [id])
}

model AdminSession {
  id        String   @id @default(cuid())
  token     String   @unique
  createdAt DateTime @default(now())
  expiresAt DateTime
}
```

SQLite file lives at e.g. `prisma/dev.db`, added to the Docker volume so data
survives container restarts/rebuilds. Add it to `.gitignore` and `.dockerignore`.
Uploaded images live under `public/static/uploads/` (also on the mounted
volume) so they persist across container rebuilds too.

## 4. Auth

- Single admin credential: `ADMIN_PASSWORD_HASH` (bcrypt hash) in `.env.local`.
- `/admin/login` page: POST password → compare hash → create `AdminSession`
  row + set httpOnly signed cookie → redirect to `/admin`.
- `middleware.ts` protects all `/admin/**` routes (except `/admin/login`) by
  validating the session cookie/token against `AdminSession`.
- Logout clears cookie + deletes session row.
- No multi-user/roles for v1 (per your answer); can extend to NextAuth later
  if more staff need accounts.

## 5. Admin UI structure

```
app/admin/
  layout.tsx              # auth-gated shell, sidebar nav
  login/page.tsx
  page.tsx                # dashboard home (quick links/counts)
  chambers/page.tsx        # list + edit/add/delete forms
  services/page.tsx
  achievements/page.tsx    # list + edit/add/delete, each row has ImagePicker
  qualifications/page.tsx
  about/page.tsx           # rich text editor + ImagePicker for about image
  settings/page.tsx        # site-wide settings incl. hero ImagePicker
  blog/page.tsx             # list posts
  blog/new/page.tsx
  blog/[id]/edit/page.tsx   # includes ImagePicker for cover image
  media/page.tsx            # standalone media library browser (view/upload/delete all images)
  api/admin/... (route handlers for CRUD, image upload)
```

- Forms: server actions (Next.js `"use server"`) for create/update/delete —
  avoids building a separate REST API.
- Rich text/markdown editing: a simple Markdown textarea + preview for About
  and Blog body (keeps bundle small vs. full WYSIWYG like Tiptap). Can
  upgrade to Tiptap later if the doctor prefers a visual editor.
- **Images**: shared `<ImagePicker />` component (upload new file or pick
  from existing `MediaAsset`s) used in Achievements, About, Hero/Settings,
  and Blog cover image forms. Upload server action: validate → optimize with
  `sharp` → save under `public/static/uploads/...` → create `MediaAsset` row.
  A dedicated `/admin/media` page lets the admin browse/delete all uploaded
  images in one place (blocks delete if an image is still referenced).
- Drag-to-reorder (or simple up/down buttons) for list-based content
  (chambers, services, achievements, qualifications) using the `order` field.

## 6. Public site changes

- Replace imports of `services`, `achievements`, `qualifications`, `chambers`
  from `data/siteMetadata.js` in the relevant components
  (`components/services.tsx`, `components/achievements.tsx`,
  `components/qualifications.tsx`, `components/Chamber.tsx`, About page) with
  server-side DB reads (Prisma client in a server component).
- `Achievements` component keeps its current props shape
  (`{title, year, description, image}`) — the DB query just maps
  `achievement.image?.path` into `image` before passing down, so the
  component itself needs no changes.
- Homepage hero section reads `SiteSettings.heroImage.path` for its banner
  image (falls back to the current static default if none is set yet).
- About page content rendered from `AboutContent.content` (markdown → HTML)
  plus `AboutContent.image`.
- Blog: replace Contentlayer-driven `allBlogs` with Prisma-backed queries;
  remove/retire `contentlayer.config.ts` Blog document type once migrated
  (Authors can stay as-is or be folded into a simple `author` field on
  `BlogPost` since there's only one author).
- Seed script (`prisma/seed.ts`) to migrate current hardcoded content
  (chambers/services/achievements/qualifications from `siteMetadata.js`,
  including copying existing files from `public/static/images/achievements/`
  into `MediaAsset` rows) into the DB once, so the site doesn't go blank on
  cutover.

## 7. Infra / deployment changes

- Add `prisma`, `@prisma/client`, `bcryptjs` (or `bcrypt`), `sharp` (image
  optimization/resizing) to dependencies.
- `npx prisma migrate dev` for local schema changes; `prisma migrate deploy`
  in Docker entrypoint/build step for production.
- Update `Dockerfile`/`docker-compose.yml`:
  - Ensure SQLite file path (`prisma/dev.db`) and `public/static/uploads/`
    are both part of the mounted volume so DB rows and image files survive
    container rebuilds together (a MediaAsset row is useless if its file
    got wiped).
  - Run `prisma generate` during image build.
  - (Separately worth flagging: current Dockerfile runs `next dev` in
    production — recommend switching to `next build` + `next start` once
    this work lands, so DB-driven server components perform well.)
- `.env.local`: add `ADMIN_PASSWORD_HASH`, `SESSION_SECRET`, `DATABASE_URL="file:./prisma/dev.db"`.
- Upload limits: enforce max file size (e.g. 5MB) and allowed types
  (jpg/png/webp) both client-side (form validation) and server-side (in the
  upload server action) to avoid disk bloat/abuse.

## 8. Phased delivery

1. **Phase 1 — Foundation**: Prisma setup, schema, seed script, admin auth
   (login/logout/middleware), empty dashboard shell.
2. **Phase 2 — Simple content + images**: Chambers, Services, Qualifications,
   About (with image), Achievements and Awards (with per-item image),
   shared `ImagePicker`/media library + upload pipeline, Hero image setting —
   CRUD forms + wire public pages (incl. homepage hero) to DB.
3. **Phase 3 — Blog**: BlogPost model/CRUD (with cover image via the same
   `ImagePicker`), markdown editor, public blog pages migrated off
   Contentlayer, re-enable `blogEnabled`.
4. **Phase 4 (optional/follow-up)**: WYSIWYG upgrade, site settings editor
   (phone, address, SEO keywords, socials), switch Docker to production
   build mode, multi-user auth if needed, image CDN/cloud storage if disk
   usage grows large.

## 9. Open items to confirm before implementation

- Keep Contentlayer for blog as a fallback/import source, or fully retire it
  once migrated?
- Any existing blog posts in `data/blog/*.mdx` that must be imported into the
  DB via the seed script?
- Preferred markdown editor UX (plain textarea+preview vs. a library like
  `@uiw/react-md-editor`)?
- Should existing images in `public/static/images/achievements/` and the
  current hero/banner image be auto-imported into the media library by the
  seed script (recommended), or re-uploaded manually by the admin?
- Any max image size/dimension preference for the hero image (e.g. enforce a
  minimum width for banner quality)?

