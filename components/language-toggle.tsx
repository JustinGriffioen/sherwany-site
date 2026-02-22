"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function LanguageToggle({ className }: { className?: string }) {
  const pathname = usePathname()

  const isEn = pathname.startsWith("/en")
  const basePath = isEn ? pathname.replace(/^\/en/, "") || "/" : pathname

  return (
    <div className={`flex items-center gap-0 font-medium uppercase tracking-wider text-muted-foreground ${className ?? "text-[12px] sm:text-[13px]"}`}>
      <Link
        href={basePath}
        className={`flex min-h-[44px] min-w-[44px] items-center justify-center py-2 px-2 transition-colors hover:text-foreground ${!isEn ? "text-foreground" : ""}`}
        aria-current={!isEn ? "page" : undefined}
      >
        NL
      </Link>
      <span className="text-muted-foreground/50 px-0.5">|</span>
      <Link
        href={basePath === "/" ? "/en" : `/en${basePath}`}
        className={`flex min-h-[44px] min-w-[44px] items-center justify-center py-2 px-2 transition-colors hover:text-foreground ${isEn ? "text-foreground" : ""}`}
        aria-current={isEn ? "page" : undefined}
      >
        EN
      </Link>
    </div>
  )
}
