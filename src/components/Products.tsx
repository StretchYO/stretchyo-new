
import { Lightbulb, Users, Activity, Clock } from "lucide-react";
import ProductCard from "./ProductCard";

const Products = () => {
  const products = [
    {
      icon: Lightbulb,
      title: "AI Personalization",
      description: "Exclusive use of AI that genuinely understands your emotional & behavioral patterns for true personalization.",
      buttonText: "Learn More",
      color: "stretchyo-purple",
    },
    {
      icon: Activity,
      title: "Wellbeing Challenges",
      description: "Make habit-building fun! Start challenges, invite friends & compete to see who stays consistent.",
      buttonText: "Join Challenge",
      color: "stretchyo-blue",
    },
    {
      icon: Clock,
      title: "Smart Pomodoro",
      description: "Boost your productivity with our AI-enhanced time management system that adapts to your work patterns.",
      buttonText: "Try Now",
      color: "stretchyo-purple-dark",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Active community with tailored connections, ensuring meaningful support on your wellness journey.",
      buttonText: "Join Community",
      color: "stretchyo-blue-light",
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our products are designed to help you build better habits and improve your wellbeing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              icon={product.icon}
              title={product.title}
              description={product.description}
              buttonText={product.buttonText}
              color={product.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
