
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-2xl bg-gradient-to-r from-stretchyo-purple to-stretchyo-blue bg-clip-text text-transparent">
            StretchYo
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-800 hover:text-stretchyo-purple font-medium">
            Home
          </Link>
          <Link to="/services" className="text-gray-800 hover:text-stretchyo-purple font-medium">
            Services
          </Link>
          <Link to="/products" className="text-gray-800 hover:text-stretchyo-purple font-medium">
            Products
          </Link>
          <Link to="/about" className="text-gray-800 hover:text-stretchyo-purple font-medium">
            About
          </Link>
          <Link to="/contact" className="text-gray-800 hover:text-stretchyo-purple font-medium">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-gradient-to-r from-stretchyo-purple to-stretchyo-blue text-white hover:opacity-90">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <Link to="/" className="text-gray-800 hover:text-stretchyo-purple font-medium" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/services" className="text-gray-800 hover:text-stretchyo-purple font-medium" onClick={toggleMenu}>
              Services
            </Link>
            <Link to="/products" className="text-gray-800 hover:text-stretchyo-purple font-medium" onClick={toggleMenu}>
              Products
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-stretchyo-purple font-medium" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-stretchyo-purple font-medium" onClick={toggleMenu}>
              Contact
            </Link>
            <Button className="bg-gradient-to-r from-stretchyo-purple to-stretchyo-blue text-white hover:opacity-90 w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
