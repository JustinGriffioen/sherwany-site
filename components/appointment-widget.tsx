"use client"

import { Calendar } from "lucide-react"

export function AppointmentWidget() {
  return (
    <a
      href="#footer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 border border-foreground bg-background px-5 py-3 text-[13px] font-medium uppercase tracking-[0.15em] text-foreground shadow-lg transition-all duration-300 hover:bg-foreground hover:text-background md:bottom-8 md:right-8 md:px-6 md:py-4"
      aria-label="Scroll naar afspraak maken"
    >
      <Calendar className="h-4 w-4 shrink-0" />
      Maak een afspraak
    </a>
  )
}
