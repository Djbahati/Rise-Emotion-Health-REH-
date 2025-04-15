import { EnhancedMoodTracker } from "@/components/enhanced-mood-tracker"

export default function EnhancedMoodPage() {
  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="mx-auto max-w-3xl">
        <div className="space-y-0.5 mb-6">
          <h1 className="text-2xl font-bold tracking-tight">Enhanced Mood Tracking</h1>
          <p className="text-muted-foreground">
            Powered by Rust WebAssembly for advanced mood analysis and recommendations
          </p>
        </div>

        <EnhancedMoodTracker />
      </div>
    </div>
  )
}
