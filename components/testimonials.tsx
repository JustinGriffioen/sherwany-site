import { Star } from "lucide-react"

export function Testimonials() {
  return (
    <section id="reviews" className="border-t border-border bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Over ons
        </p>

        <h2 className="mt-6 font-serif text-4xl font-normal leading-[1.15] text-foreground md:text-5xl lg:text-6xl text-balance">
          Wat onze klanten
          <br />
          van ons denken
        </h2>

        {/* Testimonial card */}
        <div className="mt-16 border border-border bg-card p-8 md:p-12 lg:p-16">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-foreground text-foreground"
              />
            ))}
          </div>
          <blockquote className="mt-8 max-w-3xl font-serif text-lg font-normal italic leading-[1.7] text-foreground md:text-xl lg:text-2xl">
            {'"'}Ik ben meer dan tevreden met de service hier. De kapper was zeer
            vakkundig en besteedde aandacht aan de details die ik had gevraagd.
            De knipbeurt was precies zoals ik in gedachten had, de ervaring
            voelde professioneel aan zonder dat het gehaast leek. Het resultaat
            was netjes en goed. Zeker de moeite waard voor de kwaliteit van de
            service.{'"'}
          </blockquote>
          <div className="mt-10 border-t border-border pt-8">
            <p className="text-sm font-semibold text-foreground">
              Badr Belarbi
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Deventer, Nederland
            </p>
          </div>
        </div>

        {/* Feature highlights - 3 columns */}
        <div className="mt-12 grid grid-cols-1 gap-0 border border-border md:grid-cols-3">
          {[
            { title: "Uitstekende prijzen", number: "01" },
            { title: "Gezellige sfeer", number: "02" },
            { title: "Beste service kwaliteit", number: "03" },
          ].map((feature, i) => (
            <div
              key={feature.title}
              className={`flex flex-col justify-between bg-card p-8 lg:p-10 ${
                i < 2 ? "border-b border-border md:border-b-0 md:border-r" : ""
              }`}
            >
              <span className="text-xs text-muted-foreground">
                {feature.number}
              </span>
              <p className="mt-10 text-base font-semibold text-foreground">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
