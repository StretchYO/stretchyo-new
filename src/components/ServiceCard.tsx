
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  number: number;
}

const ServiceCard = ({ icon: Icon, title, description, number }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
        <div className="absolute top-0 right-0 bg-gradient-to-r from-stretchyo-purple to-stretchyo-blue-light rounded-full w-12 h-12 flex items-center justify-center text-white font-bold -mt-4 -mr-4 transform group-hover:scale-110 transition-transform duration-300">
          {number}
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-stretchyo-purple/10 rounded-full p-4 mb-6 transform transition-all duration-300 group-hover:bg-stretchyo-purple/20 group-hover:scale-110">
            <Icon className="h-8 w-8 text-stretchyo-purple" />
          </div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-stretchyo-purple transition-colors duration-300">{title}</h3>
          <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
