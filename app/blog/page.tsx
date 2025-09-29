import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogNewsletter } from "@/components/blog/blog-newsletter"

export const metadata = {
  title: "Blog - oren | Web Development & Digital Marketing Insights",
  description:
    "Stay updated with the latest insights, trends, and best practices in web development and digital marketing.",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <BlogHero />
        <BlogGrid />
        <BlogNewsletter />
      </main>
      <Footer />
    </div>
  )
}
