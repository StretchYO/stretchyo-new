
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Products from "@/components/Products";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Users, Activity, Clock } from "lucide-react";

const ProductsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-stretchyo-purple to-stretchyo-blue py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">What We Offer</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover our suite of wellness products designed to help you build better habits and improve your wellbeing.
            </p>
          </div>
        </section>

        {/* Products Overview */}
        <Products />

        {/* Detailed Product Sections */}
        <section id="ai-personalization" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img src="/placeholder.svg" alt="AI Personalization" className="w-full" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-stretchyo-purple/10 rounded-full p-4">
                    <Lightbulb className="h-8 w-8 text-stretchyo-purple" />
                  </div>
                  <h2 className="text-3xl font-bold">AI Personalization</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Exclusive use of AI that genuinely understands your emotional & behavioral patterns for true personalization. Our AI adapts to your unique needs to provide a tailored experience.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-stretchyo-purple mr-2 mt-1" />
                    <span>Behavioral pattern recognition for personalized recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-stretchyo-purple mr-2 mt-1" />
                    <span>Emotional intelligence integration for better understanding</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-stretchyo-purple mr-2 mt-1" />
                    <span>Adaptive content delivery based on your preferences</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-stretchyo-purple mr-2 mt-1" />
                    <span>Privacy-focused data handling and security</span>
                  </li>
                </ul>
                <Button className="bg-stretchyo-purple text-white hover:bg-stretchyo-purple-dark">
                  Try Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="wellbeing-challenges" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              <div className="lg:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img src="/placeholder.svg" alt="Wellbeing Challenges" className="w-full" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-stretchyo-blue/10 rounded-full p-4">
                    <Activity className="h-8 w-8 text-stretchyo-blue" />
                  </div>
                  <h2 className="text-3xl font-bold">Wellbeing Challenges</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Make habit-building fun! Start challenges, invite friends & compete to see who stays consistent. Our wellbeing challenges make personal growth engaging and social.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-stretchyo-blue mr-2 mt-1" />
                    <span>Customizable challenges for different wellness goals</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-stretchyo-blue mr-2 mt-1" />
                    <span>Social features to invite friends and compete</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-stretchyo-blue mr-2 mt-1" />
                    <span>Progress tracking and milestone celebrations</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-stretchyo-blue mr-2 mt-1" />
                    <span>Habit formation science integrated into challenge design</span>
                  </li>
                </ul>
                <Button className="bg-stretchyo-blue text-white hover:bg-stretchyo-blue/80">
                  Join Challenge
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Additional product sections would follow similar pattern */}
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
