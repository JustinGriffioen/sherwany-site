/**
 * SEO helpers for locale-aware metadata, canonicals, and hreflang.
 */
import type { Locale } from "@/lib/i18n"
import { siteConfig } from "@/lib/site-config"

const baseUrl = siteConfig.url

/** Path without leading slash. nl: "" | "contact" | "a-waxing" */
type PathKey = "" | "contact" | "a-waxing"

/** Build full URL for a locale and path */
export function localeUrl(locale: Locale, path: PathKey = ""): string {
  const segment = path ? `/${path}` : ""
  if (locale === "nl") {
    return `${baseUrl}${segment}`
  }
  return `${baseUrl}/en${segment}`
}

/** Alternate languages for metadata.alternates.languages (hreflang) */
export function alternateLanguages(path: PathKey = ""): Record<string, string> {
  return {
    nl: localeUrl("nl", path),
    en: localeUrl("en", path),
    "x-default": localeUrl("nl", path),
  }
}

/** Canonical URL for current locale + path */
export function canonicalUrl(locale: Locale, path: PathKey = ""): string {
  return localeUrl(locale, path)
}
