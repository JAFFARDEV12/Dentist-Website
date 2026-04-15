import { Mail, MapPin, Phone } from 'lucide-react'
import FooterContactItem from '../components/footer/FooterContactItem'
import { footerData } from '../data/footerData'

export default function FooterSection() {
  return (
    <footer className="border-t border-[#F8FAFC] bg-[#F8FAFC] ">
      <div className="mx-auto w-full max-w-[1440px] px-6 pt-10 pb-8 md:px-10 lg:px-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-10">
          <section className="max-w-[360px]">
            <h3 className="text-[20px] leading-none font-extrabold tracking-[-0.01em] text-[#1345b4]">
              {footerData.brand.name}
            </h3>
            <p className="mt-4 text-[16px]  font-medium text-[#64748B]">{footerData.brand.description}</p>
          </section>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:ml-auto md:gap-12 lg:gap-16">
            <section>
              <h4 className="text-[18px] leading-none font-extrabold text-[#1E3A8A]">Quick Links</h4>
              <ul className="mt-4 space-y-3">
                {footerData.quickLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[16px]  font-medium text-[#64748B] transition-colors hover:text-[#315fbf]">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h4 className="text-[18px] leading-none font-extrabold text-[#1E3A8A]">Contact</h4>
              <div className="mt-4 space-y-3">
                <FooterContactItem icon={Phone} text={footerData.contact.phone} />
                <FooterContactItem icon={Mail} text={footerData.contact.email} />
                <FooterContactItem icon={MapPin} text={footerData.contact.address} />
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="border-t border-[#ecf1f8] px-6 py-4 text-center md:px-10 lg:px-14">
        <p className="text-[13px] leading-none font-medium text-[#95a4bb]">{footerData.copyright}</p>
      </div>
    </footer>
  )
}
