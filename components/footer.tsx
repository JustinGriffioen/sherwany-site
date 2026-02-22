import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
            <a
              href="#home"
              className="flex items-center gap-3"
            >
              <Image
                src="/images/logo.png"
                alt="Sherwany Studio logo"
                width={40}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="font-serif text-lg tracking-wide text-foreground">
                Sherwany Studio
              </span>
            </a>
            <nav className="flex items-center gap-6">
              <a
                href="/team"
                className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
              >
                Team
              </a>
            </nav>
          </div>
          <p className="text-xs text-muted-foreground">
            Developed by{" "}
            <span className="text-foreground">TrimTime Studios</span>
          </p>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <p className="text-center text-[11px] leading-relaxed text-muted-foreground">
            Alle tekstuele en visuele informatie is met zorg samengesteld.
            Ondanks deze zorg zijn alle prijzen op de Sherwany Studio-website
            onder voorbehoud en kunnen hier geen rechten aan worden ontleend.
            Voor de meest actuele prijsinformatie en/of aanbiedingen dient u
            rechtstreeks contact op te nemen met Sherwany Studio.
          </p>
        </div>
      </div>
    </footer>
  )
}
