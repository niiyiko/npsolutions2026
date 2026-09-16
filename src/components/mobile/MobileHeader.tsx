import React, { useState, useEffect } from 'react';

interface MobileHeaderProps {
  onOpenModal: () => void;
  onOpenServices: () => void;
}

const MobileHeader: React.FC<MobileHeaderProps> = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHome = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A0A0A]/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="px-4 py-3 flex items-center">
        <a
          href="#home"
          onClick={scrollToHome}
          className="flex items-center space-x-2"
        >
          <img src="/assets/le_tiger.png" alt="N.P. Solutions" className="h-9 w-9 object-contain" />
          <span className="text-lg font-light gradient-text" style={{ fontFamily: 'Spartan, sans-serif' }}>
            N.P. Solutions
          </span>
        </a>
      </div>
    </header>
  );
};

export default MobileHeader;
