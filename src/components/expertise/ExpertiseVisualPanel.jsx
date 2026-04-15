import care from '../../assets/care.svg'
import technology from '../../assets/technology.svg'
export default function ExpertiseVisualPanel() {
  return (
    <div className="grid grid-cols-[276px_276px] gap-3 mt-[15px]">
      <div className="flex flex-col justify-center gap-3 ">
        <div className="h-[308px] w-[276px] max-w-[276px] overflow-hidden rounded-[48px]">
          <img src={care} alt="care" className="h-full w-full object-cover" />
        </div>

        <div className="flex h-[132px] w-[276px] flex-col gap-2 rounded-[48px] bg-[#1540a1] p-8 text-white">
          <p className="text-[40px] leading-none font-black tracking-[-0.02em]">15+</p>
          <p className="mt-1 text-[12px] leading-none font-semibold tracking-[0.18em] text-[#c2d5ff]">YEARS OF EXELLENCE</p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex h-[134px] w-[276px] flex-col gap-2 rounded-[48px] border border-[#4970cf] bg-white p-8">
          <p className="text-[46px] leading-none font-extrabold tracking-[-0.02em] text-[#1a45ad]">4.9/5</p>
          <p className="mt-2 text-[13px] leading-none font-semibold tracking-[0.18em] text-[#5d6880]">PATENT RATING</p>
        </div>

        <div className="h-[308px] w-[276px] max-w-[276px] overflow-hidden rounded-[48px]">
          <img src={technology} alt="technology" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  )
}
