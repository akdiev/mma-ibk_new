import { NextRequest, NextResponse } from 'next/server'
import { ADMIN_PASSWORD, COOKIE_NAME, generateToken } from '@/lib/auth'

export async function POST(req: NextRequest) {
  const { password } = await req.json()

  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
  }

  const token = generateToken()
  const res = NextResponse.json({ ok: true })
  res.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  })
  return res
}
