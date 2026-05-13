# MMA-IBK Website

Nova web stranica za MMA-IBK Innsbruck – Tirols größtes Kampfsportzentrum.

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animacije)
- **Resend** (email za kontakt formu)

## Pokretanje lokalno

```bash
# 1. Instaliraj dependencies
npm install

# 2. Kopiraj env fajl
cp .env.local.example .env.local

# 3. Pokreni dev server
npm run dev
```

Otvori [http://localhost:3000](http://localhost:3000)

## Email setup (kontakt forma)

### Opcija A – Resend (preporučeno, besplatno do 3000 emailova/mj)
1. Registruj se na [resend.com](https://resend.com)
2. Dodaj API key u `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
   ```
3. Verifikuj svoju domenu na Resendu (mma-ibk.at)

### Opcija B – Bez emaila (dev mod)
Bez `RESEND_API_KEY` forma radi normalno, poruke se samo loguju u konzoli.

## Struktura projekta

```
mma-ibk/
├── app/
│   ├── page.tsx              # Glavna stranica
│   ├── layout.tsx            # Root layout + fonts + metadata
│   ├── globals.css           # Tailwind + custom CSS
│   └── api/
│       └── contact/
│           └── route.ts      # Backend za kontakt formu
├── components/
│   ├── LangContext.tsx       # DE/EN jezik context
│   ├── Loader.tsx            # Intro animacija (saka)
│   ├── Navbar.tsx            # Navigacija
│   ├── Hero.tsx              # Hero sekcija
│   ├── Stats.tsx             # Statistike (400+, 200m², ...)
│   ├── About.tsx             # O nama
│   ├── Disciplines.tsx       # Discipline kartice
│   ├── Schedule.tsx          # Trainingsplan sa filterom
│   ├── Coaches.tsx           # Treneri
│   ├── News.tsx              # Vijesti i eventi
│   ├── Contact.tsx           # Kontakt forma
│   └── Footer.tsx            # Footer + sponzori
├── lib/
│   ├── i18n.ts               # Svi prijevodi DE + EN
│   └── schedule-data.ts      # Podaci o rasporedu, trenerima, vijestima
└── tailwind.config.ts
```

## Ažuriranje sadržaja

Sve važne informacije su u `lib/schedule-data.ts`:
- `schedule` – raspored treninga
- `coaches` – treneri (dodaj slike i prave detalje)
- `newsItems` – vijesti i eventi
- `sponsors` – sponzori

Prijevodi su u `lib/i18n.ts`.

## Deploy na Vercel

```bash
npm run build   # test build lokalno
vercel          # deploy (instaliraj Vercel CLI)
```

## Kontakt i slike trenera

Za dodavanje pravih fotografija trenera:
1. Stavi slike u `public/images/coaches/coach-1.jpg` itd.
2. U `components/Coaches.tsx` zamijeni placeholder sa `<Image src="/images/coaches/coach-1.jpg" .../>`
