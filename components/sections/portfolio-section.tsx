"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "TechStart Platform",
    description: "A comprehensive SaaS platform for startup management and investor relations.",
    image: "/modern-startup-dashboard-interface.jpg",
    tags: ["Next.js", "TypeScript", "Supabase"],
    impact: "300% increase in user engagement",
    href: "/portfolio/techstart",
  },
  {
    title: "EcoShop E-commerce",
    description: "Sustainable products marketplace with advanced filtering and recommendation engine.",
    image: "/green-ecommerce-website-design.jpg",
    tags: ["React", "Node.js", "Stripe"],
    impact: "150% boost in conversion rate",
    href: "/portfolio/ecoshop",
  },
  {
    title: "HealthCare Connect",
    description: "Patient management system connecting healthcare providers and patients.",
    image: "/healthcare-app-interface.png",
    tags: ["Vue.js", "Python", "PostgreSQL"],
    impact: "40% reduction in appointment no-shows",
    href: "/portfolio/healthcare",
  },
  {
    title: "FinanceFlow Dashboard",
    description: "Real-time financial analytics dashboard for small business owners.",
    image: "/financial-dashboard-analytics-interface.jpg",
    tags: ["React", "D3.js", "Express"],
    impact: "60% faster financial reporting",
    href: "/portfolio/financeflow",
  },
  {
    title: "EduLearn Platform",
    description: "Interactive online learning platform with video streaming and progress tracking.",
    image: "/online-learning-platform.png",
    tags: ["Next.js", "WebRTC", "MongoDB"],
    impact: "85% course completion rate",
    href: "/portfolio/edulearn",
  },
  {
    title: "RestaurantPro",
    description: "Complete restaurant management system with POS integration and analytics.",
    image: "/restaurant-management-system-interface.png",
    tags: ["React Native", "Firebase", "Stripe"],
    impact: "25% increase in order efficiency",
    href: "/portfolio/restaurantpro",
  },
]

export function PortfolioSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Discover how we've helped businesses transform their digital presence and achieve remarkable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <Card key={project.title} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  asChild
                >
                  <Link href={project.href}>
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 text-pretty">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">{project.impact}</span>
                  <Button asChild variant="ghost" size="sm" className="group/btn p-0 h-auto">
                    <Link href={project.href}>
                      View Case Study
                      <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
