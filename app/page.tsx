"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Shield, Users, Calendar } from "lucide-react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function Home() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }} className="flex flex-col min-h-screen">
      <section className="relative bg-primary text-white py-32">
        <Image
          src="https://images.unsplash.com/photo-1582139329536-e7284fece509?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Security guard"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 mix-blend-overlay"
        />
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <motion.h1 className="text-4xl md:text-6xl font-bold mb-4" {...fadeIn}>
            Femack Security Limited
          </motion.h1>
          <motion.p className="text-xl mb-8 max-w-2xl" {...fadeIn} transition={{ delay: 0.2 }}>
            Providing top-notch security solutions in Nigeria
          </motion.p>
          <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
            <Link
              href="/contact"
              className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
            >
              Get a Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background-light">
        <div className="container mx-auto px-6">
          <motion.h2 className="text-3xl font-bold text-center mb-8 text-primary" {...fadeIn}>
            Our Services
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Security Guards",
                description: "Professional security guard services tailored to your needs.",
              },
              {
                icon: Users,
                title: "Bodyguards",
                description: "Specialized personal protection for VIPs and executives.",
              },
              {
                icon: Calendar,
                title: "Event Security",
                description: "Comprehensive security for events of all sizes.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <service.icon className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-primary">{service.title}</h3>
                <p className="text-text-light">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-dark py-16">
        <div className="container mx-auto px-6">
          <motion.h2 className="text-3xl font-bold text-center mb-8 text-primary" {...fadeIn}>
            Why Choose Femack Security?
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <h3 className="text-xl font-semibold mb-2 text-secondary">Our Mission</h3>
              <p className="text-text-light mb-4">
                To deliver unparalleled security services and innovative solutions that foster a safe and secure
                environment for our clients.
              </p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
              <h3 className="text-xl font-semibold mb-2 text-secondary">Our Vision</h3>
              <p className="text-text-light mb-4">
                To be the foremost and most trusted security services provider in Nigeria, recognized for our
                excellence, innovation, and commitment to the safety and protection of our clients' interests.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background-light">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-3xl font-bold mb-4 text-primary" {...fadeIn}>
            Ready to Secure Your Future?
          </motion.h2>
          <motion.p className="text-xl mb-8 text-text-light" {...fadeIn} transition={{ delay: 0.2 }}>
            Contact us today for a comprehensive security assessment
          </motion.p>
          <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
            <Link
              href="/contact"
              className="bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

