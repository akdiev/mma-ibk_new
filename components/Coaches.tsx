'use client'

import Image from 'next/image'
import { useLang } from './LangContext'
import { coaches } from '@/lib/schedule-data'

export default function Coaches() {
  const { t, lang } = useLang()

  return (
    <section id="coaches" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="section-eyebrow">{t.coaches.eyebrow}</p>
        <h2 className="section-heading">{t.coaches.heading}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {coaches.map(coach => (
            <div
              key={coach.id}
              className="group bg-brand-card border border-white/[0.07] rounded-[3px] overflow-hidden
                         hover:border-brand-red/30 transition-all duration-300"
            >
              <div className="aspect-square relative overflow-hidden bg-brand-surface">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="absolute bottom-3 right-3 bg-brand-red/90 px-2 py-1 rounded-[2px]">
                  <span className="text-[9px] tracking-wider uppercase text-white font-medium">
                    Since {coach.since}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bebas text-xl tracking-wider text-white mb-1 group-hover:text-brand-red transition-colors">
                  {coach.name}
                </h3>
                <p className="text-brand-red text-[10px] tracking-[2px] uppercase font-medium mb-3">
                  {coach.discipline}
                </p>
                <p className="text-white/45 text-[12px] leading-relaxed">
                  {lang === 'de' ? coach.bio_de : coach.bio_en}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
