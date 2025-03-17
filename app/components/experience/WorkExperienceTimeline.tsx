"use client"

import { WorkExperience } from "@/types/types"
import { motion } from "framer-motion"


export default function WorkExperienceTimeline({ experiences }: { experiences: WorkExperience[] }) {
  return (
    <div className="relative mt-16">
      <div className="mb-10 sm:px-6 lg:px-8">
                <h2 className="text-6xl font-extrabold text-center tracking-tighter">
                    Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Experience</span>
                </h2>
            </div>
      <div className="left-1/2 transform -translate-x-px h-full w-0.5 "></div>
      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className={`relative mb-16 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}
        >
          <div className={`flex items-center ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
            <div
              className={`w-12 h-12 rounded-full bg-white flex items-center justify-center ${index % 2 === 0 ? "order-2 ml-4" : "order-1 mr-4"}`}
            >
              <span className="text-black font-bold">{index + 1}</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">{experience.company}</h2>
              <p className="text-xl text-gray-400 mb-4">{experience.position}</p>
              <p className="text-gray-500 mb-4">{experience.duration}</p>
            </div>
          </div>
          <div className={`bg-white bg-opacity-10 p-6 rounded-lg ${index % 2 === 0 ? "mr-16" : "ml-16"}`}>
            <h3 className="text-xl text-center font-semibold mb-4">Technologies</h3>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {experience.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="px-3 py-1 bg-white text-black text-sm font-medium rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-semibold mb-4">Responsibilities</h3>
            <ul className="list-disc list-inside text-gray-300">
              {experience.description.map((item, descIndex) => (
                <li key={descIndex} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

