import NavMenu from '@/components/navMenu'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthProvider from '@/components/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Basic Social',
  description: 'Created with nextjs13 and prisma',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <NavMenu />
          <main>{children}</main>
        </body>
      </html>
    </AuthProvider>
  )
}
