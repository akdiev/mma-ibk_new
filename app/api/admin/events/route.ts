import { NextRequest, NextResponse } from 'next/server'
import { isValidToken, COOKIE_NAME } from '@/lib/auth'
import { readJSON, writeJSON } from '@/lib/store'
import { newsItems } from '@/lib/schedule-data'
import { randomUUID } from 'crypto'

export interface EventItem {
  id: string
  tag: string
  date_de: string
  date_en: string
  title_de: string
  title_en: string
  desc_de: string
  desc_en: string
  link: string
  logo: string
  createdAt: string
}

function auth(req: NextRequest) {
  const token = req.cookies.get(COOKIE_NAME)?.value ?? ''
  return isValidToken(token)
}

export async function GET(req: NextRequest) {
  if (!auth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const events = await readJSON<EventItem[]>('events.json', newsItems.map(e => ({
    ...e,
    id: String(e.id),
    createdAt: new Date().toISOString(),
  })))
  return NextResponse.json(events)
}

export async function POST(req: NextRequest) {
  if (!auth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json()
  const events = await readJSON<EventItem[]>('events.json', newsItems.map(e => ({
    ...e,
    id: String(e.id),
    createdAt: new Date().toISOString(),
  })))

  const newEvent: EventItem = {
    id: randomUUID(),
    tag: body.tag ?? 'NEWS',
    date_de: body.date_de ?? '',
    date_en: body.date_en ?? '',
    title_de: body.title_de ?? '',
    title_en: body.title_en ?? '',
    desc_de: body.desc_de ?? '',
    desc_en: body.desc_en ?? '',
    link: body.link ?? '#',
    logo: body.logo ?? '',
    createdAt: new Date().toISOString(),
  }

  events.unshift(newEvent)
  await writeJSON('events.json', events)
  return NextResponse.json(newEvent, { status: 201 })
}
