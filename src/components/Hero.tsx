import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const splineContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;
    
    const container = particlesRef.current;
    
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('span');
      const size = Math.random() * 4 + 1;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.opacity = `${Math.random() * 0.5 + 0.1}`;
      particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particle.style.animation = `float ${Math.random() * 10 + 5}s ease-in-out infinite`;
      
      container.appendChild(particle);
    }
    
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 md:pt-20 pb-12 md:pb-16 overflow-hidden">
      <div ref={particlesRef} className="particles"></div>

      <div className="container mx-auto px-4 relative z-10 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="lg:w-1/2 text-center flex flex-col items-center">
            <div className="bg-primary-900/70 backdrop-blur-md rounded-2xl px-6 md:px-10 py-8 md:py-10 border border-primary-700/40 shadow-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 md:mb-6 gradient-text leading-tight max-w-4xl" style={{ fontFamily: 'Spartan, sans-serif' }}>
                Create a New Path of MONEY. IN.
              </h1>

              <p className="text-white text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 font-semibold tracking-wide leading-relaxed max-w-3xl">
                Customers are already looking for your services.
              </p>

              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 max-w-2xl leading-relaxed font-medium tracking-wide bg-primary-800/50 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full border border-primary-700/50 mx-auto">
                We help local businesses capture and convert them automatically.
              </p>

              <div className="mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6" style={{ display: 'none' }}>
                  Software Company Dallas Fort Worth
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 lg:px-0">
              <button onClick={onOpenModal} className="btn-primary flex items-center justify-center text-sm md:text-base px-5 md:px-6 py-2.5 md:py-3" style={{ fontFamily: 'Spartan, sans-serif' }}>
                <span className="font-thin">Get Started</span>
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </button>
              <a href="#solutions" className="btn-secondary flex items-center justify-center text-sm md:text-base px-5 md:px-6 py-2.5 md:py-3">
                Explore Solutions
              </a>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative w-full mt-8 lg:mt-0">
            <div className="relative w-full max-w-lg mx-auto animate-float">
              <div className="absolute top-0 -left-4 w-48 md:w-72 h-48 md:h-72 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
              <div className="absolute top-0 -right-4 w-48 md:w-72 h-48 md:h-72 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
              <div className="absolute -bottom-8 left-20 w-48 md:w-72 h-48 md:h-72 bg-secondary-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '4s' }}></div>

              <div className="mb-3 md:mb-4 inline-flex items-center bg-primary-800/50 backdrop-blur-sm px-4 py-1.5 md:py-2">
                <span className="text-xs md:text-sm font-light tracking-[0.2em] text-light-400">CONNECT</span>
              </div>

              <div className="relative glass-card p-4 md:p-6 lg:p-8 overflow-hidden border border-primary-600 shadow-glow-sm">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 md:w-32 h-24 md:h-32 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-4 md:mb-6">
                    <img
                      src="/assets/le_tiger.png"
                      alt="Ascendrix"
                      className="w-10 md:w-12 h-10 md:h-12 object-contain"
                    />
                    <div className="ml-2 md:ml-3">
                      <h3 className="text-base md:text-lg font-semibold">Ascendrix</h3>
                      <p className="text-xs md:text-sm text-light-500">Always online</p>
                    </div>
                  </div>

                  <div className="mb-3 md:mb-4 p-3 md:p-4 rounded-lg bg-primary-800/50 backdrop-blur-sm">
                    <p className="text-xs md:text-sm text-light-500">How do we never miss another call, lead, or booking</p>
                  </div>

                  <div className="mb-3 md:mb-4 p-3 md:p-4 rounded-lg bg-secondary-500/10 backdrop-blur-sm ml-auto max-w-[80%]">
                    <p className="text-xs md:text-sm">We need to automate our lead qualification process.</p>
                  </div>

                  <div className="mb-3 md:mb-4 p-3 md:p-4 rounded-lg bg-primary-800/50 backdrop-blur-sm">
                    <p className="text-xs md:text-sm text-light-500">I can create a custom agent that qualifies leads based on your criteria, integrates with your CRM, and schedules follow-up calls automatically. Just kick back, relax, and I'll take care of the rest.</p>
                  </div>

                  <div className="w-full h-1 bg-primary-700/50 rounded-full overflow-hidden mt-4 md:mt-6">
                    <div className="h-full w-2/3 bg-gradient-to-r from-secondary-500 to-accent-400 animate-pulse"></div>
                  </div>

                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-light-500">Processing request...</span>
                    <span className="text-xs text-light-500">67%</span>
                  </div>

                  <div className="flex items-center justify-center gap-2 mt-6 md:mt-8 pt-4 border-t border-primary-700/30">
                    <span className="text-xs text-light-500 font-light tracking-[0.15em] uppercase">Powered by</span>
                    <span className="text-xs text-accent-300 font-medium tracking-[0.1em]">N.P. Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;