import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FaqAccordionItem({ item, isOpen, onToggle }) {
  return (
    <article
      className="rounded-[32px] bg-[#1E3A8A] text-white shadow-[0_10px_24px_rgba(11,38,108,0.18)] transition-[min-height,box-shadow] sm:rounded-[36px] lg:rounded-[40px]"
    >
      <div className="px-5 py-5 sm:px-8 sm:py-6 md:px-9 md:py-6 lg:px-10">
        <button
          type="button"
          onClick={onToggle}
          className="flex w-full min-w-0 items-start justify-between gap-3 text-left sm:gap-4"
          aria-expanded={isOpen}
        >
          <span className="min-w-0 flex-1 text-[16px] font-extrabold leading-[1.35] tracking-[-0.01em] sm:text-[17px] sm:leading-[1.38] md:text-[18px]">
            {item.question}
          </span>
          <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-white text-[#1E3A8A] sm:size-8">
            {isOpen ? <ChevronUp className="size-4" strokeWidth={2.5} /> : <ChevronDown className="size-4" strokeWidth={2.5} />}
          </span>
        </button>

        {isOpen && (
          <p className="mt-4 w-full min-w-0 text-[14px] font-normal leading-[1.55] text-[#E8EDFF] sm:mt-5 sm:text-[15px] sm:leading-[1.6] md:text-base md:leading-[1.65]">
            {item.answer}
          </p>
        )}
      </div>
    </article>
  )
}
