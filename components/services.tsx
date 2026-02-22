const diensten = [
  {
    name: "Model knippen",
    description:
      "Professionele herenkapsels die passen bij jouw stijl en persoonlijkheid, met zorg en aandacht voor detail.",
    price: "25",
  },
  {
    name: "Heren VIP (+2mL olie parfum van de zaak)",
    description:
      "Een luxe behandeling inclusief knippen, baard trimmen, gezichtsverzorging en waxen van wenkbrauwen en neus.",
    price: "40",
  },
  {
    name: "Model knippen & baard + wenkbrauwen & oor haren",
    description:
      "Stijlvol knippen gecombineerd met een nauwkeurige scheerbeurt voor een frisse, verzorgde look.",
    price: "32.5",
  },
  {
    name: "Heren Permanenten",
    description:
      "Geef je haar meer textuur en volume met een permanent, speciaal ontworpen voor heren.",
    price: "70",
  },
  {
    name: "Permanent + Knippen",
    description:
      "Krijg een complete look met een permanent en een frisse coupe - meer volume, textuur en direct perfect in model.",
    price: "95",
  },
  {
    name: "Contouren & baard Model scheren",
    description:
      "Strakke lijnen en perfect gevormde baard. We verzorgen je contouren en brengen je baard in model voor een verzorgde, frisse look.",
    price: "15",
  },
  {
    name: "Model Knippen vrouwen",
    description:
      "Een verzorgde coupe die past bij jouw gezichtsvorm en haartype, met aandacht voor detail en natuurlijk resultaat.",
    price: "25",
  },
  {
    name: "Wassen, knippen en drogen vrouwen",
    description:
      "Geniet van een complete behandeling waarbij je haar wordt gewassen, in model geknipt en mooi gedroogd voor een frisse en verzorgde uitstraling.",
    price: "30",
  },
  {
    name: "Wassen, knippen, Model f\u00F6hnen vrouwen",
    description:
      "Volledige verzorging van je haar: wassen, precies knippen en professioneel f\u00F6hnen voor een mooi vallend en verzorgd resultaat.",
    price: "35",
  },
  {
    name: "Verven v.a.",
    description:
      "Geef je haar een nieuwe kleur of fris je huidige tint op met professionele haarkleuring, afgestemd op jouw wensen.",
    price: "30",
  },
  {
    name: "Highlights v.a.",
    description:
      "Breng diepte en dimensie in je haar met subtiele of opvallende highlights, zorgvuldig aangebracht voor een natuurlijk resultaat.",
    price: "35",
  },
  {
    name: "Haren krullen",
    description:
      "Cre\u00EBer mooie, veerkrachtige krullen die volume en vorm geven aan je haar, perfect afgestemd op jouw stijl.",
    price: "22.5",
  },
  {
    name: "Haren stylen",
    description:
      "Laat je haar stralen met professioneel stylen voor een verzorgd en passend resultaat, klaar voor elke gelegenheid.",
    price: "19.5",
  },
]

function ServiceItem({
  name,
  description,
  price,
}: {
  name: string
  description: string
  price: string
}) {
  return (
    <div className="group border-b border-border/60 py-7 last:border-b-0">
      <div className="flex items-baseline justify-between gap-6">
        <h3 className="text-base font-semibold text-foreground md:text-lg">
          {name}
        </h3>
        <div className="flex shrink-0 items-baseline gap-1">
          <span className="font-serif text-2xl font-normal text-foreground md:text-3xl">
            {"\u20AC"}{price}
          </span>
        </div>
      </div>
      <p className="mt-2 max-w-2xl text-[13px] leading-[1.7] text-muted-foreground">
        {description}
      </p>
    </div>
  )
}

export function Services() {
  return (
    <section id="our-menu" className="border-t border-border bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        {/* Section header */}
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Aanbevolen diensten
        </p>
        <h2 className="mt-6 font-serif text-4xl font-normal leading-[1.15] text-foreground md:text-5xl lg:text-6xl text-balance">
          Dit is waar wij
          <br />
          de beste in zijn
        </h2>

        {/* Services list */}
        <div className="mt-16">
          {diensten.map((dienst) => (
            <ServiceItem key={dienst.name} {...dienst} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <a
            href="#footer"
            className="border border-foreground px-12 py-4 text-[13px] font-medium uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            Maak een Afspraak
          </a>
        </div>
      </div>
    </section>
  )
}
