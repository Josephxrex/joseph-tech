"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CalendarDays, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const posts = [
    {
        id: 1,
        title: "🚀 Don Cheto App",
        excerpt: "I developed the Don Cheto app in collaboration with Uanify.com. I was fully responsible for the Android implementation, ensuring it was fully functional and optimized. The official release took place on May 15, 2023. 🎉📱",
        image: "https://josephxrex-fl.s3.us-east-1.amazonaws.com/DonCheto-jx%5D.jpeg?height=400&width=600",
        date: "2023-05-15",
        tags: ["Android Development", "Uanify", "App Release"]
    },
    {
        id: 2,
        title: "🏆 Talent Land - Health Tech Hackathon",
        excerpt: "I participated in the Health Tech Hackathon at Talent Land, where I developed the entire backend. Using Python scripts and the ChatGPT API, I analyzed ultrasound images to extract key diagnostic insights. 🏥🤖",
        image: "https://josephxrex-fl.s3.us-east-1.amazonaws.com/tl-jx.jpeg?height=400&width=600",
        date: "2023-05-10",
        tags: ["Hackathon", "Python", "AI in Healthcare"]
    },
    {
        id: 3,
        title: "🏭 Volkswagen Factory Visit - Challenge 2.0",
        excerpt: "As part of Volkswagen's Challenge 2.0, I visited the plant to gather requirements for developing a management system called Shopfloor Management. The goal was to optimize production processes with digital technology. 🔧📊",
        image: "https://josephxrex-fl.s3.us-east-1.amazonaws.com/vw-jx.jpeg?height=400&width=600",
        date: "2023-05-05",
        tags: ["Industry 4.0", "Volkswagen", "Shopfloor Management"]
    }
]


export default function PostFeed() {
    return (
        <ScrollArea className="h-[calc(100vh-6rem)] pr-4">
            <div className="space-y-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                {posts.map((post) => (
                    <motion.article
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-black text-white p-4 sm:p-6 rounded-lg shadow"
                    >
                        <h2 className="text-xl sm:text-2xl font-bold mb-4">{post.title}</h2>
                        <div className="flex items-center text-sm text-muted-foreground mb-4">
                            <CalendarDays className="h-4 w-4 mr-2" />
                            <span>{post.date}</span>
                        </div>
                        {post.image && (
                            <div className="relative w-full mb-4">
                                <Image
                                    src={post.image || "/placeholder.svg"}
                                    alt="Post image"
                                    width={600}
                                    height={400}
                                    className="rounded-lg w-full"
                                />
                            </div>
                        )}
                        <p className="mb-4 text-sm sm:text-base">{post.excerpt}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-800 text-white text-sm hover:bg-zinc-700 transition-colors"
                                >
                                    <Tag className="h-3 w-3 mr-1" />
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <Button className="w-full sm:w-auto">Read More</Button>
                    </motion.article>
                ))}
            </div>
        </ScrollArea>
    )
}