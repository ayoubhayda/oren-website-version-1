"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, ShoppingCart, TrendingUp, Share2, ArrowRight } from "lucide-react"

const services = [
  {
    slug: "web-development",
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Custom CMS", "Analytics Integration"],
    audience: ["Startups", "SMB", "Enterprise"],
    pricing: "From $5,000",
    timeline: "4-8 weeks",
  },
  {
    slug: "platforms",
    icon: Smartphone,
    title: "Platforms & Apps",
    description: "Scalable web platforms and applications tailored to your specific business requirements.",
    features: [
      "Custom Development",
      "Cloud Integration",
      "User Management",
      "API Development",
      "Third-party Integrations",
    ],
    audience: ["SaaS", "Enterprise", "Tech Companies"],
    pricing: "From $15,000",
    timeline: "8-16 weeks",
  },
  {
    slug: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete e-commerce platforms that drive sales and enhance customer experience.",
    features: [
      "Payment Integration",
      "Inventory Management",
      "Order Processing",
      "Customer Portal",
      "Analytics Dashboard",
    ],
    audience: ["Retailers", "B2B", "Marketplaces"],
    pricing: "From $8,000",
    timeline: "6-12 weeks",
  },
  {
    slug: "digital-marketing",
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to grow your online presence and reach your target audience.",
    features: ["SEO & SEM", "Content Strategy", "Performance Tracking", "Social Media", "Email Marketing"],
    audience: ["All Businesses", "Startups", "SMB"],
    pricing: "From $2,000/month",
    timeline: "Ongoing",
  },
  {
    slug: "social-media",
    icon: Share2,
    title: "Social Media Management",
    description: "Comprehensive social media management to build your brand and engage with your audience.",
    features: ["Content Creation", "Community Management", "Brand Building", "Influencer Outreach", "Analytics"],
    audience: ["B2C", "Personal Brands", "SMB"],
    pricing: "From $1,500/month",
    timeline: "Ongoing",
  },
]

const categories = [
  { name: "All Services", filter: "all" },
  { name: "Development", filter: "development" },
  { name: "Marketing", filter: "marketing" },
  { name: "Ongoing", filter: "ongoing" },
]

export function ServicesGrid() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <Button key={category.name} variant="outline" className="rounded-full bg-transparent">
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.slug} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-primary">{service.pricing}</div>
                      <div className="text-xs text-muted-foreground">{service.timeline}</div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-3">What's Included:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Target audience */}
                    <div>
                      <h4 className="font-semibold mb-3">Perfect For:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.audience.map((audience) => (
                          <Badge key={audience} variant="secondary" className="text-xs">
                            {audience}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex gap-3 pt-4">
                      <Button asChild className="flex-1">
                        <Link href={`/services/${service.slug}`}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link href="/contact">Get Quote</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
