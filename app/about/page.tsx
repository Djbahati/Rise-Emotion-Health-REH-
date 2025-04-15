import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-8 md:py-12">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About RISE Emotional Health</h1>
          <p className="text-muted-foreground">Our mission, vision, and commitment to your well-being</p>
        </div>

        <Card>
          <CardContent className="p-6 sm:p-8">
            <div className="space-y-4 text-pretty">
              <p>
                At RISE Emotional Health, we believe that emotional well-being is the foundation of a healthy,
                fulfilling life. Founded with the purpose of addressing the growing mental health needs in our
                communities, RISE is dedicated to supporting individuals on their journey toward emotional balance,
                healing, and growth.
              </p>

              <p>
                Our mission is to create a safe, inclusive, and supportive environment where people feel heard,
                understood, and empowered. We provide accessible mental health services including therapy, emotional
                wellness programs, workshops, and digital resources tailored to individuals, families, and
                organizations.
              </p>

              <p>
                We are passionate about breaking the stigma surrounding mental health, especially in African
                communities, and encouraging open, compassionate conversations. Our approach is holistic, combining
                professional care with culturally sensitive practices that respect and uplift the uniqueness of every
                individual.
              </p>

              <p>
                Whether you're facing anxiety, stress, depression, burnout, or simply seeking emotional clarity, RISE is
                here to walk with you. Together, we rise above life's challenges — one step, one story, and one soul at
                a time.
              </p>

              <p>
                Join us in redefining what it means to be emotionally strong. Because your story matters, your health
                matters, and you deserve to rise.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold">Compassionate Care</h3>
              <p className="text-sm text-muted-foreground mt-2">
                We approach every individual with empathy, understanding, and respect.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m16 10-4 4-4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold">Cultural Sensitivity</h3>
              <p className="text-sm text-muted-foreground mt-2">
                We honor diverse backgrounds and tailor our approach to your unique needs.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold">Accessible Support</h3>
              <p className="text-sm text-muted-foreground mt-2">
                We strive to make mental health services available to all who need them.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
