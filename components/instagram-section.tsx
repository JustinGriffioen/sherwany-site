import Image from "next/image"
import { Instagram } from "react-bootstrap-icons"
import { siteConfig } from "@/lib/site-config"
import type { Locale } from "@/lib/i18n"
import { messages } from "@/lib/i18n/messages"

const instagramPreviewImages = [
  "/images/gallery-1.jpg",
  "/images/gallery/img-7567.png",
  "/images/gallery/img-7574.png",
]

export function InstagramSection({ locale = "nl" }: { locale?: Locale }) {
  const t = messages[locale].instagram

  return (
    <section id="instagram" className="border-t border-border bg-card py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          {t.overline}
        </p>
        <h2 className="mt-4 font-serif text-3xl font-normal leading-[1.15] text-foreground sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl text-balance">
          {t.title}
        </h2>
        <p className="mt-4 text-[15px] text-muted-foreground">
          {t.description}
        </p>

        <div className="mt-10 flex flex-col items-center gap-8 sm:mt-16 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-12">
          <a
            href={siteConfig.business.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 border border-border bg-background px-8 py-4 transition-colors hover:border-foreground/30 hover:bg-muted/30"
          >
            <Instagram className="h-6 w-6 text-foreground" />
            <span className="text-sm font-semibold">{t.title}</span>
          </a>
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {instagramPreviewImages.map((src) => (
              <a
                key={src}
                href={siteConfig.business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square w-24 overflow-hidden border border-border opacity-90 transition-opacity hover:opacity-100 sm:w-32"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
