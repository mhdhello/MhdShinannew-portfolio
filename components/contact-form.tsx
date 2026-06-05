"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react"

export default function ContactForm() {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const questions = [
    { field: "name", question: "What's your name?", placeholder: "Enter your name..." },
    { field: "email", question: "What's your email address?", placeholder: "Enter your email..." },
    { field: "subject", question: "What would you like to discuss?", placeholder: "Enter your message..." },
  ]

  const handleSubmit = async (value: string) => {
    const currentField = questions[step].field as keyof typeof formData
    setFormData((prev) => ({ ...prev, [currentField]: value }))

    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      setIsSubmitting(true)
      // Simulate sending
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsSubmitting(false)
      setIsComplete(true)
    }
  }

  if (isComplete) {
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="text-green-400 text-xl font-bold">Message Sent! ✨</div>
        <div className="text-gray-300">
          Thanks {formData.name}! I'll get back to you soon at {formData.email}.
        </div>

        {/* Contact Info */}
        

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-gray-800/50 rounded-lg p-4 border border-gray-700"
        >
          <div className="flex items-center gap-2 text-red-400 mb-3">
            <MapPin size={16} />
            <span className="font-semibold">Location</span>
          </div>
          <div className="bg-gray-700 rounded overflow-hidden flex items-center justify-center text-gray-400" style={{ height: 192 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2035508246054!2d80.66989491057903!3d7.331021892646815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae36700655068f1%3A0xb8241083d18fc4f4!2sshinan!5e0!3m2!1sen!2slk!4v1753952858799!5m2!1sen!2slk"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </motion.div>
    )
  }

  if (isSubmitting) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-yellow-400 text-center py-8">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="inline-block mb-4"
        >
          ⚡
        </motion.div>
        <div>Sending your message...</div>
      </motion.div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
      <h3 className="text-xl font-bold text-pink-400 mb-4">Get In Touch</h3>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-gray-800/50 rounded-lg p-4 border border-gray-700"
        >
          <div className="text-white mb-3">{questions[step].question}</div>
          <ContactInput placeholder={questions[step].placeholder} onSubmit={handleSubmit} multiline={step === 2} />

          {/* Progress */}
          <div className="flex gap-2 mt-4">
            {questions.map((_, index) => (
              <div key={index} className={`h-1 flex-1 rounded ${index <= step ? "bg-pink-400" : "bg-gray-600"}`} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Previous answers */}
      {step > 0 && (
        <div className="space-y-2">
          {questions.slice(0, step).map((q, index) => (
            <div key={index} className="text-sm text-gray-400">
              <span className="text-pink-400">{q.question}</span>
              <div className="text-white ml-4">{formData[q.field as keyof typeof formData]}</div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}

interface ContactInputProps {
  placeholder: string
  onSubmit: (value: string) => void
  multiline?: boolean
}

function ContactInput({ placeholder, onSubmit, multiline = false }: ContactInputProps) {
  const [value, setValue] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (value.trim()) {
      onSubmit(value.trim())
      setValue("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-pink-400 outline-none resize-none"
          rows={3}
          autoFocus
        />
      ) : (
        <input
          type={placeholder.includes("email") ? "email" : "text"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-pink-400 outline-none"
          autoFocus
        />
      )}
      <button type="submit" className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded transition-colors">
        →
      </button>
    </form>
  )
}
