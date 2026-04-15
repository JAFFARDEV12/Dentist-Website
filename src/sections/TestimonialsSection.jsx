import TestimonialCard from '../components/testimonials/TestimonialCard'
import { testimonialsData } from '../data/testimonialsData'

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-14">
        <header className="mx-auto max-w-[820px]  text-center">
          <h2 className="text-[34px] leading-[1.1] font-extrabold tracking-[-0.01em] text-[#121a2e] sm:text-[36px]">
            {testimonialsData.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-[15px]  font-normal text-[#3D618C] sm:text-[18px]">
            {testimonialsData.subheading}
          </p>
        </header>

        <div className="mt-8 flex w-full flex-col gap-4 lg:mt-10 lg:flex-row lg:items-center lg:justify-between lg:gap-5">
          <div className="w-full shrink-0 lg:w-auto">
            <TestimonialCard testimonial={testimonialsData.featured} featured />
          </div>
          <div className="grid w-full max-w-full shrink-0 grid-cols-1 gap-4 lg:w-[405.333px] lg:gap-5">
            {testimonialsData.secondary.map((item) => (
              <TestimonialCard key={item.id} testimonial={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
