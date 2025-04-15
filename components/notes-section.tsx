"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Save, Search, Trash } from "lucide-react"

export function NotesSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [newNoteTitle, setNewNoteTitle] = useState("")
  const [newNoteContent, setNewNoteContent] = useState("")

  // Sample notes - in a real app, these would come from your API
  const notes = [
    {
      id: 1,
      title: "Therapy Session Notes",
      content:
        "Today we discussed coping strategies for anxiety. The therapist suggested practicing mindfulness for 10 minutes each day.",
      date: "April 8, 2025",
    },
    {
      id: 2,
      title: "Morning Reflection",
      content:
        "I woke up feeling refreshed after trying the new sleep routine. I noticed less rumination and more clarity in my thoughts.",
      date: "April 7, 2025",
    },
    {
      id: 3,
      title: "Gratitude List",
      content:
        "1. Supportive friends\n2. Access to mental health resources\n3. Progress in my emotional regulation\n4. Beautiful weather today\n5. My favorite book",
      date: "April 5, 2025",
    },
  ]

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleCreateNote = () => {
    if (newNoteTitle.trim() && newNoteContent.trim()) {
      // In a real app, this would send the new note to your API
      alert("Note created!")
      setNewNoteTitle("")
      setNewNoteContent("")
    }
  }

  return (
    <Tabs defaultValue="all-notes" className="space-y-4">
      <div className="flex justify-between items-center">
        <TabsList>
          <TabsTrigger value="all-notes">All Notes</TabsTrigger>
          <TabsTrigger value="create-note">Create Note</TabsTrigger>
        </TabsList>
        <div className="relative w-[200px]">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search notes..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <TabsContent value="all-notes" className="space-y-4">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <Card key={note.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{note.title}</h3>
                  <span className="text-xs text-muted-foreground">{note.date}</span>
                </div>
                <p className="text-sm whitespace-pre-line">{note.content}</p>
                <div className="flex justify-end gap-2 mt-4">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button variant="destructive" size="sm">
                    <Trash className="h-4 w-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No notes found</p>
            <Button variant="outline" className="mt-4">
              <Plus className="h-4 w-4 mr-2" />
              Create Your First Note
            </Button>
          </div>
        )}
      </TabsContent>

      <TabsContent value="create-note" className="space-y-4">
        <Card>
          <CardContent className="p-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="note-title">Title</Label>
              <Input
                id="note-title"
                placeholder="Note title"
                value={newNoteTitle}
                onChange={(e) => setNewNoteTitle(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="note-content">Content</Label>
              <Textarea
                id="note-content"
                placeholder="Write your note here..."
                className="min-h-[200px]"
                value={newNoteContent}
                onChange={(e) => setNewNoteContent(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <Button onClick={handleCreateNote}>
                <Save className="h-4 w-4 mr-2" />
                Save Note
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
