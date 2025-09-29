import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ServicesCTA } from "@/components/services/services-cta"

export const metadata = {
  title: "Services - oren | Web Development & Digital Marketing",
  description:
    "Comprehensive digital services including web development, platforms, e-commerce, and digital marketing solutions.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServicesHero />
        <ServicesGrid />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  )
}
