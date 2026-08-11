import Fducation from '@/components/partnerShipsComponents/Fducation'
import { HeroSection } from '@/components/partnerShipsComponents/HeroSection'
import { StrategicPartnerships } from '@/components/partnerShipsComponents/StrategicPartnerships'
import SubmitYourInterest from '@/components/partnerShipsComponents/SubmitYourInterest'
import React from 'react'

function page() {
  return (
    <div>
      <HeroSection />
      <StrategicPartnerships/>
      <SubmitYourInterest/>
      <Fducation/>
    </div>
  )
}

export default page