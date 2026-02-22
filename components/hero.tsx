import Image from "next/image"
import { MapPin, Clock, Phone, Mail } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-barbershop.jpg"
          alt="Premium barbershop interieur"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Main hero content - centered */}
        <div className="flex flex-1 flex-col items-center justify-center px-6 pt-24 text-center">
          <Image
            src="/images/logo.png"
            alt="Sherwany Studio"
            width={140}
            height={140}
            className="h-28 w-auto brightness-0 invert md:h-36"
          />
          <h1 className="mt-8 font-serif text-5xl font-normal leading-[1.1] text-foreground sm:text-6xl md:text-7xl lg:text-8xl text-balance">
            Welcome bij
            <br />
            Sherwany Studio
          </h1>
          <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
            waar traditie en innovatie samenkomen voor de perfecte uitstraling.
          </p>
          <a
            href="#our-menu"
            className="mt-10 border border-foreground px-10 py-4 text-[13px] font-medium uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            Make an Appointment
          </a>
        </div>

        {/* Bottom info bar */}
        <div className="border-t border-border/40 bg-background/40 backdrop-blur-sm">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border/40 md:grid-cols-3 md:divide-x md:divide-y-0">
            {/* Location */}
            <div className="flex items-start gap-4 px-8 py-7 lg:px-10">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Vind ons
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                  Grote Overstraat 56, Deventer, 7411 JD
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 px-8 py-7 lg:px-10">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Openingstijden
                </h3>
                <div className="mt-1.5 space-y-0.5 text-[13px] leading-relaxed text-muted-foreground">
                  <p>Dinsdag t/m Donderdag 9:00 - 18:00</p>
                  <p>Vrijdag 9:00 - 20:00</p>
                  <p>Zaterdag 9:00 - 18:00</p>
                  <p>Zondag 11:00 - 17:00</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-start gap-4 px-8 py-7 lg:px-10">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Contact
                </h3>
                <div className="mt-1.5 flex flex-col gap-1">
                  <a
                    href="tel:+31630120257"
                    className="flex items-center gap-2 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span>+31 6 30120257</span>
                  </a>
                  <a
                    href="mailto:sherwany_@outlook.com"
                    className="flex items-center gap-2 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Mail className="h-3 w-3" />
                    <span>sherwany_@outlook.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
