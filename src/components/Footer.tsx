import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Youtube, Facebook, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  className?: string;
}

const PinterestIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.1z"/>
  </svg>
);

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`bg-primary-800 relative ${className}`}>
      <div className="container mx-auto px-4 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <img
                src="/assets/le_tiger.png"
                alt="N.P. Solutions Logo"
                className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
              />
              <span className="text-xl sm:text-2xl font-light gradient-text" style={{ fontFamily: 'Spartan, sans-serif' }}>N.P. Solutions</span>
            </div>
            <p className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-normal gradient-text mb-2" style={{ fontFamily: 'Spartan, sans-serif' }}>Ascend Your Metrics.</p>
            <p className="text-light-300 text-sm sm:text-base lg:text-lg font-medium leading-relaxed mb-4 sm:mb-6">
              Built for enterprise as well as local brick and mortar businesses.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <a
                href="https://www.youtube.com/channel/UCXrWvPApmweMWJuR5Emi7SA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-500 hover:text-accent-300 transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61584998540431"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-500 hover:text-accent-300 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/n.p.solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-500 hover:text-accent-300 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="http://www.linkedin.com/in/nik-pruitt-b4753b248"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-500 hover:text-accent-300 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="http://www.pinterest.com/nikpruittsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-500 hover:text-accent-300 transition-colors duration-300"
                aria-label="Pinterest"
              >
                <PinterestIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@n.p.solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-500 hover:text-accent-300 transition-colors duration-300"
                aria-label="TikTok"
              >
                <TiktokIcon className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/NPSolutions__"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-500 hover:text-accent-300 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Navigation</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#home" className="text-light-500 hover:text-accent-300 transition-colors duration-300 text-sm sm:text-base">
                  Home
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-light-500 hover:text-accent-300 transition-colors duration-300 text-sm sm:text-base">
                  Services
                </a>
              </li>
              <li>
                <a href="#results" className="text-light-500 hover:text-accent-300 transition-colors duration-300 text-sm sm:text-base">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start group">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-accent-300 mt-0.5 mr-2 sm:mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <a
                  href="mailto:ntpruitt26@gmail.com"
                  className="text-sm sm:text-base break-all gradient-text font-semibold transition-all duration-300 glow-on-hover outline-none focus:outline-none"
                >
                  ntpruitt26@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-accent-300 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                <span className="text-light-500 text-sm sm:text-base">(972) 639-2513</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-accent-300 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                <span className="text-light-500 text-sm sm:text-base">
                  9413 Drovers View Trail, Fort Worth, TX 76131
                </span>
              </li>
            </ul>
            <div className="mt-4 sm:mt-6">
              <Link
                to="/contact"
                className="btn-primary w-full text-xs sm:text-sm py-2 block text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-primary-700 text-center">
          <a href="#home" className="text-accent-300 hover:text-accent-200 transition-colors duration-300 text-sm sm:text-base">
            N.P Solutions Home
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;