import ExpertiseFeatureItem from '../components/expertise/ExpertiseFeatureItem'
import ExpertiseVisualPanel from '../components/expertise/ExpertiseVisualPanel'
import { expertiseData } from '../data/expertiseData'

export default function OurExpertiseSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-14">
        <header className=" mx-auto  max-w-[680px] text-center">
          <h2 className="text-[38px]  font-semibold  text-[#101a2f] sm:text-[48px]">
            {expertiseData.title}
          </h2>
          <p className="mt-4 text-[16px]  leading-[1.3] font-normal text-[#1E3A8A] sm:text-[14px]">{expertiseData.subtitle}</p>
        </header>

        <div className="mt-[10px] grid min-w-0 grid-cols-1 gap-8 lg:mt-12 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:items-start lg:gap-10">
          <div className="min-w-0 max-w-full">
            <ExpertiseVisualPanel />
          </div>

          <div className="min-w-0">
            <p className="text-[14px] leading-none font-black tracking-[0.22em] text-[#214bb6]">{expertiseData.eyebrow}</p>
            <h3 className="mt-3 max-w-[520px] text-[32px] leading-[1.08] font-bold tracking-[-0.02em] text-[#121c2f] sm:text-[40px] lg:text-[48px] lg:leading-[1.03]">
              {expertiseData.heading}
            </h3>
            <p className="mt-5 max-w-[560px] text-[16px] leading-[1.62] font-semibold text-[#3D4946]">
              {expertiseData.description}
            </p>

            <div className="mt-6 space-y-4 ">
              <ExpertiseFeatureItem feature={expertiseData.highlights[0]} />
              <ExpertiseFeatureItem feature={expertiseData.highlights[1]} />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2 max-w-[254px]">
              {expertiseData.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex h-[32px] w-[123px] items-center rounded-[99px] bg-[#DCE9FF] px-4 py-2 text-[12px]  font-semibold text-[#5d6780]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
