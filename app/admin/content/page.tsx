'use client'

import { useEffect, useState } from 'react'
import type { SiteContent } from '@/app/api/admin/content/route'

export default function ContentAdmin() {
  const [content, setContent] = useState<SiteContent | null>(null)
  const [activeLang, setActiveLang] = useState<'de' | 'en'>('de')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    fetch('/api/admin/content')
      .then(r => r.json())
      .then(setContent)
  }, [])

  async function save() {
    if (!content) return
    setSaving(true)
    await fetch('/api/admin/content', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content),
    })
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  function setAbout(lang: 'de' | 'en', key: keyof SiteContent['about']['de'], val: string) {
    setContent(c => c ? ({ ...c, about: { ...c.about, [lang]: { ...c.about[lang], [key]: val } } }) : c)
  }

  function setHero(lang: 'de' | 'en', val: string) {
    setContent(c => c ? ({ ...c, hero: { ...c.hero, [lang]: { eyebrow: val } } }) : c)
  }

  if (!content) return (
    <div className="p-8 text-white/30 text-sm">Učitavanje...</div>
  )

  const langLabel = activeLang === 'de' ? 'Deutsch' : 'English'

  const textarea = (label: string, value: string, onChange: (v: string) => void) => (
    <div>
      <label className="block text-[10px] tracking-[2px] uppercase text-white/40 mb-1.5">{label}</label>
      <textarea
        rows={3}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full bg-[#0d0d0d] border border-white/10 rounded-[2px] px-3 py-2.5
                   text-white text-sm focus:outline-none focus:border-brand-red/50 resize-none transition-colors"
      />
    </div>
  )

  const input = (label: string, value: string, onChange: (v: string) => void) => (
    <div>
      <label className="block text-[10px] tracking-[2px] uppercase text-white/40 mb-1.5">{label}</label>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full bg-[#0d0d0d] border border-white/10 rounded-[2px] px-3 py-2.5
                   text-white text-sm focus:outline-none focus:border-brand-red/50 transition-colors"
      />
    </div>
  )

  const l = activeLang

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-bebas text-4xl tracking-wider text-white">Sadržaj stranice</h1>
          <p className="text-white/30 text-sm mt-1">About sekcija i Hero tekst</p>
        </div>
        <button
          onClick={save}
          disabled={saving}
          className="btn-primary disabled:opacity-50"
        >
          {saving ? 'Čuvanje...' : saved ? '✓ Sačuvano' : 'Sačuvaj promjene'}
        </button>
      </div>

      {/* Lang tabs */}
      <div className="flex gap-1 mb-8">
        {(['de', 'en'] as const).map(lg => (
          <button
            key={lg}
            onClick={() => setActiveLang(lg)}
            className={`px-4 py-2 text-xs tracking-[2px] uppercase font-medium rounded-[2px] border transition-all cursor-pointer
              ${activeLang === lg
                ? 'bg-brand-red border-brand-red text-white'
                : 'bg-transparent border-white/10 text-white/40 hover:border-white/30 hover:text-white/60'
              }`}
          >
            {lg.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="space-y-8">
        {/* Hero */}
        <section className="bg-[#111] border border-white/[0.07] rounded-[3px] p-6">
          <h2 className="font-bebas text-xl tracking-wider text-white mb-5">
            Hero — <span className="text-brand-red">{langLabel}</span>
          </h2>
          {input(
            'Eyebrow tekst (ispod loga)',
            content.hero[l].eyebrow,
            v => setHero(l, v)
          )}
        </section>

        {/* About */}
        <section className="bg-[#111] border border-white/[0.07] rounded-[3px] p-6 space-y-4">
          <h2 className="font-bebas text-xl tracking-wider text-white mb-2">
            About sekcija — <span className="text-brand-red">{langLabel}</span>
          </h2>
          {input('Naslov', content.about[l].heading, v => setAbout(l, 'heading', v))}
          {textarea('Paragraf 1', content.about[l].p1, v => setAbout(l, 'p1', v))}
          {textarea('Paragraf 2', content.about[l].p2, v => setAbout(l, 'p2', v))}
          {textarea('Paragraf 3', content.about[l].p3, v => setAbout(l, 'p3', v))}
        </section>
      </div>
    </div>
  )
}
