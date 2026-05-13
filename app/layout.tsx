import type { Metadata } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import './globals.css'
import { LangProvider } from '@/components/LangContext'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MMA-IBK – Tirols größtes Kampfsportcenter | Tyrol\'s Biggest Martial Arts Academy',
  description: 'MMA-IBK Innsbruck – Das größte und modernste Kampfsportzentrum Tirols. MMA, Kick-Thai-Boxen, Brazilian Jiu Jitsu, Frauen- und Kindertraining. Seit 2014.',
  keywords: ['MMA Innsbruck', 'Kampfsport Innsbruck', 'BJJ Tirol', 'Kickboxen Innsbruck', 'MMA-IBK'],
  openGraph: {
    title: 'MMA-IBK Innsbruck',
    description: 'Tirols größtes Kampfsportzentrum seit 2014',
    url: 'https://www.mma-ibk.at',
    siteName: 'MMA-IBK',
    images: [{ url: 'https://www.mma-ibk.at/wp-content/uploads/2024/03/MMA-IBK_Link-Bild.png', width: 1200, height: 630, alt: 'MMA-IBK' }],
    locale: 'de_AT',
    type: 'website',
  },
  icons: {
    icon: 'https://www.mma-ibk.at/wp-content/uploads/2024/03/MMA-IBK_Logo-112x112-1.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body>
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  )
}
