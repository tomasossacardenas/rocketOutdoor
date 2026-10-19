import { Link } from 'react-router-dom'
import { business, navLinks } from '../data/site.js'
import { FacebookIcon, InstagramIcon } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="bg-navy-900 pb-24 text-white/70 lg:pb-0">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pt-16 pb-12 md:grid-cols-2 md:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <img src="/images/logo-white.png" alt="Rocket Outdoor Co" width="600" height="390" loading="lazy" className="h-14 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Locally and family-owned fence installation for homes and businesses across Central Florida.
          </p>
          <div className="mt-6 flex gap-2">
            <a href={business.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-md border border-white/15 p-2.5 hover:border-white/40 hover:text-white">
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a href={business.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-md border border-white/15 p-2.5 hover:border-white/40 hover:text-white">
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-white">Pages</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className="hover:text-white">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-medium text-white">Contact</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><a href={business.phoneHref} className="hover:text-white">Call or text {business.phone}</a></li>
            <li><a href={`mailto:${business.email}`} className="break-all hover:text-white">{business.email}</a></li>
            <li>
              <a href={`https://www.google.com/maps/search/?api=1&query=${business.mapsQuery}`} target="_blank" rel="noreferrer" className="hover:text-white">
                {business.addressLines[0]}<br />{business.addressLines[1]}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-medium text-white">Hours</h2>
          <dl className="mt-4 space-y-2.5 text-sm">
            {business.hours.map((h) => (
              <div key={h.days}>
                <dt className="text-white/50">{h.days}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-white/10 px-5 py-6 text-xs text-white/50 md:flex-row md:justify-between md:px-8">
        <p>© {new Date().getFullYear()} Rocket Outdoor Co. All rights reserved.</p>
        <p>Wesley Chapel, Florida</p>
      </div>
    </footer>
  )
}
