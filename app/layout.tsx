import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "oren - Modern Web Development & Digital Marketing",
  description:
    "Professional web development, platforms, and digital marketing services. We build modern websites that grow businesses.",
  generator: "oren",
  keywords: ["web development", "digital marketing", "websites", "platforms", "startup"],
  authors: [{ name: "oren" }],
  openGraph: {
    title: "oren - Modern Web Development & Digital Marketing",
    description: "Professional web development, platforms, and digital marketing services.",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <Suspense fallback={null}>
            <LanguageProvider>{children}</LanguageProvider>
          </Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
