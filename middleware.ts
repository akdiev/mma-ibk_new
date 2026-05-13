import { NextRequest, NextResponse } from 'next/server'
import { COOKIE_NAME } from '@/lib/auth'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname === '/admin' || pathname === '/admin/login') {
    return NextResponse.next()
  }

  if (pathname.startsWith('/admin')) {
    const token = req.cookies.get(COOKIE_NAME)?.value
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
