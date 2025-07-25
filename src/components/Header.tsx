import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const services = [
    { name: 'Retail Store Marketing', path: '/services/retail-marketing' },
    { name: 'E-Commerce & Online Stores', path: '/services/ecommerce' },
    { name: 'Real Estate Marketing', path: '/services/real-estate' },
    { name: 'Brand Development', path: '/services/brand-development' },
    { name: 'Digital Advertising', path: '/services/digital-advertising' },
    { name: 'Social Media Management', path: '/services/social-media' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/WhatsApp Image 2025-07-06 at 08.14.10.jpeg" 
              alt="Underdog Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-2xl font-bold text-white tracking-tight">UNDERDOG</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('work')}
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide uppercase"
            >
              Work
            </button>
            
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide uppercase flex items-center space-x-1">
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-2xl transition-all duration-300 ${
                isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="p-6 space-y-3">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm py-2 px-3 rounded-lg hover:bg-gray-800/50"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide uppercase"
            >
              About
            </Link>
            
            <Link
              to="/case-studies"
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide uppercase"
            >
              Case Studies
            </Link>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide uppercase"
            >
              Contact
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-black/95 backdrop-blur-lg`}>
        <nav className="px-6 py-4 space-y-4">
          <button
            onClick={() => scrollToSection('work')}
            className="block w-full text-left text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide uppercase py-2"
          >
            Work
          </button>
          
          <div className="space-y-2">
            <div className="text-white/60 text-xs uppercase tracking-wider py-2">Services</div>
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm py-2 pl-4"
              >
                {service.name}
              </Link>
            ))}
          </div>
          
          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className="block w-full text-left text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide uppercase py-2"
          >
            About
          </Link>
          
          <Link
            to="/case-studies"
            onClick={() => setIsMenuOpen(false)}
            className="block w-full text-left text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide uppercase py-2"
          >
            Case Studies
          </Link>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="block w-full text-left text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide uppercase py-2"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;