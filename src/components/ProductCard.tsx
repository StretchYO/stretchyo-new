
import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  color: string;
}

const ProductCard = ({ icon: Icon, title, description, buttonText, color }: ProductCardProps) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group`}>
      <div className={`bg-${color}/10 p-6`}>
        <div className="flex items-center space-x-3">
          <div className={`bg-${color} rounded-full p-3`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-6">{description}</p>
        <Button className={`bg-${color} text-white hover:bg-${color}/90 w-full`}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
