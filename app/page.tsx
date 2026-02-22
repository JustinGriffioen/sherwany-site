import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { Gallery } from "@/components/gallery"
import { ContactCTA } from "@/components/contact-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Gallery />
      <ContactCTA />
      <Footer />
    </main>
  )
}
