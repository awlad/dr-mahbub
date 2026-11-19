'use client'

import { useState } from 'react'
import { loginAction } from '@/app/admin/actions/auth'

export default function LoginForm({ next, hasError }: { next: string; hasError: boolean }) {
  const [submitting, setSubmitting] = useState(false)

  return (
    <form
      action={loginAction}
      onSubmit={() => setSubmitting(true)}
      className="w-full max-w-sm space-y-4 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800"
    >
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">Admin Login</h1>
      <input type="hidden" name="next" value={next} />
      {hasError && (
        <p className="rounded bg-red-50 px-3 py-2 text-sm text-red-700 dark:bg-red-900/30 dark:text-red-300">
          Incorrect password. Please try again.
        </p>
      )}
      <div>
        <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoFocus
          className="w-full rounded-md border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-md bg-cyan-600 px-4 py-2 font-medium text-white hover:bg-cyan-700 disabled:opacity-60"
      >
        {submitting ? 'Signing in…' : 'Sign in'}
      </button>
    </form>
  )
}

