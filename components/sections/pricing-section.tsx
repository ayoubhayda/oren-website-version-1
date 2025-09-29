"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check } from "lucide-react"

const pricingModels = [
  {
    title: "Fixed Project",
    description: "Perfect for well-defined projects with clear scope and timeline.",
    features: ["Detailed project scope", "Fixed timeline", "Milestone payments", "Full ownership"],
    badge: "Most Popular",
  },
  {
    title: "Monthly Retainer",
    description: "Ongoing partnership for continuous development and maintenance.",
    features: ["Dedicated team hours", "Priority support", "Flexible scope", "Monthly reporting"],
    badge: null,
  },
  {
    title: "Custom Enterprise",
    description: "Tailored solutions for large-scale projects and enterprise needs.",
    features: ["Custom team size", "Dedicated project manager", "SLA guarantees", "24/7 support"],
    badge: "Enterprise",
  },
]

export function PricingSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">Flexible Engagement Models</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Choose the engagement model that best fits your project needs and budget requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingModels.map((model) => (
            <Card key={model.title} className="relative hover:shadow-lg transition-shadow duration-300">
              {model.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2" variant="default">
                  {model.badge}
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">{model.title}</CardTitle>
                <CardDescription className="text-base text-pretty">{model.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">
                    Get Custom Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Not sure which model fits your needs? Let's discuss your project requirements.
          </p>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
