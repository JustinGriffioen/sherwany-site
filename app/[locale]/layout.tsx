import React from "react"
import type { Locale } from "@/lib/i18n"
import { LocaleProvider } from "@/components/locale-provider"

export function generateStaticParams() {
  return [{ locale: "nl" }, { locale: "en" }]
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const validLocale: Locale = locale === "en" ? "en" : "nl"

  return <LocaleProvider locale={validLocale}>{children}</LocaleProvider>
}
