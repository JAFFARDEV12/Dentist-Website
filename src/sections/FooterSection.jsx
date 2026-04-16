import { Globe, MapPin, Phone } from 'lucide-react'
import { PAGE_CONTAINER } from '../constants/pageLayout'
import FooterContactItem from '../components/footer/FooterContactItem'
import { usePractice } from '../context/PracticeContext'
import { footerData } from '../data/footerData'
import { formatPhoneDisplay } from '../utils/phoneFormat'

export default function FooterSection() {
  const p = usePractice()
  const phonePrimary = formatPhoneDisplay(p.phone, p.location)
  const phoneSecondary = p.phoneSecondary ? formatPhoneDisplay(p.phoneSecondary, p.location) : null
  const locationLabel = p.location === 'Canada' ? 'Canada' : 'United States'

  return (
    <footer className="border-t border-[#F8FAFC] bg-[#F8FAFC] ">
      <div className={`pt-10 pb-8 ${PAGE_CONTAINER}`}>
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-10">
          <section className="max-w-[360px]">
            <h3 className="text-[20px] leading-tight font-extrabold tracking-[-0.01em] text-[#1345b4]">
              {p.practiceName}
            </h3>
            <p className="mt-4 text-[16px] font-medium text-[#64748B]">
              Providing high-end dental experiences that prioritize mental calm and clinical precision.
              Serving patients across {locationLabel}.
            </p>
          </section>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:ml-auto md:gap-12 lg:gap-16">
            <section>
              <h4 className="text-[18px] leading-none font-extrabold text-[#1E3A8A]">Quick Links</h4>
              <ul className="mt-4 space-y-3">
                {footerData.quickLinks.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[16px] font-medium text-[#64748B] transition-colors hover:text-[#315fbf]"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h4 className="text-[18px] leading-none font-extrabold text-[#1E3A8A]">Contact</h4>
              <div className="mt-4 space-y-3">
                <FooterContactItem icon={Phone} text={phonePrimary} />
                {phoneSecondary && <FooterContactItem icon={Phone} text={phoneSecondary} />}
                <FooterContactItem icon={MapPin} text={locationLabel} />
                {p.website && (
                  <a
                    href={p.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-[16px] font-medium text-[#64748B] transition-colors hover:text-[#315fbf]"
                  >
                    <Globe className="mt-0.5 size-[18px] shrink-0 text-[#1E3A8A]" aria-hidden />
                    <span className="break-all">Website</span>
                  </a>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="border-t border-[#ecf1f8]">
        <div className={`py-4 text-center ${PAGE_CONTAINER}`}>
          <p className="text-[13px] leading-snug font-medium text-[#95a4bb]">
            © {new Date().getFullYear()} {p.practiceName}. Powered by Databiqs.
          </p>
        </div>
      </div>
    </footer>
  )
}
