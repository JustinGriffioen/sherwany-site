"use client"

import { createContext, useContext, useEffect, type ReactNode } from "react"
import type { Locale } from "@/lib/i18n"

const LocaleContext = createContext<Locale>("nl")

export function useLocale() {
  return useContext(LocaleContext)
}

export function useLocalePrefix() {
  const locale = useLocale()
  return locale === "en" ? "/en" : ""
}

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale
  children: ReactNode
}) {
  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "nl"
  }, [locale])

  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  )
}
