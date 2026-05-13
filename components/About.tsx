'use client'

import { useLang } from './LangContext'

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="py-16 md:py-28 bg-brand-dark wire-texture">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left: text */}
        <div>
          <p className="section-eyebrow">{t.about.eyebrow}</p>
          <h2 className="section-heading">{t.about.heading}</h2>
          <p className="text-white/60 leading-relaxed mb-5 text-[15px]">{t.about.p1}</p>
          <p className="text-white/60 leading-relaxed mb-5 text-[15px]">{t.about.p2}</p>
          <p className="text-white/60 leading-relaxed mb-10 text-[15px]">{t.about.p3}</p>
          <a
            href="https://wa.me/+436644613887"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            {t.about.cta}
          </a>
        </div>

        {/* Right: decorative card */}
        <div className="relative hidden md:block">
          <div className="aspect-[4/5] rounded-[3px] bg-brand-card border border-white/07 overflow-hidden relative">
            {/* Background logo watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.mma-ibk.at/wp-content/uploads/2024/03/MMA-IBK_Titelbild-Logo.png"
                alt=""
                className="w-3/4 object-contain"
              />
            </div>

            {/* Overlay info card */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div className="font-bebas text-3xl tracking-wider text-white mb-1">MMA-IBK</div>
              <div className="text-white/50 text-xs tracking-[2px] uppercase">Grabenweg 67b · 6020 Innsbruck</div>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs tracking-wider">Open · Mo–Sa</span>
              </div>
            </div>

            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red" />
          </div>

          {/* Floating badge */}
          <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-brand-red flex flex-col items-center justify-center">
            <span className="font-bebas text-2xl text-white leading-none">10+</span>
            <span className="text-white/80 text-[8px] tracking-wider uppercase">Jahre</span>
          </div>
        </div>
      </div>
    </section>
  )
}
