import { Instagram, Facebook, MessageCircle } from "lucide-react"
import Image from "next/image"

export function ContactCTA() {
  return (
    <section
      id="footer"
      className="border-t border-border bg-background py-24 lg:py-32"
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
        <Image
          src="/images/logo.png"
          alt="Sherwany Studio"
          width={80}
          height={80}
          className="mx-auto h-16 w-auto brightness-0 invert"
        />
        <h2 className="mt-6 font-serif text-4xl font-normal leading-[1.15] text-foreground md:text-5xl lg:text-6xl">
          Maak Afspraak
        </h2>
        <p className="mt-6 text-[15px] text-muted-foreground">
          Laat je schoonheid stralen
        </p>

        {/* Social icons */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center border border-border text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/sherwanybarbershop/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center border border-border text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://wa.me/31630120257"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center border border-border text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>

        {/* Cal.com embed placeholder */}
        <div className="mt-14 border border-border bg-card p-8 lg:p-12">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Online boeken
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Plan je afspraak via ons online boekingssysteem of neem direct
            contact met ons op.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://cal.com/sherwanystudio/sherwany-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border border-foreground bg-foreground px-10 py-4 text-[13px] font-medium uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-transparent hover:text-foreground sm:w-auto"
            >
              Boek Online
            </a>
            <a
              href="tel:+31630120257"
              className="w-full border border-foreground px-10 py-4 text-[13px] font-medium uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-background sm:w-auto"
            >
              Bel Ons
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
