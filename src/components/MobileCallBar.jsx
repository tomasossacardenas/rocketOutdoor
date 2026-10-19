import { Link } from 'react-router-dom'
import { business } from '../data/site.js'
import { ChatIcon, PhoneIcon } from './Icons.jsx'

// Persistent contact actions on small screens, where most quote requests start.
export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1fr_1fr_1.4fr] gap-2 border-t border-line bg-white/95 p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] backdrop-blur lg:hidden">
      <a href={business.phoneHref} className="flex items-center justify-center gap-1.5 rounded-md border border-line py-3 text-sm font-medium text-navy">
        <PhoneIcon className="h-4 w-4" /> Call
      </a>
      <a href={business.smsHref} className="flex items-center justify-center gap-1.5 rounded-md border border-line py-3 text-sm font-medium text-navy">
        <ChatIcon className="h-4 w-4" /> Text
      </a>
      <Link to="/contact" className="flex items-center justify-center rounded-md bg-navy py-3 text-sm font-medium text-white">
        Free estimate
      </Link>
    </div>
  )
}
