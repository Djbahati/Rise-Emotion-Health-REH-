"use client"

import { useEffect, useState } from "react"

interface DancingTextProps {
  text: string
  className?: string
}

export function DancingText({ text, className = "" }: DancingTextProps) {
  return (
    <span className={`dancing-text ${className}`}>
      {text.split("").map((char, index) => (
        <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  )
}

interface AutoHideTextProps {
  text: string
  duration?: number
  onHidden?: () => void
  className?: string
}

export function AutoHideText({ text, duration = 8, onHidden, className = "" }: AutoHideTextProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      if (onHidden) onHidden()
    }, duration * 1000)

    return () => clearTimeout(timer)
  }, [duration, onHidden])

  if (!visible) return null

  return (
    <span className={`auto-hide-text ${className}`} style={{ animationDuration: `${duration}s` }}>
      {text}
    </span>
  )
}

interface ColorChangingBgTextProps {
  text: string
  bgText: string
  className?: string
}

export function ColorChangingBgText({ text, bgText, className = "" }: ColorChangingBgTextProps) {
  return (
    <span className={`color-changing-bg-text ${className}`} data-text={bgText}>
      {text}
    </span>
  )
}
