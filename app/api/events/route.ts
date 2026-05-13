import { NextResponse } from 'next/server'
import { readJSON } from '@/lib/store'
import { newsItems } from '@/lib/schedule-data'
import type { EventItem } from '@/app/api/admin/events/route'

// Public endpoint — no auth required
export async function GET() {
  const events = await readJSON<EventItem[]>('events.json', newsItems.map(e => ({
    ...e,
    id: String(e.id),
    createdAt: '',
  })))
  return NextResponse.json(events)
}
