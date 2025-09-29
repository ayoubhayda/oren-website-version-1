import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PortfolioHero } from "@/components/portfolio/portfolio-hero"
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid"
import { PortfolioCTA } from "@/components/portfolio/portfolio-cta"

export const metadata = {
  title: "Portfolio - oren | Our Work & Case Studies",
  description: "Explore our portfolio of successful web development, platform, and digital marketing projects.",
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PortfolioHero />
        <PortfolioGrid />
        <PortfolioCTA />
      </main>
      <Footer />
    </div>
  )
}
