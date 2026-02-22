import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { siteConfig } from "@/lib/site-config"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

const siteUrl = siteConfig.url
const ogImageUrl = `${siteUrl}${siteConfig.ogImage}`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} Deventer | Premium Barbershop`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "barbershop",
    "herenkapper",
    "Deventer",
    "knippen",
    "baard",
    "trimmen",
    "premium kapper",
    "Sherwany Studio",
  ],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    alternateLocale: siteConfig.localeAlternate,
    url: siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} Deventer | Premium Barbershop`,
    description: siteConfig.description,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Premium barbershop interieur`,
      },
      { url: `${siteUrl}/images/logo.png`, width: 512, height: 512, alt: siteConfig.name },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} Deventer | Premium Barbershop`,
    description: siteConfig.description,
    images: [ogImageUrl],
    creator: siteConfig.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: siteUrl,
  },
  category: "business",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
}

function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    "@id": `${siteUrl}/#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteUrl,
    image: `${siteUrl}/images/logo.png`,
    logo: `${siteUrl}/images/logo.png`,
    telephone: siteConfig.business.phone,
    email: siteConfig.business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.business.address.street,
      addressLocality: siteConfig.business.address.city,
      postalCode: siteConfig.business.address.postalCode,
      addressCountry: siteConfig.business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.business.geo.latitude,
      longitude: siteConfig.business.geo.longitude,
    },
    openingHoursSpecification: siteConfig.business.openingHours.flatMap(
      (oh) =>
        oh.dayOfWeek.map((day) => ({
          "@type": "OpeningHoursSpecification" as const,
          dayOfWeek: day,
          opens: oh.hours.split("-")[0],
          closes: oh.hours.split("-")[1],
        }))
    ),
    sameAs: [
      siteConfig.business.social.instagram,
      siteConfig.business.social.facebook,
    ],
    potentialAction: {
      "@type": "ReserveAction",
      target: siteConfig.business.bookingUrl,
      result: {
        "@type": "Reservation",
        name: "Afspraak maken",
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <LocalBusinessJsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
