
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
      <div className="relative bg-background dark:bg-card rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
        <div className="absolute top-0 right-0 bg-gradient-to-r from-stretchyo-purple to-stretchyo-blue-light rounded-full w-12 h-12 flex items-center justify-center text-white font-bold -mt-4 -mr-4 transform group-hover:scale-110 transition-transform duration-300">
          {number}
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-stretchyo-purple/10 dark:bg-stretchyo-purple/20 rounded-full p-4 mb-6 transform transition-all duration-300 group-hover:bg-stretchyo-purple/20 dark:group-hover:bg-stretchyo-purple/30 group-hover:scale-110">
            <Icon className="h-8 w-8 text-stretchyo-purple dark:text-stretchyo-purple-light" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-stretchyo-purple dark:group-hover:text-stretchyo-purple-light transition-colors duration-300">{title}</h3>
          <p className="text-muted-foreground dark:text-muted-foreground group-hover:text-foreground transition-colors duration-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
