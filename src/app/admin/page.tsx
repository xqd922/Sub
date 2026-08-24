'use client'

import dynamic from 'next/dynamic'

const AdminDashboard = dynamic(() => import('@/ui/admin_dashboard'), { ssr: false })

export default function AdminPage() {
  return <AdminDashboard />
}
