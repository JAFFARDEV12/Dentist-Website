import { PAGE_CONTAINER } from '../constants/pageLayout'
import TestimonialCard from '../components/testimonials/TestimonialCard'
import { testimonialsData } from '../data/testimonialsData'

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className={PAGE_CONTAINER}>
        <header className="mx-auto max-w-[820px]  text-center">
          <h2 className="text-[34px] leading-[1.1] font-extrabold tracking-[-0.01em] text-[#121a2e] sm:text-[36px]">
            {testimonialsData.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-[15px]  font-normal text-[#3D618C] sm:text-[18px]">
            {testimonialsData.subheading}
          </p>
        </header>

        <div className="mt-8 grid w-full min-w-0 grid-cols-1 gap-4 lg:mt-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-stretch lg:gap-5">
          <div className="min-w-0">
            <TestimonialCard testimonial={testimonialsData.featured} featured />
          </div>
          <div className="grid min-w-0 grid-cols-1 gap-4 lg:gap-5">
            {testimonialsData.secondary.map((item) => (
              <TestimonialCard key={item.id} testimonial={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
