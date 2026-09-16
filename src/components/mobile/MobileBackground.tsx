import React, { useEffect, useRef } from 'react';

const MobileBackground: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    for (let i = 0; i < 15; i++) {
      const particle = document.createElement('span');
      const size = Math.random() * 3 + 1;
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        border-radius: 50%;
        background: radial-gradient(circle at center, rgba(255, 107, 32, 0.4), transparent);
        box-shadow: 0 0 6px rgba(255, 107, 32, 0.2);
        animation: float ${Math.random() * 10 + 5}s ease-in-out infinite;
        animation-delay: ${Math.random() * 5}s;
        opacity: ${Math.random() * 0.4 + 0.1};
        pointer-events: none;
      `;
      container.appendChild(particle);
    }

    return () => {
      while (container.firstChild) container.removeChild(container.firstChild);
    };
  }, []);

  return (
    <>
      {/* Base dark background */}
      <div className="fixed inset-0 bg-[#0A0A0A] z-[-2]" />

      {/* Radial glow — top left */}
      <div
        className="fixed z-[-1] w-[420px] h-[420px] rounded-full blur-[120px] opacity-20 animate-pulse-slow"
        style={{
          top: '-80px',
          left: '-80px',
          background: 'radial-gradient(circle, #FF6B20, transparent 70%)',
        }}
      />

      {/* Radial glow — bottom right */}
      <div
        className="fixed z-[-1] w-[380px] h-[380px] rounded-full blur-[100px] opacity-15 animate-pulse-slow"
        style={{
          bottom: '-60px',
          right: '-60px',
          background: 'radial-gradient(circle, #FF8C40, transparent 70%)',
          animationDelay: '2s',
        }}
      />

      {/* Subtle center radial */}
      <div
        className="fixed z-[-1] w-[300px] h-[300px] rounded-full blur-[140px] opacity-10 animate-pulse-slow"
        style={{
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, #FF9E4D, transparent 70%)',
          animationDelay: '4s',
        }}
      />

      {/* Noise grid overlay for depth */}
      <div
        className="fixed inset-0 z-[-1] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FF6B20' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 0h1v1H0zm20 0h1v1h-1zM0 20h1v1H0zm20 20h1v1h-1z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Particles */}
      <div ref={particlesRef} className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden" />
    </>
  );
};

export default MobileBackground;
