"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DailyCheckIn } from "@/components/daily-check-in"
import { MoodTracker } from "@/components/mood-tracker"
import { NotesSection } from "@/components/notes-section"

export default function DashboardPage() {
  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="space-y-0.5">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Track your emotional health journey and access resources.</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="mood">Mood Tracker</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Mood Today</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M12 2v20M2 12h20" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Good</div>
                  <p className="text-xs text-muted-foreground">+2% from yesterday</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Streak</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7 days</div>
                  <p className="text-xs text-muted-foreground">Keep up the good work!</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Notes</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">3 new this week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Resources</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">Available for you</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Daily Check-In</CardTitle>
                  <CardDescription>How are you feeling today? Track your emotional state.</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <DailyCheckIn />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Notes</CardTitle>
                  <CardDescription>Your most recent journal entries.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4 py-2">
                      <p className="text-sm">I'm feeling much better after practicing the breathing exercises.</p>
                      <p className="text-xs text-muted-foreground mt-1">April 8, 2025</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4 py-2">
                      <p className="text-sm">Today was challenging but I managed to use the coping strategies.</p>
                      <p className="text-xs text-muted-foreground mt-1">April 7, 2025</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4 py-2">
                      <p className="text-sm">Had a great therapy session. Feeling more hopeful.</p>
                      <p className="text-xs text-muted-foreground mt-1">April 5, 2025</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Notes
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="mood" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Mood Tracker</CardTitle>
                <CardDescription>Track your emotional state over time to identify patterns.</CardDescription>
              </CardHeader>
              <CardContent>
                <MoodTracker />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notes" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>My Notes</CardTitle>
                <CardDescription>Keep track of your thoughts, feelings, and progress.</CardDescription>
              </CardHeader>
              <CardContent>
                <NotesSection />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Resources</CardTitle>
                <CardDescription>Access helpful materials for your emotional wellness journey.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-medium">Breathing Exercises</h3>
                      <p className="text-sm text-muted-foreground">
                        Simple techniques to help manage anxiety and stress.
                      </p>
                      <Button variant="link" className="px-0">
                        View Resource
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-medium">Sleep Hygiene Guide</h3>
                      <p className="text-sm text-muted-foreground">
                        Tips for improving your sleep quality and routine.
                      </p>
                      <Button variant="link" className="px-0">
                        View Resource
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-medium">Mindfulness Practices</h3>
                      <p className="text-sm text-muted-foreground">
                        Exercises to help you stay present and reduce rumination.
                      </p>
                      <Button variant="link" className="px-0">
                        View Resource
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-medium">Emotional Regulation</h3>
                      <p className="text-sm text-muted-foreground">
                        Strategies to manage intense emotions effectively.
                      </p>
                      <Button variant="link" className="px-0">
                        View Resource
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Browse All Resources
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
