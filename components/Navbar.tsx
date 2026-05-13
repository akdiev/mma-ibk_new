'use client'

import { useState, useEffect } from 'react'
import { useLang } from './LangContext'

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#about',     label: t.nav.about },
    { href: '#schedule',  label: t.nav.schedule },
    { href: '#coaches',   label: t.nav.coaches },
    { href: '#news',      label: t.nav.news },
    { href: '#contact',   label: t.nav.contact },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-darker/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-bebas text-2xl tracking-[4px] text-white">
          MMA<span className="text-brand-red">-IBK</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/60 hover:text-brand-red text-[11px] font-medium tracking-[2px] uppercase transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Lang toggle + hamburger */}
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            {(['de', 'en'] as const).map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 text-[11px] font-medium tracking-widest rounded-[2px] border transition-all duration-200 cursor-pointer
                  ${lang === l
                    ? 'bg-brand-red border-brand-red text-white'
                    : 'bg-transparent border-white/20 text-white/40 hover:border-white/40 hover:text-white/60'
                  }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-[1.5px] bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-darker/98 backdrop-blur-md border-t border-white/5">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 text-white/70 hover:text-brand-red text-sm font-medium tracking-[2px] uppercase border-b border-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
