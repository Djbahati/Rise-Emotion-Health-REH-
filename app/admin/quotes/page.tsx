import { getAllQuotes, deleteQuote } from "@/app/actions/quotes"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatDate } from "@/lib/db"
import { Trash } from "lucide-react"

export default async function QuotesAdminPage() {
  const quotes = await getAllQuotes()

  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="space-y-0.5">
          <h1 className="text-2xl font-bold tracking-tight">Quotes Management</h1>
          <p className="text-muted-foreground">View and manage inspirational quotes.</p>
        </div>

        <div className="grid gap-4">
          {quotes.length === 0 ? (
            <Card>
              <CardContent className="p-6 text-center">
                <p>No quotes found. Add some quotes to get started.</p>
              </CardContent>
            </Card>
          ) : (
            quotes.map((quote) => (
              <Card key={quote.id} className="border-2">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{quote.author || "Unknown"}</CardTitle>
                    <form
                      action={async () => {
                        "use server"
                        await deleteQuote(quote.id)
                      }}
                    >
                      <Button variant="ghost" size="icon" className="text-destructive">
                        <Trash className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </form>
                  </div>
                  <p className="text-xs text-muted-foreground">Added on {formatDate(quote.created_at)}</p>
                </CardHeader>
                <CardContent>
                  <blockquote className="border-l-4 border-border pl-4 italic">
                    <p>{quote.content}</p>
                  </blockquote>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
