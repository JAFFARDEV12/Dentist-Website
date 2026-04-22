import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PAGE_CONTAINER } from '../constants/pageLayout'
import { usePractice } from '../context/PracticeContext'

const NAV_ITEMS = [
  { id: 'about', label: 'About Me' },
  { id: 'services', label: 'Services' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'faqs', label: 'FAQs' },
  { id: 'testimonials', label: 'Testimonials' },
]

const HEADER_OFFSET = 96

/**
 * Figma base: Plus Jakarta Sans 800, 24px, line-height 32px, letter-spacing -0.6px.
 * Shorter names keep full size; long names step down so the header layout stays stable.
 */
function getBrandClasses(name) {
  const length = (name ?? '').trim().length
  const font =
    "[font-family:'Plus_Jakarta_Sans',ui-sans-serif,system-ui,sans-serif] font-extrabold text-[#1E3A8A]"

  if (length >= 52) {
    return `${font} inline-flex min-w-0 max-w-[min(100%,11rem)] items-center text-[14px] leading-5 tracking-[-0.35px] sm:max-w-[15rem] sm:text-[15px] sm:leading-5 sm:tracking-[-0.4px] md:max-w-[20rem] md:text-[16px] md:leading-[22px] md:tracking-[-0.45px] lg:max-w-[26rem] lg:text-[17px] lg:leading-6`
  }
  if (length >= 38) {
    return `${font} inline-flex min-w-0 max-w-[min(100%,12rem)] items-center text-[16px] leading-6 tracking-[-0.45px] sm:max-w-[17rem] sm:text-[17px] sm:leading-[24px] sm:tracking-[-0.5px] md:max-w-[24rem] md:text-[18px] md:leading-7 md:tracking-[-0.5px] lg:max-w-[30rem] lg:text-[20px] lg:leading-8`
  }
  if (length >= 26) {
    return `${font} inline-flex min-w-0 max-w-[min(100%,13rem)] items-center text-[18px] leading-7 tracking-[-0.5px] sm:max-w-[19rem] sm:text-[20px] sm:leading-8 sm:tracking-[-0.55px] md:max-w-[26rem] md:text-[22px] md:leading-8 md:tracking-[-0.58px] lg:max-w-[36rem] lg:text-[24px] lg:leading-8 lg:tracking-[-0.6px]`
  }
  // Figma default: 24px / 32px / -0.6px (slightly smaller on the narrowest phones)
  return `${font} inline-flex min-w-0 max-w-[min(100%,15rem)] items-center text-[20px] leading-7 tracking-[-0.55px] min-[400px]:text-[22px] min-[400px]:leading-8 min-[400px]:tracking-[-0.58px] sm:max-w-[22rem] sm:text-[24px] sm:leading-8 sm:tracking-[-0.6px] md:max-w-[32rem]`
}

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
  const practice = usePractice()
  const { pathname } = useLocation()
  const [activeSection, setActiveSection] = useState(NAV_ITEMS[0].id)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const ignoreScrollUntilRef = useRef(0)
  const brandClasses = getBrandClasses(practice.practiceName)

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
        <Link
          to={`${pathname}#about`}
          className={`min-w-0 shrink pr-2 text-left align-middle md:pr-4 ${brandClasses}`}
          title={practice.practiceName}
          onClick={(e) => {
            e.preventDefault()
            navigateToSection('about')
          }}
        >
          <span className="block w-full min-w-0 break-words whitespace-normal align-middle [vertical-align:middle]">
            {practice.practiceName}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:gap-9 md:flex" aria-label="Primary">
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
