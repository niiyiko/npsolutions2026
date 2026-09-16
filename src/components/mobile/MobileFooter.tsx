import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Youtube, Facebook, Instagram, Twitter } from 'lucide-react';

const PinterestIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.1z" />
  </svg>
);

const socialLinks = [
  { href: 'https://www.youtube.com/channel/UCXrWvPApmweMWJuR5Emi7SA', icon: <Youtube className="h-5 w-5" />, label: 'YouTube' },
  { href: 'https://www.facebook.com/profile.php?id=61584998540431', icon: <Facebook className="h-5 w-5" />, label: 'Facebook' },
  { href: 'https://www.instagram.com/n.p.solutions/', icon: <Instagram className="h-5 w-5" />, label: 'Instagram' },
  { href: 'http://www.linkedin.com/in/nik-pruitt-b4753b248', icon: <Linkedin className="h-5 w-5" />, label: 'LinkedIn' },
  { href: 'http://www.pinterest.com/nikpruittsolutions', icon: <PinterestIcon className="h-5 w-5" />, label: 'Pinterest' },
  { href: 'https://www.tiktok.com/@n.p.solutions', icon: <TiktokIcon className="h-5 w-5" />, label: 'TikTok' },
  { href: 'https://x.com/NPSolutions__', icon: <Twitter className="h-5 w-5" />, label: 'Twitter' },
];

const MobileFooter: React.FC = () => {
  return (
    <footer className="bg-primary-800 relative z-10 px-4 pt-8 pb-6">
      {/* Brand */}
      <div className="flex items-center space-x-2 mb-3">
        <img src="/assets/le_tiger.png" alt="N.P. Solutions Logo" className="h-9 w-9 object-contain" />
        <span className="text-xl font-light gradient-text" style={{ fontFamily: 'Spartan, sans-serif' }}>
          N.P. Solutions
        </span>
      </div>

      <p className="text-3xl font-normal gradient-text mb-1" style={{ fontFamily: 'Spartan, sans-serif' }}>
        Ascend Your Metrics.
      </p>
      <p className="text-light-300 text-sm font-medium leading-relaxed mb-5">
        Built for enterprise as well as local brick and mortar businesses.
      </p>

      {/* Social icons — larger tap targets */}
      <div className="flex flex-wrap gap-3 mb-6">
        {socialLinks.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="p-2.5 rounded-full bg-primary-700/50 text-light-500 hover:text-accent-300 transition-colors duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            {icon}
          </a>
        ))}
      </div>

      <div className="border-t border-primary-700 pt-5 mb-5">
        {/* Navigation */}
        <h3 className="text-sm font-semibold mb-3 text-white">Navigation</h3>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 mb-5">
          {[
            { label: 'Home', href: '#home' },
            { label: 'Services', href: '#solutions' },
            { label: 'Portfolio', href: '#results' },
          ].map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="text-light-500 hover:text-accent-300 transition-colors text-sm">
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact */}
        <h3 className="text-sm font-semibold mb-3 text-white">Contact</h3>
        <ul className="space-y-3 mb-5">
          <li className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-accent-300 flex-shrink-0" />
            <a
              href="mailto:ntpruitt26@gmail.com"
              className="text-sm gradient-text font-semibold break-all"
            >
              ntpruitt26@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-accent-300 flex-shrink-0" />
            <span className="text-light-500 text-sm">(972) 639-2513</span>
          </li>
          <li className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-accent-300 flex-shrink-0 mt-0.5" />
            <span className="text-light-500 text-sm">9413 Drovers View Trail, Fort Worth, TX 76131</span>
          </li>
        </ul>

        <Link
          to="/contact"
          className="btn-primary w-full text-sm py-3 block text-center"
        >
          Contact Us
        </Link>
      </div>

      <div className="text-center pt-2">
        <a href="#home" className="text-accent-300 hover:text-accent-200 transition-colors text-sm">
          N.P Solutions Home
        </a>
      </div>
    </footer>
  );
};

export default MobileFooter;
