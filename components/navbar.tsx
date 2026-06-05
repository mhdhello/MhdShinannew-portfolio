// app/components/navbar.tsx
"use client"

import { motion } from "framer-motion"
import { Volume2, VolumeX, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface NavbarProps {
  soundEnabled: boolean
  setSoundEnabled: (enabled: boolean) => void
}

export default function Navbar({ soundEnabled, setSoundEnabled }: NavbarProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Floating Buttons */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
        {/* Sound Toggle */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="glass-button p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          title={soundEnabled ? "Mute sounds" : "Enable sounds"}
        >
          {soundEnabled ? (
            <Volume2 size={20} className="text-blue-600 group-hover:text-blue-700 transition-colors" />
          ) : (
            <VolumeX size={20} className="text-gray-500 group-hover:text-gray-600 transition-colors" />
          )}
        </motion.button>

        {/* Theme Toggle */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="glass-button p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? (
            <Sun size={20} className="text-yellow-500 group-hover:text-yellow-600 transition-colors" />
          ) : (
            <Moon size={20} className="text-blue-600 group-hover:text-blue-700 transition-colors" />
          )}
        </motion.button>
      </div>
    </>
  )
}
