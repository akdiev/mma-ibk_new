import { NextRequest, NextResponse } from 'next/server'
import { isValidToken, COOKIE_NAME } from '@/lib/auth'
import { readJSON, writeJSON } from '@/lib/store'
import { translations } from '@/lib/i18n'

export interface SiteContent {
  about: {
    de: { heading: string; p1: string; p2: string; p3: string }
    en: { heading: string; p1: string; p2: string; p3: string }
  }
  hero: {
    de: { eyebrow: string }
    en: { eyebrow: string }
  }
}

const defaultContent = (): SiteContent => ({
  about: {
    de: {
      heading: translations.de.about.heading,
      p1: translations.de.about.p1,
      p2: translations.de.about.p2,
      p3: translations.de.about.p3,
    },
    en: {
      heading: translations.en.about.heading,
      p1: translations.en.about.p1,
      p2: translations.en.about.p2,
      p3: translations.en.about.p3,
    },
  },
  hero: {
    de: { eyebrow: translations.de.hero.eyebrow },
    en: { eyebrow: translations.en.hero.eyebrow },
  },
})

function auth(req: NextRequest) {
  const token = req.cookies.get(COOKIE_NAME)?.value ?? ''
  return isValidToken(token)
}

export async function GET(req: NextRequest) {
  if (!auth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const content = await readJSON<SiteContent>('content.json', defaultContent())
  return NextResponse.json(content)
}

export async function PUT(req: NextRequest) {
  if (!auth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await req.json() as SiteContent
  await writeJSON('content.json', body)
  return NextResponse.json({ ok: true })
}
