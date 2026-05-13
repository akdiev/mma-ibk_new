import { NextRequest, NextResponse } from 'next/server'
import { isValidToken, COOKIE_NAME } from '@/lib/auth'
import { readJSON, writeJSON } from '@/lib/store'
import type { EventItem } from '../route'
import { newsItems } from '@/lib/schedule-data'

function auth(req: NextRequest) {
  const token = req.cookies.get(COOKIE_NAME)?.value ?? ''
  return isValidToken(token)
}

const defaultEvents = (): EventItem[] =>
  newsItems.map(e => ({ ...e, id: String(e.id), createdAt: new Date().toISOString() }))

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  if (!auth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json()
  const events = await readJSON<EventItem[]>('events.json', defaultEvents())
  const idx = events.findIndex(e => e.id === params.id)
  if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  events[idx] = { ...events[idx], ...body, id: params.id }
  await writeJSON('events.json', events)
  return NextResponse.json(events[idx])
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  if (!auth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const events = await readJSON<EventItem[]>('events.json', defaultEvents())
  const filtered = events.filter(e => e.id !== params.id)
  await writeJSON('events.json', filtered)
  return NextResponse.json({ ok: true })
}
