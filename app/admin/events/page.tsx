'use client'

import { useEffect, useState } from 'react'
import type { EventItem } from '@/app/api/admin/events/route'

const EMPTY: Omit<EventItem, 'id' | 'createdAt'> = {
  tag: 'EVENT',
  date_de: '',
  date_en: '',
  title_de: '',
  title_en: '',
  desc_de: '',
  desc_en: '',
  link: '',
  logo: '',
}

export default function EventsAdmin() {
  const [events, setEvents] = useState<EventItem[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState({ ...EMPTY })
  const [saving, setSaving] = useState(false)

  async function load() {
    setLoading(true)
    const res = await fetch('/api/admin/events')
    const data = await res.json()
    setEvents(Array.isArray(data) ? data : [])
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  function openNew() {
    setForm({ ...EMPTY })
    setEditingId(null)
    setShowForm(true)
  }

  function openEdit(ev: EventItem) {
    setForm({
      tag: ev.tag, date_de: ev.date_de, date_en: ev.date_en,
      title_de: ev.title_de, title_en: ev.title_en,
      desc_de: ev.desc_de, desc_en: ev.desc_en,
      link: ev.link, logo: ev.logo,
    })
    setEditingId(ev.id)
    setShowForm(true)
  }

  async function save() {
    setSaving(true)
    if (editingId) {
      await fetch(`/api/admin/events/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    } else {
      await fetch('/api/admin/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    }
    setSaving(false)
    setShowForm(false)
    load()
  }

  async function remove(id: string) {
    if (!confirm('Obrisati ovaj event?')) return
    await fetch(`/api/admin/events/${id}`, { method: 'DELETE' })
    load()
  }

  const field = (key: keyof typeof EMPTY, label: string, multiline = false) => (
    <div key={key}>
      <label className="block text-[10px] tracking-[2px] uppercase text-white/40 mb-1.5">{label}</label>
      {multiline ? (
        <textarea
          rows={3}
          value={form[key]}
          onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))}
          className="w-full bg-[#0d0d0d] border border-white/10 rounded-[2px] px-3 py-2.5
                     text-white text-sm placeholder-white/20 focus:outline-none focus:border-brand-red/50
                     resize-none transition-colors"
        />
      ) : (
        <input
          type="text"
          value={form[key]}
          onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))}
          className="w-full bg-[#0d0d0d] border border-white/10 rounded-[2px] px-3 py-2.5
                     text-white text-sm placeholder-white/20 focus:outline-none focus:border-brand-red/50
                     transition-colors"
        />
      )}
    </div>
  )

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-bebas text-4xl tracking-wider text-white">Eventi / Novosti</h1>
          <p className="text-white/30 text-sm mt-1">Dodaj, uredi ili obriši objave</p>
        </div>
        <button onClick={openNew} className="btn-primary">+ Novi event</button>
      </div>

      {/* Form modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-start justify-center pt-10 px-4 overflow-y-auto">
          <div className="bg-[#111] border border-white/[0.1] rounded-[3px] w-full max-w-2xl p-8 mb-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bebas text-2xl tracking-wider text-white">
                {editingId ? 'Uredi event' : 'Novi event'}
              </h2>
              <button onClick={() => setShowForm(false)} className="text-white/30 hover:text-white text-2xl leading-none cursor-pointer">×</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {field('tag', 'Tag (npr. EVENT, CHARITY, NEWS)')}
              {field('link', 'Link URL')}
              {field('logo', 'Logo URL')}
              <div className="sm:col-span-2 border-t border-white/[0.06] pt-4">
                <p className="text-brand-red text-[9px] tracking-[3px] uppercase mb-3">Deutsch</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {field('date_de', 'Datum (DE)')}
                  {field('title_de', 'Naslov (DE)')}
                </div>
                <div className="mt-4">{field('desc_de', 'Opis (DE)', true)}</div>
              </div>
              <div className="sm:col-span-2 border-t border-white/[0.06] pt-4">
                <p className="text-brand-red text-[9px] tracking-[3px] uppercase mb-3">English</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {field('date_en', 'Date (EN)')}
                  {field('title_en', 'Title (EN)')}
                </div>
                <div className="mt-4">{field('desc_en', 'Description (EN)', true)}</div>
              </div>
            </div>

            <div className="flex gap-3 mt-6 pt-4 border-t border-white/[0.06]">
              <button onClick={save} disabled={saving} className="btn-primary disabled:opacity-50">
                {saving ? 'Čuvanje...' : 'Sačuvaj'}
              </button>
              <button onClick={() => setShowForm(false)} className="btn-outline">Odustani</button>
            </div>
          </div>
        </div>
      )}

      {/* Events list */}
      {loading ? (
        <div className="text-white/30 text-sm">Učitavanje...</div>
      ) : events.length === 0 ? (
        <div className="bg-[#111] border border-white/[0.07] rounded-[3px] p-12 text-center">
          <p className="text-white/25 text-sm">Nema eventa. Dodaj prvi!</p>
        </div>
      ) : (
        <div className="space-y-3">
          {events.map(ev => (
            <div
              key={ev.id}
              className="bg-[#111] border border-white/[0.07] rounded-[3px] p-5 flex items-start gap-4"
            >
              {ev.logo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={ev.logo} alt="" className="h-10 w-16 object-contain opacity-60 shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-brand-red text-[9px] tracking-[2px] uppercase border border-brand-red/30 px-1.5 py-0.5 rounded-[2px]">
                    {ev.tag}
                  </span>
                  <span className="text-white/25 text-[10px]">{ev.date_de}</span>
                </div>
                <p className="text-white text-sm font-medium truncate">{ev.title_de}</p>
                <p className="text-white/40 text-xs mt-0.5 truncate">{ev.desc_de}</p>
              </div>
              <div className="flex gap-2 shrink-0">
                <button
                  onClick={() => openEdit(ev)}
                  className="px-3 py-1.5 text-[10px] tracking-wider border border-white/10 text-white/50
                             hover:border-white/30 hover:text-white rounded-[2px] transition-colors cursor-pointer"
                >
                  Uredi
                </button>
                <button
                  onClick={() => remove(ev.id)}
                  className="px-3 py-1.5 text-[10px] tracking-wider border border-red-500/20 text-red-400/60
                             hover:border-red-500/50 hover:text-red-400 rounded-[2px] transition-colors cursor-pointer"
                >
                  Obriši
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
