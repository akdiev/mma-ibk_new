'use client'

import { useLang } from './LangContext'

export default function Hero() {
  const { t } = useLang()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Hex pattern */}
      <div className="absolute inset-0 hex-pattern opacity-100" />

      {/* Red radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(220,50,20,0.10) 0%, transparent 65%)' }}
      />

      {/* Top line accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-red/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-24 md:py-32 max-w-5xl mx-auto">
        <p className="text-brand-red text-[10px] font-medium tracking-[6px] uppercase mb-6 animate-fade-up opacity-0"
          style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          {t.hero.eyebrow}
        </p>

        <h1 className="font-bebas leading-[0.88] tracking-[2px] text-white mb-4"
          style={{ fontSize: 'clamp(72px, 14vw, 130px)', animationDelay: '0.2s' }}>
          <span className="block animate-fade-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            {t.hero.title1}
          </span>
          <span className="block text-brand-red animate-fade-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            {t.hero.title2}
          </span>
          <span className="block animate-fade-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            {t.hero.title3}
          </span>
        </h1>

        <p className="font-bebas text-white/25 tracking-[10px] text-2xl mb-10 animate-fade-up opacity-0"
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          {t.hero.subtitle}
        </p>

        {/* Discipline tags */}
        <div className="flex flex-wrap gap-2 justify-center mb-12 animate-fade-up opacity-0"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          {['MMA', 'Kick-Thai-Boxen', 'Brazilian Jiu Jitsu', 'Frauen Kickboxen', 'Kinder BJJ'].map(d => (
            <span key={d} className="px-3 py-1.5 border border-brand-red/30 text-white/50 text-[9px] tracking-[2.5px] uppercase rounded-[2px]">
              {d}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex gap-4 justify-center flex-wrap animate-fade-up opacity-0"
          style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
          <a href="https://wa.me/+436644613887" target="_blank" rel="noopener noreferrer"
            className="btn-primary">
            {t.hero.cta1}
          </a>
          <a href="#schedule" className="btn-outline">
            {t.hero.cta2}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-red to-transparent" />
      </div>
    </section>
  )
}
