'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import {
  verifyAdminPassword,
  createAdminSession,
  destroySessionToken,
  SESSION_COOKIE_NAME,
} from '@/lib/auth'

export async function loginAction(formData: FormData) {
  const password = String(formData.get('password') || '')
  const next = String(formData.get('next') || '/admin')

  const valid = await verifyAdminPassword(password)
  if (!valid) {
    redirect(`/admin/login?error=1&next=${encodeURIComponent(next)}`)
  }

  const token = await createAdminSession()
  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })

  redirect(next.startsWith('/admin') ? next : '/admin')
}

export async function logoutAction() {
  const cookieStore = await cookies()
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value
  await destroySessionToken(token)
  cookieStore.delete(SESSION_COOKIE_NAME)
  redirect('/admin/login')
}

