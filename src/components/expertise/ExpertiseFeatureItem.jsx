import overlay from '../../assets/icons/Overlay.svg'
import overlay1 from '../../assets/icons/Overlay1.png'

const featureIcons = {
  mastery: overlay1,
  'lab-tech': overlay,
}

export default function ExpertiseFeatureItem({ feature }) {
  const iconSource = featureIcons[feature.id] ?? overlay1

  return (
    <article className="flex w-full min-w-0 items-start gap-4 text-left">
      <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-full  p-1.5 text-[#2459c4]">
        <img src={iconSource} alt="" className="h-full w-full object-contain" aria-hidden />
      </span>
      <div className="min-w-0 flex-1 space-y-1.5">
        <h4 className="text-[15px] font-extrabold leading-[1.3] text-[#1a1c1c] sm:text-[16px] sm:leading-[1.35]">
          {feature.title}
        </h4>
        <p className="text-[14px] font-normal leading-[1.55] text-[#3d4946] sm:text-[16px] sm:leading-[1.62]">
          {feature.text}
        </p>

        {feature.certificateNo && (
          <div className="space-y-1.5 pt-0.5">
            <p className="text-[14px] font-normal leading-[1.5] text-[#3d4946] sm:text-[16px] sm:leading-[1.55]">
              <span className="font-bold">Certificate No:</span> {feature.certificateNo}
            </p>
            <p className="text-[14px] font-normal leading-[1.5] text-[#3d4946] sm:text-[16px]">
              Check credibility{' '}
              <a href="#" className="font-bold text-[#1E3A8A] underline underline-offset-2">
                here
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </article>
  )
}
