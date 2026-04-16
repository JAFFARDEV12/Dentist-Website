import { useParams } from 'react-router-dom'
import { getPracticeBySlug } from '../data/practices'
import { PracticeContext } from '../context/PracticeContext'
import Header from '../components/Header'
import BannerSection from '../components/BannerSection'
import ServicesSection from '../sections/ServicesSection'
import OurExpertiseSection from '../sections/OurExpertiseSection'
import PatientFaqsSection from '../sections/PatientFaqsSection'
import TestimonialsSection from '../sections/TestimonialsSection'
import FooterSection from '../sections/FooterSection'
import NotFound from './NotFound'

export default function PracticeSite() {
  const { slug } = useParams()
  const practice = getPracticeBySlug(slug ?? '')

  if (!practice) {
    return <NotFound />
  }

  return (
    <PracticeContext.Provider value={practice}>
      <main className="min-h-screen overflow-x-hidden bg-[#f5f9f9]">
        <Header />
        <BannerSection />
        <ServicesSection />
        <OurExpertiseSection />
        <PatientFaqsSection />
        <TestimonialsSection />
        <FooterSection />
      </main>
    </PracticeContext.Provider>
  )
}
