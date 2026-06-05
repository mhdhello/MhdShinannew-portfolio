"use client"

import type React from "react"

import { useState, useEffect, useRef, useLayoutEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { commands } from "@/lib/commands"
// import { BlogsPopup } from "@/lib/commands"
import { playSound } from "@/lib/sounds"

interface TerminalProps {
  onImageClick: (src: string) => void
  soundEnabled: boolean
}

export default function Terminal({ onImageClick, soundEnabled }: TerminalProps) {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<Array<{ command: string; output: React.ReactNode }>>([])
  const [isTyping, setIsTyping] = useState(false)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [hasShownSuggestions, setHasShownSuggestions] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const outputRef = useRef<HTMLDivElement>(null)
  const [outputKey, setOutputKey] = useState(0)
  // const [showBlogsPopup, setShowBlogsPopup] = useState(false)

  const availableCommands = Object.keys(commands)
  // Add aliases
  const commandAliases: Record<string, string> = { cls: "clear" }

  // Welcome message that should persist after clear
  const welcomeMessage = {
    command: "",
    output: (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="terminal-blue mb-4">
        <div className="text-xl font-bold mb-2 gradient-text-blue">Welcome to Mohamed Shinan's Portfolio</div>
        <div className="text-sm terminal-gray">Type 'help' to see available commands:</div>
        <div className="text-sm terminal-gray">Type '/' to see the Suggestion Box:</div>
        <div className="text-sm terminal-gray">Type 'clear' to clear the command line:</div>
        <div className="mt-2 text-xs terminal-red">
          Available Prompts: experience, education, certificates, projects, activities, documentation, contact
        </div>
      </motion.div>
    ),
  }

  useEffect(() => {
    setHistory([welcomeMessage])
    // Auto-show suggestions for new users after 1.5s
    const timer = setTimeout(() => {
      if (!hasShownSuggestions) {
        setSuggestions([...Object.keys(commands), ...Object.keys(commandAliases)])
        setHasShownSuggestions(true)
      }
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  useLayoutEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [outputKey])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInput(value)
    if (soundEnabled) {
      playSound("type")
    }

    const allCommands = [...availableCommands, ...Object.keys(commandAliases)]
    if (value === "/") {
      setSuggestions(allCommands)
      setHasShownSuggestions(true)
    } else if (value.trim() !== "") {
      const matches = allCommands.filter((cmd) => cmd.toLowerCase().startsWith(value.toLowerCase()))
      setSuggestions(matches.slice(0, 10))
      setHasShownSuggestions(true)
    } else {
      setSuggestions([])
    }
  }

  const executeCommand = async (cmd: string) => {
    setOutputKey((k) => k + 1)
    setIsTyping(true)
    if (soundEnabled) {
      playSound("command")
    }
    let command = cmd.toLowerCase().trim()
    if (commandAliases[command]) {
      command = commandAliases[command]
    }
    const newHistoryItem = { command: cmd, output: null }
    setHistory((prev) => [...prev, newHistoryItem])
    await new Promise((resolve) => setTimeout(resolve, 500))
    let output: React.ReactNode
    if (command === "clear") {
      setHistory([welcomeMessage])
      setIsTyping(false)
      return
    }
    if (command === "blogs") {
      if (typeof window !== "undefined") {
        window.open("/blogs", "_blank")
      }
      output = (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="terminal-blue">
          Opening blogs in a new tab...
        </motion.div>
      )
    } else if (command === "help") {
      // Show all commands and allow click/keyboard selection
      output = (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="terminal-blue">
          <div className="mb-3 font-bold text-lg gradient-text-blue">Available Commands:</div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[...availableCommands, ...Object.keys(commandAliases)].map((cmd, index) => (
              <motion.button
                key={cmd}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.07 }}
                className="terminal-white bg-blue-500/10 rounded-lg p-2 border border-blue-300/20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                tabIndex={0}
                onClick={() => {
                  setInput(cmd)
                  setSuggestions([])
                  inputRef.current?.focus()
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setInput(cmd)
                    setSuggestions([])
                    inputRef.current?.focus()
                  }
                }}
              >
                • {cmd}
              </motion.button>
            ))}
          </div>
          <div className="mt-2 text-xs terminal-gray">Click or press Enter/Space to select a command.</div>
        </motion.div>
      )
    } else if (commands[command]) {
      try {
        // Always show the full output from the start
        output = commands[command](onImageClick)
      } catch (error: any) {
        console.error(`Error executing command ${command}:`, error)
        output = (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="terminal-red">
            Error executing command: {error.message || "Unknown error"}.
          </motion.div>
        )
      }
    } else if (command === "whoami") {
      output = (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="terminal-yellow">
          <div className="shimmer-effect p-3 rounded-lg">
            shinan@portfolio:~$ Full Stack Developer & UI/UX Enthusiast ✨
          </div>
        </motion.div>
      )
    } else if (command === "npx shinan") {
      output = (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="terminal-purple">
          <div className="font-mono glass-card p-4 rounded-lg">
            <div className="gradient-text-blue">{"> npx shinan@latest"}</div>
            <br />
            <div className="terminal-cyan">{"Creating awesome web experiences..."}</div>
            <br />
            <div className="terminal-pink">{"✨ Magic happening... ✨"}</div>
          </div>
        </motion.div>
      )
    } else if (command === "matrix") {
      output = (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="terminal-green font-mono text-xs">
          {Array.from({ length: 10 }, (_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="shimmer-effect"
            >
              {Array.from({ length: 50 }, () => (Math.random() > 0.5 ? "1" : "0")).join("")}
            </motion.div>
          ))}
        </motion.div>
      )
    } else {
      output = (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="terminal-red">
          <div className="glass-card p-3 rounded-lg border border-red-300/20">
            Command not found: {cmd}. Type 'help' for available commands.
          </div>
        </motion.div>
      )
    }

    setHistory((prev) => prev.map((item, index) => (index === prev.length - 1 ? { ...item, output } : item)))
    setIsTyping(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      executeCommand(input)
      setInput("")
      setSuggestions([])
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion)
    setSuggestions([])
    inputRef.current?.focus()
  }

  return (
    <>
      {/* <BlogsPopup open={showBlogsPopup} onClose={() => setShowBlogsPopup(false)} /> */}
      <div className="h-full flex flex-col sm:flex-1 sm:static sm:bg-inherit bg-transparent max-w-full z-30">
        {/* Visible Help/Suggestions Button */}
        <div className="flex justify-end px-6 pt-2">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => {
              setSuggestions([...Object.keys(commands), ...Object.keys(commandAliases)])
              setHasShownSuggestions(true)
              inputRef.current?.focus()
            }}
            aria-label="Show Suggestions"
          >
            💡 Show Suggestions
          </button>
        </div>
        {/* Terminal Header */}
        <div className="terminal-header px-6 py-4 flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-400 rounded-full glow-animation"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full glow-animation" style={{ animationDelay: "0.5s" }}></div>
            <div className="w-3 h-3 bg-green-400 rounded-full glow-animation" style={{ animationDelay: "1s" }}></div>
          </div>
          <div className="terminal-blue text-sm ml-4 font-medium">shinan@portfolio:~</div>
        </div>

        {/* Terminal Output */}
        <div ref={outputRef} key={outputKey} className="flex-1 p-6 overflow-y-auto font-mono text-sm terminal-content">
          <AnimatePresence>
            {history.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
                {item.command && (
                  <div className="terminal-blue mb-3">
                    <span className="terminal-cyan font-semibold">shinan@portfolio:~$</span>
                    <span className="ml-2 terminal-white">{item.command}</span>
                  </div>
                )}
                {item.output && <div>{item.output}</div>}
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="terminal-yellow">
              <div className="flex items-center gap-2">
                <div className="loading-shimmer w-4 h-4 rounded"></div>
                Processing command...
              </div>
            </motion.div>
          )}
        </div>

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <div className="px-2 sm:px-6 py-3 glass-card mx-1 sm:mx-4 mb-4 rounded-lg">
            <div className="text-xs terminal-gray mb-2">💡 Suggestions:</div>
            <div
              className="flex flex-nowrap gap-x-2 gap-y-1 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100 md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:whitespace-normal md:gap-x-2 md:gap-y-2"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="glass-button text-xs px-3 py-2 rounded-lg text-white font-medium min-w-[110px] max-w-full md:max-w-[160px] lg:max-w-[200px]"
                  style={{ wordBreak: 'break-all', marginBottom: '2px' }}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Terminal Input */}
        <form onSubmit={handleSubmit} className="terminal-input p-4 pt-2 sm:p-6 sm:pt-4">
          <div className="flex flex-wrap items-center gap-3 glass-card p-3 sm:p-4 rounded-lg min-w-0">
            <span className="terminal-cyan font-semibold text-xs sm:text-sm break-all max-w-full">shinan@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={handleInputChange}
              className="flex-1 min-w-0 bg-transparent terminal-white font-mono outline-none placeholder-blue-300/50 text-xs sm:text-sm"
              placeholder="Type a command..."
              autoFocus
            />
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              className="w-2 h-5 bg-blue-400 rounded-sm"
            />
          </div>
        </form>
      </div>
    </>
  )
}
