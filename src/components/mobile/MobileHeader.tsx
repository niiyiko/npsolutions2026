import React, { useState, useEffect } from 'react';
import { X, ChevronDown, Menu } from 'lucide-react';

interface MobileHeaderProps {
  onOpenModal: () => void;
  onOpenServices: () => void;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ onOpenModal, onOpenServices }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    document.body.style.overflow = '';
    setMenuOpen(false);

    requestAnimationFrame(() => {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const el = document.getElementById(id);
      if (!el) return;
      const navHeight = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    });
  };

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0A0A0A]/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="px-4 py-3 flex justify-between items-center">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo('home'); }}
            className="flex items-center space-x-2"
          >
            <img src="/assets/le_tiger.png" alt="N.P. Solutions" className="h-9 w-9 object-contain" />
            <span className="text-lg font-light gradient-text" style={{ fontFamily: 'Spartan, sans-serif' }}>
              N.P. Solutions
            </span>
          </a>

          <button
            onClick={() => setMenuOpen(true)}
            className="p-2 rounded-lg bg-primary-800/60 border border-accent-300/20 text-white"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Full-screen slide-in menu */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-[#0A0A0A] transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        {/* Glow accents inside menu */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #FF6B20, transparent 70%)' }} />

        <div className="flex items-center justify-between px-4 py-4 border-b border-primary-700/40">
          <div className="flex items-center space-x-2">
            <img src="/assets/le_tiger.png" alt="N.P. Solutions" className="h-9 w-9 object-contain" />
            <span className="text-lg font-light gradient-text" style={{ fontFamily: 'Spartan, sans-serif' }}>
              N.P. Solutions
            </span>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-full bg-primary-800/80 border border-accent-300/20 text-white"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 flex flex-col justify-center px-6 space-y-2">
          {[
            { label: 'Home', id: 'home' },
            { label: 'Portfolio', id: 'results' },
          ].map(({ label, id }) => (
            <button
              key={label}
              onClick={() => id ? scrollTo(id) : setMenuOpen(false)}
              className="text-left text-2xl font-light text-white py-4 border-b border-primary-700/30 hover:text-accent-300 transition-colors duration-200"
              style={{ fontFamily: 'Spartan, sans-serif' }}
            >
              {label}
            </button>
          ))}

          <button
            onClick={() => { document.body.style.overflow = ''; setMenuOpen(false); onOpenServices(); }}
            className="text-left text-2xl font-light text-white py-4 border-b border-primary-700/30 flex items-center justify-between hover:text-accent-300 transition-colors duration-200"
            style={{ fontFamily: 'Spartan, sans-serif' }}
          >
            <span>Services</span>
            <ChevronDown className="h-5 w-5 opacity-50" />
          </button>
        </nav>

        <div className="px-6 pb-10 space-y-3">
          <button
            onClick={() => { document.body.style.overflow = ''; setMenuOpen(false); onOpenModal(); }}
            className="btn-primary w-full py-4 text-base"
            style={{ fontFamily: 'Spartan, sans-serif' }}
          >
            <span className="font-thin">Get Free Workshop</span>
          </button>
          <button
            onClick={() => { document.body.style.overflow = ''; setMenuOpen(false); onOpenServices(); }}
            className="btn-secondary w-full py-4 text-base"
            style={{ fontFamily: 'Spartan, sans-serif' }}
          >
            <span className="font-thin">View Services</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
