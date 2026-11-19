import React from 'react'
import { redirect } from 'next/navigation'
import { getIsAdminAuthenticated } from '@/lib/auth'
import AdminNav from '@/components/admin/AdminNav'

export default async function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const authenticated = await getIsAdminAuthenticated()
  if (!authenticated) {
    redirect('/admin/login')
  }

  return (
    <div className="flex flex-col md:flex-row">
      <AdminNav />
      <main className="flex-1 p-4 sm:p-6 md:p-8">{children}</main>
    </div>
  )
}

