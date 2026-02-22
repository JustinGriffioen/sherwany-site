/**
 * Central site configuration for SEO and business info.
 * Update NEXT_PUBLIC_SITE_URL in .env.local for production.
 */
export const siteConfig = {
  name: "Sherwany Studio",
  tagline: "Waar traditie en innovatie samenkomen voor de perfecte uitstraling",
  description:
    "Premium barbershop en herenkapper in het hart van Deventer. Ervaring, vakmanschap en persoonlijke aandacht voor elke klant.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sherwanystudio.nl",
  locale: "nl_NL",
  localeAlternate: "en_GB",
  ogImage: "/images/hero-barbershop.jpg",
  twitterHandle: "@sherwanybarbershop",

  business: {
    type: "BarberShop" as const,
    address: {
      street: "Grote Overstraat 56",
      city: "Deventer",
      postalCode: "7411 JD",
      country: "NL",
      full: "Grote Overstraat 56, 7411 JD Deventer, Nederland",
    },
    geo: {
      latitude: 52.2555,
      longitude: 6.1636,
    },
    phone: "+31630120257",
    email: "sherwany_@outlook.com",
    openingHours: [
      { dayOfWeek: ["Tuesday", "Wednesday", "Thursday"], hours: "9:00-18:00" },
      { dayOfWeek: ["Friday"], hours: "9:00-20:00" },
      { dayOfWeek: ["Saturday"], hours: "9:00-18:00" },
      { dayOfWeek: ["Sunday"], hours: "11:00-17:00" },
    ],
    social: {
      instagram: "https://www.instagram.com/sherwanybarbershop/",
      facebook: "https://facebook.com/sherwanystudio",
      whatsapp: "https://wa.me/31630120257",
    },
    bookingUrl: "https://cal.com/sherwanystudio/sherwany-studio",
  },
} as const
