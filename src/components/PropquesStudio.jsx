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
import ConsultationModal from './ConsultationModal'; // new

const PropquesStudio = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const openOnce = () => {
      if (!sessionStorage.getItem('consultationShown')) {
        sessionStorage.setItem('consultationShown', 'true');
        setTimeout(() => setModalOpen(true), 3000); // 3 seconds after scroll
      }
    };
  
    const handleScroll = () => {
      openOnce();
      window.removeEventListener('scroll', handleScroll); // ensure it runs once
    };
  
    // ⏱ Fallback: if user doesn’t scroll in 15s, open anyway
    const fallbackTimer = setTimeout(() => {
      openOnce();
      window.removeEventListener('scroll', handleScroll);
    }, 15000);
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      clearTimeout(fallbackTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      <ConsultationModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}

export default PropquesStudio
