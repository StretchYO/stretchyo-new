
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Cta = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-stretchyo-purple to-stretchyo-blue">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Digital Presence?</h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
          Get started with StretchYo today and see the difference our services and products can make.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button className="bg-white text-stretchyo-purple hover:bg-white/90 text-lg px-8 py-6">
            Get Started
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
            Contact Us <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
