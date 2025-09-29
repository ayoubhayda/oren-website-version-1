"use client"

import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t, language } = useLanguage()
  const currentYear = new Date().getFullYear()
  const isRTL = language === "ar"

  const footerSections = [
    {
      title: t("footer.services"),
      links: [
        { name: t("services.webDev.title"), href: "/services/web-development" },
        { name: t("services.digitalMarketing.title"), href: "/services/digital-marketing" },
        { name: t("services.ecommerce.title"), href: "/services/ecommerce" },
        { name: t("services.seo.title"), href: "/services/seo" },
      ],
    },
    {
      title: t("footer.quickLinks"),
      links: [
        { name: t("nav.about"), href: "/about" },
        { name: t("nav.portfolio"), href: "/portfolio" },
        { name: t("nav.blog"), href: "/blog" },
        { name: t("nav.contact"), href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: t("footer.privacyPolicy"), href: "/privacy" },
        { name: t("footer.termsOfService"), href: "/terms" },
        { name: "Accessibility", href: "/accessibility" },
      ],
    },
  ]

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "GitHub", icon: Github, href: "#" },
    { name: "Email", icon: Mail, href: "mailto:hello@oren.com" },
  ]

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 ${isRTL ? "text-right" : ""}`}>
          {/* Brand section */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className={`flex items-center space-x-2 mb-4 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}
            >
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">o</span>
              </div>
              <span className="font-bold text-xl">oren</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">{t("footer.description")}</p>
            <div className={`flex space-x-4 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}>
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className={`border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center ${isRTL ? "sm:flex-row-reverse" : ""}`}
        >
          <p className="text-muted-foreground text-sm">
            © {currentYear} oren. {t("footer.allRights")}
          </p>
          <p className="text-muted-foreground text-sm mt-2 sm:mt-0">Built with precision and care.</p>
        </div>
      </div>
    </footer>
  )
}
