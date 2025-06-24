import React, { useState, useEffect } from 'react';
import PSHeroSection from './PSHeroSection.jsx'
import PSTrustedClients from './PSTrustedClients.jsx'
import PSSpecializedSolutions from './PSSpecializedSolutions.jsx'
import PSProcessSection from './PSProcessSection.jsx'
import PSFeaturedProjects from './PSFeaturedProjects.jsx'
import PSWhyChooseUs from './PSWhyChooseUs.jsx'
import USPSection from './USPSection.jsx'
import PSTestimonial from './PSTestimonial.jsx'
import PSContactSection from './PSContactSection.jsx'
import ConsultationModal from './ConsultationModal';

const PropquesStudio = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [closeCount, setCloseCount] = useState(0);

  // Show modal on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (closeCount < 2) {
        setModalOpen(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []); // Runs once on mount

  // Re-show modal on scroll if it has been closed
  useEffect(() => {
    if (isModalOpen || closeCount >= 2) {
      return;
    }

    const handleScroll = () => {
      if (closeCount > 0) { // Only show on scroll if closed at least once
        const scrollPercentage =
          (window.scrollY /
            (document.documentElement.scrollHeight - window.innerHeight)) *
          100;
        if (scrollPercentage > 30) {
          setModalOpen(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isModalOpen, closeCount]);

  const handleClose = () => {
    setModalOpen(false);
    setCloseCount((prevCount) => prevCount + 1);
  };

  return (
    <div className=' poppins'>
      <PSHeroSection onOpenModal={() => setModalOpen(true)} />
      <PSTrustedClients />
      <PSWhyChooseUs onOpenModal={() => setModalOpen(true)} />
      {/* <USPSection /> */}
      <PSProcessSection onOpenModal={() => setModalOpen(true)} />
      <PSSpecializedSolutions />
      <PSFeaturedProjects onOpenModal={() => setModalOpen(true)} />
      {/* <PSTestimonial /> */}
      <PSContactSection />
      <ConsultationModal isOpen={isModalOpen} onClose={handleClose} />
    </div>
  )
}

export default PropquesStudio;
