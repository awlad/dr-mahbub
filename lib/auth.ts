// lib/auth.ts
// Minimal single-admin auth: password hash stored in env, session token
// stored in the DB (AdminSession) and referenced via an httpOnly cookie.
import { cookies } from 'next/headers'
import crypto from 'crypto'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { SESSION_COOKIE_NAME } from '@/lib/session-cookie'

export { SESSION_COOKIE_NAME }
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 7 // 7 days

export async function verifyAdminPassword(password: string): Promise<boolean> {
  // ADMIN_PASSWORD_HASH is stored base64-encoded in the environment.
  // A raw bcrypt hash (full of literal `$` characters, e.g. "$2b$10$...")
  // gets corrupted somewhere along the env-loading chain (observed: Next.js
  // dev server / Turbopack worker env propagation silently drops it).
  // Base64 has no characters special to any shell/dotenv/IPC layer, so it
  // survives everywhere unmodified — decode it back to the real hash here.
  const encoded = process.env.ADMIN_PASSWORD_HASH
  if (!encoded) {
    console.error('ADMIN_PASSWORD_HASH is not set in the environment.')
    return false
  }
  const hash = Buffer.from(encoded, 'base64').toString('utf8')
  return bcrypt.compare(password, hash)
}

export async function createAdminSession(): Promise<string> {
  const token = crypto.randomBytes(32).toString('hex')
  const expiresAt = new Date(Date.now() + SESSION_TTL_MS)
  await prisma.adminSession.create({ data: { token, expiresAt } })
  return token
}

export async function destroySessionToken(token: string | undefined) {
  if (!token) return
  await prisma.adminSession.deleteMany({ where: { token } })
}

export async function isValidSessionToken(token: string | undefined): Promise<boolean> {
  if (!token) return false
  const session = await prisma.adminSession.findUnique({ where: { token } })
  if (!session) return false
  if (session.expiresAt < new Date()) {
    await prisma.adminSession.delete({ where: { token } }).catch(() => {})
    return false
  }
  return true
}

/** Call from server components/actions to check whether the current request is authenticated. */
export async function getIsAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value
  return isValidSessionToken(token)
}

/** Clean up expired sessions opportunistically. */
export async function pruneExpiredSessions() {
  await prisma.adminSession.deleteMany({ where: { expiresAt: { lt: new Date() } } })
}




