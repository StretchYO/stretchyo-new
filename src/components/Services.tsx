
import { Rocket, Smartphone, Bot, Target } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { Button } from "./ui/button";

const Services = () => {
  const services = [
    {
      icon: Rocket,
      title: "High-Converting Website Design",
      description: "Turn clicks into customers with stunning, mobile-first websites built to perform.",
      number: 1,
    },
    {
      icon: Smartphone,
      title: "Branded Loyalty App",
      description: "Keep customers coming back with your own sleek, reward-driven mobile app.",
      number: 2,
    },
    {
      icon: Bot,
      title: "AI Virtual Assistant (24/7)",
      description: "Never miss a lead—our AI handles chats, bookings, and orders round-the-clock.",
      number: 3,
    },
    {
      icon: Target,
      title: "AI-Powered Personalization",
      description: "Deliver content that sells by adapting to every customer in real-time.",
      number: 4,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We deliver cutting-edge digital solutions to help your business grow and succeed online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              number={service.number}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-gradient-to-r from-stretchyo-purple to-stretchyo-blue text-white px-8 py-6 rounded-lg text-lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
