"use server"

import { sql } from "@/lib/db"
import { revalidatePath } from "next/cache"

export type Quote = {
  id: string
  content: string
  author: string | null
  user_id: string | null
  created_at: Date
}

// Get a random quote
export async function getRandomQuote(): Promise<Quote | null> {
  try {
    const quotes = await sql<Quote[]>`
      SELECT * FROM quotes
      ORDER BY RANDOM()
      LIMIT 1
    `

    return quotes.length > 0 ? quotes[0] : null
  } catch (error) {
    console.error("Failed to fetch random quote:", error)
    return null
  }
}

// Get daily quote (could be random or based on date)
export async function getDailyQuote(): Promise<Quote | null> {
  return getRandomQuote()
}

// Get all quotes
export async function getAllQuotes(): Promise<Quote[]> {
  try {
    return await sql<Quote[]>`
      SELECT * FROM quotes
      ORDER BY created_at DESC
    `
  } catch (error) {
    console.error("Failed to fetch quotes:", error)
    return []
  }
}

// Add a new quote
export async function addQuote(
  content: string,
  author: string | null = null,
  userId: string | null = null,
): Promise<Quote | null> {
  try {
    const quotes = await sql<Quote[]>`
      INSERT INTO quotes (content, author, user_id)
      VALUES (${content}, ${author}, ${userId})
      RETURNING *
    `

    revalidatePath("/")
    return quotes.length > 0 ? quotes[0] : null
  } catch (error) {
    console.error("Failed to add quote:", error)
    return null
  }
}

// Delete a quote
export async function deleteQuote(id: string): Promise<boolean> {
  try {
    await sql`
      DELETE FROM quotes
      WHERE id = ${id}
    `

    revalidatePath("/")
    return true
  } catch (error) {
    console.error("Failed to delete quote:", error)
    return false
  }
}
