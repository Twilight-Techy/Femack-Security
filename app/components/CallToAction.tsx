import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Future?</h2>
        <p className="text-xl mb-8">Contact us today for a comprehensive security assessment</p>
        <Link
          href="/contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}

