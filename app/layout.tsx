import type { Metadata } from "next"
import { Poppins, Playfair_Display } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { AnimatePresence } from "framer-motion"
import ScrollToTop from "./components/ScrollToTop"

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

const playfair = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Femack Security Limited",
  description: "Providing top-notch security solutions in Nigeria",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <ScrollToTop />
        <Header />
        <AnimatePresence mode="wait">
          <main className="min-h-screen">{children}</main>
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  )
}

