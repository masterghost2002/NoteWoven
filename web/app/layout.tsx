import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const inter = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NoteWoven',
  description: "Welcome to NoteWoven, an open-source note-taking and to-do app inspired by the functionality of Notion and Trello. NoteWoven seamlessly combines the flexibility of note-taking with the organization of task management, all in a sleek, user-friendly interface",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


