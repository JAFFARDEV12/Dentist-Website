import Header from './components/Header'
import BannerSection from './components/BannerSection'
import ServicesSection from './sections/ServicesSection'
import OurExpertiseSection from './sections/OurExpertiseSection'
import PatientFaqsSection from './sections/PatientFaqsSection'
import TestimonialsSection from './sections/TestimonialsSection'
import FooterSection from './sections/FooterSection'

export default function App() {
  return (
    <main className="min-h-screen bg-[f5f9f9]">
      <Header />
      <BannerSection />
      <ServicesSection />
      <OurExpertiseSection />
      <PatientFaqsSection />
      <TestimonialsSection />
      <FooterSection />
    </main>
  )
}