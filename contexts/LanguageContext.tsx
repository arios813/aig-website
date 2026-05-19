'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

import en, { type Translations } from '../locales/en'
import es from '../locales/es'

// ── Types ─────────────────────────────────────────────────────────────────────

export type Locale = 'en' | 'es'

interface LanguageContextValue {
  locale: Locale
  t: Translations
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
}

// ── Locale map — add new languages here ───────────────────────────────────────

const locales: Record<Locale, Translations> = { en, es }

const STORAGE_KEY = 'aig-locale'

// ── Context ───────────────────────────────────────────────────────────────────

const LanguageContext = createContext<LanguageContextValue>({
  locale: 'en',
  t: en,
  setLocale: () => {},
  toggleLocale: () => {},
})

// ── Provider ──────────────────────────────────────────────────────────────────

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  // Restore saved preference on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Locale | null
      if (saved && saved in locales) {
        setLocaleState(saved)
      }
    } catch {
      // localStorage unavailable (SSR / private browsing) — use default
    }
  }, [])

  // Keep the <html lang="…"> attribute in sync
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore
    }
  }, [])

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'en' ? 'es' : 'en')
  }, [locale, setLocale])

  return (
    <LanguageContext.Provider
      value={{ locale, t: locales[locale], setLocale, toggleLocale }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

// ── Hook ──────────────────────────────────────────────────────────────────────

/**
 * useTranslation — returns typed translation strings for the active locale.
 *
 * Usage:
 *   const { t, locale, toggleLocale } = useTranslation()
 *   <h1>{t.hero.headlineLine1}</h1>
 */
export function useTranslation() {
  return useContext(LanguageContext)
}
