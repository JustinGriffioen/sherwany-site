import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { siteConfig } from "@/lib/site-config"
import { AppointmentWidget } from "@/components/appointment-widget"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const siteUrl = siteConfig.url
const ogImageUrl = `${siteUrl}${siteConfig.ogImage}`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} Deventer | Premium Barbier`,
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
    title: `${siteConfig.name} Deventer | Premium Barbier`,
    description: siteConfig.description,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Premium barbier interieur`,
      },
      { url: `${siteUrl}/images/logo.png`, width: 512, height: 512, alt: siteConfig.name },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} Deventer | Premium Barbier`,
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
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-light-32x32.png", sizes: "32x32", media: "(prefers-color-scheme: light)", type: "image/png" },
      { url: "/icon-dark-32x32.png", sizes: "32x32", media: "(prefers-color-scheme: dark)", type: "image/png" },
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

function JsonLdSchemas() {
  const localBusiness = {
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
        name: "Afspraak maken bij Sherwany Studio",
      },
    },
  }

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${siteConfig.name} Deventer | Premium Barbier`,
    description: siteConfig.description,
    url: siteUrl,
    mainEntity: { "@id": `${siteUrl}/#organization` },
    isPartOf: { "@id": `${siteUrl}/#organization` },
    breadcrumb: { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }] },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
    </>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://cal.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="absolute left-4 top-4 z-[100] -translate-y-full rounded bg-foreground px-4 py-2 text-background transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Naar inhoud
        </a>
        <JsonLdSchemas />
        {children}
        <AppointmentWidget />
        <Analytics />
      </body>
    </html>
  )
}
