"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { List, XLg, CalendarEvent } from "react-bootstrap-icons"
import Image from "next/image"
import { useLocale, useLocalePrefix } from "@/components/locale-provider"
import { LanguageToggle } from "@/components/language-toggle"
import { messages } from "@/lib/i18n/messages"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const locale = useLocale()
  const prefix = useLocalePrefix()
  const t = messages[locale].nav

  const pathname = usePathname()
  const homePath = prefix ? prefix : "/"
  const contactPath = prefix ? `${prefix}/contact` : "/contact"
  const isContactPage = pathname?.endsWith("/contact") ?? false
  const isHomePage = pathname === "/" || pathname === "/nl" || pathname === "/en"
  const maakAfspraakHref = isHomePage || isContactPage ? "#footer" : `${contactPath}#footer`
  const navLinks = [
    { label: t.overOns, href: `${homePath}#over-ons` },
    { label: t.barbier, href: `${homePath}#team` },
    { label: t.harsen, href: prefix ? `${prefix}/a-waxing` : "/a-waxing" },
    { label: t.prijzen, href: `${homePath}#services` },
    { label: t.contact, href: prefix ? `${prefix}/contact` : "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid min-w-0 max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-1.5 px-2.5 py-2 sm:gap-3 sm:px-6 sm:py-4 md:flex md:justify-between lg:px-10">
        <a href={homePath} className="flex min-w-0 shrink items-center gap-2 md:block">
          <Image
            src="/images/logo.png"
            alt="Sherwany Barbershop & Studio logo"
            width={200}
            height={200}
            priority
            quality={100}
            sizes="(max-width: 768px) 96px, 200px"
            className="h-8 w-auto max-w-[80px] shrink-0 brightness-0 invert sm:h-10 sm:max-w-[100px] md:h-12 md:max-w-none"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium uppercase tracking-[0.15em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={maakAfspraakHref}
            className="flex items-center gap-2 border border-foreground px-7 py-2.5 text-[13px] font-medium uppercase tracking-[0.15em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            <CalendarEvent className="h-4 w-4" />
            {t.maakAfspraak}
          </a>
          <LanguageToggle />
        </div>

        {/* Mobile: CTA centered, lang + menu right */}
        <a
          href={maakAfspraakHref}
          className="flex shrink-0 justify-self-center items-center gap-1 border border-foreground px-2 py-1 text-[8px] font-medium uppercase tracking-[0.08em] text-foreground transition-colors hover:bg-foreground hover:text-background sm:px-2.5 sm:py-1.5 sm:text-[9px] md:hidden"
        >
          <CalendarEvent className="h-2.5 w-2.5 shrink-0 sm:h-3 sm:w-3" />
          <span className="whitespace-nowrap">{t.maakAfspraak}</span>
        </a>
        <div className="flex min-w-0 shrink-0 items-center justify-end gap-1.5 sm:gap-2 md:hidden">
          <LanguageToggle className="text-[9px] sm:text-[11px]" />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground"
            aria-label={isOpen ? t.menuClose : t.menuOpen}
          >
            {isOpen ? <XLg className="h-4 w-4 sm:h-5 sm:w-5" /> : <List className="h-4 w-4 sm:h-5 sm:w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col px-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-border py-4 text-sm uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            ))}
            <a
              href={maakAfspraakHref}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 border border-foreground px-6 py-3 text-center text-[13px] font-medium uppercase tracking-[0.15em] text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              <CalendarEvent className="h-4 w-4" />
              {t.maakAfspraak}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
