import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'blog home',
  description: 'a clean, responsive landing page for a blog with a contact form and newsletter signup.',
  keywords: ['web', 'app'],
  authors: [{ name: 'DUDE X Builder' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
