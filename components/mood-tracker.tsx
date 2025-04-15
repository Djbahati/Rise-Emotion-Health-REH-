"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function MoodTracker() {
  const [mood, setMood] = useState<string | undefined>()
  const [notes, setNotes] = useState("")

  const handleSubmit = () => {
    if (mood) {
      // In a real app, this would send the mood data to your API
      alert(`Mood tracked: ${mood}`)
      setMood(undefined)
      setNotes("")
    }
  }

  return (
    <div className="space-y-6">
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
          className="min-h-[100px]"
        />
      </div>

      <Button type="button" onClick={handleSubmit} disabled={!mood} className="w-full">
        <Send className="h-4 w-4 mr-2" />
        Track Mood
      </Button>

      <div className="pt-4 border-t">
        <h3 className="font-medium mb-4">Mood History</h3>
        <div className="space-y-4">
          <Card>
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
          <Card>
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
          <Card>
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
