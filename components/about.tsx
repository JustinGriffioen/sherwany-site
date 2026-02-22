import Image from "next/image"

export function About() {
  return (
    <section id="over-ons" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Over ons
        </p>

        <div className="mt-14 grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/about-barbershop.jpg"
              alt="Barbier aan het werk met een scheermes"
              fill
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
              Bij Sherwany Studio bieden we hoogwaardige knip- en
              scheerdiensten voor mannen, met oog voor stijl en detail. Ons
              team van ervaren kappers zorgt voor een ontspannen sfeer en
              persoonlijke aandacht, zodat je er altijd op je best uitziet.
              Van klassiek tot modern, wij combineren vakmanschap met de
              nieuwste technieken voor het perfecte resultaat.
            </p>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 gap-10">
              <div className="border-t border-border pt-7">
                <p className="font-serif text-5xl font-normal text-foreground md:text-6xl">
                  874+
                </p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  subscribers on youtube
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
                  Followers on instagram
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
