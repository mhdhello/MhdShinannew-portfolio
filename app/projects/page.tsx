import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects | Mohamed Shinan - Full Stack Developer",
  description: "Explore the portfolio projects of Mohamed Shinan, including full-stack, cloud, and UI/UX work.",
  openGraph: {
    title: "Projects | Mohamed Shinan - Full Stack Developer",
    description: "Explore the portfolio projects of Mohamed Shinan, including full-stack, cloud, and UI/UX work.",
    url: "https://my-new-portfolio-jade-ten.vercel.app/projects",
    siteName: "Mohamed Shinan Portfolio",
    images: [
      {
        url: "/my1.jpg",
        width: 800,
        height: 600,
        alt: "Mohamed Shinan Portfolio Projects Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Mohamed Shinan - Full Stack Developer",
    description: "Explore the portfolio projects of Mohamed Shinan, including full-stack, cloud, and UI/UX work.",
    images: ["/my1.jpg"],
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-10 px-2 sm:px-8">
      <div className="max-w-5xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl font-bold gradient-text-blue mb-8 text-center">Projects</h1>
        <section>
          {/* Example project card, replace with your real data */}
          <article className="glass-card rounded-xl shadow-lg p-6 mb-8 border border-blue-400/10 bg-blue-900/60">
            <h2 className="text-2xl font-semibold mb-2">Portfolio Terminal</h2>
            <p className="mb-2">A Next.js interactive terminal portfolio with advanced UI, PDF preview/download, and blog integration.</p>
            <ul className="list-disc pl-5 mb-2 text-blue-100 text-sm">
              <li>Built with Next.js, Tailwind CSS, Framer Motion</li>
              <li>PDF documentation preview and download</li>
              <li>Blogs popup and LinkedIn embed support</li>
            </ul>
            <img src="/my1.jpg" alt="Portfolio Terminal Screenshot" className="rounded-lg w-full max-w-md mx-auto mb-2" />
            <a href="https://my-new-portfolio-jade-ten.vercel.app/" className="text-blue-400 underline" target="_blank" rel="noopener">View Live</a>
            <script type="application/ld+json">{`
              {
                "@context": "https://schema.org",
                "@type": "CreativeWork",
                "name": "Portfolio Terminal",
                "description": "A Next.js interactive terminal portfolio with advanced UI, PDF preview/download, and blog integration.",
                "url": "https://my-new-portfolio-jade-ten.vercel.app/",
                "image": "/my1.jpg",
                "author": {
                  "@type": "Person",
                  "name": "Mohamed Shinan"
                }
              }
            `}</script>
          </article>
        </section>
      </div>
    </main>
  );
}
