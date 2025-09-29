import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogArticle } from "@/components/blog/blog-article"
import { BlogRelated } from "@/components/blog/blog-related"
import { notFound } from "next/navigation"

// This would typically come from a CMS or database
const blogPosts = {
  "future-web-development-2024": {
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Explore the latest trends shaping the web development landscape and how they can benefit your business in the coming year.",
    content: `
# The Future of Web Development: Trends to Watch in 2024

The web development landscape is constantly evolving, with new technologies and methodologies emerging regularly. As we move through 2024, several key trends are shaping how we build and interact with web applications.

## 1. AI-Powered Development Tools

Artificial Intelligence is revolutionizing how developers write code. Tools like GitHub Copilot and ChatGPT are becoming integral parts of the development workflow, helping developers:

- Generate boilerplate code faster
- Debug complex issues more efficiently  
- Learn new technologies and frameworks
- Optimize performance automatically

## 2. Server-Side Rendering Renaissance

With frameworks like Next.js, Nuxt.js, and SvelteKit leading the charge, server-side rendering (SSR) is making a strong comeback. The benefits include:

- **Better SEO**: Search engines can crawl and index content more effectively
- **Faster Initial Load**: Users see content sooner, improving perceived performance
- **Enhanced Security**: Sensitive logic stays on the server

## 3. Edge Computing and CDNs

Edge computing is bringing computation closer to users, resulting in:

- Reduced latency for global applications
- Better performance for dynamic content
- More efficient resource utilization
- Improved user experience worldwide

## 4. Progressive Web Apps (PWAs) Evolution

PWAs continue to bridge the gap between web and native applications:

- Offline functionality becoming standard
- Push notifications for better engagement
- App-like experiences in the browser
- Reduced development costs compared to native apps

## 5. WebAssembly (WASM) Adoption

WebAssembly is enabling high-performance applications in the browser:

- Running complex algorithms at near-native speed
- Porting existing applications to the web
- Better performance for graphics and gaming
- Language flexibility beyond JavaScript

## Conclusion

These trends represent significant opportunities for businesses to improve their web presence and user experience. By staying ahead of these developments, companies can build more efficient, performant, and engaging web applications.

At oren, we're committed to leveraging these cutting-edge technologies to deliver exceptional results for our clients. Ready to future-proof your web presence?
    `,
    image: "/modern-web-development-trends-2024.jpg",
    category: "Web Development",
    author: "Sarah Johnson",
    authorImage: "/professional-woman-ceo.png",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    tags: ["Web Development", "Trends", "Technology", "2024"],
  },
  "scalable-ecommerce-platforms": {
    title: "Building Scalable E-commerce Platforms: Best Practices",
    excerpt:
      "Learn the essential strategies for creating e-commerce platforms that can grow with your business and handle increasing traffic.",
    content: `
# Building Scalable E-commerce Platforms: Best Practices

Building a scalable e-commerce platform requires careful planning and the right architectural decisions from the start. Here's your comprehensive guide to creating platforms that grow with your business.

## Architecture Fundamentals

### Microservices vs Monolith

Choose your architecture based on your team size and complexity needs:

- **Monolith**: Great for small teams and simple requirements
- **Microservices**: Better for large teams and complex, evolving requirements

### Database Strategy

- Use read replicas for better performance
- Implement proper indexing strategies
- Consider database sharding for massive scale
- Cache frequently accessed data

## Performance Optimization

### Frontend Performance

- Implement lazy loading for images and components
- Use CDNs for static assets
- Optimize bundle sizes with code splitting
- Implement proper caching strategies

### Backend Performance

- Use efficient database queries
- Implement proper API rate limiting
- Use background jobs for heavy processing
- Monitor and optimize slow endpoints

## Security Best Practices

- Implement proper authentication and authorization
- Use HTTPS everywhere
- Validate all user inputs
- Regular security audits and updates
- PCI compliance for payment processing

## Scalability Considerations

- Design for horizontal scaling
- Use load balancers effectively
- Implement proper monitoring and alerting
- Plan for traffic spikes and seasonal variations

Ready to build your scalable e-commerce platform? Let's discuss your requirements.
    `,
    image: "/scalable-ecommerce-platform-architecture.jpg",
    category: "E-commerce",
    author: "Michael Chen",
    authorImage: "/professional-founder-headshot.png",
    date: "Dec 12, 2024",
    readTime: "7 min read",
    tags: ["E-commerce", "Scalability", "Architecture", "Performance"],
  },
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return {
      title: "Article Not Found - oren Blog",
    }
  }

  return {
    title: `${post.title} - oren Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <BlogArticle post={post} />
        <BlogRelated currentSlug={params.slug} />
      </main>
      <Footer />
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}
