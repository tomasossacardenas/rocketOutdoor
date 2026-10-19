import { business } from '../data/site.js'
import Button from './Button.jsx'
import { PhoneIcon } from './Icons.jsx'

export default function CtaBand() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-xl bg-navy text-white md:grid-cols-[1.1fr_1fr]">
        <div className="p-8 md:p-14">
          <p className="inline-block rounded-full border border-white/25 px-3 py-1 text-xs font-medium tracking-wide text-white/80">
            Limited time offer
          </p>
          <h2 className="mt-5 text-3xl leading-tight font-semibold md:text-5xl">$100 off your new fence.</h2>
          <p className="mt-4 max-w-md text-white/75">
            Book a free estimate and mention this offer. We’ll take $100 off your installation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/contact" variant="light">Get my free estimate</Button>
            <Button href={business.phoneHref} variant="outline-light">
              <PhoneIcon className="h-4 w-4" /> {business.phone}
            </Button>
          </div>
        </div>
        <img src="/images/gallery/07.webp" alt="White vinyl fence along a freshly cut lawn" loading="lazy" className="h-64 w-full object-cover md:h-full" />
      </div>
    </section>
  )
}
