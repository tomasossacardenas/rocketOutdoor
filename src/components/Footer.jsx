import { Link } from 'react-router-dom'
import { business } from '../data/site.js'
import SocialLinks from './SocialLinks.jsx'

export default function Footer() {
  return (
    <footer className="bg-navy px-5 pt-8 pb-6 text-white">
      <div className="mx-auto grid max-w-[1400px] md:grid-cols-2">
        <div className="pb-10 md:border-r md:border-white/70 md:pr-10">
          <div className="flex h-[175px] w-[175px] items-center justify-center bg-navy-dark/60">
            <img src="/images/logo-white.png" alt="Rocket Outdoor Co" className="w-[124px]" />
          </div>
          <Link
            to="/contact"
            className="mt-8 block max-w-md font-display text-4xl leading-tight font-bold underline decoration-2 underline-offset-4 hover:opacity-80 md:text-[44px]"
          >
            Contact Us for a Free Estimate
          </Link>
        </div>
        <div className="flex flex-col justify-center gap-4 text-[15px] md:pl-[200px]">
          <a href={business.phoneHref} className="hover:underline">Call or Text {business.phone}</a>
          <a href={`mailto:${business.email}`} className="hover:underline">{business.email}</a>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${business.mapsQuery}`}
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            {business.address}
          </a>
          <SocialLinks />
        </div>
      </div>
      <div className="mx-auto mt-5 max-w-[1400px] border-t border-white/70 pt-4 text-right text-xs">
        © {new Date().getFullYear()} by Rocket Outdoor Co.
      </div>
    </footer>
  )
}
