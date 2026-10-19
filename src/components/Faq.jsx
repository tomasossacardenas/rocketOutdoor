import { faqs } from '../data/site.js'
import { PlusIcon } from './Icons.jsx'

export default function Faq() {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((f) => (
        <details key={f.q} className="group py-1">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-medium [&::-webkit-details-marker]:hidden">
            {f.q}
            <PlusIcon className="h-5 w-5 shrink-0 text-slate transition-transform group-open:rotate-45" />
          </summary>
          <p className="max-w-2xl pb-6 leading-relaxed text-slate">{f.a}</p>
        </details>
      ))}
    </div>
  )
}
