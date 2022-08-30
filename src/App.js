import React from 'react'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import IvfTreatment from './components/IvfTreatment'
import MakeAppointment from './components/MakeAppointment'
import Navbar from './components/Navbar'
import NumberSection from './components/NumberSection'
import Services from './components/Services'
import TalkUs from './components/TalkUs'

const App = () => {
  return (
    < >
      <Navbar />
      <HeroSection />
      <Services />
      <IvfTreatment />
      <NumberSection />
      <TalkUs />
      <MakeAppointment />
      <FaqSection />
      <Footer />
    </ >
  )
}

export default App