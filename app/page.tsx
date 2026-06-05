"use client"

import { useState } from "react"
import Head from "next/head"
import Terminal from "@/components/terminal"
import RightPanel from "@/components/right-panel"
import BinaryBackground from "@/components/binary-background"
import ImageModal from "@/components/image-modal"
import ParticleBackground from "@/components/particle-background"
import Navbar from "@/components/navbar"

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [activeSection, setActiveSection] = useState("home")

  const handleImageClick = (src: string) => {
    if (src && !src.includes("placeholder.svg")) {
      setSelectedImage(src)
    }
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  return (
    <>
      <Head>
        <title>Mohamed Shinan - Full Stack Developer | Interactive Terminal Portfolio</title>
        <meta name="description" content="Explore Mohamed Shinan's interactive terminal portfolio, featuring full-stack projects, blogs, and advanced UI/UX." />
        <meta name="keywords" content="Mohamed Shinan, Full Stack Developer, Portfolio, Next.js, Blogs, Projects, UI/UX, Terminal" />
        <meta name="author" content="Mohamed Shinan" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://my-new-portfolio-jade-ten.vercel.app/" />
        <meta property="og:title" content="Mohamed Shinan - Full Stack Developer | Interactive Terminal Portfolio" />
        <meta property="og:description" content="Explore Mohamed Shinan's interactive terminal portfolio, featuring full-stack projects, blogs, and advanced UI/UX." />
        <meta property="og:image" content="/my1.jpg" />
        <meta property="og:site_name" content="Mohamed Shinan Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://my-new-portfolio-jade-ten.vercel.app/" />
        <meta name="twitter:title" content="Mohamed Shinan - Full Stack Developer | Interactive Terminal Portfolio" />
        <meta name="twitter:description" content="Explore Mohamed Shinan's interactive terminal portfolio, featuring full-stack projects, blogs, and advanced UI/UX." />
        <meta name="twitter:image" content="/my1.jpg" />
        <link rel="canonical" href="https://my-new-portfolio-jade-ten.vercel.app/" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Mohamed Shinan",
          "url": "https://my-new-portfolio-jade-ten.vercel.app/",
          "sameAs": [
            "https://www.linkedin.com/in/mohamedshinan/"
          ],
          "description": "Full Stack Developer portfolio with interactive terminal, blogs, and advanced UI/UX."
        }` }} />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-100 to-blue-200 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900 relative overflow-hidden">
        <BinaryBackground />
        <ParticleBackground />

        {/* Advanced Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-transparent to-sky-400/10 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl pointer-events-none animate-pulse delay-1000" />
        {
          <Navbar
            // activeSection={activeSection}
            // setActiveSection={setActiveSection}
            soundEnabled={soundEnabled}
            setSoundEnabled={setSoundEnabled}
          />}

        {/* Mobile Layout - Stacked with Better Scrolling */}
        <div className="lg:hidden relative z-10 flex flex-col h-screen">
          {/* Home Content Panel - Top on Mobile */}
          <div className="flex-1 p-3 pb-1 overflow-hidden">
            <div className="h-full glass-panel rounded-2xl shadow-2xl">
              <RightPanel onImageClick={handleImageClick} activeSection={activeSection} />
            </div>
          </div>

          {/* Terminal Panel - Bottom on Mobile */}
          <div className="flex-1 p-3 pt-1 pb-20 overflow-hidden">
            <div className="h-full glass-terminal rounded-2xl shadow-2xl">
              <Terminal onImageClick={handleImageClick} soundEnabled={soundEnabled} />
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by Side (RightPanel on Left, Terminal on Right) */}
        <div className="hidden lg:flex relative z-10 h-screen">
          {/* Content Panel - Left Side on Desktop */}
          <div className="w-1/2 xl:w-3/5 h-full p-4 flex flex-col">
            <div className="h-full glass-panel rounded-2xl overflow-hidden shadow-2xl flex flex-col">
              <RightPanel onImageClick={handleImageClick} activeSection={activeSection} />
            </div>
          </div>

          {/* Terminal Panel - Right Side on Desktop */}
          <div className="w-1/2 xl:w-2/5 h-full p-4 flex flex-col">
            <div className="h-full glass-terminal rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:grid-cols-3">
              <Terminal onImageClick={handleImageClick} soundEnabled={soundEnabled} />
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && <ImageModal src={selectedImage || "/placeholder.svg"} onClose={handleCloseModal} />}
      </div>
    </>
  )
}
