
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-charcoal py-12 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h3 className="text-3xl font-display font-bold text-neon-gradient mb-2">
              VYBE Studio
            </h3>
            <p className="text-gray-400">
              Where creativity meets confidence through urban dance
            </p>
          </div>

          {/* Social Media */}
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://www.instagram.com/vybe.dance/" 
              className="w-12 h-12 bg-charcoal rounded-full flex items-center justify-center hover-glow transition-all duration-300 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 text-neon-pink group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://whatsapp.com/channel/0029VbAnNrV4dTnGqM7syg3t" 
              className="w-12 h-12 bg-charcoal rounded-full flex items-center justify-center hover-glow transition-all duration-300 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvdjk4Mi1kNi0wNS5wbmc.png?s=zqdMctxOSnDXcrp_qqthTMYlndqdROeqpcE3_RoRlLI" alt="WhatsApp" className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Copyright & Links */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400">
                © 2024 desifinn. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-neon-green transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* Floating decoration */}
          <div className="absolute bottom-20 right-10 hidden lg:block">
            <div className="w-8 h-8 bg-gradient-to-br from-neon-green to-neon-blue rounded-full opacity-20 animate-float" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
