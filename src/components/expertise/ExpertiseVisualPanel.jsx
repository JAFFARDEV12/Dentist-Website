import care from '../../assets/Care.svg'
import technology from '../../assets/Technology.svg'

export default function ExpertiseVisualPanel() {
  return (
    <div className="mt-4 grid w-full min-w-0 grid-cols-1 gap-3 md:mt-[15px] md:grid-cols-2 md:gap-3">
      <div className="flex min-w-0 flex-col justify-center gap-3">
        <div className="relative aspect-[276/308] w-full min-w-0 overflow-hidden rounded-[32px] sm:rounded-[40px] md:rounded-[48px]">
          <img src={care} alt="Dental care" className="h-full w-full object-cover" />
        </div>

        <div className="flex min-h-[120px] w-full flex-col justify-center gap-2 rounded-[32px] bg-[#1540a1] p-6 text-white sm:min-h-[132px] sm:rounded-[40px] sm:p-8 md:rounded-[48px]">
          <p className="text-[32px] leading-none font-black tracking-[-0.02em] sm:text-[36px] md:text-[40px]">15+</p>
          <p className="mt-1 text-[11px] leading-tight font-semibold tracking-[0.18em] text-[#c2d5ff] sm:text-[12px]">
            YEARS OF EXELLENCE
          </p>
        </div>
      </div>

      <div className="flex min-w-0 flex-col gap-3">
        <div className="flex min-h-[120px] w-full flex-col justify-center gap-2 rounded-[32px] border border-[#4970cf] bg-white p-6 sm:min-h-[134px] sm:rounded-[40px] sm:p-8 md:rounded-[48px]">
          <p className="text-[36px] leading-none font-extrabold tracking-[-0.02em] text-[#1a45ad] sm:text-[42px] md:text-[46px]">
            4.9/5
          </p>
          <p className="mt-2 text-[12px] leading-tight font-semibold tracking-[0.18em] text-[#5d6880] sm:text-[13px]">
            PATENT RATING
          </p>
        </div>

        <div className="relative aspect-[276/308] w-full min-w-0 overflow-hidden rounded-[32px] sm:rounded-[40px] md:rounded-[48px]">
          <img src={technology} alt="Dental technology" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  )
}
