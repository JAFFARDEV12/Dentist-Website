import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FaqAccordionItem({ item, isOpen, onToggle }) {
  return (
    <article
      className={`rounded-[24px] bg-[#1E3A8A] px-6 py-5 text-white shadow-[0_10px_24px_rgba(11,38,108,0.18)] transition-all sm:px-8 ${
        isOpen ? 'min-h-[146px]' : 'min-h-[58px]'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="pt-0.5 text-[18px] leading-[1.35] font-extrabold tracking-[-0.01em]">{item.question}</span>
        <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-white text-[#123d9f]">
          {isOpen ? <ChevronDown className="size-4" strokeWidth={3} /> : <ChevronUp className="size-4" strokeWidth={3} />}
        </span>
      </button>

      {isOpen && <p className="mt-4 max-w-[96%] text-[15px] leading-[1.5] font-semibold text-[#e4ecff]">{item.answer}</p>}
    </article>
  )
}
