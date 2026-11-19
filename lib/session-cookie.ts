// lib/session-cookie.ts
// Edge-safe constant shared between middleware.ts (Edge Runtime) and
// lib/auth.ts (Node runtime). Keeping this in its own file means
// middleware.ts doesn't pull in Node-only modules (crypto, bcryptjs,
// Prisma) that lib/auth.ts needs for the full session logic.
export const SESSION_COOKIE_NAME = 'admin_session'

