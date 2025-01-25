"use client"

import { useState } from "react"
import Link from "next/link"
import { Shield, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuVariants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 },
  }

  return (
    <header className="bg-white shadow-md fixed w-full z-50 top-0">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Shield className="h-8 w-8 text-accent" />
            <span className="ml-2 text-xl font-bold text-primary">Femack Security</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/training">Training</NavLink>
            <NavLink href="/technology">Technology</NavLink>
            <NavLink href="/clients">Clients</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                <NavLink href="/" onClick={toggleMenu}>
                  Home
                </NavLink>
                <NavLink href="/about" onClick={toggleMenu}>
                  About
                </NavLink>
                <NavLink href="/services" onClick={toggleMenu}>
                  Services
                </NavLink>
                <NavLink href="/training" onClick={toggleMenu}>
                  Training
                </NavLink>
                <NavLink href="/technology" onClick={toggleMenu}>
                  Technology
                </NavLink>
                <NavLink href="/clients" onClick={toggleMenu}>
                  Clients
                </NavLink>
                <NavLink href="/contact" onClick={toggleMenu}>
                  Contact
                </NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

function NavLink({ href, children, ...props }) {
  return (
    <Link href={href} {...props}>
      <motion.span
        className="text-text-light hover:text-accent transition-colors duration-300 block relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.span>
    </Link>
  )
}

