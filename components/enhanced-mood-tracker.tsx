"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Send, Sparkles } from "lucide-react"
import { initWasm } from "@/lib/wasm-utils"
import { Progress } from "@/components/ui/progress"
import { DancingText } from "@/components/animated-text"

export function EnhancedMoodTracker() {
  const [mood, setMood] = useState<string | undefined>()
  const [notes, setNotes] = useState("")
  const [wasmModule, setWasmModule] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [healthScore, setHealthScore] = useState(50)
  const [recommendation, setRecommendation] = useState("")
  const [moodAnalysis, setMoodAnalysis] = useState("")

  // Sample mood history - in a real app, this would come from your database
  const moodHistory = {
    positive: 12,
    neutral: 8,
    negative: 5,
    total: 25,
  }

  useEffect(() => {
    async function loadWasm() {
      try {
        const wasm = await initWasm()
        setWasmModule(wasm)

        // Calculate health score using Rust function
        const score = wasm.calculate_health_score(moodHistory.positive, moodHistory.negative, moodHistory.total)
        setHealthScore(Math.round(score))

        // Generate recommendation based on sample mood history
        const rec = wasm.generate_recommendation(
          "Sometimes I feel anxious when meeting new people, but I've been managing stress better lately.",
        )
        setRecommendation(rec)

        setIsLoading(false)
      } catch (error) {
        console.error("Failed to load WASM module:", error)
        setIsLoading(false)
      }
    }

    loadWasm()
  }, [])

  const handleSubmit = () => {
    if (mood && wasmModule) {
      // Analyze mood text using our Rust function
      const analysis = wasmModule.analyze_mood(notes)
      setMoodAnalysis(analysis)

      // In a real app, this would send the mood data to your API
      alert(`Mood tracked: ${mood}, Analysis: ${analysis}`)

      // Reset form
      setMood(undefined)
      setNotes("")
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">
          <DancingText text="Mood Tracker" />
        </h2>
        {!isLoading && (
          <Card className="border-2 p-4 w-48">
            <CardTitle className="text-sm mb-2">Emotional Health</CardTitle>
            <Progress value={healthScore} className="h-2 mb-1" />
            <p className="text-xs text-muted-foreground text-right">{healthScore}/100</p>
          </Card>
        )}
      </div>

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Sparkles className="h-5 w-5 mr-2 text-primary" />
            AI-Powered Recommendation
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? <div className="animate-pulse h-6 bg-muted rounded w-3/4"></div> : <p>{recommendation}</p>}
        </CardContent>
      </Card>

      <div className="space-y-2">
        <Label>How are you feeling right now?</Label>
        <RadioGroup value={mood} onValueChange={setMood} className="grid grid-cols-5 gap-4">
          <div className="flex flex-col items-center gap-1">
            <Label htmlFor="mood-great" className="cursor-pointer flex flex-col items-center gap-1.5">
              <div className={`text-4xl ${mood === "great" ? "scale-125" : ""}`}>😄</div>
              <span className="text-xs">Great</span>
            </Label>
            <RadioGroupItem value="great" id="mood-great" className="sr-only" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <Label htmlFor="mood-good" className="cursor-pointer flex flex-col items-center gap-1.5">
              <div className={`text-4xl ${mood === "good" ? "scale-125" : ""}`}>🙂</div>
              <span className="text-xs">Good</span>
            </Label>
            <RadioGroupItem value="good" id="mood-good" className="sr-only" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <Label htmlFor="mood-okay" className="cursor-pointer flex flex-col items-center gap-1.5">
              <div className={`text-4xl ${mood === "okay" ? "scale-125" : ""}`}>😐</div>
              <span className="text-xs">Okay</span>
            </Label>
            <RadioGroupItem value="okay" id="mood-okay" className="sr-only" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <Label htmlFor="mood-bad" className="cursor-pointer flex flex-col items-center gap-1.5">
              <div className={`text-4xl ${mood === "bad" ? "scale-125" : ""}`}>😔</div>
              <span className="text-xs">Bad</span>
            </Label>
            <RadioGroupItem value="bad" id="mood-bad" className="sr-only" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <Label htmlFor="mood-awful" className="cursor-pointer flex flex-col items-center gap-1.5">
              <div className={`text-4xl ${mood === "awful" ? "scale-125" : ""}`}>😢</div>
              <span className="text-xs">Awful</span>
            </Label>
            <RadioGroupItem value="awful" id="mood-awful" className="sr-only" />
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="mood-notes">Additional notes (optional)</Label>
        <Textarea
          id="mood-notes"
          placeholder="What's contributing to your mood today?"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="min-h-[100px] border-2"
        />
      </div>

      <Button
        type="button"
        onClick={handleSubmit}
        disabled={!mood || isLoading}
        className="w-full border-2 border-border"
      >
        <Send className="h-4 w-4 mr-2" />
        Track Mood
      </Button>

      {moodAnalysis && (
        <Card className="border-2 border-primary">
          <CardContent className="p-4">
            <p className="font-medium">Mood Analysis:</p>
            <p className="text-sm">
              Your mood appears to be <span className="font-bold">{moodAnalysis}</span> based on your notes.
            </p>
          </CardContent>
        </Card>
      )}

      <div className="pt-4 border-t-2">
        <h3 className="font-medium mb-4">Mood History</h3>
        <div className="space-y-4">
          <Card className="border-2">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-2xl">🙂</div>
                <div>
                  <p className="font-medium">Good</p>
                  <p className="text-xs text-muted-foreground">April 9, 2025</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                View
              </Button>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-2xl">😐</div>
                <div>
                  <p className="font-medium">Okay</p>
                  <p className="text-xs text-muted-foreground">April 8, 2025</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                View
              </Button>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-2xl">😄</div>
                <div>
                  <p className="font-medium">Great</p>
                  <p className="text-xs text-muted-foreground">April 7, 2025</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                View
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
