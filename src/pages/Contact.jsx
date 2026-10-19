import { useState } from 'react'
import { business, fencingTypes } from '../data/site.js'
import PageHero from '../components/PageHero.jsx'
import Rating from '../components/Rating.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { ChatIcon, ClockIcon, MailIcon, PhoneIcon, PinIcon } from '../components/Icons.jsx'

const inputCls =
  'mt-2 block w-full rounded-md border border-line bg-white px-3.5 py-3 text-[15px] text-navy placeholder:text-mist focus:border-navy focus:ring-2 focus:ring-navy/10 focus:outline-none'

function Field({ label, name, optional, children, className = '' }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-sm font-medium">
        {label} {optional && <span className="font-normal text-mist">(optional)</span>}
      </label>
      {children}
    </div>
  )
}

export default function Contact() {
  usePageMeta(
    'Free Fence Estimate | Contact Rocket Outdoor Co',
    'Request a free fence installation estimate in Wesley Chapel and Central Florida. Call or text (656) 235-9435.',
  )
  const [sent, setSent] = useState(false)

  // No backend yet: the request is handed to the visitor's email app, prefilled.
  const handleSubmit = (e) => {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.currentTarget))
    const body = [
      `Name: ${d.name}`,
      `Phone: ${d.phone}`,
      `Email: ${d.email || '-'}`,
      `Project address: ${d.address || '-'}`,
      `Fence type: ${d.type}`,
      `Preferred contact: ${d.contact}`,
      '',
      d.details || '',
    ].join('\n')
    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(`Free estimate request – ${d.name}`)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <PageHero eyebrow="Contact" title="Get your free estimate">
        Tell us a little about your project and our team will get in touch to talk through options and pricing.
      </PageHero>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        <aside className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold">Prefer to talk?</h2>
            <p className="mt-2 text-slate">Call or text us. Hablamos español.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={business.phoneHref} className="inline-flex items-center gap-2 rounded-md bg-navy px-5 py-3 text-[15px] font-medium text-white hover:bg-navy-700">
                <PhoneIcon className="h-4 w-4" /> {business.phone}
              </a>
              <a href={business.smsHref} className="inline-flex items-center gap-2 rounded-md border border-navy/20 px-5 py-3 text-[15px] font-medium hover:border-navy">
                <ChatIcon className="h-4 w-4" /> Text us
              </a>
            </div>
          </div>

          <ul className="divide-y divide-line border-y border-line text-[15px]">
            <li className="flex gap-4 py-5">
              <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-slate" />
              <a href={`mailto:${business.email}`} className="break-all hover:underline">{business.email}</a>
            </li>
            <li className="flex gap-4 py-5">
              <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-slate" />
              <a href={`https://www.google.com/maps/search/?api=1&query=${business.mapsQuery}`} target="_blank" rel="noreferrer" className="hover:underline">
                {business.addressLines[0]}<br />{business.addressLines[1]}
              </a>
            </li>
            <li className="flex gap-4 py-5">
              <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-slate" />
              <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1">
                {business.hours.map((h) => (
                  <div key={h.days} className="contents">
                    <dt className="text-slate">{h.days}</dt>
                    <dd>{h.time}</dd>
                  </div>
                ))}
              </dl>
            </li>
          </ul>
          <Rating />
        </aside>

        <div className="rounded-xl border border-line bg-paper p-6 md:p-10">
          {sent ? (
            <div role="status" className="py-10">
              <h2 className="text-2xl font-semibold">Almost done</h2>
              <p className="mt-3 max-w-md text-slate">
                Your email app should have opened with your request filled in. Just hit send. If nothing opened, call or
                text us at <a href={business.phoneHref} className="font-medium text-navy underline">{business.phone}</a>.
              </p>
              <button type="button" onClick={() => setSent(false)} className="mt-6 text-sm font-medium underline">
                Edit my request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" name="name">
                <input id="name" name="name" required autoComplete="name" className={inputCls} />
              </Field>
              <Field label="Phone" name="phone">
                <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="(000) 000-0000" className={inputCls} />
              </Field>
              <Field label="Email" name="email" optional>
                <input id="email" name="email" type="email" autoComplete="email" className={inputCls} />
              </Field>
              <Field label="Project address" name="address" optional>
                <input id="address" name="address" autoComplete="street-address" placeholder="Street, city" className={inputCls} />
              </Field>
              <Field label="Fence type" name="type">
                <select id="type" name="type" className={inputCls} defaultValue="Not sure yet">
                  {fencingTypes.map((t) => <option key={t.id}>{t.title}</option>)}
                  <option>Not sure yet</option>
                </select>
              </Field>
              <fieldset>
                <legend className="text-sm font-medium">Best way to reach you</legend>
                <div className="mt-2 flex gap-2">
                  {['Call', 'Text', 'Email'].map((c, i) => (
                    <label key={c} className="flex-1 cursor-pointer">
                      <input type="radio" name="contact" value={c} defaultChecked={i === 0} className="peer sr-only" />
                      <span className="block rounded-md border border-line bg-white py-3 text-center text-[15px] peer-checked:border-navy peer-checked:bg-navy peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-royal">
                        {c}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <Field label="Project details" name="details" optional className="sm:col-span-2">
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  placeholder="Approximate length, height, gates needed, HOA requirements…"
                  className={inputCls}
                />
              </Field>
              <div className="sm:col-span-2">
                <button type="submit" className="w-full rounded-md bg-navy px-5 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-navy-700 sm:w-auto sm:px-8">
                  Request my free estimate
                </button>
                <p className="mt-3 text-xs text-slate">Mention the $100-off offer in your details to claim it.</p>
              </div>
            </form>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <iframe
          title="Map showing Rocket Outdoor Co in Wesley Chapel"
          src={`https://www.google.com/maps?q=${business.mapsQuery}&output=embed`}
          className="h-[320px] w-full rounded-xl border-0 grayscale-[40%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  )
}
