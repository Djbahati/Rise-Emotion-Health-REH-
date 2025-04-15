"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { addQuote } from "@/app/actions/quotes"
import { useToast } from "@/hooks/use-toast"

export default function AddQuotePage() {
  const [content, setContent] = useState("")
  const [author, setAuthor] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!content.trim()) {
      toast({
        title: "Error",
        description: "Quote content is required",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      await addQuote(content, author || null)
      toast({
        title: "Success",
        description: "Quote added successfully",
      })
      router.push("/admin/quotes")
    } catch (error) {
      console.error("Error adding quote:", error)
      toast({
        title: "Error",
        description: "Failed to add quote. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="mx-auto max-w-2xl">
        <div className="space-y-0.5 mb-6">
          <h1 className="text-2xl font-bold tracking-tight">Add New Quote</h1>
          <p className="text-muted-foreground">Create an inspirational quote to share with users.</p>
        </div>

        <Card className="border-2">
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Quote Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="content">Quote Content</Label>
                <Textarea
                  id="content"
                  placeholder="Enter the quote text..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-[100px]"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="author">Author (Optional)</Label>
                <Input
                  id="author"
                  placeholder="Enter the author's name..."
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button type="button" variant="outline" onClick={() => router.push("/admin/quotes")}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Adding..." : "Add Quote"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}
