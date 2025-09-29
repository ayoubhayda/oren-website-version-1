import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutMission } from "@/components/about/about-mission"
import { AboutTeam } from "@/components/about/about-team"
import { AboutValues } from "@/components/about/about-values"
import { AboutTimeline } from "@/components/about/about-timeline"
import { AboutCTA } from "@/components/about/about-cta"

export const metadata = {
  title: "About Us - oren | Our Story & Team",
  description:
    "Learn about oren's mission, values, and the expert team behind our web development and digital marketing services.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <AboutMission />
        <AboutTeam />
        <AboutValues />
        <AboutTimeline />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  )
}
