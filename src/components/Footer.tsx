import React from 'react';
import { Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img 
                src="/WhatsApp Image 2025-07-06 at 08.14.10.jpeg" 
                alt="Underdog Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-bold tracking-tight">UNDERDOG</span>
            </Link>
            <p className="text-gray-300 leading-relaxed max-w-md mb-6">
              Transforming ambitious brands into market leaders through fearless creativity 
              and strategic innovation. Every champion was once an underdog.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Instagram, href: "https://instagram.com/underdogagency" },
                { Icon: Twitter, href: "https://twitter.com/underdogagency" },
                { Icon: Linkedin, href: "https://linkedin.com/company/underdog-agency" },
                { Icon: Youtube, href: "https://youtube.com/@underdogagency" }
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-300">
              {[
                { name: 'Retail Marketing', path: '/services/retail-marketing' },
                { name: 'E-Commerce', path: '/services/ecommerce' },
                { name: 'Real Estate', path: '/services/real-estate' },
                { name: 'Brand Development', path: '/services/brand-development' },
                { name: 'Digital Advertising', path: '/services/digital-advertising' },
                { name: 'Social Media', path: '/services/social-media' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="hover:text-white transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link 
                  to="/about"
                  className="hover:text-white transition-colors duration-300 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/case-studies"
                  className="hover:text-white transition-colors duration-300 text-sm"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-white transition-colors duration-300 text-sm text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <a 
                  href="/careers"
                  className="hover:text-white transition-colors duration-300 text-sm"
                >
                  Careers
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <h5 className="text-sm font-semibold mb-4">Contact Info</h5>
              <ul className="space-y-2 text-gray-400 text-xs">
                <li className="flex items-center space-x-2">
                  <Mail size={12} />
                  <span>hello@underdog.agency</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone size={12} />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin size={12} />
                  <span>New York, Los Angeles, London</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Underdog Marketing Agency. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;