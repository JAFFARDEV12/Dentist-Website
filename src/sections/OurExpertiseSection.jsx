import { PAGE_CONTAINER } from '../constants/pageLayout'
import ExpertiseFeatureItem from '../components/expertise/ExpertiseFeatureItem'
import ExpertiseVisualPanel from '../components/expertise/ExpertiseVisualPanel'
import { expertiseData } from '../data/expertiseData'

export default function OurExpertiseSection() {
  return (
    <section id="expertise" className="scroll-mt-[88px] bg-white py-12 sm:py-16 lg:py-20">
      <div className={PAGE_CONTAINER}>
        <header className=" mx-auto  max-w-[680px] pb-[20px] text-center">
          <h2 className="text-center text-[48px] font-bold leading-[48px] tracking-normal text-[#101a2f] [font-family:'Plus_Jakarta_Sans',ui-sans-serif,system-ui,sans-serif]">
            {expertiseData.title}
          </h2>
          <p className="mt-4 text-[16px]  leading-[1.3] font-normal text-[#3D4946] sm:text-[18px]">{expertiseData.subtitle}</p>
        </header>
     

        <div className="mt-10 grid min-w-0 grid-cols-1 gap-8 sm:mt-12 lg:mt-14 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:items-start lg:gap-10 xl:gap-12">
          <div className="min-w-0 max-w-full">
            <ExpertiseVisualPanel />
          </div>

          <div className="w-full  min-w-0 text-left">
            <p className="text-[14px] font-extrabold leading-none tracking-[0.16em] text-[#214bb6] sm:tracking-[0.22em]">
              {expertiseData.eyebrow}
            </p>
            <h3 className="mt-3 max-w-[520px] text-[32px] font-bold leading-[1.1] text-[#121c2f] [font-family:'Plus_Jakarta_Sans',ui-sans-serif,system-ui,sans-serif] sm:mt-4 sm:text-[40px] sm:leading-[1.05] sm:tracking-[-0.01em] lg:mt-4 lg:text-[48px] lg:leading-[48px] lg:tracking-normal">
              {expertiseData.heading}
            </h3>
            <p className="mt-4 max-w-[560px] text-[16px] font-semibold leading-[1.62] text-[#3D4946] sm:mt-5">
              {expertiseData.description}
            </p>

            <div className="mt-8 w-full max-w-[560px] space-y-6 sm:mt-8 lg:mt-8">
              <ExpertiseFeatureItem feature={expertiseData.highlights[0]} />
              <ExpertiseFeatureItem feature={expertiseData.highlights[1]} />
            </div>

            <div className="mt-8 w-full max-w-[560px] sm:mt-8 lg:mt-8">
              <div className="flex flex-wrap gap-x-3 gap-y-2.5 sm:gap-x-4 sm:gap-y-2.5">
                {expertiseData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex h-8 min-h-8 shrink-0 items-center justify-center rounded-[99px] bg-[#DCE9FF] px-4 text-[12px] font-semibold text-[#5d6780]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
