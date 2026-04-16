import { Link } from 'react-router-dom'
import { DEFAULT_SLUG } from '../data/practices'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#f5f9f9] px-6 text-center">
      <p className="text-[18px] font-semibold text-[#0e1628]">This practice page was not found.</p>
      <Link
        to={`/${DEFAULT_SLUG}`}
        className="text-[16px] font-bold text-[#1E3A8A] underline underline-offset-4"
      >
        Go to default practice site
      </Link>
    </main>
  )
}
