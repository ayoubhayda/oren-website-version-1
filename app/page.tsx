import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { WhyOrenSection } from "@/components/sections/why-oren-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ProcessSection } from "@/components/sections/process-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { BlogSection } from "@/components/sections/blog-section"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyOrenSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ProcessSection />
        <PricingSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
