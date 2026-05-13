'use client'

import { useLang } from './LangContext'
import { sponsors } from '@/lib/schedule-data'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="bg-brand-darker border-t border-white/[0.04]">
      {/* Sponsors */}
      <div className="border-b border-white/[0.04] py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[9px] tracking-[4px] uppercase text-white/20 mb-8">
            Hauptsponsoren · Main sponsors
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {sponsors.map(s => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 rounded-[3px] px-6 py-4 md:px-8 md:py-5 opacity-70 hover:opacity-100 transition-all duration-300"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.logo} alt={s.name} className="h-10 md:h-14 w-auto object-contain" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-bebas text-xl tracking-[3px] text-white/30">
          MMA<span className="text-brand-red/50">-IBK</span>
        </div>

        <div className="flex gap-6">
          <a href="/impressum" className="text-white/25 hover:text-white/50 text-[10px] tracking-[2px] uppercase transition-colors">
            {t.footer.impressum}
          </a>
          <a href="/datenschutz" className="text-white/25 hover:text-white/50 text-[10px] tracking-[2px] uppercase transition-colors">
            {t.footer.privacy}
          </a>
        </div>

        <p className="text-white/20 text-[10px] tracking-wide">
          © {new Date().getFullYear()} MMA-IBK · {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
