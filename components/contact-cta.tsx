import { Instagram, Whatsapp, Tiktok, Linkedin, Facebook } from "react-bootstrap-icons"
import Image from "next/image"
import { siteConfig } from "@/lib/site-config"
import { CalEmbed } from "@/components/cal-embed"
import type { Locale } from "@/lib/i18n"
import { messages } from "@/lib/i18n/messages"

export function ContactCTA({ locale = "nl" }: { locale?: Locale }) {
  const t = messages[locale].contactCta
  return (
    <section
      id="footer"
      className="border-t border-border bg-background py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-0 sm:px-6 lg:px-10 text-center">
        <Image
          src="/images/logo.png"
          alt="Sherwany Barbershop & Studio"
          width={80}
          height={80}
          className="mx-auto h-16 w-auto brightness-0 invert"
        />
        <h2 className="mt-4 font-serif text-3xl font-normal leading-[1.15] text-foreground sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl">
          {t.title}
        </h2>
        <p className="mt-6 text-[15px] text-muted-foreground">
          {t.description}
        </p>

        {/* Social icons */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href={siteConfig.business.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center border border-border text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.business.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center border border-border text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
            aria-label="WhatsApp"
          >
            <Whatsapp className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.business.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center border border-border text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
            aria-label="TikTok"
          >
            <Tiktok className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.business.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center border border-border text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.business.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center border border-border text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
        </div>

        {/* Cal.com inline embed */}
        <div className="mt-10 w-full border-y border-border bg-card p-4 sm:mt-14 sm:border sm:p-8 lg:p-12 lg:px-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {t.maakAfspraak}
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            {t.planDesc}
          </p>
          <div className="mt-8">
            <CalEmbed />
          </div>
          <div className="mt-6 flex justify-center">
            <a
              href="tel:+31630120257"
              className="text-[13px] text-muted-foreground underline-offset-4 transition-colors hover:text-foreground"
            >
              {t.ofBel}: +31 6 30120257
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
