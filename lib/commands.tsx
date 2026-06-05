// BLOGS DATA

"use client"
import React, { useState } from "react";
import { X } from "lucide-react"

import { motion } from "framer-motion"
import { Calendar, MapPin, Award, BookOpen, Code, Download, Eye } from "lucide-react"
import { experience, education, collages as certificates, projects, activities } from "./data"
import { blogs } from "./blogs-data"
import ContactForm from "@/components/contact-form"
import Image from "next/image"

export function PDFModal({ pdf, onClose }: { pdf: string, onClose: () => void }) {
  if (!pdf) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full p-0 relative animate-fadeIn">
        <button
          className="absolute top-2 right-2 text-gray-700 hover:text-red-500 p-2 rounded-full bg-gray-100"
          onClick={onClose}
          aria-label="Close PDF preview"
        >
          <X size={24} />
        </button>
        <iframe
          src={pdf}
          className="w-full h-[70vh] rounded-b-lg border-0"
          title="PDF Preview"
        />
      </div>
    </div>
  );
}

// Documentation topics: add your PDFs and descriptions here
const documentationTopics = [
  {
    title: "CI/CD Pipeline Guide for React & Node.js on AWS EC2",
    description: "A step-by-step deployment guide using GitHub Actions, AWS CodePipeline, CodeBuild, and CodeDeploy to automate building and deploying full-stack applications on EC2. Includes CLI usage, workflow examples, and visual structure for a professional DevOps setup.",
    pdf: "/Documentation/Hosting_React_Django_on_AWS_EC2_Guide.pdf"
  },
  {
    title: "Hosting React & Django on AWS EC2: Complete Deployment Guide",
    description: "A practical end-to-end guide to deploying a full-stack React frontend and Django backend on AWS EC2, including server setup, Gunicorn and Nginx configuration, and securing with SSL.",
    pdf: "/Documentation/Hosting_React_Node_on_AWS_EC2_Guide.pdf"
  },
];

