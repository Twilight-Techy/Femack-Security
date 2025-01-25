"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    }

    setIsSubmitting(false)
  }

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }} className="container mx-auto px-6 py-8 pt-20">
      <motion.h1 className="text-4xl font-bold mb-8 text-center text-primary" {...fadeIn}>
        Contact Us
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
          <h2 className="text-2xl font-semibold mb-4 text-secondary">Get in Touch</h2>
          <p className="mb-6 text-text-light">
            We're here to answer any questions you may have about our security services. Reach out to us and we'll
            respond as soon as we can.
          </p>

          <div className="space-y-4">
            <motion.div className="flex items-center" {...fadeIn} transition={{ delay: 0.3 }}>
              <MapPin className="h-6 w-6 text-accent mr-2" />
              <span className="text-text-light">4, Makanjuola Close, Harmony Villa, OPIC, Lagos State.</span>
            </motion.div>
            <motion.div className="flex items-center" {...fadeIn} transition={{ delay: 0.4 }}>
              <Phone className="h-6 w-6 text-accent mr-2" />
              <span className="text-text-light">08023231Z142, 08023642146</span>
            </motion.div>
            <motion.div className="flex items-center" {...fadeIn} transition={{ delay: 0.5 }}>
              <Mail className="h-6 w-6 text-accent mr-2" />
              <span className="text-text-light">femacksecure@gmail.com</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div {...fadeIn} transition={{ delay: 0.6 }}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium text-text-dark">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-accent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-text-dark">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-accent"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 font-medium text-text-dark">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium text-text-dark">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-accent"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className={`bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
            {submitStatus === "success" && (
              <p className="text-green-600 mt-2">Your message has been sent successfully!</p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-600 mt-2">There was an error sending your message. Please try again.</p>
            )}
          </form>
        </motion.div>
      </div>
    </motion.div>
  )
}

