"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { Send } from "lucide-react"

export function ContactForm() {
  const { t, language } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const isRTL = language === "ar"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    // Handle success/error states here
  }

  const services = [
    t("services.webDev.title"),
    t("services.digitalMarketing.title"),
    t("services.ecommerce.title"),
    t("services.seo.title"),
    t("services.branding.title"),
    t("services.maintenance.title"),
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{t("contact.form.send")}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t("contact.form.name")}</Label>
              <Input id="name" name="name" required className={isRTL ? "text-right" : ""} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t("contact.form.email")}</Label>
              <Input id="email" name="email" type="email" required className={isRTL ? "text-right" : ""} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">{t("contact.form.phone")}</Label>
              <Input id="phone" name="phone" type="tel" className={isRTL ? "text-right" : ""} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">{t("contact.form.company")}</Label>
              <Input id="company" name="company" className={isRTL ? "text-right" : ""} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">{t("contact.form.service")}</Label>
            <Select name="service">
              <SelectTrigger>
                <SelectValue placeholder={t("contact.form.service")} />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, "-")}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{t("contact.form.message")}</Label>
            <Textarea id="message" name="message" rows={6} required className={isRTL ? "text-right" : ""} />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                {t("contact.form.sending")}
              </>
            ) : (
              <>
                <Send className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                {t("contact.form.send")}
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
