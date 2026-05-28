import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Providers from "@/components/providers"
import { BRAND_NAME, BRAND_TAGLINE } from "@/lib/brand"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: BRAND_NAME,
  description: BRAND_TAGLINE,
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers brand={{ name: BRAND_NAME, tagline: BRAND_TAGLINE }}>
          {children}
        </Providers>
      </body>
    </html>
  )
}
