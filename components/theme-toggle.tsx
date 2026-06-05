"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="glass-button p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <Sun size={20} className="text-yellow-500 group-hover:text-yellow-600 transition-colors" />
      ) : (
        <Moon size={20} className="text-blue-600 group-hover:text-blue-700 transition-colors" />
      )}
    </motion.button>
  )
}
