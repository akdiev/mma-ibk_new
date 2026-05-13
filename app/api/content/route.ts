import { NextResponse } from 'next/server'
import { readJSON } from '@/lib/store'
import { translations } from '@/lib/i18n'
import type { SiteContent } from '@/app/api/admin/content/route'

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

// Public endpoint — no auth required
export async function GET() {
  const content = await readJSON<SiteContent>('content.json', defaultContent())
  return NextResponse.json(content)
}
