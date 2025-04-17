
import { Button } from "./ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-stretchyo-purple rounded-xl opacity-10 transform -rotate-6"></div>
              <img 
                src="/lovable-uploads/0b89b476-059c-4643-b6a0-8dde736093fd.png" 
                alt="StretchYo Team" 
                className="relative rounded-xl shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-stretchyo-purple to-stretchyo-blue rounded-xl p-4 shadow-lg">
                <p className="text-white font-bold">Founded Dec 2022</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About STRETCHYO LLC</h2>
            <p className="text-lg text-gray-600 mb-6">
              StretchYo LLC, founded in December 2022 and headquartered in Milpitas, California, is a conscious wellness-tech company on a mission to redefine how people build habits and live with purpose.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We combine cutting-edge technology with proven wellness practices to deliver solutions that make a real difference in people's lives. Our team of experts is passionate about helping individuals and businesses reach their full potential.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Our Mission</h3>
                <p className="text-gray-600">To empower individuals through technology-enhanced wellness solutions.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Our Vision</h3>
                <p className="text-gray-600">A world where technology enhances human wellbeing and purpose.</p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-stretchyo-purple to-stretchyo-blue text-white">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
