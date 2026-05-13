'use client'

import { useEffect, useState } from 'react'
import { useLang } from './LangContext'
import type { EventItem } from '@/app/api/admin/events/route'

export default function News() {
  const { t, lang } = useLang()
  const [items, setItems] = useState<EventItem[]>([])

  useEffect(() => {
    fetch('/api/events')
      .then(r => r.json())
      .then(d => setItems(Array.isArray(d) ? d : []))
      .catch(() => {})
  }, [])

  return (
    <section id="news" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <p className="section-eyebrow">{t.news.eyebrow}</p>
        <h2 className="section-heading">{t.news.heading}</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map(item => (
            <a
              key={item.id}
              href={item.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-brand-card border border-white/[0.07] rounded-[3px] overflow-hidden
                         hover:border-brand-red/40 transition-all duration-300 block"
            >
              <div className="h-1 bg-brand-red" />
              <div className="p-8">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <span className="text-brand-red text-[9px] tracking-[3px] uppercase font-medium border border-brand-red/30 px-2 py-1 rounded-[2px]">
                    {item.tag}
                  </span>
                  <span className="text-white/30 text-xs">
                    {lang === 'de' ? item.date_de : item.date_en}
                  </span>
                </div>

                {item.logo && (
                  <div className="mb-5 h-12 flex items-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.logo}
                      alt={item.title_de}
                      className="h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                )}

                <h3 className="font-bebas text-2xl tracking-wider text-white mb-3 group-hover:text-brand-red transition-colors">
                  {lang === 'de' ? item.title_de : item.title_en}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {lang === 'de' ? item.desc_de : item.desc_en}
                </p>

                <span className="text-brand-red text-[11px] tracking-[2px] uppercase font-medium
                                  group-hover:translate-x-1 inline-block transition-transform">
                  {t.news.readMore} →
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/mma_ibk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-white/10 px-6 py-3 rounded-[2px]
                       text-white/50 hover:text-white hover:border-white/30 transition-all text-sm tracking-wider"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
            @mma_ibk
          </a>
        </div>
      </div>
    </section>
  )
}
