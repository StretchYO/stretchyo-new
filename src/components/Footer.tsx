
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-stretchyo-purple-dark to-stretchyo-purple text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold mb-4">StretchYo LLC</h3>
            <p className="text-sm mb-6">
              A conscious wellness-tech company on a mission to redefine how people build habits
              and live with purpose.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-stretchyo-blue-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-stretchyo-blue-light transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-stretchyo-blue-light transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-stretchyo-blue-light transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-stretchyo-blue-light transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-stretchyo-blue-light transition-colors">Services</Link></li>
              <li><Link to="/products" className="hover:text-stretchyo-blue-light transition-colors">Products</Link></li>
              <li><Link to="/about" className="hover:text-stretchyo-blue-light transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-stretchyo-blue-light transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services#website" className="hover:text-stretchyo-blue-light transition-colors">Website Design</Link></li>
              <li><Link to="/services#app" className="hover:text-stretchyo-blue-light transition-colors">Branded Loyalty App</Link></li>
              <li><Link to="/services#assistant" className="hover:text-stretchyo-blue-light transition-colors">AI Virtual Assistant</Link></li>
              <li><Link to="/services#personalization" className="hover:text-stretchyo-blue-light transition-colors">AI Personalization</Link></li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} />
                <span>Milpitas, California</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <span>+1 (573) 222-0685</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span>strethyo@strecthyo.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} StretchYo LLC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
