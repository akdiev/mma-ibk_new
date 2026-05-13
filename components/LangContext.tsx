'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { translations, Lang } from '@/lib/i18n'

interface LangContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: typeof translations['de']
}

const LangContext = createContext<LangContextType>({
  lang: 'de',
  setLang: () => {},
  t: translations['de'],
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('de')

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
