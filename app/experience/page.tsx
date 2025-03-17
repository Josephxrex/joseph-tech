"use client"

import { useEffect, useState } from "react"
import WorkExperienceTimeline from "../components/experience/WorkExperienceTimeline"
import SplashScreen from "../components/SplashScreen"
import Particles from "../components/particles"
import { WorkExperience } from "@/types/types"

const experiences: WorkExperience[] = [
    {
        company: "Gran Vivir",
        position: "Software Engineer",
        duration: "February 2023 – August 2023",
        technologies: ["React", "TypeScript", "Express", "OAuth 2.0", "Jenkins", "CI/CD"],
        description: [
            "Developed a Unified Platform for managing construction project deliverables",
            "Implemented CI/CD practices, reducing errors and deployment times by 80%",
        ],
    },
    {
        company: "Volkswagen Group Puerto Interior",
        position: "Back-End Lead / Scrum Master",
        duration: "July 2023 – November 2023",
        technologies: ["Express", "OAuth 2.0", "Oracle", "Scrum"],
        description: [
            "Led web application development projects using Scrum methodology",
            "Managed back-end development with Oracle databases",
        ],
    },
    {
        company: "CBQA Solutions Mexico S.C",
        position: "Back-End Developer / Database Developer",
        duration: "July 2023 – September 2024",
        technologies: ["Serverless", "AWS", "TypeScript", "C#", "PostgreSQL", "SOAP", "XML", "PDF"],
        description: [
            "Developed serverless applications for vessel and customs audits",
            "Integrated with government platforms and recreated customs documents",
            "Designed and optimized PostgreSQL database structures",
        ],
    },
]

export default function Experience() {
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
                        page="Experience"
                    />
                ) : (
                    <div className="w-full max-w-4xl h-screen overflow-y-scroll scrollbar-hide text-white p-6 rounded-lg shadow-lg">
                        <WorkExperienceTimeline experiences={experiences} />
                    </div>
                )}
            </div>
        </div>
    )
}

