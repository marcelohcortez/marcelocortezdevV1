import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Marcelo Cortez Dev',
  description: 'Development Simplified',
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
