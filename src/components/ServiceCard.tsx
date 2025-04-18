
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  number: number;
}

const ServiceCard = ({ icon: Icon, title, description, number }: ServiceCardProps) => {
  return (
    <div className="relative bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
      <div className="absolute top-0 right-0 bg-gradient-to-r from-stretchyo-purple to-stretchyo-blue-light rounded-full w-10 h-10 flex items-center justify-center text-white font-bold -mt-4 -mr-4">
        {number}
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="bg-stretchyo-purple/10 rounded-full p-4 mb-6">
          <Icon className="h-8 w-8 text-stretchyo-purple" />
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
