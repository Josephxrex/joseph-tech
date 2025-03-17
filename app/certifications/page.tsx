"use client"

import { ExternalLink } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import SplashScreen from "../components/SplashScreen"
import Particles from "../components/particles"
import { ScrollArea } from "@/components/ui/scroll-area"

const certifications = {
    aws: [
        {
            title: "AWS Certified Cloud Practitioner",
            org: "Amazon Web Services (AWS)",
            date: "Nov 2023",
            link: "https://www.credly.com/badges/c979916d-d565-48a4-87f0-1e67a3e188f6/linked_in_profile",
        },
        {
            title: "DevOps on AWS: Code, Build, and Test",
            org: "edX",
            date: "Jul 2024",
            link: ""
        },
        {
            title: "Architecting Solutions on AWS",
            org: "edX",
            date: "Sep 2024",
            link: ""
        },
        {
            title: "Migrating to the AWS Cloud",
            org: "edX",
            date: "Sep 2024",
            link: ""
        },
        {
            title: "Serverless Architectures on AWS",
            org: "edX",
            date: "Aug 2024",
            link: ""
        },
    ],
    development: [
        {
            title: "Fundamentos esenciales de la programación",
            org: "LinkedIn",
            date: "Apr 2023",
            link: "https://www.linkedin.com/learning/certificates/b348aa2fc9a590771748bd3e2998369f8d5285c62ca47eea65dd94e872f5d3f9",
        },
        {
            title: "MongoDB",
            org: "Udemy",
            date: "May 2023",
            link: "https://www.udemy.com/certificate/UC-d0168135-0ee6-4b72-9d62-8c2bb3f1591a/",
        },
        {
            title: "JavaScript",
            org: "Udemy",
            date: "May 2023",
            link: "https://www.udemy.com/certificate/UC-dcb1f8f9-76a1-4670-b21a-2fb876008213/",
        },
        {
            title: "React 2021 con Proyecto Final",
            org: "Udemy",
            date: "Jul 2023",
            link: "https://www.udemy.com/certificate/UC-70f4214c-423e-4d33-a13a-6472dd9af63a/",
        },
    ],
    other: [
        {
            title: "Figma Diseño de UI/UX",
            org: "Udemy",
            date: "Jun 2023",
            link: "https://www.udemy.com/certificate/UC-a9e14d86-9462-42cc-8a17-f2da14816496/",
        },
        {
            title: "Scrum Foundation Professional Certificate SFPC",
            org: "Certiprof",
            date: "Jul 2023",
        },
    ],
}

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
}

const container = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

export default function Certifications() {
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
                    <SplashScreen
                        page="certifications"
                    />
                ) : (
                    <ScrollArea className="h-[calc(100vh-6rem)] w-full pr-4">
                        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-20">
                            <motion.div
                                className="mb-12 sm:mb-20 space-y-2 mt-10"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-6xl font-extrabold text-left tracking-tighter">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Experience</span>
                                </h2>

                                <p className="text-sm text-zinc-400">A collection of professional certifications and achievements</p>
                            </motion.div>

                            <Tabs defaultValue="aws" className="space-y-8">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    className="relative"
                                >
                                    <div className="overflow-x-auto pb-2 -mb-2">
                                        <TabsList className="w-full sm:w-auto inline-flex justify-start space-x-4 sm:space-x-8 bg-transparent p-0">
                                            <TabsTrigger
                                                value="aws"
                                                className="text-lg sm:text-xl text-white data-[state=active]:text-blue-400 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                                            >
                                                AWS & Cloud
                                            </TabsTrigger>
                                            <TabsTrigger
                                                value="development"
                                                className="text-lg sm:text-xl text-white data-[state=active]:text-blue-400 data-[state=active]:bg-transparent data-[state=active]:shadow-none whitespace-nowrap"
                                            >
                                                Development
                                            </TabsTrigger>
                                            <TabsTrigger
                                                value="other"
                                                className="text-lg sm:text-xl text-white data-[state=active]:text-blue-400 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                                            >
                                                Other
                                            </TabsTrigger>
                                        </TabsList>
                                    </div>
                                    <Separator className="bg-white" />
                                </motion.div>

                                <TabsContent value="aws">
                                    <motion.div variants={container} initial="initial" animate="animate" className="space-y-8 sm:space-y-12">
                                        {certifications.aws.map((cert) => (
                                            <motion.div
                                                key={cert.title}
                                                variants={fadeIn}
                                                transition={{ duration: 0.3 }}
                                                className="group space-y-2 p-4 sm:p-6 rounded-lg hover:bg-zinc-900/50 transition-colors"
                                            >
                                                <div className="flex items-start justify-between gap-4">
                                                    <div>
                                                        <h2 className="text-base sm:text-lg text-white font-medium leading-tight">{cert.title}</h2>
                                                        <p className="mt-2 text-sm text-zinc-400">{cert.org}</p>
                                                    </div>
                                                    {cert.link && (
                                                        <motion.a
                                                            href={cert.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            <ExternalLink className="h-4 w-4 text-blue-400" />
                                                        </motion.a>
                                                    )}
                                                </div>
                                                <p className="text-xs text-zinc-500">{cert.date}</p>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </TabsContent>

                                <TabsContent value="development">
                                    <motion.div variants={container} initial="initial" animate="animate" className="space-y-8 sm:space-y-12">
                                        {certifications.development.map((cert) => (
                                            <motion.div
                                                key={cert.title}
                                                variants={fadeIn}
                                                transition={{ duration: 0.3 }}
                                                className="group space-y-2 p-4 sm:p-6 rounded-lg hover:bg-zinc-900/50 transition-colors"
                                            >
                                                <div className="flex items-start justify-between gap-4">
                                                    <div>
                                                        <h2 className="text-base sm:text-lg text-white font-medium leading-tight">{cert.title}</h2>
                                                        <p className="mt-2 text-sm text-zinc-400">{cert.org}</p>
                                                    </div>
                                                    {cert.link && (
                                                        <motion.a
                                                            href={cert.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            <ExternalLink className="h-4 w-4 text-blue-400" />
                                                        </motion.a>
                                                    )}
                                                </div>
                                                <p className="text-xs text-zinc-500">{cert.date}</p>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </TabsContent>

                                <TabsContent value="other">
                                    <motion.div variants={container} initial="initial" animate="animate" className="space-y-8 sm:space-y-12">
                                        {certifications.other.map((cert) => (
                                            <motion.div
                                                key={cert.title}
                                                variants={fadeIn}
                                                transition={{ duration: 0.3 }}
                                                className="group space-y-2 p-4 sm:p-6 rounded-lg hover:bg-zinc-900/50 transition-colors"
                                            >
                                                <div className="flex items-start justify-between gap-4">
                                                    <div>
                                                        <h2 className="text-base sm:text-lg text-white font-medium leading-tight">{cert.title}</h2>
                                                        <p className="mt-2 text-sm text-zinc-400">{cert.org}</p>
                                                    </div>
                                                    {cert.link && (
                                                        <motion.a
                                                            href={cert.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            <ExternalLink className="h-4 w-4 text-blue-400" />
                                                        </motion.a>
                                                    )}
                                                </div>
                                                <p className="text-xs text-zinc-500">{cert.date}</p>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </ScrollArea>
                )}
            </div>
        </div>
    )
}

