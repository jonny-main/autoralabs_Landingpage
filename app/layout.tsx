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
        {/* Hidden form for Netlify form detection during build */}
        <form
          name="audit-request"
          data-netlify="true"
          netlify-honeypot="bot-field"
          hidden
        >
          <input type="hidden" name="form-name" value="audit-request" />
          <input type="hidden" name="bot-field" />
          <input type="text" name="first_name" />
          <input type="text" name="last_name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <input type="url" name="company_website" />
        </form>
        
        {children}
      </body>
    </html>
  )
}
