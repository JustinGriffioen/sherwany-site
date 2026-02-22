import Image from "next/image"

const waxingServices = [
  {
    name: "Wenkbrauwen waxen",
    description: "Strakke, goed gevormde wenkbrauwen voor een verzorgde blik.",
    image: "/images/icons/wax-face.png",
  },
  {
    name: "Neus & oren waxen",
    description: "Verwijder ongewenst haar uit neus en oren, hygiënisch en snel.",
    image: "/images/icons/wax-face.png",
  },
  {
    name: "Gezicht waxen",
    description: "Een volledige gezichtsbehandeling voor een gladde, frisse huid.",
    image: "/images/icons/wax-face.png",
  },
  {
    name: "Oksels waxen",
    description: "Langdurig gladde oksels met professionele wax.",
    image: "/images/icons/wax-armpit.png",
  },
  {
    name: "Handen waxen",
    description: "Verwijder arm- en handhaar voor een verzorgde uitstraling.",
    image: "/images/icons/wax-hand.png",
  },
  {
    name: "Nek waxen",
    description: "Een strakke haarlijn in de nek voor een scherpe look.",
    image: "/images/icons/wax-neck.png",
  },
]

export function Waxing() {
  return (
    <section id="harsen" className="border-t border-border bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Harsen
        </p>
        <h2 className="mt-6 font-serif text-4xl font-normal leading-[1.15] text-foreground md:text-5xl lg:text-6xl text-balance">
          Waxing &
          <br />
          Harsbehandelingen
        </h2>
        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
          Professionele waxing voor heren en vrouwen. Van wenkbrauwen en gezicht
          tot lichaam – alle behandelingen zorgvuldig en hygiënisch uitgevoerd.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {waxingServices.map((service) => (
            <div
              key={service.name}
              className="flex gap-6 border border-border p-6 transition-colors hover:border-foreground/30"
            >
              <div className="relative h-20 w-20 shrink-0 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.name} - Sherwany Studio`}
                  width={80}
                  height={80}
                  loading="lazy"
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {service.name}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
