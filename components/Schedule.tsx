'use client'

import { useState } from 'react'
import { useLang } from './LangContext'
import { schedule, DISCIPLINE_COLORS, DisciplineKey } from '@/lib/schedule-data'

const ALL_DISCIPLINES: DisciplineKey[] = ['MMA', 'Kick-Thai', 'BJJ', 'Frauen', 'Kinder', 'Boxen']
const DAYS_DE = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
const DAYS_EN = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export default function Schedule() {
  const { t, lang } = useLang()
  const [activeFilter, setActiveFilter] = useState<DisciplineKey | 'all'>('all')
  const days = lang === 'de' ? DAYS_DE : DAYS_EN

  return (
    <section id="schedule" className="py-16 md:py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <p className="section-eyebrow">{t.schedule.eyebrow}</p>
        <h2 className="section-heading">{t.schedule.heading}</h2>
        <p className="text-white/40 text-sm tracking-wider mb-10">{t.schedule.subheading}</p>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 text-[11px] tracking-[2px] uppercase font-medium rounded-[2px] border transition-all cursor-pointer
              ${activeFilter === 'all'
                ? 'bg-brand-red border-brand-red text-white'
                : 'bg-transparent border-white/10 text-white/40 hover:border-white/30 hover:text-white/60'}`}
          >
            {t.schedule.filterAll}
          </button>
          {ALL_DISCIPLINES.map(d => (
            <button
              key={d}
              onClick={() => setActiveFilter(d)}
              className={`px-4 py-2 text-[11px] tracking-[2px] uppercase font-medium rounded-[2px] border transition-all cursor-pointer
                ${activeFilter === d
                  ? 'bg-brand-red border-brand-red text-white'
                  : 'bg-transparent border-white/10 text-white/40 hover:border-white/30 hover:text-white/60'}`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Schedule grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {DAYS_DE.map((dayKey, i) => {
            const entries = (schedule[dayKey] || []).filter(
              e => activeFilter === 'all' || e.discipline === activeFilter
            )
            return (
              <div key={dayKey} className="bg-brand-card border border-white/[0.06] rounded-[3px] overflow-hidden">
                {/* Day header */}
                <div className="bg-brand-surface px-3 py-2 border-b border-white/[0.06]">
                  <span className="font-bebas text-lg tracking-wider text-white">{days[i]}</span>
                </div>
                {/* Entries */}
                <div className="p-2 flex flex-col gap-1.5 min-h-[160px]">
                  {entries.length === 0 ? (
                    <div className="flex-1 flex items-center justify-center">
                      <span className="text-white/15 text-xs">–</span>
                    </div>
                  ) : (
                    entries.map((entry, j) => (
                      <div
                        key={j}
                        className={`px-2 py-1.5 rounded-[2px] border text-[10px] leading-tight ${DISCIPLINE_COLORS[entry.discipline]}`}
                      >
                        <div className="font-medium tracking-wide">{entry.name}</div>
                        <div className="opacity-70 mt-0.5">{entry.time}</div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Actual schedule image */}
        <div className="mt-10 p-6 bg-brand-card border border-white/[0.06] rounded-[3px] text-center">
          <p className="text-white/40 text-xs tracking-wider uppercase mb-4">Offizieller Trainingsplan · Official Schedule</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.mma-ibk.at/wp-content/uploads/2024/04/Trainingsplan20240329-scaled.jpg"
            alt="MMA-IBK Trainingsplan"
            className="max-w-2xl w-full mx-auto rounded-[2px]"
          />
        </div>
      </div>
    </section>
  )
}
