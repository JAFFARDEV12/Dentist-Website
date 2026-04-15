import genericDentry from '../../assets/genericDentry.svg'
import cosmeticWhitening from '../../assets/Cosmetic-Whitening.svg'
import invisibleBraces from '../../assets/Invisible-Braces.svg'
import dentalImplants from '../../assets/Dental-Implants.svg'

const thumbnails = {
  general: genericDentry,
  cosmetic: cosmeticWhitening,
  braces: invisibleBraces,
  implants: dentalImplants,
}

export default function ServiceThumbnail({ type }) {
  const imageSource = thumbnails[type] ?? genericDentry

  return (
    <div className="h-full w-full overflow-hidden rounded-[48px] bg-[#e9eff8]">
      <img src={imageSource} alt="" className="h-full w-full object-cover" loading="lazy" />
    </div>
  )
}
