import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const MobileFooter: React.FC = () => {
  return (
    <footer className="bg-primary-800 relative z-10 px-4 py-6">
      <p className="text-2xl font-normal gradient-text mb-1" style={{ fontFamily: 'Spartan, sans-serif' }}>
        Ascend Your Metrics.
      </p>
      <p className="text-light-300 text-sm font-medium leading-relaxed mb-4">
        Built for enterprise as well as local brick and mortar businesses.
      </p>

      <a
        href="http://www.linkedin.com/in/nik-pruitt-b4753b248"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="inline-flex items-center gap-2 p-2.5 rounded-full bg-primary-700/50 text-light-500 hover:text-accent-300 transition-colors duration-300 mb-5"
      >
        <Linkedin className="h-5 w-5" />
      </a>

      <div className="border-t border-primary-700 pt-4 space-y-2.5">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-accent-300 flex-shrink-0" />
          <a href="mailto:ntpruitt26@gmail.com" className="text-sm gradient-text font-semibold break-all">
            ntpruitt26@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-accent-300 flex-shrink-0" />
          <span className="text-light-500 text-sm">(972) 639-2513</span>
        </div>
        <div className="flex items-start gap-2">
          <MapPin className="h-4 w-4 text-accent-300 flex-shrink-0 mt-0.5" />
          <span className="text-light-500 text-sm">9413 Drovers View Trail, Fort Worth, TX 76131</span>
        </div>
      </div>
    </footer>
  );
};

export default MobileFooter;

