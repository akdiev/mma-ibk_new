'use client'

import Image from 'next/image'
import { useLang } from './LangContext'

const ICONS = ['mma', 'kickboxing', 'bjj', 'womens', 'kids']

export default function Disciplines() {
  const { t } = useLang()

  return (
    <section className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="section-eyebrow">{t.disciplines.eyebrow}</p>
        <h2 className="section-heading">{t.disciplines.heading}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {t.disciplines.items.map((item, i) => (
            <div
              key={i}
              className="group bg-brand-card border border-white/[0.07] rounded-[3px] p-6
                         hover:border-brand-red/40 hover:bg-[#1a1010] transition-all duration-300"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300 [filter:invert(1)_brightness(0.9)] group-hover:[filter:invert(20%)_sepia(100%)_saturate(500%)_hue-rotate(340deg)_brightness(1)]">
                <Image
                  src={`/icons/${ICONS[i]}.png`}
                  alt={item.name}
                  width={52}
                  height={52}
                />
              </div>
              <h3 className="font-bebas text-lg tracking-wider text-white mb-2 group-hover:text-brand-red transition-colors">
                {item.name}
              </h3>
              <p className="text-white/40 text-[12px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
