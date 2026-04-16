import { useState } from 'react'
import { PAGE_CONTAINER } from '../constants/pageLayout'
import FaqAccordionItem from '../components/faqs/FaqAccordionItem'
import { patientFaqsData } from '../data/patientFaqsData'

export default function PatientFaqsSection() {
  const [openFaqId, setOpenFaqId] = useState(patientFaqsData[0].id)

  return (
    <section className="bg-[#f6f9ff] py-12 sm:py-16 lg:py-[74px]">
      <div className={PAGE_CONTAINER}>
        <header className="mx-auto max-w-[520px] text-center">
          <h2 className="text-[36px]  font-bold tracking-[-0.01em] text-[#101a2f] sm:text-[46px]">
            Patient FAQs
          </h2>
          <p className="mt-3 text-[14px] leading-[1.2] font-normal  text-[#566176] sm:text-[16px]">
            Everything you need to know about your next visit.
          </p>
        </header>

        <div className=" mx-auto mt-8 flex max-w-[980px] flex-col gap-3 sm:mt-10 sm:gap-4">
          {patientFaqsData.map((faq) => (
            <FaqAccordionItem
              key={faq.id}
              item={faq}
              isOpen={openFaqId === faq.id}
              onToggle={() => setOpenFaqId((prevId) => (prevId === faq.id ? '' : faq.id))}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
