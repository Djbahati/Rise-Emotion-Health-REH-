import { neon } from "@neondatabase/serverless"

// Create a SQL client with the pooled connection
export const sql = neon(process.env.DATABASE_URL!)

// Helper function to format dates consistently
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
