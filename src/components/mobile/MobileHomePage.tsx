import React, { useState } from 'react';
import MobileBackground from './MobileBackground';
import MobileHeader from './MobileHeader';
import MobileHero from './MobileHero';
import MobileSolutions from './MobileSolutions';
import MobileWhyChoose from './MobileWhyChoose';
import MobileResults from './MobileResults';
import MobileCallToAction from './MobileCallToAction';
import MobileFooter from './MobileFooter';
import ContactModal from '../ContactModal';
import ServicesModal from '../ServicesModal';

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
        <MobileHero onOpenModal={openModal} />
        <MobileSolutions onOpenModal={openModal} />
        <MobileWhyChoose />
        <MobileResults />
        <MobileCallToAction onOpenModal={openModal} />
      </main>

      <MobileFooter />

      <ContactModal
        isOpen={isModalOpen}
        onClose={closeModal}
        preSelectedService={selectedService}
      />
      <ServicesModal
        isOpen={isServicesModalOpen}
        onClose={closeServices}
        onSelectService={setSelectedService}
        onOpenContact={() => { closeServices(); openModal(); }}
      />
    </div>
  );
};

export default MobileHomePage;
