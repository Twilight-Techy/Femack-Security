"use client"

import { motion } from "framer-motion"
import { Shield, Users, Calendar, Factory, Truck, Camera, Search, Building } from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "Security Guards",
    description:
      "Our highly trained security guards provide round-the-clock protection for individuals, businesses, and events.",
  },
  {
    icon: Users,
    title: "Bodyguards",
    description:
      "We offer specialized personal protection services for VIPs, executives, and high-profile individuals.",
  },
  {
    icon: Calendar,
    title: "Event Security",
    description: "Comprehensive security services for events of all sizes, ensuring safety and smooth operations.",
  },
  {
    icon: Factory,
    title: "Industrial Security",
    description:
      "Tailored security solutions for industrial facilities, protecting assets and ensuring workplace safety.",
  },
  {
    icon: Truck,
    title: "Cash Escort Services",
    description: "Secure transportation of cash and valuables with our trained personnel and armored vehicles.",
  },
  {
    icon: Camera,
    title: "Surveillance",
    description: "Advanced electronic surveillance systems to monitor and protect your property 24/7.",
  },
  {
    icon: Search,
    title: "Detective Services",
    description: "Our skilled investigators provide discreet and confidential investigation services.",
  },
  {
    icon: Building,
    title: "Facility Management",
    description: "Comprehensive facility management services, including access control and safety audits.",
  },
]

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function Services() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }} className="container mx-auto px-6 py-8 pt-20">
      <motion.h1 className="text-4xl font-bold mb-8 text-center" {...fadeIn}>
        Our Services
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <service.icon className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div className="mt-16" {...fadeIn} transition={{ delay: 0.8 }}>
        <h2 className="text-2xl font-semibold mb-4">Additional Services</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Security Consultancy:</strong> Expert advice on physical protection and comprehensive security
            solutions.
          </li>
          <li>
            <strong>Procurement and Supply:</strong> Supply of security equipment, safety gear, and accessories.
          </li>
          <li>
            <strong>General Trading and Marketing:</strong> Distribution of general merchandise and representation of
            reputable manufacturers.
          </li>
          <li>
            <strong>Security Canine Services:</strong> Breeding, training, and supply of guard dogs, sniffers, and guide
            dogs.
          </li>
        </ul>
      </motion.div>
    </motion.div>
  )
}

