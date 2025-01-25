"use client"

import { motion } from "framer-motion"
import { Camera, Fingerprint, Bell, Cpu, Radio } from "lucide-react"

const technologies = [
  {
    icon: Camera,
    title: "Advanced Surveillance Systems",
    description:
      "High-definition CCTV cameras, thermal imaging technology, and intelligent video analytics for enhanced threat detection.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Access Control",
    description:
      "Cutting-edge biometric systems including fingerprint and facial recognition for restricted area access.",
  },
  {
    icon: Bell,
    title: "Alarm and Intrusion Detection",
    description: "State-of-the-art alarm systems with instant notifications and remote monitoring capabilities.",
  },
  {
    icon: Cpu,
    title: "Smart Sensors",
    description:
      "Utilization of smart sensors for detecting environmental changes such as smoke, gas leaks, or unusual vibrations.",
  },
  {
    icon: Radio,
    title: "Integrated Command Centers",
    description:
      "Advanced software for real-time tracking, incident management, and efficient communication with on-ground security teams.",
  },
]

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function Technology() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }} className="container mx-auto px-6 py-8 pt-20">
      <motion.h1 className="text-4xl font-bold mb-8 text-center" {...fadeIn}>
        Security Technology Integration
      </motion.h1>

      <motion.div className="mb-16" {...fadeIn} transition={{ delay: 0.2 }}>
        <p className="text-lg text-center max-w-3xl mx-auto">
          At Femack Security Limited, we leverage cutting-edge technology to provide unparalleled security solutions.
          Our integration of advanced systems ensures that we stay ahead of potential threats and deliver the highest
          level of protection to our clients.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <tech.icon className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
            <p className="text-gray-600">{tech.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div className="mt-16 text-center" {...fadeIn} transition={{ delay: 0.8 }}>
        <h2 className="text-2xl font-semibold mb-4">Stay Ahead with Our Technology</h2>
        <p className="mb-8">Experience the power of advanced security technology tailored to your specific needs.</p>
        <a
          href="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
        >
          Request a Demo
        </a>
      </motion.div>
    </motion.div>
  )
}

