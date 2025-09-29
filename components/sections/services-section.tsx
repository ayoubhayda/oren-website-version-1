"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, ShoppingCart, TrendingUp, Palette, Wrench, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function ServicesSection() {
  const { t, language } = useLanguage()
  const isRTL = language === "ar"

  const services = [
    {
      icon: Code,
      title: t("services.webDev.title"),
      description: t("services.webDev.description"),
      benefits: ["Responsive Design", "SEO Optimized", "Fast Loading"],
      href: "/services/web-development",
    },
    {
      icon: TrendingUp,
      title: t("services.digitalMarketing.title"),
      description: t("services.digitalMarketing.description"),
      benefits: ["SEO & SEM", "Content Strategy", "Performance Tracking"],
      href: "/services/digital-marketing",
    },
    {
      icon: ShoppingCart,
      title: t("services.ecommerce.title"),
      description: t("services.ecommerce.description"),
      benefits: ["Payment Integration", "Inventory Management", "Analytics"],
      href: "/services/ecommerce",
    },
    {
      icon: Smartphone,
      title: t("services.seo.title"),
      description: t("services.seo.description"),
      benefits: ["Keyword Research", "On-page SEO", "Link Building"],
      href: "/services/seo",
    },
    {
      icon: Palette,
      title: t("services.branding.title"),
      description: t("services.branding.description"),
      benefits: ["Logo Design", "Brand Guidelines", "Visual Identity"],
      href: "/services/branding",
    },
    {
      icon: Wrench,
      title: t("services.maintenance.title"),
      description: t("services.maintenance.description"),
      benefits: ["Regular Updates", "Security Monitoring", "Performance Optimization"],
      href: "/services/maintenance",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">{t("services.title")}</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">{t("services.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className={`flex items-center text-sm text-muted-foreground ${isRTL ? "flex-row-reverse" : ""}`}
                      >
                        <div className={`w-1.5 h-1.5 bg-primary rounded-full ${isRTL ? "ml-3" : "mr-3"}`} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="ghost" className="group/btn p-0 h-auto">
                    <Link href={service.href}>
                      {t("hero.learnMore")}
                      <ArrowRight
                        className={`h-4 w-4 transition-transform group-hover/btn:translate-x-1 ${isRTL ? "mr-1 rotate-180" : "ml-1"}`}
                      />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/services">
              {t("portfolio.viewAll")}
              <ArrowRight className={`h-5 w-5 ${isRTL ? "mr-2 rotate-180" : "ml-2"}`} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
