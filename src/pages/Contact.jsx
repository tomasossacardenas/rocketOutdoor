import { useState } from 'react'
import { business } from '../data/site.js'
import SocialLinks from '../components/SocialLinks.jsx'

const fields = [
  { name: 'firstName', label: 'First name', type: 'text', autoComplete: 'given-name', required: true },
  { name: 'lastName', label: 'Last name', type: 'text', autoComplete: 'family-name' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email', required: true },
  { name: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel' },
  { name: 'address', label: 'Address', type: 'text', autoComplete: 'street-address' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  // No backend yet: hand the request off to the visitor's email client.
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    const body = fields.map((f) => `${f.label}: ${data[f.name] || '-'}`).join('\n')
    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent('Free estimate request')}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <section className="px-6 pt-16 pb-10 text-center md:pt-24">
        <h1 className="font-display text-5xl font-bold md:text-[64px]">Contact Us</h1>
        <h2 className="mt-6 text-2xl">Get in Touch with Us</h2>
        <p className="mx-auto mt-5 max-w-[620px] text-[16px] leading-relaxed font-light">
          Ready to upgrade your property with a new fence? Tell us a little about your project, and our team will get
          in touch to discuss your fencing needs and provide a free estimate.
        </p>
      </section>

      <form onSubmit={handleSubmit} className="mx-auto max-w-[504px] px-6">
        {fields.map((f) => (
          <div key={f.name} className="mb-6">
            <label htmlFor={f.name} className="mb-2 block text-[15px]">
              {f.label}
              {f.required && <span aria-hidden="true"> *</span>}
            </label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              autoComplete={f.autoComplete}
              required={f.required}
              className="h-[38px] w-full border border-white/90 bg-transparent px-3 text-white outline-none focus:border-white focus:ring-2 focus:ring-white/40"
            />
          </div>
        ))}
        <button type="submit" className="h-10 w-full bg-white text-[15px] text-slate transition-colors hover:bg-lavender">
          Submit
        </button>
        {sent && (
          <p className="mt-4 text-center text-sm" role="status">
            Thanks! Your email app should open with your request ready to send.
          </p>
        )}
      </form>

      <section className="mx-auto mt-16 grid max-w-[720px] gap-10 px-6 sm:grid-cols-3">
        <div>
          <h3 className="text-2xl">Address</h3>
          <p className="mt-5 text-[15px] leading-relaxed font-light">
            {business.addressLines[0]}
            <br />
            {business.addressLines[1]}
          </p>
        </div>
        <div>
          <h3 className="text-2xl">Contact</h3>
          <p className="mt-5 text-[15px] leading-relaxed font-light">
            <a href={business.phoneHref} className="hover:underline">{business.phone}</a>
            <br />
            <a href={`mailto:${business.email}`} className="hover:underline">{business.email.toLowerCase()}</a>
          </p>
        </div>
        <div>
          <h3 className="text-2xl">Opening Hours</h3>
          <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-5 text-[15px] leading-relaxed font-light">
            {business.hours.map((h) => (
              <div key={h.days} className="contents">
                <dt>{h.days}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <SocialLinks className="mt-10 justify-center" size="h-5 w-5" />

      <div className="mx-auto mt-6 mb-16 max-w-[980px] px-6">
        <iframe
          title="Map to Rocket Outdoor Co"
          src={`https://www.google.com/maps?q=${business.mapsQuery}&output=embed`}
          className="h-[300px] w-full border-0 md:h-[350px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  )
}
