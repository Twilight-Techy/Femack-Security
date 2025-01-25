export default function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-800 mb-4">
              "Femack has transformed our security infrastructure. We feel safer than ever."
            </p>
            <p className="font-semibold">- John Doe, CEO of TechCorp</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-800 mb-4">
              "Their risk assessment saved us from potential disasters. Highly recommended!"
            </p>
            <p className="font-semibold">- Jane Smith, CFO of RetailGiant</p>
          </div>
        </div>
      </div>
    </section>
  )
}

