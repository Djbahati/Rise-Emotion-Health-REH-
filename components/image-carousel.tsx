"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ImageCarousel() {
  const [current, setCurrent] = useState(0)

  // Sample images - in a real app, these would come from your API
  const images = [
    { src: "/placeholder.svg?height=400&width=600", alt: "Mental health support" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Therapy session" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Group workshop" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Mindfulness practice" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Self-care routine" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Community support" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Emotional wellness" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Stress management" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Anxiety relief" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Depression support" },
  ]

  const prev = () => setCurrent((current) => (current === 0 ? images.length - 1 : current - 1))
  const next = () => setCurrent((current) => (current === images.length - 1 ? 0 : current + 1))

  // Auto-advance the carousel
  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="flex aspect-video items-center justify-center">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute w-full h-full transition-transform duration-500 ease-in-out",
              index === current ? "translate-x-0" : index < current ? "-translate-x-full" : "translate-x-full",
            )}
          >
            <img src={image.src || "/placeholder.svg"} alt={image.alt} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full bg-background/80"
        onClick={prev}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full bg-background/80"
        onClick={next}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
      <div className="absolute bottom-2 flex w-full justify-center gap-1">
        {images.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className={cn("h-2 w-2 rounded-full p-0", index === current ? "bg-primary" : "bg-muted")}
            onClick={() => setCurrent(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}
