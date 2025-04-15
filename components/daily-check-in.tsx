"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Mic, Send, StopCircle } from "lucide-react"

export function DailyCheckIn() {
  const [checkInText, setCheckInText] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const [date] = useState(
    new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  )

  const handleStartRecording = () => {
    // In a real app, this would use the Web Speech API or a similar technology
    setIsRecording(true)
    // Simulate recording
    setTimeout(() => {
      setCheckInText((prev) => prev + "I'm feeling better today after practicing mindfulness. ")
      setIsRecording(false)
    }, 3000)
  }

  const handleStopRecording = () => {
    setIsRecording(false)
  }

  const handleSubmit = () => {
    if (checkInText.trim()) {
      // In a real app, this would send the check-in to your API
      alert("Check-in submitted!")
      setCheckInText("")
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">How was your day?</h3>
        <span className="text-sm text-muted-foreground">{date}</span>
      </div>

      <Card>
        <CardContent className="p-4">
          <Textarea
            placeholder="Share your thoughts, feelings, and experiences from today..."
            value={checkInText}
            onChange={(e) => setCheckInText(e.target.value)}
            className="min-h-[150px] border-0 focus-visible:ring-0 resize-none p-0"
          />
          <div className="flex justify-between mt-4">
            <div className="flex gap-2">
              {!isRecording ? (
                <Button type="button" size="sm" variant="outline" onClick={handleStartRecording}>
                  <Mic className="h-4 w-4 mr-2" />
                  Voice Record
                </Button>
              ) : (
                <Button type="button" size="sm" variant="destructive" onClick={handleStopRecording}>
                  <StopCircle className="h-4 w-4 mr-2" />
                  Stop Recording
                </Button>
              )}
            </div>
            <Button type="button" size="sm" onClick={handleSubmit}>
              <Send className="h-4 w-4 mr-2" />
              Submit
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
