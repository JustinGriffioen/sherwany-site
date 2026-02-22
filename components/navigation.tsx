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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-10">
        <a href={homePath} className="flex shrink-0 items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Sherwany Barbershop & Studio logo"
            width={200}
            height={200}
            priority
            quality={100}
            sizes="(max-width: 768px) 120px, 200px"
            className="h-12 w-auto brightness-0 invert"
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

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground md:hidden"
          aria-label={isOpen ? t.menuClose : t.menuOpen}
        >
          {isOpen ? <XLg className="h-6 w-6" /> : <List className="h-6 w-6" />}
        </button>
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
            <div className="flex items-center justify-between border-b border-border py-4 mt-6">
              <span className="text-sm uppercase tracking-[0.15em] text-muted-foreground">
                {t.taal}
              </span>
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
