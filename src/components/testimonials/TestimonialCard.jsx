import RatingStars from './RatingStars'
import ReviewerAvatar from './ReviewerAvatar'

export default function TestimonialCard({ testimonial, featured = false }) {
  if (featured) {
    return (
      <article className="flex h-full min-h-0 w-full min-w-0 flex-col rounded-[30px] bg-[#f3f8ff] px-6 py-8 sm:px-8 md:px-10 md:py-9 lg:min-h-[557px] lg:rounded-[32px] lg:p-12">
        <RatingStars count={testimonial.rating} />
        <p className="mt-3 text-[56px] leading-none font-black text-[#cfe1ff]">99</p>
        <blockquote className="mt-2 max-w-none font-['Manrope'] text-[24px] font-bold text-[#05345C] sm:text-[28px] sm:leading-[34px] lg:text-[30px]">
          {testimonial.quote}
        </blockquote>
        <footer className="mt-auto pt-7">
          <p className="text-[18px] leading-none font-bold text-[#005FB2] md:text-[18px]">{testimonial.name}</p>
          <p className="mt-2 text-[14px]  font-medium text-[#3D618C] md:text-[16px]">{testimonial.service}</p>
        </footer>
      </article>
    )
  }

  return (
    <article
      className="flex h-full min-h-0 w-full min-w-0 flex-col rounded-[30px] bg-[#EFF4FF] px-6 py-5 md:px-7 md:py-6 lg:rounded-[32px] lg:p-8"
      style={testimonial.desktopHeight ? { minHeight: `${testimonial.desktopHeight}px` } : undefined}
    >
      <header className="flex items-start justify-between gap-2">
        <ReviewerAvatar />
        <RatingStars count={testimonial.rating} className="mt-1" />
      </header>
      <blockquote className="mt-5 text-[18px] leading-[29.25px] font-normal italic text-[#05345C]">
        {testimonial.quote}
      </blockquote>
      <footer className="mt-6 pt-0">
        <p className="text-[17px] leading-none font-extrabold text-[#05345C] md:text-[20px]">{testimonial.name}</p>
        <p className="mt-2 text-[14px] leading-none font-medium text-[#3D618C] md:text-[17px]">{testimonial.service}</p>
      </footer>
    </article>
  )
}
