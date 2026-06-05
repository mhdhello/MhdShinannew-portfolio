import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mohamed Shinan - Full Stack Developer",
  description: "Interactive terminal portfolio showcasing full-stack development skills and projects by Mohamed Shinan.",
  icons: {
    icon: "/favicon.ico",
  },
  generator: 'Mohamamed shinan',
  openGraph: {
    title: "Mohamed Shinan - Full Stack Developer",
    description: "Interactive terminal portfolio showcasing full-stack development skills and projects by Mohamed Shinan.",
    url: "https://my-new-portfolio-jade-ten.vercel.app/",
    siteName: "Mohamed Shinan Portfolio",
    images: [
      {
        url: "/my1.jpg",
        width: 800,
        height: 600,
        alt: "Mohamed Shinan Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Shinan - Full Stack Developer",
    description: "Interactive terminal portfolio showcasing full-stack development skills and projects by Mohamed Shinan.",
    site: "@yourtwitterhandle",
    creator: "@yourtwitterhandle",
    images: ["/my1.jpg"],
  },
  metadataBase: new URL("https://my-new-portfolio-jade-ten.vercel.app/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Basic Meta */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#10172a" />
        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://my-new-portfolio-jade-ten.vercel.app/" />
        <meta property="og:title" content="Mohamed Shinan - Full Stack Developer" />
        <meta property="og:description" content="Interactive terminal portfolio showcasing full-stack development skills and projects by Mohamed Shinan." />
        <meta property="og:image" content="/my1.jpg" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://my-new-portfolio-jade-ten.vercel.app/" />
        <meta name="twitter:title" content="Mohamed Shinan - Full Stack Developer" />
        <meta name="twitter:description" content="Interactive terminal portfolio showcasing full-stack development skills and projects by Mohamed Shinan." />
        <meta name="twitter:image" content="/my1.jpg" />
        {/* WhatsApp uses Open Graph tags */}
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
