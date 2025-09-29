"use client"

import { Search, Palette, Code, Rocket, HeadphonesIcon } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Discover",
    description:
      "We analyze your business needs, target audience, and competitive landscape to create a strategic foundation.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Our design team creates beautiful, user-centered interfaces that align with your brand and goals.",
  },
  {
    icon: Code,
    title: "Develop",
    description: "We build your solution using modern technologies, ensuring scalability, performance, and security.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "We deploy your project with comprehensive testing and optimization for the best user experience.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support",
    description: "Ongoing maintenance, updates, and support to ensure your solution continues to perform excellently.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">How We Work</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Our proven process ensures successful project delivery from concept to launch and beyond.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.title} className="text-center relative">
                  {/* Step number and icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto relative z-10">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-background border-2 border-primary rounded-full flex items-center justify-center text-xs font-bold text-primary">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-pretty text-sm">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
