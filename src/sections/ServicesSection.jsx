import ServiceCard from '../components/services/ServiceCard'
import { servicesData } from '../data/servicesData'

export default function ServicesSection() {
  return (
    <section className="bg-[#f6f9ff] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-14">
        <header className="mx-auto max-w-[430px] text-center">
          <h2 className="text-[44px] leading-none font-extrabold tracking-[-0.02em] text-[#0e1829]">Services</h2>
          <p className="mt-3 text-[16px]  font-medium text-[#3D4946]">
            Tailored treatment defined with meticulous precision.
          </p>
        </header>

        <div className="mt-8 grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 lg:mt-9 lg:grid-cols-4">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
