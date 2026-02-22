import { waxingServices } from "@/lib/waxing-services"

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
          {waxingServices.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.name}
                className="flex gap-6 border border-border p-6 transition-colors hover:border-foreground/30"
              >
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/30">
                  <Icon className="h-8 w-8 text-foreground" />
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
