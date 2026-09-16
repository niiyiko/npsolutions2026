import React from 'react';
import { ChevronDown } from 'lucide-react';

interface MobileCallToActionProps {
  onOpenModal: () => void;
}

const MobileCallToAction: React.FC<MobileCallToActionProps> = ({ onOpenModal }) => {
  return (
    <section className="py-12 px-4 relative">
      <div className="relative z-10 text-center">
        <div className="inline-flex items-center bg-primary-800/50 backdrop-blur-sm rounded-full px-4 py-2 mb-5 border border-accent-300/20">
          <span className="text-xs font-light tracking-[0.2em] text-accent-300">GET STARTED</span>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-white leading-snug">
          Your <span className="gradient-text">flood</span> of new customers{' '}
          <span className="font-extrabold italic relative inline-block">
            starts now
            <svg
              className="absolute -bottom-1 left-0 w-full h-2 overflow-visible"
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
          </span>
          .
        </h2>

        <p className="text-white font-thin text-sm mb-6 max-w-xs mx-auto leading-relaxed">
          Book a free 10-minute call and see exactly how we'll fill your calendar with new customers.
        </p>

        <div className="flex flex-col items-center">
          <ChevronDown className="h-5 w-5 text-accent-300 mb-3 animate-bounce" />
          <button
            onClick={onOpenModal}
            className="btn-primary w-full max-w-xs py-4 text-base"
            style={{ fontFamily: 'Spartan, sans-serif' }}
          >
            <span className="font-thin">Ascend Now</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MobileCallToAction;
