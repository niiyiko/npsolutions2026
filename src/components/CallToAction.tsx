import React from 'react';
import { ChevronDown } from 'lucide-react';

interface CallToActionProps {
  onOpenModal: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ onOpenModal }) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center bg-primary-800/50 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 border border-accent-300/20">
            <span className="text-xs sm:text-sm font-light tracking-[0.2em] text-accent-300">GET STARTED</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white px-2">
            Your <span className="font-Cambria gradient-text">flood</span> of new customers{' '}
            <span className="font-extrabold italic relative inline-block">
              starts now
              <svg
                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 overflow-visible"
                viewBox="0 0 140 8"
                fill="none"
              >
                <path
                  d="M-5 4 L135 4"
                  stroke="#FF6B20"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="animate-draw-underline"
                />
              </svg>
            </span>.
          </h2>
          <p className="text-white font-thin text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Book a free 10-minute call and see exactly how we'll fill your calendar with new customers.
          </p>
          <div className="flex flex-col items-center">
            <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-accent-300 mb-3 sm:mb-4 animate-bounce" />
            <button
              onClick={onOpenModal}
              className="btn-primary text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4"
              style={{ fontFamily: 'Spartan, sans-serif' }}
            >
              <span className="font-thin">Ascend Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;