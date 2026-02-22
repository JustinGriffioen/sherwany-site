import Image from "next/image"

export function Team() {
  return (
    <section id="team" className="border-t border-border bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          De barbier
        </p>

        <div className="mt-14 grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Barber image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/about-barbershop.jpg"
              alt="Sherwany aan het werk - professioneel knippen en scheren - Sherwany Studio Deventer"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
              className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
            />
          </div>

          {/* Text content */}
          <div>
            <h2 className="font-serif text-4xl font-normal leading-[1.15] text-foreground md:text-5xl text-balance">
              Ontmoet
              <br />
              Sherwany
            </h2>
            <p className="mt-8 text-[15px] leading-[1.8] text-muted-foreground">
              Met jarenlange ervaring en een passie voor vakmanschap zorgt Sherwany
              voor een perfecte coupe of scheerbeurt. Elk bezoek is een moment van
              ontspanning waar stijl en precisie samenkomen. Van klassieke looks tot
              moderne trends – je bent in goede handen.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="https://www.instagram.com/sherwanybarbershop/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-foreground px-6 py-3 text-[13px] font-medium uppercase tracking-[0.15em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
              >
                Volg op Instagram
              </a>
              <a
                href="#our-menu"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 text-[13px] font-medium uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
              >
                Bekijk diensten
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