function DocumentationSection() {
  const [pdfToPreview, setPdfToPreview] = useState<string | null>(null);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h3 className="text-xl font-bold text-orange-400 mb-4">
          Documentation & Resources
        </h3>
        <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 space-y-6">
          <div className="space-y-3">
            <div className="text-white">
              <strong>Project Documentation:</strong>
            </div>
            <div className="space-y-4">
              {documentationTopics.map((doc, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900/60 rounded-lg p-5 border border-gray-700 flex flex-col gap-3 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="text-lg font-semibold text-orange-300">
                    {doc.title}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {doc.description}
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={async () => {
                        const response = await fetch(doc.pdf);
                        const blob = await response.blob();
                        const url = window.URL.createObjectURL(blob);
                        const a = document.createElement("a");
                        a.href = url;
                        a.download = doc.pdf.split("/").pop() || "document.pdf";
                        document.body.appendChild(a);
                        a.click();
                        setTimeout(() => {
                          window.URL.revokeObjectURL(url);
                          document.body.removeChild(a);
                        }, 100);
                      }}
                      className="p-3 rounded-full bg-green-600 hover:bg-green-500 text-white shadow-md transition duration-200"
                      title="Download PDF"
                    >
                      <Download size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}



// Add blogs command: opens popup, not shown in template
export const commands: Record<string, (onImageClick?: (src: string) => void, onDocPreview?: (pdf: string) => void, onBlogsPopup?: () => void) => React.ReactNode> = {
  experience: (onImageClick) => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
      <h3 className="text-xl font-bold text-blue-400 mb-4">Work Experience</h3>
      {experience.map((exp, index: number) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-gray-800/50 rounded-lg p-4 border border-gray-700"
        >
          <div className="flex items-start gap-4">
            {exp.image && (
              <div className="flex-shrink-0 flex items-center justify-center h-20 w-20 bg-gray-900 rounded mr-2">
                <Image
                  src={exp.image || "/placeholder.svg"}
                  alt={exp.title}
                  width={64}
                  height={64}
                  className="rounded object-contain h-16 w-16 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => onImageClick?.(exp.image!)}
                />
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-start gap-2">
                <div className="text-blue-400 mt-1">
                  <Code size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{exp.title}</h4>
                  <p className="text-blue-300">{exp.company}</p>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mt-2">{exp.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  ),

  education: (onImageClick) => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
      <h3 className="text-xl font-bold text-green-400 mb-4">Education</h3>
      {education.map((edu, index: number) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-gray-800/50 rounded-lg p-4 border border-gray-700"
        >
          <div className="flex items-start gap-4">
            {edu.image && (
              <div className="flex-shrink-0 flex items-center justify-center h-20 w-20 bg-gray-900 rounded mr-2">
                <Image
                  src={edu.image || "/placeholder.svg"}
                  alt={edu.school}
                  width={64}
                  height={64}
                  loading="lazy"
                  className="rounded object-contain h-16 w-16 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => onImageClick?.(edu.image!)}
                />
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-start gap-2">
                <div className="text-green-400 mt-1">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{edu.degree}</h4>
                  <p className="text-green-300">{edu.school}</p>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                    {edu.gpa && <span>• GPA: {edu.gpa}</span>}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mt-2">{edu.description}</p>
              {Array.isArray(edu.subImages) && edu.subImages.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {edu.subImages.filter(sub => sub && sub.trim() !== "").map((sub, i) => (
                    <Image
                      key={i}
                      src={sub}
                      alt={edu.school + ' certificate'}
                      width={40}
                      height={40}
                      loading="lazy"
                      className="rounded object-contain bg-white border cursor-pointer hover:opacity-80"
                      onClick={() => onImageClick?.(sub)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  ),

  certificates: (onImageClick) => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
      <h3 className="text-xl font-bold text-yellow-400 mb-4">Certificates & Achievements</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certificates.map((cert, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800/50 rounded-lg p-4 border border-gray-700"
          >
            <div className="flex items-start gap-3">
              <div className="text-yellow-400 mt-1">
                <Award size={20} />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-semibold">{cert.name}</h4>
                <p className="text-yellow-300">{cert.issuer}</p>
                <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                  <Calendar size={14} />
                  <span>{cert.date}</span>
                </div>
                {/* No cert.image in collages, so skip main image display */}
                {Array.isArray(cert.subImages) && cert.subImages.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {cert.subImages
                      .filter((sub: string) => sub && sub.trim() !== "")
                      .map((sub: string, i: number) => (
                        <Image
                          key={i}
                          src={sub}
                          alt={cert.name + ' certificate'}
                          width={40}
                          height={40}
                          loading="lazy"
                          className="rounded object-contain bg-white border cursor-pointer hover:opacity-80"
                          onClick={() => onImageClick?.(sub)}
                        />
                      ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  ),

  projects: (onImageClick) => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
      <h3 className="text-xl font-bold text-purple-400 mb-4">Featured Projects</h3>
      {projects.map((project, index: number) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-gray-800/50 rounded-lg p-4 border border-gray-700"
        >
          <div className="flex items-start gap-3">
            <div className="text-purple-400 mt-1">
              <Code size={20} />
            </div>
            <div className="flex-1">
              <h4 className="text-white font-semibold">{project.name}</h4>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              {project.image && (
                <div className="mt-3">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    width={300}
                    height={180}
                    className="rounded cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => onImageClick?.(project.image!)}
                  />
                </div>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-purple-400 hover:text-purple-300 text-sm"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  ),

  activities: (onImageClick) => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
      <h3 className="text-xl font-bold text-cyan-400 mb-4">Activities & Involvement</h3>
      {activities.map((activity, index: number) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-gray-800/50 rounded-lg p-4 border border-gray-700"
        >
          <div className="flex items-start gap-3">
            <div className="text-cyan-400 mt-1">
              <BookOpen size={20} />
            </div>
            <div className="flex-1">
              <h4 className="text-white font-semibold">{activity.title}</h4>
              <p className="text-cyan-300">{activity.organization}</p>
              <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                <Calendar size={14} />
                <span>{activity.period}</span>
              </div>
              <p className="text-gray-300 mt-2">{activity.description}</p>
              {activity.image && (
                <div className="mt-3">
                  <Image
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    width={200}
                    height={120}
                    className="rounded cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => onImageClick?.(activity.image!)}
                  />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  ),

  documentation: () => <DocumentationSection />, 

  blogs: (_onImageClick, _onDocPreview, onBlogsPopup) => {
    // Only trigger popup, do not render in template
    if (onBlogsPopup) onBlogsPopup();
    return null;
  },

  contact: () => <ContactForm />,
}
