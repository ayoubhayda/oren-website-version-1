"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function ContactInfo() {
  const { t, language } = useLanguage()
  const isRTL = language === "ar"

  const contactDetails = [
    {
      icon: MapPin,
      label: "Address",
      value: t("contact.info.address"),
    },
    {
      icon: Phone,
      label: "Phone",
      value: t("contact.info.phone"),
    },
    {
      icon: Mail,
      label: "Email",
      value: t("contact.info.email"),
    },
    {
      icon: Clock,
      label: "Hours",
      value: t("contact.info.hours"),
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{t("footer.contact")}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {contactDetails.map((detail) => {
          const Icon = detail.icon
          return (
            <div
              key={detail.label}
              className={`flex items-start space-x-4 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div className={isRTL ? "text-right" : ""}>
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">{detail.label}</h3>
                <p className="text-foreground mt-1">{detail.value}</p>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
