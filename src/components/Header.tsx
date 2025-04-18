
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full bg-background/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-2xl bg-gradient-to-r from-stretchyo-purple to-stretchyo-blue bg-clip-text text-transparent">
            StretchYo
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-stretchyo-purple font-medium">
            Home
          </Link>
          <Link to="/services" className="text-foreground hover:text-stretchyo-purple font-medium">
            Services
          </Link>
          <Link to="/products" className="text-foreground hover:text-stretchyo-purple font-medium">
            Products
          </Link>
          <Link to="/about" className="text-foreground hover:text-stretchyo-purple font-medium">
            About
          </Link>
          <Link to="/contact" className="text-foreground hover:text-stretchyo-purple font-medium">
            Contact
          </Link>
          <ThemeToggle />
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button className="bg-gradient-to-r from-stretchyo-purple to-stretchyo-blue text-white hover:opacity-90">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background shadow-lg">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <Link to="/" className="text-foreground hover:text-stretchyo-purple font-medium" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/services" className="text-foreground hover:text-stretchyo-purple font-medium" onClick={toggleMenu}>
              Services
            </Link>
            <Link to="/products" className="text-foreground hover:text-stretchyo-purple font-medium" onClick={toggleMenu}>
              Products
            </Link>
            <Link to="/about" className="text-foreground hover:text-stretchyo-purple font-medium" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/contact" className="text-foreground hover:text-stretchyo-purple font-medium" onClick={toggleMenu}>
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
