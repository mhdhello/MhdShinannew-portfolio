"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Rocket, Briefcase, Download, Mail, Phone, MessageCircle, Github, Linkedin, MapPin } from "lucide-react"
import { 
  SiHtml5, 
  SiCss, 
  SiJavascript, 
  SiTypescript,
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiExpress, 
  SiFastapi,
  SiMongodb, 
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiFirebase, 
  SiTailwindcss, 
  SiDocker, 
  SiCloudflare,
  SiGithubactions,
  SiGit, 
  SiElectron,
  SiJest,
  SiWhatsapp,
} from "react-icons/si";
import { projects, skills } from "@/lib/data"
// import {  Mail, Phone, MapPin } from "lucide-react";

interface RightPanelProps {
  onImageClick: (src: string) => void
  activeSection: string
}

export default function RightPanel({ onImageClick, activeSection }: RightPanelProps) {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "m.mohamed.shinan@gmail.com",
      href: "mailto:m.mohamed.shinan@gmail.com",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      icon: SiWhatsapp,
      label: "WhatsApp",
      value: "+94 (76) 618-7001",
      href: "https://wa.me/+94766187001",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/shinanahmed",
      href: "https://github.com/MhdShinan",
      color: "text-gray-700 dark:text-gray-300",
      bgColor: "bg-gray-500/10",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/shinanahmed",
      href: "https://linkedin.com/in/shinanahmed",
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
    },
  ]

  const impactCards = [
    {
      title: "Production launches",
      value: "6+ products live",
      icon: Rocket,
      accent: "from-blue-500 to-sky-500",
    },
    {
      title: "Active users",
      value: "120+ daily customers",
      icon: Briefcase,
      accent: "from-violet-500 to-purple-500",
    },
    {
      title: "Cloud infrastructure",
      value: "AWS · Docker · CI/CD",
      icon: Github,
      accent: "from-cyan-500 to-blue-600",
    },
  ]

  const featuredProjects = projects.slice(0, 4)
  const primarySkills = skills.slice(0, 12)

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/Mohamed%20Shinan%20resume.pdf"
    link.download = "Mohamed Shinan resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }


  return (
    <div className="h-full p-4 lg:p-6 overflow-y-auto sm:flex-1">
      <div className="space-y-6 lg:space-y-8 lg:pt-4">
        {activeSection === "home" && (
          <>
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
            <div className="glass-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/85 p-6 shadow-2xl shadow-slate-900/5 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-950/75">
              <div className="absolute right-10 top-8 h-48 w-48 rounded-full bg-blue-400/20 blur-3xl" />
              <div className="absolute left-6 bottom-10 h-32 w-32 rounded-full bg-sky-500/10 blur-3xl" />
              <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-start">
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100/90 px-4 py-2 text-sm font-semibold text-blue-700 dark:border-blue-900 dark:bg-blue-400/10 dark:text-blue-300">
                    <Rocket size={18} />
                    Trusted by startups and enterprise teams
                  </div>

                  <div className="space-y-6">
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                      I build high-impact web products with modern UI and cloud-ready performance.
                    </h1>
                    <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
                      I create polished digital experiences for B2B and consumer platforms, combining frontend excellence with reliable backend architecture and deployment pipelines.
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                      <div className="rounded-3xl border border-slate-200/70 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 dark:border-slate-700 dark:bg-slate-900 dark:text-white">
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Primary stack</p>
                        <p className="mt-3">Next.js · React · TypeScript</p>
                      </div>
                      <div className="rounded-3xl border border-slate-200/70 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-1 hover:border-purple-300 dark:border-slate-700 dark:bg-slate-900 dark:text-white">
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Cloud & DevOps</p>
                        <p className="mt-3">AWS · Docker · GitHub Actions</p>
                      </div>
                      <div className="rounded-3xl border border-slate-200/70 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 dark:border-slate-700 dark:bg-slate-900 dark:text-white">
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Delivery focus</p>
                        <p className="mt-3">Product quality, speed and reliability</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap gap-3">
                      {contactInfo.map((contact) => {
                        const Icon = contact.icon as any
                        return (
                          <a
                            key={contact.label}
                            href={contact.href}
                            target={contact.href.startsWith("http") ? "_blank" : undefined}
                            rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-blue-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
                          >
                            {Icon ? <Icon size={18} className={contact.color} /> : null}
                            {contact.label}
                          </a>
                        )
                      })}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={handleDownloadCV}
                        className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-700"
                      >
                        Download CV
                      </button>
                      <a
                        href="mailto:m.mohamed.shinan@gmail.com"
                        className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-blue-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
                      >
                        Book a consultation
                      </a>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="rounded-[2rem] border border-slate-200/70 bg-slate-50 p-6 shadow-lg shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-950/80"
                >
                  <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                    <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-500 opacity-20" />
                    <div className="relative flex flex-col items-center gap-5 text-center">
                      <div className="relative h-32 w-32 overflow-hidden rounded-full border border-white shadow-xl">
                        <Image
                          src="/my1.jpg"
                          alt="Mohamed Shinan"
                          fill
                          className="object-cover"
                          sizes="128px"
                        />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-slate-900 dark:text-white">Mohamed Shinan</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Full Stack Developer · DevOps Engineer</p>
                      </div>
                      <div className="grid w-full gap-3 text-left text-sm text-slate-600 dark:text-slate-300">
                        <div className="rounded-2xl bg-slate-100 px-4 py-3 dark:bg-slate-900">
                          <span className="font-semibold text-slate-900 dark:text-white">Based in Sri Lanka</span> · Remote-friendly
                        </div>
                        <div className="rounded-2xl bg-slate-100 px-4 py-3 dark:bg-slate-900">
                          Delivering polished products for scale, performance, and security.
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid gap-4 md:grid-cols-3"
            >
              {impactCards.map((impact) => {
                const Icon = impact.icon as any
                return (
                  <div key={impact.title} className="rounded-[1.75rem] border border-slate-200/70 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-950/80">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br ${impact.accent} text-white shadow-lg`}>
                      {Icon ? <Icon size={20} /> : null}
                    </div>
                    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">{impact.title}</p>
                    <p className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{impact.value}</p>
                  </div>
                )
              })}
            </motion.div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 lg:space-y-6"
          >
            <div className="glass-card rounded-2xl p-4 lg:p-8 shadow-lg">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white">Featured Projects</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
                    A selection of recent applications delivered with strong UX, robust backend architecture, and enterprise-ready deployment.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">Next.js</span>
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 dark:bg-slate-900 dark:text-slate-200">AWS</span>
                </div>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {featuredProjects.map((project, idx) => (
                  <motion.a
                    key={project.name}
                    href={project.link || '#'}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className="group overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/90 p-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-950/80"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Project</p>
                        <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{project.name}</h3>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-100 text-blue-700 transition group-hover:bg-blue-200 dark:bg-blue-500/10 dark:text-blue-300">
                        <Briefcase size={18} />
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span key={tech} className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 lg:space-y-6"
          >
            <div className="glass-card rounded-2xl p-4 lg:p-8 shadow-lg">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4 lg:mb-6">Core Expertise</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {primarySkills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * idx }}
                    whileHover={{ y: -3 }}
                    className="rounded-[1.75rem] border border-slate-200/70 bg-white/90 p-5 shadow-sm transition hover:shadow-xl dark:border-slate-700 dark:bg-slate-950/80"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-100 text-2xl dark:bg-slate-900">
                        {skill.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{skill.name}</h3>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 lg:space-y-6"
          >
            <div className="glass-card rounded-2xl p-4 lg:p-8 shadow-lg">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-sm uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">Work with me</p>
                  <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">Let’s bring your next idea to life.</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    I partner with startups and businesses looking for dependable engineering, strong product design, and smooth launches.
                  </p>
                </div>
                <div className="grid w-full max-w-md gap-3 sm:grid-cols-2">
                  <a
                    href="mailto:m.mohamed.shinan@gmail.com"
                    className="rounded-3xl bg-blue-600 px-5 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:bg-blue-700"
                  >
                    Start a project
                  </a>
                  <button
                    onClick={handleDownloadCV}
                    className="rounded-3xl border border-slate-300 bg-white px-5 py-4 text-sm font-semibold text-slate-900 shadow-sm transition duration-300 hover:border-blue-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
                  >
                    Download resume
                  </button>
                </div>
              </div>
            </div>
          </motion.section>
          </>
        )}
      </div>
    </div>
  )
}
