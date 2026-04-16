import RatingStars from './RatingStars'
import ReviewerAvatar from './ReviewerAvatar'

/** Strip wrapping quotes so the large decorative mark is not duplicated on featured cards */
function featuredQuoteBody(quote) {
  let q = quote.trim()
  if (q.length >= 2) {
    const first = q[0]
    const last = q[q.length - 1]
    if (
      (first === '"' && last === '"') ||
      (first === '\u201c' && last === '\u201d') ||
      (first === "'" && last === "'")
    ) {
      q = q.slice(1, -1).trim()
    }
  }
  return q
}

export default function TestimonialCard({ testimonial, featured = false }) {
  if (featured) {
    const quoteText = featuredQuoteBody(testimonial.quote)

    return (
      <article className="flex h-full min-h-0 w-full min-w-0 flex-col rounded-[30px] bg-[#f3f8ff] px-6 py-8 sm:px-8 md:px-10 md:py-9 lg:min-h-[557px] lg:rounded-[32px] lg:p-12">
        <RatingStars count={testimonial.rating} />
        <p
          className="mt-3 text-[clamp(2.75rem,2.2rem+2vw,3.5rem)] leading-[0.85] font-black text-[#B6D4F9]"
          aria-hidden="true"
        >
          &ldquo;
        </p>
        <blockquote
          className="mt-1 w-full max-w-[min(100%,14ch)] text-left font-['Manrope'] text-[clamp(1.5rem,1.25rem+0.85vw,1.875rem)] font-bold leading-[1.08] tracking-[-0.015em] text-[#002D62] sm:leading-[1.1] lg:leading-[1.12] lg:tracking-[-0.02em]"
        >
          {quoteText}
        </blockquote>
        <footer className="mt-auto pt-7">
          <p className="text-[18px] leading-none font-bold text-[#1D63B0] md:text-[18px]">{testimonial.name}</p>
          <p className="mt-2 text-[14px] font-medium text-[#7A8B9E] md:text-[16px]">{testimonial.service}</p>
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
