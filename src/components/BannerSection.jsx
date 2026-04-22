import { useEffect, useRef, useState } from 'react'
import { PAGE_CONTAINER } from '../constants/pageLayout'
import { usePractice } from '../context/PracticeContext'
import { FALLBACK_DOCTOR_IMAGE, getDoctorImage } from '../data/doctorImages'
import { formatPhoneDisplay } from '../utils/phoneFormat'
import phone from '../assets/icons/phone.svg'
import location from '../assets/icons/location.svg'
import email from '../assets/icons/email.svg'

const BLUE_HIGHLIGHT = '#1E3A8A'

function getNameSizeClass(text, { small, medium, large }) {
  const length = (text ?? '').trim().length
  if (length > 40) return small
  if (length > 26) return medium
  return large
}

function renderDoctorName(name) {
  const normalized = (name ?? '').trim()
  if (!normalized) return null

  const parts = normalized.split(/\s+/)
  if (parts.length < 2) return normalized

  const last = parts.pop()
  return (
    <>
      {parts.join(' ')}{' '}
      <span className="font-black" style={{ color: BLUE_HIGHLIGHT }}>
        {last}
      </span>
    </>
  )
}

function renderPracticeNameWithHighlight(practiceName) {
  const label = (practiceName ?? '').trim()
  if (!label) return null

  const match = label.match(/(dental(?:\s+group(?:\s+of)?)?)/i)
  if (!match || typeof match.index !== 'number') {
    return label
  }

  const start = match.index
  const end = start + match[0].length
  const before = label.slice(0, start)
  const highlighted = label.slice(start, end)
  const after = label.slice(end)

  return (
    <>
      {before}
      <span className="font-extrabold" style={{ color: BLUE_HIGHLIGHT }}>
        {highlighted}
      </span>
      {after}
    </>
  )
}

export default function BannerSection() {
  const p = usePractice()
  const phonePrimary = formatPhoneDisplay(p.phone, p.location)
  const emailPrimary = p.email ? p.email : null
  const phoneSecondary = p.phoneSecondary ? formatPhoneDisplay(p.phoneSecondary, p.location) : null
  const sameName = p.practiceName.trim().toLowerCase() === p.dentistOwner.trim().toLowerCase()
  const locationLabel = p.location === 'Canada' ? 'Canada' : 'United States'

  const [bannerSrc, setBannerSrc] = useState(() => getDoctorImage(p.slug))
  const fallbackUsedRef = useRef(false)

  useEffect(() => {
    fallbackUsedRef.current = false
    setBannerSrc(getDoctorImage(p.slug))
  }, [p.slug])

  const handleBannerError = () => {
    if (fallbackUsedRef.current) return
    fallbackUsedRef.current = true
    setBannerSrc(FALLBACK_DOCTOR_IMAGE)
  }

  const doctorNameClass = getNameSizeClass(p.dentistOwner, {
    small: 'text-[clamp(1.6rem,1.1rem+1.4vw,2.75rem)] sm:text-[42px] lg:text-[48px]',
    medium: 'text-[clamp(1.7rem,1.15rem+1.7vw,3.25rem)] sm:text-[48px] lg:text-[56px]',
    large: 'text-[clamp(1.75rem,1.2rem+2vw,4rem)] sm:text-[56px] lg:text-[64px]',
  })

  const practiceText = sameName ? 'Lead dental surgeon' : p.practiceName
  const practiceNameClass = getNameSizeClass(practiceText, {
    small: 'text-[clamp(1.05rem,0.95rem+1.1vw,2rem)] sm:text-[26px] lg:text-[34px]',
    medium: 'text-[clamp(1.1rem,1rem+1.3vw,2.4rem)] sm:text-[30px] lg:text-[42px]',
    large: 'text-[clamp(1.15rem,1rem+1.5vw,3.125rem)] sm:text-[34px] lg:text-[50px]',
  })

  return (
    <section
      id="about"
      className={`scroll-mt-[88px] flex flex-col gap-9 pt-8 pb-12 md:pt-12 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:pt-14 ${PAGE_CONTAINER}`}
    >
      <div className="max-w-[520px] min-w-0">
        <h1 className={`${doctorNameClass} leading-[1.06] font-extrabold tracking-[-0.03em] text-[#0e1628]`}>
          {renderDoctorName(p.dentistOwner)}
        </h1>

        <p className={`${practiceNameClass} mt-3 leading-[1.1] font-black tracking-[-0.02em] text-[#101829]`}>
          {practiceText}
        </p>

        <p className="mt-7 max-w-[470px] text-[16px] leading-[1.62] font-medium text-[#2f3748] sm:text-[18px]">
          Experience dental care redefined. Our sanctuary combines world-class clinic expertise with an
          ethereal atmosphere designed for your absolute peace of mind.
        </p>

        <div className="mt-7 space-y-3 text-[15px] font-semibold text-[#1f4bbb] sm:text-[16px]">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
          <p className="flex items-center gap-2.5 whitespace-nowrap">
              <img src={email} alt="" className="size-4 object-contain" />
              abc@gmail.com
            </p>
            <p className="flex items-center gap-2.5 whitespace-nowrap">
              <img src={phone} alt="" className="size-4 object-contain" />
              {phonePrimary}
            </p>
            {phoneSecondary && (
              <p className="flex items-center gap-2.5 whitespace-nowrap">
                <img src={phone} alt="" className="size-4 object-contain" />
                {phoneSecondary}
              </p>
            )}
          </div>

          <p className="flex items-center gap-2.5">
            <img src={location} alt="" className="size-4 object-contain" />
            {locationLabel}
          </p>
        </div>
      </div>

      <div className="relative w-full max-w-[528px] shrink-0 overflow-hidden rounded-[40px] bg-[#f9fafb] shadow-[0_5px_20px_rgba(16,28,52,0.04)] aspect-[528/600]">
        <img
          src={bannerSrc}
          alt={p.practiceName}
          width={528}
          height={600}
          onError={handleBannerError}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>
    </section>
  )
}
