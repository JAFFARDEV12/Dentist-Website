import { PAGE_CONTAINER } from '../constants/pageLayout'
import ServiceCard from '../components/services/ServiceCard'
import { servicesData } from '../data/servicesData'

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-[88px] bg-[#EFF4FF] py-2 sm:py-12 lg:py-25">
      <div className={PAGE_CONTAINER}>
        <header className="mx-auto max-w-[430px] text-center pb-[40px] ">
          <h2 className="text-[44px] leading-none font-extrabold tracking-[-0.02em] text-[#0e1829]">Services</h2>
          <p className="mt-3 text-[16px]  font-medium text-[#3D4946] pt-[10px]">
            Tailored treatment defined with meticulous precision.
          </p>
        </header>

        <div className="mt-8 flex w-full flex-wrap justify-center gap-x-2 gap-y-4 sm:mt-8 sm:gap-x-2.5 sm:gap-y-4 lg:mt-9 lg:gap-x-3">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
