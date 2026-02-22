import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Team } from "@/components/team"
import { Waxing } from "@/components/waxing"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { Gallery } from "@/components/gallery"
import { ContactCTA } from "@/components/contact-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main id="main-content" role="main">
      <Navigation />
      <Hero />
      <About />
      <Team />
      <Waxing />
      <Services />
      <Testimonials />
      <Gallery />
      <ContactCTA />
      <Footer />
    </main>
  )
}
