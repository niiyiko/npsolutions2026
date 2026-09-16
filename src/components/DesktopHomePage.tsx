import React, { useEffect, useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Solutions from './Solutions';
import WhyChoose from './WhyChoose';
import Results from './Results';
import CallToAction from './CallToAction';
import ContactModal from './ContactModal';
import ServicesModal from './ServicesModal';
import Footer from './Footer';
import { observeElements, createParticles } from '../utils/animations';

function DesktopHomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService('');
  };

  const openServicesModal = () => setIsServicesModalOpen(true);
  const closeServicesModal = () => setIsServicesModalOpen(false);

  const handleServiceSelection = (service: string) => {
    setSelectedService(service);
  };

  useEffect(() => {
    // Dynamically load Spline viewer only on desktop
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.92/build/spline-viewer.js';
    document.head.appendChild(script);

    const fadeInObserver = observeElements('.fade-in', 'opacity-100');
    const slideUpObserver = observeElements('.slide-up', 'translate-y-0');

    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);
    createParticles(particlesContainer, 70);

    const handleMouseMove = (e: MouseEvent) => {
      const splineViewer = document.querySelector('spline-viewer') as HTMLElement | null;
      if (!splineViewer) return;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const rotateY = ((e.clientX - centerX) / centerX) * 8;
      const rotateX = -((e.clientY - centerY) / centerY) * 8;

      // CSS has !important on transform, so we must use setProperty with 'important'
      // to override it. Base positioning (translate + scale) is preserved here.
      splineViewer.style.setProperty(
        'transform',
        `translate(-50%, -50%) scale(1.15) perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        'important'
      );
    };

    const handleMouseLeave = () => {
      const splineViewer = document.querySelector('spline-viewer') as HTMLElement | null;
      if (!splineViewer) return;
      splineViewer.style.setProperty(
        'transform',
        'translate(-50%, -50%) scale(1.15)',
        'important'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (fadeInObserver) fadeInObserver.disconnect();
      if (slideUpObserver) slideUpObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      if (particlesContainer.parentNode) {
        particlesContainer.parentNode.removeChild(particlesContainer);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-primary-900 text-white font-sans overflow-hidden relative">
      <spline-viewer url="https://prod.spline.design/3Hb5NLwwtpT3t29O/scene.splinecode"></spline-viewer>
      <Header onOpenModal={openModal} onOpenServices={openServicesModal} />
      <main>
        <Hero onOpenModal={openModal} />
        <Solutions onOpenModal={openModal} />
        <WhyChoose />
        <Results />
        <CallToAction onOpenModal={openModal} />
      </main>
      <Footer className="relative bg-primary-800 z-10" />
      <ContactModal
        isOpen={isModalOpen}
        onClose={closeModal}
        preSelectedService={selectedService}
      />
      <ServicesModal
        isOpen={isServicesModalOpen}
        onClose={closeServicesModal}
        onSelectService={handleServiceSelection}
        onOpenContact={() => {
          closeServicesModal();
          openModal();
        }}
      />
    </div>
  );
}

export default DesktopHomePage;
