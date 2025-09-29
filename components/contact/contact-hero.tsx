"use client"

import { useLanguage } from "@/components/language-provider"

export function ContactHero() {
  const { t } = useLanguage()

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-balance mb-6">{t("contact.title")}</h1>
        <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">{t("contact.subtitle")}</p>
      </div>
    </section>
  )
}
