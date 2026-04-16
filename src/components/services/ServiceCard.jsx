import ServiceThumbnail from './ServiceThumbnail'
import arrowleft from '../../assets/icons/arrow-left.svg'
export default function ServiceCard({ service }) {
  return (
    <article className="mx-auto flex h-full w-full max-w-[246px] flex-col rounded-[32px] bg-white p-3 sm:p-4 shadow-[0_8px_24px_rgba(6,22,48,0.06)] ring-1 ring-[#edf2fb]">
      <div className="mx-auto aspect-[214/192] w-full max-w-[214px] overflow-hidden rounded-[48px]">
        <ServiceThumbnail type={service.type} />
      </div>

      <div className="flex flex-1 flex-col pt-4">
        <h3 className="text-[20px] leading-[1.18] font-bold text-[#1A1C1C]">{service.title}</h3>
        <p className="mt-1.5 text-[14px] leading-[1.35] font-normal text-[#3D4946]">{service.description}</p>
       
        <a href="#" className="my-[15px] inline-flex items-center text-[14px] font-semibold text-[#1E3A8A] gap-2">
          <span className='text-[16px] font-bold'>Learn More</span>
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
