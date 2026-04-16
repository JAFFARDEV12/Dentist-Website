import { useState } from 'react'
import { PAGE_CONTAINER } from '../constants/pageLayout'

const navigationLinks = ['About Me', 'Services', 'Expertise', 'FAQs', 'Testimonials']

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="border-b border-[#eef0f4] bg-[white]">
      <div className={`flex h-[72px] items-center justify-between md:h-[78px] ${PAGE_CONTAINER}`}>
        <a
          href="#"
          className="text-[24px] leading-none font-bold text-[#1E3A8A] md:text-[29px] line-height-[32px]"
        >
          Clinical Dentistry
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {navigationLinks.map((item, index) => (
            <a
              key={item}
              href="#"
              className={`text-[16px] leading-none font-bold ${
                index === 0
                  ? 'text-[#1E3A8A] underline underline-offset-[7px]'
                  : 'text-[#475569]'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-[#0f1a2f] md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <svg viewBox="0 0 24 24" className="size-7" fill="none" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav className="border-t border-[#eef0f4] md:hidden">
          <div className={`flex flex-col gap-4 py-4 ${PAGE_CONTAINER}`}>
            {navigationLinks.map((item, index) => (
              <a
                key={item}
                href="#"
                className={`text-[16px] leading-none font-semibold ${
                  index === 0
                    ? 'text-[#0f3ea7] underline underline-offset-[6px]'
                    : 'text-[#0f1a2f]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}