import { PAGE_CONTAINER } from '../constants/pageLayout'
import doctorReference from '../assets/doctor-profile.svg'
import mail from '../assets/icons/email.svg'
import phone from '../assets/icons/phone.svg'
import location from '../assets/icons/location.svg'

export default function BannerSection() {
  return (
    <section className={`flex flex-col gap-9 pt-8 pb-12 md:pt-12 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:pt-14 ${PAGE_CONTAINER}`}>
      <div className="max-w-[520px]">
        <h1 className="text-[48px] leading-[1.06] font-extrabold tracking-[-0.03em] text-[#0e1628] sm:text-[56px] lg:text-[64px]">
          Dr. <span className="text-[#1a4cc0]">John</span> Doe
        </h1>

        <p className="mt-3 text-[28px] leading-[1.1] font-black tracking-[-0.02em] text-[#101829] sm:text-[34px] lg:text-[50px]">
          Lead dental surgeon
        </p>

        <p className="mt-7 max-w-[470px] text-[16px] leading-[1.62] font-medium text-[#2f3748] sm:text-[18px]">
          Experience dental care redefined. Our sanctuary combines world-class clinic expertise with an ethereal atmosphere designed for your absolute peace of mind.
        </p>

        <div className="mt-7 space-y-3 text-[15px] font-semibold text-[#1f4bbb] sm:text-[16px]">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 sm:flex-nowrap">
            <p className="flex items-center gap-2.5 whitespace-nowrap">
              <img src={mail} alt="mail icon" className="size-4 object-contain" />
              johndoe@gmail.com
            </p>

            <p className="flex items-center gap-2.5 whitespace-nowrap">
              <img src={phone} alt="phone icon" className="size-4 object-contain" />
              +1 (98) 877-6653
            </p>
          </div>

          <p className="flex items-center gap-2.5">
            <img src={location} alt="location icon" className="size-4 object-contain" />
            abc street 5, newyork
          </p>
        </div>
      </div>

      <div className="w-full max-w-[610px] overflow-hidden rounded-[32px] bg-[#f9fafb] shadow-[0_5px_20px_rgba(16,28,52,0.04)] lg:rounded-[38px]">
        <img
          src={doctorReference}
          alt="Doctor portrait"
          className="h-[350px] w-full object-cover object-right sm:h-[420px] lg:h-[500px]"
        />
      </div>
    </section>
  )
}