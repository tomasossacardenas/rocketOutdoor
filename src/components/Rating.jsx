import { business } from '../data/site.js'
import { StarIcon } from './Icons.jsx'

export default function Rating({ light = false }) {
  return (
    <a
      href={business.reviewsUrl}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 text-sm hover:underline ${light ? 'text-white/85' : 'text-slate'}`}
    >
      <span className="flex text-amber-400">
        {Array.from({ length: 5 }, (_, i) => <StarIcon key={i} className="h-4 w-4" />)}
      </span>
      <span>
        <strong className={`font-semibold ${light ? 'text-white' : 'text-navy'}`}>{business.rating}</strong> on Google · {business.reviewCount} reviews
      </span>
    </a>
  )
}
