import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeaderProps {
  onOpenModal: () => void;
  onOpenServices: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenModal, onOpenServices }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const href = e.currentTarget.getAttribute('href');
    if (!href?.startsWith('#')) return;
    
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (!element) return;

    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-primary-800/30 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" onClick={handleNavClick} className="flex items-center space-x-2">
          <img
            src="/assets/le_tiger.png"
            alt="N.P. Solutions Logo"
            className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
          />
          <span className="text-lg sm:text-2xl font-light gradient-text" style={{ fontFamily: 'Spartan, sans-serif' }}>N.P. Solutions</span>
        </a>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="relative hidden sm:block">
            <button
              onClick={onOpenServices}
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
              className="btn-secondary text-sm md:text-base font-thin flex items-center gap-2"
              style={{ fontFamily: 'Spartan, sans-serif' }}
            >
              <span className="font-thin">Services</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showServicesDropdown ? 'rotate-180' : ''}`} />
            </button>

            {showServicesDropdown && (
              <div
                className="absolute top-full right-0 mt-2 w-64 glass-card border border-accent-300/20 shadow-glow-md z-50"
                onMouseEnter={() => setShowServicesDropdown(true)}
                onMouseLeave={() => setShowServicesDropdown(false)}
              >
                <div className="p-4">
                  <p className="text-light-400 text-sm mb-3">Explore our automation solutions:</p>
                  <div className="space-y-2">
                    {['Lead Generation', 'Agents', 'Scheduling', 'Website/App Creation', 'CRM Integration', 'Workflow Automation'].map((service) => (
                      <div key={service} className="text-white text-sm py-1 hover:text-accent-300 transition-colors cursor-pointer">
                        • {service}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={onOpenServices}
            className="btn-secondary text-xs px-3 py-2 font-thin sm:hidden flex items-center gap-1"
            style={{ fontFamily: 'Spartan, sans-serif' }}
          >
            <span className="font-thin">Services</span>
          </button>

          <button
            onClick={onOpenModal}
            className="btn-primary text-xs px-3 py-2 sm:text-sm sm:px-6 sm:py-3 md:text-base font-thin"
            style={{ fontFamily: 'Spartan, sans-serif' }}
          >
            <span className="font-thin hidden xs:inline">Get Free Workshop</span>
            <span className="font-thin xs:hidden">Get Started</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;