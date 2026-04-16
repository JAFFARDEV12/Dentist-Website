import { useCallback, useEffect, useRef, useState } from 'react'
import { PAGE_CONTAINER } from '../constants/pageLayout'

const NAV_ITEMS = [
  { id: 'about', label: 'About Me' },
  { id: 'services', label: 'Services' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'faqs', label: 'FAQs' },
  { id: 'testimonials', label: 'Testimonials' },
]

const HEADER_OFFSET = 96

function getActiveSectionFromScroll() {
  const scrollY = window.scrollY
  const trigger = scrollY + HEADER_OFFSET
  let active = NAV_ITEMS[0].id
  for (const item of NAV_ITEMS) {
    const el = document.getElementById(item.id)
    if (!el) continue
    const sectionTop = el.getBoundingClientRect().top + scrollY
    if (trigger >= sectionTop - 1) {
      active = item.id
    }
  }
  return active
}

export default function Header() {
  const [activeSection, setActiveSection] = useState(NAV_ITEMS[0].id)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const ignoreScrollUntilRef = useRef(0)

  useEffect(() => {
    const onScrollOrResize = () => {
      if (Date.now() < ignoreScrollUntilRef.current) return
      setActiveSection(getActiveSectionFromScroll())
    }

    onScrollOrResize()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)
    return () => {
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
    }
  }, [])

  const navigateToSection = useCallback((id) => {
    ignoreScrollUntilRef.current = Date.now() + 900
    setActiveSection(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsMobileMenuOpen(false)
  }, [])

  return (
    <header className="border-b border-[#eef0f4] bg-[white]">
      <div className={`flex h-[72px] items-center justify-between md:h-[78px] ${PAGE_CONTAINER}`}>
        <a
          href="#about"
          className="text-[24px] leading-none font-bold text-[#1E3A8A] md:text-[29px] line-height-[32px]"
          onClick={(e) => {
            e.preventDefault()
            navigateToSection('about')
          }}
        >
          Clinical Dentistry
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'page' : undefined}
                className={`text-[16px] leading-none font-bold transition-colors ${
                  isActive
                    ? 'text-[#1E3A8A] underline underline-offset-[7px]'
                    : 'text-[#475569] hover:text-[#1E3A8A] hover:underline hover:underline-offset-[7px]'
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  navigateToSection(item.id)
                }}
              >
                {item.label}
              </a>
            )
          })}
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
        <nav className="border-t border-[#eef0f4] md:hidden" aria-label="Primary mobile">
          <div className={`flex flex-col gap-4 py-4 ${PAGE_CONTAINER}`}>
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-[16px] leading-none font-semibold transition-colors ${
                    isActive
                      ? 'text-[#0f3ea7] underline underline-offset-[6px]'
                      : 'text-[#0f1a2f] hover:text-[#0f3ea7] hover:underline hover:underline-offset-[6px]'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    navigateToSection(item.id)
                  }}
                >
                  {item.label}
                </a>
              )
            })}
          </div>
        </nav>
      )}
    </header>
  )
}
