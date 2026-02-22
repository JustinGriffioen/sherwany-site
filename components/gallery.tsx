import Image from "next/image"

export function Gallery() {
  return (
    <section className="border-t border-border bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Vind ons
          </p>
          <h2 className="mt-6 font-serif text-4xl font-normal leading-[1.15] text-foreground md:text-5xl lg:text-6xl">
            Wij zijn de beste
            <br />
            in wat we doen.
          </h2>
          <p className="mt-5 text-[15px] text-muted-foreground">
            Kom het zelf zien!
          </p>
        </div>

        {/* Gallery grid */}
        <div className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/gallery-1.jpg"
              alt="Barbier knipt haar met een schaar"
              fill
              className="object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/gallery-2.jpg"
              alt="Traditionele barbier gereedschap op marmeren oppervlak"
              fill
              className="object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/gallery-3.jpg"
              alt="Warme handdoek behandeling in de barbershop"
              fill
              className="object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
