import { Star } from 'lucide-react'

export default function RatingStars({ count = 5, className = '' }) {
  return (
    <div className={`inline-flex items-center gap-1 ${className}`} aria-label={`${count} star rating`}>
      {Array.from({ length: count }).map((_, index) => (
        <Star key={index} className="size-3 fill-[#005FB2] text-[#005FB2]" strokeWidth={2.2} />
      ))}
    </div>
  )
}
