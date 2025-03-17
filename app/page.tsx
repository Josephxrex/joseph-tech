"use client"

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Particles from "./components/particles";
import SplashScreen from "./components/SplashScreen";
import { Server, Cloud, Code, Database, Award, GitBranch } from 'lucide-react';

const roles = ["Backend Developer", "Scrum Master", "DevOps Engineer", "Tech Lead"];
const stats = [
  {
    icon: <Cloud className="w-10 h-10 text-white" />,
    label: "AWS SERVICES",
    value: "10+",
    color: "hover:text-orange-400",
    bgColor: "bg-orange-500/10",
    detail: "Lambda, S3, SQS, DynamoDB"
  },
  {
    icon: <Server className="w-10 h-10 text-white" />,
    label: "SERVERLESS", value: "5+",
    color: "hover:text-purple-400",
    bgColor: "bg-purple-500/10",
    detail: "Implemented Projects"
  },
  {
    icon: <Database className="w-10 h-10 text-white" />,
    label: "DATABASES",
    value: "4+",
    color: "hover:text-blue-400",
    bgColor: "bg-blue-500/10",
    detail: "PostgreSQL, DynamoDB, Oracle, RDS"
  },
  {
    icon: <Award className="w-10 h-10 text-white" />,
    label: "CREDENTIALS",
    value: "10+",
    color: "hover:text-green-400",
    bgColor: "bg-green-500/10",
    detail: "AWS, Scrum, DevOps"
  }
];


const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [time, setTime] = useState(new Date());
  const [showSplash, setShowSplash] = useState(true);
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.1 });

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 7000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    const currentRole = roles[roleIndex];

    if (!isDeleting && text === currentRole) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setText((prev) => (isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden overflow-y-auto p-4 md:p-10">
      {showSplash && <SplashScreen page="Home" />}
      <Particles className="fixed inset-0 -z-10" quantity={1000} staticity={50} ease={50} />

      {/* Desktop layout - original horizontal layout */}
      <div className="relative z-10 hidden lg:flex h-screen items-center justify-between px-4 md:px-10">
        {/* Left section */}
        <div className="flex flex-col items-start text-left w-auto mb-0">
          <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold glowing-text mb-4">Joseph</motion.h1>
          <motion.div className="h-12 sm:h-16 md:h-20 flex justify-start">
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-mono">
              <span className="text-blue-400">&gt; </span>
              {text}
              <span className="animate-blink">_</span>
            </span>
          </motion.div>
          <motion.div className="font-mono text-sm md:text-lg text-gray-400 mt-2">
            {time.toLocaleTimeString()} @ {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </motion.div>
        </div>

        {/* Right section (Stats) */}
        <div className="backdrop-blur-sm w-auto max-w-lg">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group cursor-pointer transition-all duration-300"
              >
                <div className="flex items-center text-right border-red-50 space-x-4 p-3 transition-all duration-300 group-hover:scale-105">
                  <div className="p-2 rounded-lg">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl text-gray-400 font-mono">{stat.label}</div>
                    <div className="text-xl md:text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400 mt-1">{stat.detail}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile layout - vertical with scroll */}
      <div className="relative z-10 lg:hidden">
        {/* First screen - centered name and role */}
        <div className="flex flex-col items-center justify-center h-screen">
          <motion.h1
            className="text-7xl font-bold glowing-text mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Joseph
          </motion.h1>
          <motion.div
            className="h-12 sm:h-16 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-lg sm:text-xl md:text-2xl text-white font-mono">
              <span className="text-blue-400">&gt; </span>
              {text}
              <span className="animate-blink">_</span>
            </span>
          </motion.div>
          <motion.div
            className="font-mono text-sm md:text-lg text-gray-400 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {time.toLocaleTimeString()} @ {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex flex-col items-center">
              <span className="text-gray-400 text-sm mb-2">Scroll down</span>
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
                <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce-slow"></div>
              </div>
            </div>
          </motion.div>
        </div>

        <div
          ref={statsRef}
          className="min-h-screen flex flex-col justify-center items-center"
        >
         <motion.div
            className="backdrop-blur-sm w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isStatsInView ? 1 : 0, y: isStatsInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="group cursor-pointer transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isStatsInView ? 1 : 0,
                    y: isStatsInView ? 0 : 20
                  }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                >
                  <div className="flex items-center text-left space-x-4 p-3 transition-all duration-300 group-hover:scale-105">
                    <div className="p-2 rounded-lg">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-2xl text-gray-400 font-mono">{stat.label}</div>
                      <div className="text-xl md:text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-400 mt-1">{stat.detail}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
