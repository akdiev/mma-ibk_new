'use client'

import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'

const NAV = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: '⊞' },
  { href: '/admin/events',    label: 'Eventi / Novosti', icon: '◈' },
  { href: '/admin/content',   label: 'Sadržaj', icon: '✎' },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  if (pathname === '/admin/login') return <>{children}</>

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex">
      {/* Sidebar */}
      <aside className="w-56 bg-[#0d0d0d] border-r border-white/[0.06] flex flex-col shrink-0">
        <div className="px-6 py-6 border-b border-white/[0.06]">
          <div className="font-bebas text-xl tracking-[3px] text-white">
            MMA<span className="text-brand-red">-IBK</span>
          </div>
          <p className="text-white/25 text-[9px] tracking-[2px] uppercase mt-0.5">Admin</p>
        </div>

        <nav className="flex-1 py-4">
          {NAV.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-6 py-3 text-xs tracking-[1.5px] uppercase font-medium transition-colors ${
                pathname === item.href
                  ? 'text-white bg-brand-red/10 border-r-2 border-brand-red'
                  : 'text-white/40 hover:text-white/70'
              }`}
            >
              <span className="text-base leading-none">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="px-4 py-4 border-t border-white/[0.06] space-y-2">
          <a
            href="/"
            target="_blank"
            className="flex items-center gap-2 px-3 py-2 text-[10px] tracking-wider text-white/25 hover:text-white/50 transition-colors rounded-[2px]"
          >
            <span>↗</span> Pogledaj sajt
          </a>
          <button
            onClick={logout}
            className="w-full flex items-center gap-2 px-3 py-2 text-[10px] tracking-wider text-white/25 hover:text-red-400 transition-colors rounded-[2px] cursor-pointer"
          >
            <span>→</span> Odjava
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
