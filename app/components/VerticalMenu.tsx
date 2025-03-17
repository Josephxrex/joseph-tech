"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu } from "lucide-react"

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/certifications", label: "Certifications" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
]

const VerticalMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const index = menuItems.findIndex((item) => item.href === pathname)
    setActiveIndex(index !== -1 ? index : 0)
  }, [pathname])

  const handleClick = (index: number) => {
    setActiveIndex(index)
    router.push(menuItems[index].href)
    setIsOpen(false)
  }

  return (
    <>
      <motion.div
        className="fixed left-4 top-4 w-12 h-12 rounded-full bg-white/10 cursor-pointer z-50 flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Menu className="text-white" size={24} />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-black to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="h-full flex flex-col justify-center items-start pl-8">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    className={`text-white text-2xl mb-6 ${index === activeIndex ? "font-bold" : "font-normal"}`}
                    onClick={() => handleClick(index)}
                    whileHover={{ x: 10, scale: 1.05 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default VerticalMenu

