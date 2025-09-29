"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink } from "lucide-react"

const projects = [
  {
    id: "techstart",
    title: "TechStart Platform",
    description: "A comprehensive SaaS platform for startup management and investor relations with advanced analytics.",
    image: "/modern-startup-dashboard-interface.jpg",
    category: "Platform",
    industry: "SaaS",
    tags: ["Next.js", "TypeScript", "Supabase", "Stripe"],
    impact: "300% increase in user engagement",
    metrics: {
      users: "10K+",
      conversion: "+150%",
      performance: "98% uptime",
    },
    href: "/portfolio/techstart",
  },
  {
    id: "ecoshop",
    title: "EcoShop E-commerce",
    description:
      "Sustainable products marketplace with advanced filtering, recommendation engine, and carbon footprint tracking.",
    image: "/green-ecommerce-website-design.jpg",
    category: "E-commerce",
    industry: "Retail",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    impact: "150% boost in conversion rate",
    metrics: {
      sales: "+200%",
      conversion: "+150%",
      retention: "85%",
    },
    href: "/portfolio/ecoshop",
  },
  {
    id: "healthcare",
    title: "HealthCare Connect",
    description:
      "Patient management system connecting healthcare providers and patients with telemedicine capabilities.",
    image: "/healthcare-app-interface.png",
    category: "Platform",
    industry: "Healthcare",
    tags: ["Vue.js", "Python", "PostgreSQL", "WebRTC"],
    impact: "40% reduction in appointment no-shows",
    metrics: {
      appointments: "50K+",
      satisfaction: "95%",
      efficiency: "+40%",
    },
    href: "/portfolio/healthcare",
  },
  {
    id: "financeflow",
    title: "FinanceFlow Dashboard",
    description: "Real-time financial analytics dashboard for small business owners with automated reporting.",
    image: "/financial-dashboard-analytics-interface.jpg",
    category: "Platform",
    industry: "Finance",
    tags: ["React", "D3.js", "Express", "Redis"],
    impact: "60% faster financial reporting",
    metrics: {
      reports: "1M+",
      speed: "+60%",
      accuracy: "99.9%",
    },
    href: "/portfolio/financeflow",
  },
  {
    id: "edulearn",
    title: "EduLearn Platform",
    description:
      "Interactive online learning platform with video streaming, progress tracking, and AI-powered recommendations.",
    image: "/online-learning-platform.png",
    category: "Platform",
    industry: "Education",
    tags: ["Next.js", "WebRTC", "MongoDB", "AI"],
    impact: "85% course completion rate",
    metrics: {
      students: "25K+",
      completion: "85%",
      satisfaction: "4.8/5",
    },
    href: "/portfolio/edulearn",
  },
  {
    id: "restaurantpro",
    title: "RestaurantPro",
    description:
      "Complete restaurant management system with POS integration, inventory management, and customer analytics.",
    image: "/restaurant-management-system-interface.png",
    category: "Platform",
    industry: "Restaurant",
    tags: ["React Native", "Firebase", "Stripe", "Analytics"],
    impact: "25% increase in order efficiency",
    metrics: {
      orders: "100K+",
      efficiency: "+25%",
      revenue: "+30%",
    },
    href: "/portfolio/restaurantpro",
  },
]

const categories = ["All", "Platform", "E-commerce", "Website"]
const industries = ["All", "SaaS", "Healthcare", "Finance", "Education", "Retail", "Restaurant"]

export function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedIndustry, setSelectedIndustry] = useState("All")

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = selectedCategory === "All" || project.category === selectedCategory
    const industryMatch = selectedIndustry === "All" || project.industry === selectedIndustry
    return categoryMatch && industryMatch
  })

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="mb-16">
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Filter by Category</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Filter by Industry</h3>
            <div className="flex flex-wrap gap-3">
              {industries.map((industry) => (
                <Button
                  key={industry}
                  variant={selectedIndustry === industry ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedIndustry(industry)}
                  className="rounded-full"
                >
                  {industry}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
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
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 text-pretty">{project.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="font-semibold text-primary">{value}</div>
                      <div className="text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">{project.impact}</span>
                  <Button asChild variant="ghost" size="sm" className="group/btn p-0 h-auto">
                    <Link href={project.href}>
                      Case Study
                      <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found matching your filters.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedCategory("All")
                setSelectedIndustry("All")
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
