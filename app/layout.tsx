import './globals.css';
import { Inter, Oswald } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Marcelo Cortez Dev',
  description: 'Descomplicar para desenvolver',
  icons: {
    icon: {
      url: "/assets/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/assets/favicon.png", type: "image/png" },
  },
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
