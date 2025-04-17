
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Smartphone, Bot, Target } from "lucide-react";

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-stretchyo-purple to-stretchyo-blue py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-2xl mx-auto">
              We provide comprehensive digital solutions to help your business thrive in the digital world.
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <Services />

        {/* Detailed Service Sections */}
        <section id="website" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img src="/placeholder.svg" alt="Website Design" className="w-full" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-stretchyo-purple/10 rounded-full p-4">
                    <Rocket className="h-8 w-8 text-stretchyo-purple" />
                  </div>
                  <h2 className="text-3xl font-bold">High-Converting Website Design</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Turn clicks into customers with stunning, mobile-first websites built to perform. Our design team focuses on creating websites that not only look beautiful but also drive conversions and results for your business.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-stretchyo-purple mr-2 mt-1" />
                    <span>Responsive, mobile-first designs that work on all devices</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-stretchyo-purple mr-2 mt-1" />
                    <span>SEO-optimized structure for better search visibility</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-stretchyo-purple mr-2 mt-1" />
                    <span>Conversion-focused layouts that drive customer action</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-stretchyo-purple mr-2 mt-1" />
                    <span>Fast loading speeds for optimal user experience</span>
                  </li>
                </ul>
                <Button className="bg-stretchyo-purple text-white hover:bg-stretchyo-purple-dark">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="app" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              <div className="lg:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img src="/placeholder.svg" alt="Loyalty App" className="w-full" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-stretchyo-blue/10 rounded-full p-4">
                    <Smartphone className="h-8 w-8 text-stretchyo-blue" />
                  </div>
                  <h2 className="text-3xl font-bold">Branded Loyalty App</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Keep customers coming back with your own sleek, reward-driven mobile app. Our loyalty apps are designed to increase customer retention and drive repeat business through engaging rewards systems.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-stretchyo-blue mr-2 mt-1" />
                    <span>Customized branding that matches your business identity</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-stretchyo-blue mr-2 mt-1" />
                    <span>Flexible reward systems that encourage repeat visits</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-stretchyo-blue mr-2 mt-1" />
                    <span>Push notifications to re-engage customers</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-stretchyo-blue mr-2 mt-1" />
                    <span>Analytics dashboard to track customer behavior</span>
                  </li>
                </ul>
                <Button className="bg-stretchyo-blue text-white hover:bg-stretchyo-blue/80">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Additional service sections would follow similar pattern */}
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
