"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function LanguageToggle({ className }: { className?: string }) {
  const pathname = usePathname()

  const isEn = pathname.startsWith("/en")
  const basePath = isEn ? pathname.replace(/^\/en/, "") || "/" : pathname

  return (
    <div className={`flex items-center gap-1 font-medium uppercase tracking-wider text-muted-foreground ${className ?? "text-[12px] sm:text-[13px]"}`}>
      <Link
        href={basePath}
        className={`transition-colors hover:text-foreground ${!isEn ? "text-foreground" : ""}`}
        aria-current={!isEn ? "page" : undefined}
      >
        NL
      </Link>
      <span className="text-muted-foreground/50">|</span>
      <Link
        href={basePath === "/" ? "/en" : `/en${basePath}`}
        className={`transition-colors hover:text-foreground ${isEn ? "text-foreground" : ""}`}
        aria-current={isEn ? "page" : undefined}
      >
        EN
      </Link>
    </div>
  )
}
