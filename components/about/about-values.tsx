"use client"

import { Shield, Zap, Users, Target, Lightbulb, Award } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We believe in honest communication, transparent processes, and delivering on our promises.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of technology trends to provide cutting-edge solutions for our clients.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients as partners, not just service providers.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every project is measured by its impact on our client's business goals and success.",
  },
  {
    icon: Zap,
    title: "Excellence",
    description: "We strive for perfection in every detail, from code quality to user experience.",
  },
  {
    icon: Award,
    title: "Continuous Learning",
    description: "We invest in our team's growth and stay current with industry best practices.",
  },
]

export function AboutValues() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">Our Core Values</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            These principles guide our work, relationships, and commitment to delivering exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => {
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
