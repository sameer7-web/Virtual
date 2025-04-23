import React from 'react'
import Navbar from './componets/Navbar'
import HeroSection from './componets/HeroSection'
import Featureseaction from './componets/Featureseaction'
import WorkFlow from './componets/WorkFlow'
import Pricing from './componets/Pricing'
import Testimonials from './componets/Testimonials'
import Footer from './componets/Footer'


const App = () => {
  return (
   <>
   <Navbar />
   <div className="max-w-7xl mx-auto pt-20 px-6">
   <HeroSection />
   <Featureseaction />
   <WorkFlow />
   <Pricing />
   <Testimonials />
   <Footer />
   </div>
   </>
  )
}

export default App
