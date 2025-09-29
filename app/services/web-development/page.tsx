import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetailHero } from "@/components/services/service-detail-hero"
import { ServiceDetailContent } from "@/components/services/service-detail-content"
import { ServiceDetailCTA } from "@/components/services/service-detail-cta"

export const metadata = {
  title: "Web Development Services - oren",
  description: "Custom web development services with modern technologies, responsive design, and SEO optimization.",
}

const serviceData = {
  title: "Web Development",
  subtitle: "Custom websites that drive business growth",
  description:
    "We create stunning, high-performance websites that not only look great but also deliver exceptional user experiences and drive business results.",
  deliverables: [
    "Fully responsive website design",
    "Custom content management system",
    "SEO optimization and analytics setup",
    "Performance optimization",
    "Cross-browser compatibility",
    "Mobile-first development",
    "Security implementation",
    "Ongoing support and maintenance",
  ],
  targetAudience: [
    {
      type: "Startups",
      description: "Launch your business with a professional web presence that grows with you.",
      examples: ["Landing pages", "MVP websites", "Investor pitch sites"],
    },
    {
      type: "Small & Medium Businesses",
      description: "Establish credibility and reach more customers with a modern website.",
      examples: ["Business websites", "Service portfolios", "Local business sites"],
    },
    {
      type: "Enterprise",
      description: "Scale your digital presence with robust, enterprise-grade solutions.",
      examples: ["Corporate websites", "Multi-site management", "Integration platforms"],
    },
  ],
  process: [
    {
      step: "Discovery & Planning",
      description: "We analyze your business goals, target audience, and technical requirements.",
      timeline: "1-2 weeks",
    },
    {
      step: "Design & Prototyping",
      description: "Create wireframes, mockups, and interactive prototypes for your approval.",
      timeline: "2-3 weeks",
    },
    {
      step: "Development & Testing",
      description: "Build your website with clean code, thorough testing, and optimization.",
      timeline: "3-4 weeks",
    },
    {
      step: "Launch & Support",
      description: "Deploy your website and provide ongoing support and maintenance.",
      timeline: "1 week + ongoing",
    },
  ],
  pricing: {
    starting: "$5,000",
    factors: [
      "Website complexity and number of pages",
      "Custom functionality requirements",
      "Design complexity and animations",
      "Third-party integrations needed",
      "Content management system features",
    ],
  },
  faqs: [
    {
      question: "How long does it take to build a website?",
      answer:
        "Most websites take 4-8 weeks from start to finish, depending on complexity and scope. We'll provide a detailed timeline during the planning phase.",
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer:
        "Yes, we offer ongoing maintenance packages that include security updates, content updates, performance monitoring, and technical support.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "All our websites are built with a mobile-first approach and are fully responsive across all devices and screen sizes.",
    },
    {
      question: "Can you help with content creation?",
      answer:
        "Yes, we can help with content strategy, copywriting, and sourcing professional photography to ensure your website tells your story effectively.",
    },
  ],
}

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServiceDetailHero service={serviceData} />
        <ServiceDetailContent service={serviceData} />
        <ServiceDetailCTA service={serviceData} />
      </main>
      <Footer />
    </div>
  )
}
