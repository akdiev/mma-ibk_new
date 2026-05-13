import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { COOKIE_NAME } from '@/lib/auth'

export default function AdminRoot() {
  const token = cookies().get(COOKIE_NAME)?.value
  if (token) redirect('/admin/dashboard')
  redirect('/admin/login')
}
