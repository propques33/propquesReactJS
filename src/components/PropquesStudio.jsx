import React from 'react'
import PSHeroSection from './PSHeroSection.jsx'
import PSTrustedClients from './PSTrustedClients.jsx'
import PSSpecializedSolutions from './PSSpecializedSolutions.jsx'
import PSProcessSection from './PSProcessSection.jsx'
import PSFeaturedProjects from './PSFeaturedProjects.jsx'

const PropquesStudio = () => {
  return (
    <div className='mt-20 poppins'>
      <PSHeroSection />
      <PSTrustedClients />
      <PSSpecializedSolutions />
      <PSProcessSection />
      <PSFeaturedProjects />
    </div>
  )
}

export default PropquesStudio
