
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceShowcaseProps {
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
  buttonText: string;
  reversed?: boolean;
}

const ServiceShowcase = ({
  title,
  description,
  features,
  imageSrc,
  imageAlt,
  buttonText,
  reversed = false
}: ServiceShowcaseProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className={`absolute -inset-4 bg-gradient-to-r ${reversed ? 'from-stretchyo-blue to-stretchyo-purple-light' : 'from-stretchyo-purple-light to-stretchyo-blue'} rounded-xl opacity-10 transform ${reversed ? 'rotate-3' : '-rotate-3'}`}></div>
              <img 
                src={imageSrc} 
                alt={imageAlt} 
                className="relative rounded-xl shadow-lg w-full object-cover h-[400px]"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4 gradient-text">{title}</h2>
            <p className="text-lg text-gray-600 mb-6">{description}</p>
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-stretchyo-purple mr-2 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="bg-gradient-to-r from-stretchyo-purple to-stretchyo-blue text-white">
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;
