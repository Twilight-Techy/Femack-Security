"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function About() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }} className="container mx-auto px-6 py-8 pt-20">
      <motion.h1 className="text-4xl font-bold mb-8 text-center" {...fadeIn}>
        About Femack Security Limited
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
          <Image
            src="https://images.unsplash.com/photo-1582139329536-e7284fece509?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
            alt="Femack Security Team"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </motion.div>
        <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
          <h2 className="text-2xl font-semibold mb-4">Company Overview</h2>
          <p className="mb-4">
            Femack Security Limited is a reputable and dynamic security services company with its registered office
            situated in Nigeria. Established with a vision to provide top-notch security solutions, we have emerged as a
            leading provider of security services in the nation.
          </p>
          <p>
            Committed to safeguarding individuals, properties, and businesses, we offer a comprehensive range of
            services that include security guards, bodyguards, event security, industrial security, cash escort
            services, surveillance, detective services, and facility management.
          </p>
        </motion.div>
      </div>

      <motion.div className="mb-16" {...fadeIn} transition={{ delay: 0.6 }}>
        <h2 className="text-2xl font-semibold mb-4">Our Core Values</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Professionalism:</strong> We maintain the highest level of professionalism in our operations,
            adhering to industry best practices, and ensuring continuous improvement through training and development.
          </li>
          <li>
            <strong>Integrity:</strong> We conduct our business with utmost honesty, transparency, and ethical
            standards, fostering trust and confidence in all our interactions.
          </li>
          <li>
            <strong>Customer-Centric Approach:</strong> Our clients' safety and satisfaction are at the core of our
            business, and we strive to understand their unique needs and deliver personalized security solutions.
          </li>
          <li>
            <strong>Innovation:</strong> We embrace innovation and advanced technology to enhance our security services,
            always staying one step ahead of potential threats.
          </li>
          <li>
            <strong>Teamwork:</strong> We foster a collaborative and inclusive work environment, encouraging teamwork,
            respect, and open communication among our employees.
          </li>
        </ul>
      </motion.div>

      <motion.div {...fadeIn} transition={{ delay: 0.8 }}>
        <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
        <p className="mb-4">
          At Femack Security Limited, we are committed to providing efficient, professional, and reliable security
          services while upholding the highest standards of integrity, discipline, and customer satisfaction. Our team
          of highly trained professionals is dedicated to ensuring the safety and security of our clients' assets and
          personnel.
        </p>
        <p>
          With our robust financial capability, we continuously invest in cutting-edge technology, infrastructure, and
          highly qualified personnel to deliver unmatched security services. Our commitment to excellence and innovation
          positions us as a trusted partner in the security industry.
        </p>
      </motion.div>
    </motion.div>
  )
}

