import React, { useState, lazy, Suspense } from 'react';
import MobileBackground from './MobileBackground';
import MobileHeader from './MobileHeader';
import MobileHero from './MobileHero';
import LazySection from './LazySection';

// Lazy load everything below the fold
const MobileSolutions = lazy(() => import('./MobileSolutions'));
const MobileWhyChoose = lazy(() => import('./MobileWhyChoose'));
const MobileResults = lazy(() => import('./MobileResults'));
const MobileCallToAction = lazy(() => import('./MobileCallToAction'));
const MobileFooter = lazy(() => import('./MobileFooter'));
const ContactModal = lazy(() => import('../ContactModal'));
const ServicesModal = lazy(() => import('../ServicesModal'));

const MobileHomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => { setIsModalOpen(false); setSelectedService(''); };
  const openServices = () => setIsServicesModalOpen(true);
  const closeServices = () => setIsServicesModalOpen(false);

  return (
    <div className="min-h-screen text-white font-sans overflow-x-hidden relative">
      <MobileBackground />

      <MobileHeader onOpenModal={openModal} onOpenServices={openServices} />

      <main>
        {/* Above the fold: loads immediately */}
        <MobileHero onOpenModal={openModal} />

        {/* Below the fold: loads only when scrolled near */}
        <LazySection minHeight="800px">
          <Suspense fallback={<div className="h-[800px]" />}>
            <MobileSolutions onOpenModal={openModal} />
          </Suspense>
        </LazySection>

        <LazySection minHeight="600px">
          <Suspense fallback={<div className="h-[600px]" />}>
            <MobileWhyChoose />
          </Suspense>
        </LazySection>

        <LazySection minHeight="800px">
          <Suspense fallback={<div className="h-[800px]" />}>
            <MobileResults />
          </Suspense>
        </LazySection>

        <LazySection minHeight="400px">
          <Suspense fallback={<div className="h-[400px]" />}>
            <MobileCallToAction onOpenModal={openModal} />
          </Suspense>
        </LazySection>
      </main>

      <LazySection minHeight="300px">
        <Suspense fallback={<div className="h-[300px]" />}>
          <MobileFooter />
        </Suspense>
      </LazySection>

      {/* Modals are only loaded when opened */}
      <Suspense fallback={null}>
        {isModalOpen && (
          <ContactModal
            isOpen={isModalOpen}
            onClose={closeModal}
            preSelectedService={selectedService}
          />
        )}
      </Suspense>
      
      <Suspense fallback={null}>
        {isServicesModalOpen && (
          <ServicesModal
            isOpen={isServicesModalOpen}
            onClose={closeServices}
            onSelectService={setSelectedService}
            onOpenContact={() => { closeServices(); openModal(); }}
          />
        )}
      </Suspense>
    </div>
  );
};

export default MobileHomePage;
