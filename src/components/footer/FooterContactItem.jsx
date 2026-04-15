import { createElement } from 'react'

export default function FooterContactItem({ icon, text }) {
  const iconElement = createElement(icon, {
    className: 'size-4 shrink-0 text-[#8394b2]',
    strokeWidth: 2.2,
  })

  return (
    <p className="flex items-center gap-2.5  font-medium ">
      {iconElement}
      <span className='text-[#64748B] text-[16px]'>{text}</span>
    </p>
  )
}
