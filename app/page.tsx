import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ImageCarousel } from "@/components/image-carousel"
import { DailyQuote } from "@/components/daily-quote"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8 pb-8">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/10 rainbow-border-y">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Rise Emotional Health (REH)
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Supporting your journey toward emotional balance, healing, and growth. We provide accessible mental
                  health services tailored to individuals, families, and organizations.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="rainbow-border">
                  <Link href="/signup">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rainbow-border">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <img
              src="/placeholder.svg?height=550&width=550"
              alt="Mental Health Support"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last rainbow-border"
              width={550}
              height={550}
            />
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="container px-4 md:px-6 py-6">
        <h2 className="text-2xl font-bold tracking-tight mb-4">Mental Health Resources</h2>
        <div className="rainbow-border rounded-lg overflow-hidden">
          <ImageCarousel />
        </div>
      </section>

      {/* Daily Quote */}
      <section className="container px-4 md:px-6 py-6">
        <DailyQuote />
      </section>

      {/* Features */}
      <section className="container px-4 md:px-6 py-6">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Our Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="rainbow-border">
            <CardContent className="p-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">Therapy Sessions</h3>
                <p className="text-sm text-muted-foreground">
                  One-on-one therapy sessions with licensed professionals to address your specific needs.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="rainbow-border">
            <CardContent className="p-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">Wellness Workshops</h3>
                <p className="text-sm text-muted-foreground">
                  Group workshops focused on specific mental health topics and coping strategies.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="rainbow-border">
            <CardContent className="p-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">Digital Resources</h3>
                <p className="text-sm text-muted-foreground">
                  Access to our app and online tools to track your emotional health journey.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="container px-4 md:px-6 py-12 md:py-24 lg:py-32 bg-muted rounded-lg rainbow-border">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Start Your Journey?
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Join our community and take the first step towards emotional wellness.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild size="lg" className="rainbow-border">
              <Link href="/signup">Sign Up Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rainbow-border">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
