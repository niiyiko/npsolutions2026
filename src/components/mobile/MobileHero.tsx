import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface MobileHeroProps {
  onOpenModal: () => void;
}

const MobileHero: React.FC<MobileHeroProps> = ({ onOpenModal }) => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    for (let i = 0; i < 8; i++) {
      const p = document.createElement('span');
      const size = Math.random() * 3 + 1;
      p.style.cssText = `
        position:absolute;width:${size}px;height:${size}px;
        left:${Math.random() * 100}%;top:${Math.random() * 100}%;
        border-radius:50%;opacity:${Math.random() * 0.4 + 0.1};
        background:radial-gradient(circle,rgba(255,107,32,0.5),transparent);
        animation:float ${Math.random() * 10 + 5}s ease-in-out infinite;
        animation-delay:${Math.random() * 5}s;pointer-events:none;
      `;
      container.appendChild(p);
    }
    return () => { while (container.firstChild) container.removeChild(container.firstChild); };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-20 pb-12 px-5 overflow-hidden">
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-hidden" />

      <div className="relative z-10 flex flex-col items-center text-center">

        {/* Headline card — unchanged */}
        <div className="bg-primary-900/85 rounded-2xl px-5 py-8 border border-primary-700/40 shadow-2xl w-full max-w-sm mx-auto mb-12">
          <h1
            className="text-3xl font-light gradient-text leading-tight mb-4"
            style={{ fontFamily: 'Spartan, sans-serif' }}
          >
            Create a New Path of MONEY. IN.
          </h1>

          <p className="text-white text-base font-semibold tracking-wide leading-relaxed mb-3">
            Customers are already looking for your services.
          </p>

          <p className="text-white text-sm mb-6 leading-relaxed font-medium tracking-wide bg-primary-800/50 px-4 py-2 rounded-full border border-primary-700/50">
            We help local businesses capture and convert them automatically.
          </p>

          <div className="flex flex-col gap-3">
            <button
              onClick={onOpenModal}
              className="btn-primary flex items-center justify-center text-sm px-5 py-3"
              style={{ fontFamily: 'Spartan, sans-serif' }}
            >
              <span className="font-thin">Get Started</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <a
              href="#solutions"
              className="btn-secondary flex items-center justify-center text-sm px-5 py-3"
            >
              Explore Solutions
            </a>
          </div>
        </div>

        {/* ── Conversational thread — no outer box ── */}
        <div className="w-full max-w-sm mx-auto text-left">

          {/* Thread header — left-aligned, no background */}
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/assets/le_tiger.png"
              alt="Ascendrix"
              className="w-9 h-9 object-contain rounded-full"
            />
            <div>
              <p className="text-sm font-semibold text-white leading-none mb-1">Ascendrix</p>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-light-500">Always online</span>
              </div>
            </div>
          </div>

          {/* Bot message 1 */}
          <div className="flex items-end gap-2.5 mb-5">
            <img
              src="/assets/le_tiger.png"
              alt=""
              className="w-6 h-6 object-contain rounded-full flex-shrink-0 mb-0.5 opacity-50"
            />
            <div
              className="bg-primary-800/55 rounded-2xl rounded-bl-sm px-4 py-3 max-w-[80%]"
              style={{ borderLeft: '2px solid rgba(255,140,64,0.45)', boxShadow: '0 0 10px rgba(255,140,64,0.07)' }}
            >
              <p className="text-xs text-light-400 leading-relaxed">
                How do we never miss another call, lead, or booking?
              </p>
            </div>
          </div>

          {/* User message */}
          <div className="flex justify-end mb-5">
            <div className="bg-secondary-500/15 rounded-2xl rounded-br-sm px-4 py-3 max-w-[78%] border border-secondary-500/25">
              <p className="text-xs text-white leading-relaxed">
                We need to automate our lead qualification process.
              </p>
            </div>
          </div>

          {/* Bot message 2 */}
          <div className="flex items-end gap-2.5 mb-5">
            <img
              src="/assets/le_tiger.png"
              alt=""
              className="w-6 h-6 object-contain rounded-full flex-shrink-0 mb-0.5 opacity-50"
            />
            <div
              className="bg-primary-800/55 rounded-2xl rounded-bl-sm px-4 py-3 max-w-[80%]"
              style={{ borderLeft: '2px solid rgba(255,140,64,0.45)', boxShadow: '0 0 10px rgba(255,140,64,0.07)' }}
            >
              <p className="text-xs text-light-400 leading-relaxed">
                I can create a custom agent that qualifies leads based on your criteria, integrates with your CRM, and schedules follow-up calls automatically. Just kick back and I'll handle the rest.
              </p>
            </div>
          </div>

          {/* Processing indicator — inline, left side, no box */}
          <div className="pl-[34px] mb-6">
            <div className="w-full h-0.5 bg-primary-700/40 rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-gradient-to-r from-secondary-500 to-accent-400 animate-pulse" />
            </div>
            <div className="flex justify-between items-center mt-1.5">
              <span className="text-[10px] text-light-600 tracking-wide">Processing request...</span>
              <span className="text-[10px] text-light-600">67%</span>
            </div>
          </div>

          {/* Attribution — centered, no divider */}
          <div className="flex items-center justify-center gap-1.5">
            <span className="text-[10px] text-light-600 font-light tracking-[0.15em] uppercase">
              Powered by
            </span>
            <span className="text-[10px] text-accent-300 font-medium tracking-[0.1em]">
              N.P. Solutions
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MobileHero;
