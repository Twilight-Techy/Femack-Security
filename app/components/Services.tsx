import { Shield, Lock, AlertTriangle } from "lucide-react"

const services = [
  { icon: Shield, title: "Physical Security", description: "Protect your assets with our trained security personnel." },
  { icon: Lock, title: "Cybersecurity", description: "Safeguard your digital infrastructure from threats." },
  { icon: AlertTriangle, title: "Risk Assessment", description: "Identify and mitigate potential security risks." },
]

export default function Services() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

