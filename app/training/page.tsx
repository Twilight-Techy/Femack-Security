"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const trainingPrograms = [
  {
    title: "Security Guard Training",
    description:
      "Comprehensive curriculum covering conflict management, customer service, emergency response, and report writing.",
  },
  {
    title: "Bodyguard Training",
    description: "Advanced close protection skills, risk assessment, route planning, and defensive driving.",
  },
  {
    title: "Event Security Management",
    description: "Crowd control strategies, access control management, and emergency evacuation protocols.",
  },
  {
    title: "Industrial Security Training",
    description:
      "Specialized training on handling hazardous materials, identifying security vulnerabilities, and mitigating potential threats.",
  },
  {
    title: "Electronic Security Systems",
    description:
      "In-depth knowledge of surveillance technologies, access control systems, and alarm monitoring procedures.",
  },
  {
    title: "Fire Safety and Emergency Response",
    description: "Essential firefighting techniques, emergency response protocols, and first aid procedures.",
  },
  {
    title: "Investigation and Surveillance Techniques",
    description: "Discreet information gathering, evidence analysis, and effective investigation techniques.",
  },
  {
    title: "First Aid and CPR Training",
    description: "Basic life support techniques, wound management, and triage procedures.",
  },
]

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function Training() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }} className="container mx-auto px-6 py-8 pt-20">
      <motion.h1 className="text-4xl font-bold mb-8 text-center" {...fadeIn}>
        Security Training Programs
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
          <Image
            src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
            alt="Security Training"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </motion.div>
        <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
          <h2 className="text-2xl font-semibold mb-4">World-Class Security Training</h2>
          <p className="mb-4">
            At Femack Security Limited, we believe that the key to exceptional security services lies in thorough and
            continuous training. Our comprehensive training programs are designed to equip security personnel with the
            skills, knowledge, and confidence needed to handle diverse security challenges effectively.
          </p>
          <p>
            Our training programs are led by seasoned security professionals who bring real-world experience and
            expertise to the classroom. We emphasize practical, hands-on learning to ensure that our trainees are
            well-prepared for the demands of their roles.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trainingPrograms.map((program, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
            <p className="text-gray-600">{program.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div className="mt-16 text-center" {...fadeIn} transition={{ delay: 0.8 }}>
        <h2 className="text-2xl font-semibold mb-4">Invest in Your Security Team</h2>
        <p className="mb-8">
          Enhance your security personnel's skills and knowledge with our industry-leading training programs.
        </p>
        <a
          href="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
        >
          Enquire About Training
        </a>
      </motion.div>
    </motion.div>
  )
}

