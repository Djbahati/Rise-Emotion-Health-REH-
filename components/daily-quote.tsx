"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { RefreshCw, Send } from "lucide-react"
import { getDailyQuote, addQuote } from "@/app/actions/quotes"
import { useToast } from "@/hooks/use-toast"

export function DailyQuote() {
  const [userQuote, setUserQuote] = useState("")
  const [quote, setQuote] = useState<{ text: string; author: string } | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  // Fetch a quote when the component mounts
  useEffect(() => {
    fetchQuote()
  }, [])

  const fetchQuote = async () => {
    setIsLoading(true)
    try {
      const dailyQuote = await getDailyQuote()
      if (dailyQuote) {
        setQuote({
          text: dailyQuote.content,
          author: dailyQuote.author || "Unknown",
        })
      } else {
        // Fallback quotes if none in database
        const fallbackQuotes = [
          {
            text: "Mental health is not a destination, but a process. It's about how you drive, not where you're going.",
            author: "Noam Shpancer",
          },
          {
            text: "You don't have to be positive all the time. It's perfectly okay to feel sad, angry, annoyed, frustrated, scared, or anxious. Having feelings doesn't make you a negative person. It makes you human.",
            author: "Lori Deschene",
          },
          {
            text: "Self-care is how you take your power back.",
            author: "Lalah Delia",
          },
        ]
        const randomIndex = Math.floor(Math.random() * fallbackQuotes.length)
        setQuote(fallbackQuotes[randomIndex])
      }
    } catch (error) {
      console.error("Error fetching quote:", error)
      toast({
        title: "Error",
        description: "Failed to fetch quote. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmitQuote = async () => {
    if (userQuote.trim()) {
      try {
        await addQuote(userQuote.trim(), "Community Member")
        toast({
          title: "Success!",
          description: "Your quote has been submitted.",
        })
        setUserQuote("")
      } catch (error) {
        console.error("Error submitting quote:", error)
        toast({
          title: "Error",
          description: "Failed to submit quote. Please try again.",
          variant: "destructive",
        })
      }
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">Daily Inspiration</h2>

      <Card className="rainbow-border">
        <CardContent className="pt-6">
          {isLoading ? (
            <div className="animate-pulse space-y-2">
              <div className="h-4 bg-muted rounded w-3/4"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
              <div className="h-4 bg-muted rounded w-5/6"></div>
              <div className="h-4 bg-muted rounded w-1/4 mt-4"></div>
            </div>
          ) : (
            <blockquote className="border-l-4 border-primary pl-4 italic">
              <p className="text-lg">{quote?.text}</p>
              <footer className="mt-2 text-sm text-muted-foreground">— {quote?.author}</footer>
            </blockquote>
          )}
        </CardContent>
        <CardFooter className="flex justify-end rainbow-border-t">
          <Button
            variant="ghost"
            size="sm"
            onClick={fetchQuote}
            disabled={isLoading}
            className="text-primary hover:text-primary hover:bg-primary/10"
          >
            <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
            New Quote
          </Button>
        </CardFooter>
      </Card>

      <Card className="rainbow-border">
        <CardContent className="pt-6">
          <h3 className="text-lg font-medium mb-2">Share Your Own Quote</h3>
          <Textarea
            placeholder="Write your inspirational quote here..."
            value={userQuote}
            onChange={(e) => setUserQuote(e.target.value)}
            className="min-h-[100px] rainbow-border"
          />
        </CardContent>
        <CardFooter className="flex justify-end rainbow-border-t">
          <Button onClick={handleSubmitQuote} className="rainbow-border">
            <Send className="mr-2 h-4 w-4" />
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
