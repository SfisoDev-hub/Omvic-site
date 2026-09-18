import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import FeaturedServices from '@/components/sections/FeaturedServices'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Process from '@/components/sections/Process'
import Projects from '@/components/sections/Projects'
import CTA from '@/components/sections/CTA'
import Contact from '@/components/sections/Contact'
import { ServiceRequestProvider } from '@/hooks/useServiceRequest'

export default function App() {
  return (
    <ServiceRequestProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <FeaturedServices />
        <WhyChooseUs />
        <Process />
        <Projects />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </ServiceRequestProvider>
  )
}
