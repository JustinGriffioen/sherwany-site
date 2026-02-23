/**
 * Central site configuration for SEO and business info.
 * Update NEXT_PUBLIC_SITE_URL in .env.local for production.
 */
export const siteConfig = {
  name: "Sherwany Barbershop & Studio",
  tagline: "Waar traditie en innovatie samenkomen voor de perfecte uitstraling",
  description:
    "Premium barbershop en herenkapper in het hart van Deventer. Ervaring, vakmanschap en persoonlijke aandacht voor elke klant.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sherwanystudio.nl",
  locale: "nl_NL",
  localeAlternate: "en_GB",
  ogImage: "/images/sherwany-outside.jpg",
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
      latitude: 52.2521794,
      longitude: 6.1593413,
    },
    mapsUrl:
      "https://maps.app.goo.gl/hQq1nsMgtsW6xSG6A",
    /** Use Maps Embed API with satellite view when NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY is set. Otherwise uses classic embed. */
    get mapsEmbedUrl() {
      const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY
      const { latitude, longitude } = this.geo
      if (key) {
        return `https://www.google.com/maps/embed/v1/view?key=${key}&center=${latitude},${longitude}&zoom=19&maptype=satellite`
      }
      return "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d305.3147141914615!2d6.1592218!3d52.2521432!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7eb3af5eba181%3A0xe1b1659a218f4e0a!2sSherwany%20barbershop%20%2F%20A-Salon!5e0!3m2!1snl!2snl!4v1771790932718!5m2!1snl!2snl&maptype=satellite"
    },
    /** Google Place ID for photos & reviews. Optional; falls back to Text Search. */
    googlePlaceId: null as string | null,
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
      whatsapp: "https://wa.me/31630120257",
      tiktok: "https://www.tiktok.com/@sherwany.barbersh",
      linkedin: "https://nl.linkedin.com/in/mohammed-sherwany-48079928b",
      facebook: "https://www.facebook.com/profile.php?id=61550035233012",
    },
  },
} as const
