
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-20 w-96 h-96 bg-stretchyo-purple-light rounded-full filter blur-3xl opacity-20 z-0"></div>
      <div className="absolute bottom-0 left-0 -mb-20 w-96 h-96 bg-stretchyo-blue rounded-full filter blur-3xl opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Redefine How You
              <span className="bg-gradient-to-r from-stretchyo-purple to-stretchyo-blue bg-clip-text text-transparent"> Build Habits</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              StretchYo combines cutting-edge technology with wellness practices to help you live with purpose and build lasting habits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-gradient-to-r from-stretchyo-purple to-stretchyo-blue text-white text-lg px-8 py-6 rounded-lg hover:opacity-90">
                Get Started
              </Button>
              <Button variant="outline" className="border-stretchyo-purple text-stretchyo-purple hover:bg-stretchyo-purple/10 text-lg px-8 py-6 rounded-lg">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-stretchyo-purple-light to-stretchyo-blue rounded-xl transform rotate-6 scale-105"></div>
              <img 
                src="/lovable-uploads/c328338d-0be2-45c8-8150-4b250f869e45.png" 
                alt="StretchYo App Interface" 
                className="relative rounded-xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
