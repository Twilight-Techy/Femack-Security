import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-blue-600 text-white">
      <div className="container mx-auto px-6 py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Protecting What Matters Most</h1>
        <p className="text-xl mb-8">Comprehensive security solutions for your peace of mind</p>
        <Link
          href="/contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
        >
          Get a Free Consultation
        </Link>
      </div>
    </section>
  )
}

