import PSHeroSection from './PSHeroSection.jsx'
import PSTrustedClients from './PSTrustedClients.jsx'
import PSSpecializedSolutions from './PSSpecializedSolutions.jsx'
import PSProcessSection from './PSProcessSection.jsx'
import PSFeaturedProjects from './PSFeaturedProjects.jsx'
import PSWhyChooseUs from './PSWhyChooseUs.jsx'
import USPSection from './USPSection.jsx'
import PSTestimonial from './PSTestimonial.jsx'
import PSContactSection from './PSContactSection.jsx'
import React, { useState } from 'react';
import ConsultationModal from './ConsultationModal'; // new

const PropquesStudio = () => {
  const [isModalOpen, setModalOpen] = useState(false);
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
