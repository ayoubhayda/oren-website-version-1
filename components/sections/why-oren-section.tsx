"use client"

import { Shield, Zap, Users, Target, Lightbulb } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Reliable Delivery",
    description: "We deliver projects on time and within budget, every time.",
  },
  {
    icon: Lightbulb,
    title: "Custom Solutions",
    description: "Tailored approaches that fit your unique business needs.",
  },
  {
    icon: Zap,
    title: "Design-First",
    description: "Beautiful, user-centered designs that convert visitors to customers.",
  },
  {
    icon: Target,
    title: "Growth Focus",
    description: "Every solution is built with your business growth in mind.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced professionals dedicated to your success.",
  },
]

export function WhyOrenSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">Why Choose oren?</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Our approach combines technical excellence with business strategy to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div key={value.title} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-pretty">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
