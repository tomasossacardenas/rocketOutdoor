import { Link } from 'react-router-dom'
import { fencingTypes } from '../data/site.js'

function FenceType({ item }) {
  return (
    <div className="mx-auto max-w-[300px] px-4 py-10 text-center">
      <h3 className="text-2xl">{item.title}</h3>
      <p className="mt-4 text-[15px] font-light">{item.subtitle}</p>
      <p className="mt-5 text-[15px] leading-snug font-light">{item.text}</p>
    </div>
  )
}

export default function Services() {
  const [first, second, ...rest] = fencingTypes
  return (
    <>
      <section className="mx-auto max-w-[1100px] px-6 pt-16 pb-16 text-center md:pt-24">
        <h1 className="font-display text-5xl font-bold md:text-[64px]">Fencing Solutions</h1>
        <p className="mt-6 text-lg font-light">Tailored Options</p>
        <p className="mx-auto mt-6 max-w-[760px] text-[16px] leading-relaxed font-light">
          At Rocket Outdoor Co., we provide professional fence installation for residential and commercial
          properties throughout Central Florida. We offer a variety of high-quality fencing options designed to meet
          your needs for privacy, security, durability, and curb appeal. From vinyl and aluminum to wood and
          chain-link fencing, our team can help you choose the right solution for your property.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6">
        <div className="grid md:grid-cols-2">
          <div className="md:border-r md:border-white/80"><FenceType item={first} /></div>
          <div><FenceType item={second} /></div>
        </div>
        <div className="grid border-t border-white/80 md:grid-cols-3">
          {rest.map((item, i) => (
            <div key={item.title} className={i < rest.length - 1 ? 'md:border-r md:border-white/80' : ''}>
              <FenceType item={item} />
            </div>
          ))}
        </div>
      </section>

      <div className="py-14 text-center">
        <Link
          to="/gallery"
          className="inline-block rounded-full bg-white px-14 py-3 text-[15px] text-slate transition-colors hover:bg-lavender"
        >
          Gallery
        </Link>
      </div>
    </>
  )
}
