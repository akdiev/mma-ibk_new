'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Dashboard() {
  const [eventCount, setEventCount] = useState<number | null>(null)

  useEffect(() => {
    fetch('/api/admin/events')
      .then(r => r.json())
      .then(d => setEventCount(Array.isArray(d) ? d.length : 0))
      .catch(() => setEventCount(0))
  }, [])

  const cards = [
    {
      href: '/admin/events',
      label: 'Eventi / Novosti',
      value: eventCount ?? '–',
      desc: 'Ukupno objava',
      icon: '◈',
    },
    {
      href: '/admin/content',
      label: 'Sadržaj',
      value: '2',
      desc: 'Sekcije (About, Hero)',
      icon: '✎',
    },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-bebas text-4xl tracking-wider text-white">Dashboard</h1>
        <p className="text-white/30 text-sm mt-1">Dobrodošao u MMA-IBK admin panel.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {cards.map(card => (
          <Link
            key={card.href}
            href={card.href}
            className="group bg-[#111] border border-white/[0.07] rounded-[3px] p-6
                       hover:border-brand-red/30 transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-2xl text-white/20 group-hover:text-brand-red/50 transition-colors">
                {card.icon}
              </span>
            </div>
            <div className="font-bebas text-5xl text-brand-red leading-none mb-2">
              {card.value}
            </div>
            <div className="text-white/60 text-xs tracking-wider uppercase">{card.desc}</div>
            <div className="text-white/25 text-[10px] tracking-[2px] uppercase mt-1">{card.label}</div>
          </Link>
        ))}
      </div>

      <div className="bg-[#111] border border-white/[0.07] rounded-[3px] p-6">
        <h2 className="font-bebas text-xl tracking-wider text-white mb-4">Brzi pristup</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/admin/events" className="btn-primary text-xs">
            + Dodaj event
          </Link>
          <Link href="/admin/content" className="btn-outline text-xs">
            Uredi sadržaj
          </Link>
        </div>
      </div>
    </div>
  )
}
