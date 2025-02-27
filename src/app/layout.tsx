import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Resep Naks Kost",
  description: "Perut Kenyang, Gizi Kurang",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${poppins.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
