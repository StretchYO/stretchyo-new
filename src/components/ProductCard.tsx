
import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  color: string;
}

const ProductCard = ({ icon: Icon, title, description, buttonText, color }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={`bg-background dark:bg-card rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group hover:-translate-y-2`}>
        <div className={`bg-${color}/10 dark:bg-${color}/20 p-6 transform transition-all duration-300 group-hover:scale-105`}>
          <div className="flex items-center space-x-3">
            <div className={`bg-${color} rounded-full p-3 transform transition-all duration-300 group-hover:scale-110`}>
              <Icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground group-hover:text-stretchyo-purple dark:group-hover:text-stretchyo-purple-light transition-colors duration-300">{title}</h3>
          </div>
        </div>
        <div className="p-6">
          <p className="text-muted-foreground dark:text-muted-foreground mb-6 group-hover:text-foreground transition-colors duration-300">{description}</p>
          <Button 
            className={`bg-${color} text-white hover:bg-${color}/90 w-full transform transition-all duration-300 hover:scale-105`}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
