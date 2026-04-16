import overlay from '../../assets/icons/Overlay.svg'
import overlay1 from '../../assets/icons/Overlay1.png'

const featureIcons = {
  mastery: overlay1,
  'lab-tech': overlay,
}

export default function ExpertiseFeatureItem({ feature }) {
  const iconSource = featureIcons[feature.id] ?? overlay1

  return (
    <article className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[#eef4ff] text-[#2459c4]">
        <img src={iconSource} alt={`${feature.title} icon`} className="h-full w-full" />
      </span>
      <div>
        <h4 className="text-[14px] leading-[1.25] font-extrabold text-[#1a1c1c] sm:text-[15px] md:text-[16px]">
          {feature.title}
        </h4>
        <p className="mt-1 text-[13px] font-normal text-[#3d4946] sm:text-[14px] md:text-[16px]">
          {feature.text}
        </p>

        {feature.certificateNo && (
          <>
            <p className="text-[13px] leading-[1.45] font-normal text-[#3d4946] sm:text-[14px] md:text-[16px]">
              <span className="font-bold">Certificate No:</span> {feature.certificateNo}
            </p>
            <p className="text-[13px] leading-[1.45] font-normal text-[#3d4946] sm:text-[14px] md:text-[16px]">
              Check credibility{' '}
              <a href="#" className="font-bold text-[#1d54c4] underline underline-offset-2">
                here
              </a>
              .
            </p>
          </>
        )}
      </div>
    </article>
  )
}
