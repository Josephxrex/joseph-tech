"use client"

import { useEffect, useState } from "react"
import Particles from "../components/particles"
import SplashScreen from "../components/SplashScreen"
import PostFeed from "../components/blog/PostFeed"
import CustomSidebar from "../components/blog/Sidebar"


export default function Blog() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 7000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Particles className="absolute inset-0 z-0 " quantity={1000} staticity={50} ease={50} />

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        {showSplash ? (
          <SplashScreen page="Blog" />
        ) : (
          <div className="container mx-auto px-4 h-[calc(100vh-4rem)]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
              <div className="lg:col-span-2 overflow-hidden">
                <PostFeed />
              </div>
              <div className="hidden lg:block h-full">
                <CustomSidebar />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

