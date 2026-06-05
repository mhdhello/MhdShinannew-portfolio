"use client"

import { Volume2, VolumeX } from "lucide-react"
import { motion } from "framer-motion"

interface SoundToggleProps {
  enabled: boolean
  onToggle: (enabled: boolean) => void
}

export default function SoundToggle({ enabled, onToggle }: SoundToggleProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onToggle(!enabled)}
      className="glass-button p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
      title={enabled ? "Mute sounds" : "Enable sounds"}
    >
      {enabled ? (
        <Volume2 size={20} className="text-blue-600 group-hover:text-blue-700 transition-colors" />
      ) : (
        <VolumeX size={20} className="text-gray-500 group-hover:text-gray-600 transition-colors" />
      )}
    </motion.button>
  )
}
