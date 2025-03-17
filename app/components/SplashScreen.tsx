"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

interface SplashScreenProps {
  page: string;
}

const codeLines = (page: string) => [
  `const developer = {`,
  `  name: 'Joseph Camargo',`,
  `  role: 'Software Engineer',`,
  `  page: '${page}'`,
  `}`
]

const SplashScreen: React.FC<SplashScreenProps> = ({ page }) => {
  const [animationPhase, setAnimationPhase] = useState<'initial' | 'zoom' | 'exit'>('initial')
  const [isVisible, setIsVisible] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const cursorTimer = setTimeout(() => {
      setShowCursor(false)
    }, 3000)

    const zoomTimer = setTimeout(() => {
      setAnimationPhase('zoom')
    }, 3500)

    const exitTimer = setTimeout(() => {
      setAnimationPhase('exit')
    }, 5000)

    const visibilityTimer = setTimeout(() => {
      setIsVisible(false)
    }, 6200)

    return () => {
      clearTimeout(cursorTimer)
      clearTimeout(zoomTimer)
      clearTimeout(exitTimer)
      clearTimeout(visibilityTimer)
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black z-50"
          initial={{ opacity: 1 }}
          animate={{ 
            opacity: 1,
            backgroundColor: animationPhase === 'zoom' ? '#000000' : '#111111'
          }}
          exit={{ 
            opacity: 0,
            transition: {
              duration: 1.2,
              ease: "easeInOut"
            }
          }}
          transition={{ duration: 1.5 }}
        >
          <motion.div 
            className="absolute inset-0 bg-black"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: animationPhase === 'zoom' ? 0.7 : 0 
            }}
            transition={{ duration: 1 }}
          />

          <div className="relative text-left font-mono z-10"> 
            {codeLines(page).map((line, index) => {
              const isPageLine = line.includes('page:')
              
              return (
                <motion.div
                  key={index}
                  className={`text-white text-sm md:text-xl lg:text-2xl whitespace-nowrap ${
                    isPageLine ? 'text-green-400' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: animationPhase === 'exit' && !isPageLine ? 0 : 1,
                    scale: isPageLine && animationPhase === 'zoom' ? 1.8 : 1,
                    y: 0,
                    filter: !isPageLine && animationPhase === 'zoom' ? 'brightness(0.3)' : 'brightness(1)'
                  }}
                  transition={{ 
                    duration: 1.2,
                    delay: animationPhase === 'initial' ? index * 0.7 : 0,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                >
                  {line}
                </motion.div>
              )
            })}
            <AnimatePresence>
              {showCursor && animationPhase === 'initial' && (
                <motion.div
                  className="mt-4 w-4 h-8 bg-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  exit={{ 
                    opacity: 0,
                    transition: { duration: 0.3 }
                  }}
                  transition={{ 
                    duration: 0.8,
                    repeat: 3,
                    repeatType: "reverse"
                  }}
                />
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SplashScreen
