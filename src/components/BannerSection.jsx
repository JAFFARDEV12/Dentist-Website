import { useEffect, useRef, useState } from 'react'
import { PAGE_CONTAINER } from '../constants/pageLayout'
import { usePractice } from '../context/PracticeContext'
import { FALLBACK_DOCTOR_IMAGE, getDoctorImage } from '../data/doctorImages'
import { formatPhoneDisplay } from '../utils/phoneFormat'
import phone from '../assets/icons/phone.svg'
import location from '../assets/icons/location.svg'

export default function BannerSection() {
  const p = usePractice()
  const phonePrimary = formatPhoneDisplay(p.phone, p.location)
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

  return (
    <section
      id="about"
      className={`scroll-mt-[88px] flex flex-col gap-9 pt-8 pb-12 md:pt-12 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:pt-14 ${PAGE_CONTAINER}`}
    >
      <div className="max-w-[520px] min-w-0">
        <h1 className="text-[clamp(1.75rem,1.2rem+2vw,4rem)] leading-[1.06] font-extrabold tracking-[-0.03em] text-[#0e1628] sm:text-[56px] lg:text-[64px]">
          {p.dentistOwner}
        </h1>

        <p className="mt-3 text-[clamp(1.15rem,1rem+1.5vw,3.125rem)] leading-[1.1] font-black tracking-[-0.02em] text-[#101829] sm:text-[34px] lg:text-[50px]">
          {sameName ? 'Lead dental surgeon' : p.practiceName}
        </p>

        <p className="mt-7 max-w-[470px] text-[16px] leading-[1.62] font-medium text-[#2f3748] sm:text-[18px]">
          Experience dental care redefined. Our sanctuary combines world-class clinic expertise with an
          ethereal atmosphere designed for your absolute peace of mind.
        </p>

        <div className="mt-7 space-y-3 text-[15px] font-semibold text-[#1f4bbb] sm:text-[16px]">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
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

      <div className="w-full max-w-[610px] overflow-hidden rounded-[32px] bg-[#f9fafb] shadow-[0_5px_20px_rgba(16,28,52,0.04)] lg:rounded-[38px]">
        <img
          src={bannerSrc}
          alt={p.practiceName}
          onError={handleBannerError}
          className="h-[350px] w-full object-cover object-right sm:h-[420px] lg:h-[500px]"
        />
      </div>
    </section>
  )
}
