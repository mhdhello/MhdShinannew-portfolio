import React from "react";
import { blogs } from "@/lib/blogs-data";
import Image from "next/image";

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-10 px-2 sm:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl font-bold gradient-text-blue mb-8 text-center">Blogs</h1>
        <section className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 justify-start items-stretch">
          {blogs.filter((blog) => !!blog.embed).map((blog, idx) => (
            <article
              key={idx}
              className="w-200 rounded-xl glass-card shadow-lg flex flex-col items-center p-0 hover:scale-[1.03] transition-transform border border-blue-400/10 bg-blue-900/60 overflow-hidden min-w-0 flex-1 h-full"
            >
              <h2 className="sr-only">LinkedIn Blog Post {idx + 1}</h2>
              <div className="w-200 py-8 rounded-xl flex items-center justify-center h-full min-w-0 flex-1">
                <div
                  className="w-full h-full rounded-xl min-w-0 flex-1"
                  style={{ minHeight: 200 }}
                  dangerouslySetInnerHTML={{ __html: blog.embed || "" }}
                  aria-label="LinkedIn post embed"
                  role="region"
                />
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
