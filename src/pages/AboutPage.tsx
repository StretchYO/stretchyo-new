
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-stretchyo-purple to-stretchyo-blue py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About StretchYo</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Learn more about our mission, our team, and how we're redefining wellness technology.
            </p>
          </div>
        </section>

        {/* About Overview */}
        <About />

        {/* Our Story */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Founded in December 2022 by Sarad Dhungel, StretchYo LLC began with a simple vision: to create technology that enhances human wellbeing rather than diminishing it.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  Based in Milpitas, California, our team brings together expertise in technology development, neuroscience, and ancient wellness practices to create solutions that make a meaningful difference in people's lives.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  What started as a project to help friends build better habits has grown into a comprehensive platform offering both services for businesses and products for individuals.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-stretchyo-purple rounded-xl opacity-10 transform rotate-3"></div>
                  <img 
                    src="/placeholder.svg" 
                    alt="StretchYo Team" 
                    className="relative rounded-xl shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                These core principles guide everything we do at StretchYo.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold mb-4">Conscious Innovation</h3>
                <p className="text-gray-600">
                  We create technology with awareness of its impact on human wellbeing and society.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold mb-4">Authentic Connection</h3>
                <p className="text-gray-600">
                  We believe in building genuine relationships and communities that support growth.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold mb-4">Holistic Approach</h3>
                <p className="text-gray-600">
                  We integrate ancient wisdom with modern science to address the whole person.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-stretchyo-purple to-stretchyo-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Whether you need services for your business or products for personal growth, we're here to help.
            </p>
            <Button className="bg-white text-stretchyo-purple hover:bg-gray-100 text-lg px-8 py-6">
              Get in Touch
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
