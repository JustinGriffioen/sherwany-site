import type React from "react"
import {
  EmojiSmile,
  Ear,
  Person,
  Droplet,
  HandIndex,
  Scissors,
} from "react-bootstrap-icons"

export const waxingServices: {
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}[] = [
  {
    name: "Wenkbrauwen waxen",
    description: "Strakke, goed gevormde wenkbrauwen voor een verzorgde blik.",
    icon: EmojiSmile,
  },
  {
    name: "Neus & oren waxen",
    description: "Verwijder ongewenst haar uit neus en oren, hygiënisch en snel.",
    icon: Ear,
  },
  {
    name: "Gezicht waxen",
    description: "Een volledige gezichtsbehandeling voor een gladde, frisse huid.",
    icon: Person,
  },
  {
    name: "Oksels waxen",
    description: "Langdurig gladde oksels met professionele wax.",
    icon: Droplet,
  },
  {
    name: "Handen waxen",
    description: "Verwijder arm- en handhaar voor een verzorgde uitstraling.",
    icon: HandIndex,
  },
  {
    name: "Nek waxen",
    description: "Een strakke haarlijn in de nek voor een scherpe look.",
    icon: Scissors,
  },
]
