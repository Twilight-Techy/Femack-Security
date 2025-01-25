"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const clientTypes = [
  {
    title: "Corporate Enterprises",
    description:
      "We serve diverse sectors including banking, finance, oil and gas, manufacturing, and telecommunications.",
  },
  {
    title: "Government Agencies",
    description: "Trusted to provide security for government facilities, public events, and VIP protection.",
  },
  {
    title: "Educational Institutions",
    description: "Creating safe and secure learning environments for schools, colleges, and universities.",
  },
  {
    title: "Residential Communities",
    description: "Specialized security services for residential communities, condominiums, and gated estates.",
  },
  {
    title: "Entertainment Industry",
    description: "Managing security for concerts, sports events, award ceremonies, and film productions.",
  },
]

const clientImages = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=100&q=80",
  "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=100&q=80",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=100&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=100&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=100&q=80",
  "https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=100&q=80",
]

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function Clients() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }} className="container mx-auto px-6 py-8 pt-20">
      <motion.h1 className="text-4xl font-bold mb-8 text-center" {...fadeIn}>
        Our Clientele
      </motion.h1>

      <motion.div className="mb-16" {...fadeIn} transition={{ delay: 0.2 }}>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Femack Security Limited is proud to serve a diverse range of clients across various sectors. Our commitment to
          excellence and tailored security solutions has earned us the trust of numerous organizations and individuals.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {clientTypes.map((client, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2">{client.title}</h3>
            <p className="text-gray-600">{client.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div className="text-center mb-16" {...fadeIn} transition={{ delay: 0.6 }}>
        <h2 className="text-2xl font-semibold mb-4">Trusted by Industry Leaders</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {clientImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`Client ${index + 1}`}
                width={200}
                height={100}
                className="rounded-lg shadow-md grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div className="text-center" {...fadeIn} transition={{ delay: 0.8 }}>
        <h2 className="text-2xl font-semibold mb-4">Join Our Satisfied Clients</h2>
        <p className="mb-8">Experience the Femack Security difference for your organization or community.</p>
        <a
          href="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
        >
          Get in Touch
        </a>
      </motion.div>
    </motion.div>
  )
}

