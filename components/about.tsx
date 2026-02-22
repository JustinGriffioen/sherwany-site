import Image from "next/image"

export function About() {
  return (
    <section id="over-ons" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Over ons
        </p>

        <div className="mt-14 grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Shop interior image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/hero-barbershop.jpg"
              alt="Sherwany Studio barbershop in Deventer - interieur"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
              className="object-cover grayscale"
            />
          </div>

          {/* Text content */}
          <div className="lg:py-8">
            <h2 className="font-serif text-4xl font-normal leading-[1.15] text-foreground md:text-5xl text-balance">
              Sherwany Studio
              <br />
              Deventer
            </h2>
            <p className="mt-8 text-[15px] leading-[1.8] text-muted-foreground">
              Gelegen in het hart van Deventer is Sherwany Studio een plek waar
              traditie en moderne stijl samenkomen. Onze barbershop biedt een
              ontspannen sfeer waar je even tot jezelf kunt komen. Van de inrichting
              tot de behandeling – alles is afgestemd op jouw comfort en de perfecte
              uitstraling.
            </p>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 gap-10">
              <div className="border-t border-border pt-7">
                <p className="font-serif text-5xl font-normal text-foreground md:text-6xl">
                  874+
                </p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  abonnees op YouTube
                </p>
                <p className="text-[13px] font-medium text-foreground">
                  Tevreden klanten
                </p>
              </div>
              <div className="border-t border-border pt-7">
                <p className="font-serif text-5xl font-normal text-foreground md:text-6xl">
                  7.5K+
                </p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  volgers op Instagram
                </p>
                <a
                  href="https://www.instagram.com/sherwanybarbershop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-medium text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
                >
                  Volg ons
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
