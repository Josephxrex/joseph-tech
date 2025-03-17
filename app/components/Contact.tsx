"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

const contactItems = [
  { icon: Github, label: "GitHub", href: "https://github.com/josephxrex" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/joseph-efrain-camargo-8a8983235/" },
  { icon: Mail, label: "Email", href: "mailto:efraincamargo01@gmail.com" },
]

export function Contact() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center ">
      <motion.div
        className={"rounded-b-3xl overflow-hidden bg-white text-gray-900 shadow-lg"}
        initial={{ height: "2rem", width: "12rem" }}
        animate={{
          height: isOpen ? "auto" : "2rem",
          width: isOpen ? "24rem" : "12rem",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.div
          className="h-8 flex items-center justify-center gap-10 px-4 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
            ▼
          </motion.div>
          <motion.div className="text-sm font-medium" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {isOpen ? "Close" : "Contact"}
          </motion.div>
        </motion.div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6"
            >
              <div className="text-lg font-medium mb-4">Get in touch</div>
              <div className="text-sm text-gray-500 mb-6">
                Feel free to reach out to me for any inquiries or opportunities.
              </div>
              <div className="grid grid-cols-3 gap-6">
                {contactItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center justify-center p-4 rounded-lg transition-colors duration-300 ${"hover:bg-gray-100"
                      }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <item.icon size={24} className="mb-2" />
                    <span className="text-sm">{item.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}


