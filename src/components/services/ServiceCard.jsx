import ServiceThumbnail from './ServiceThumbnail'
import arrowleft from '../../assets/icons/arrow-left.svg'
export default function ServiceCard({ service }) {
  return (
    <article className="flex w-full max-w-[280px] flex-shrink-0 flex-col gap-[10.8px] overflow-hidden rounded-[32px] bg-white px-4 py-8 opacity-100 shadow-[0_8px_24px_rgba(6,22,48,0.06)] ring-1 ring-[#edf2fb] sm:px-[33px]">
      <div className="mx-auto aspect-[214/192] w-full max-w-[214px] shrink-0 overflow-hidden rounded-[32px]">
        <ServiceThumbnail type={service.type} />
      </div>

      <div className="flex w-full min-w-0 flex-col gap-[10.8px] text-left">
        <h3 className="text-[20px] leading-[1.18] font-bold text-[#1A1C1C]">{service.title}</h3>
        <p className="text-[14px] leading-[1.35] font-normal text-[#3D4946]">{service.description}</p>

        <a
          href="#"
          className="inline-flex items-center justify-start gap-2 self-start text-[14px] font-semibold text-[#1E3A8A]"
        >
          <span className="text-[16px] font-bold">Learn More</span>
          <img
            src={arrowleft}
            alt="arrow icon"
            className="h-[10.666666984558105px] w-[10.666666984558105px] object-contain"
          />
        </a>
      </div>
    </article>
  )
}
