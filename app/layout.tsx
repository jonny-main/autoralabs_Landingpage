import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AutoraLabs | Outcome-Driven Solutions',
  description: 'Transform your business with our outcome-driven approach. Achieve measurable results faster.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  )
}
