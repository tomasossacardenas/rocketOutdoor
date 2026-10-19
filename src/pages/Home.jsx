import { Link } from 'react-router-dom'
import { serviceCards, whyChooseUs } from '../data/site.js'
import DotIcon from '../components/DotIcon.jsx'
import OfferBanner from '../components/OfferBanner.jsx'

export default function Home() {
  return (
    <>
      <section className="bg-royal-glow px-6 py-10 text-center md:py-[52px]">
        <h1 className="font-display text-2xl font-bold tracking-wide uppercase md:text-[34px]">
          Fence Installation &amp; Outdoor Solutions in Central FL
        </h1>
      </section>

      <section
        className="relative bg-cover bg-center px-4 py-10 md:py-10"
        style={{ backgroundImage: "url('/images/hero-picket.webp')" }}
      >
        <div className="mx-auto max-w-[927px] bg-white/85 px-6 py-8 text-center text-navy backdrop-blur-[1px] md:mb-[180px] md:px-20">
          <img src="/images/logo-navy.png" alt="" className="mx-auto w-[120px]" />
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase md:text-[40px]">
            Elevate Your Space With Us
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] font-roboto text-[15px] leading-snug text-navy/90">
            At Rocket Outdoor Co, we provide professional fence installation throughout Wesley Chapel, San Antonio,
            Zephyrhills, Dade City, and surrounding areas. We specialize in high-quality vinyl, aluminum, wood, and
            chain-link fencing, with options designed for privacy, security, durability, and curb appeal. From new
            fence installations and custom gates to HOA assistance, our team is committed to quality workmanship and
            dependable service across Pasco, Hillsborough, Polk, and nearby Florida communities.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-navy px-8 py-2.5 text-[15px] text-white transition-colors hover:bg-royal"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      <section className="px-6 py-16 text-center md:py-20">
        <h2 className="font-display text-5xl font-bold md:text-[58px]">Who We Are</h2>
        <p className="mx-auto mt-8 max-w-[640px] font-roboto text-[15px] leading-relaxed">
          Rocket Outdoor Co is a locally and family-owned and operated fence installation company serving Wesley
          Chapel, San Antonio, Zephyrhills, Dade City, and surrounding areas in Central Florida. We specialize in
          high-quality fencing that combines durability, functionality, and style because your property deserves the
          best. From vinyl and aluminum to wood and chain-link fencing, we provide professional installation tailored
          to your property and needs.
        </p>
      </section>

      <section className="bg-royal-glow px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1250px]">
          <div className="md:px-[150px]">
            <h2 className="font-display text-5xl font-bold md:text-[58px]">Services</h2>
            <p className="mt-4 max-w-[640px] font-roboto text-[14px] leading-snug">
              At Rocket Outdoor Co, we provide high-quality fence installation and outdoor services tailored to your
              property’s needs. From vinyl and aluminum fencing to wood and chain-link, we offer a variety of
              materials and designs for privacy, security, durability, and curb appeal. Whether you need a new fence,
              custom gate, or other outdoor improvements, our team provides professional workmanship and solutions
              built to last.
            </p>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4">
            {serviceCards.map((card) => (
              <li key={card.title}>
                <Link to="/services" className="group relative block aspect-[286/335] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pt-12 pb-4">
                    <h3 className="font-roboto text-lg font-bold md:text-[22px]">{card.title}</h3>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <h2 className="text-center font-display text-5xl font-bold md:text-[58px]">Why Choose Us</h2>
        <p className="mx-auto mt-10 max-w-[940px] text-center font-display text-lg leading-snug md:text-[24px]" style={{ fontStretch: '100%' }}>
          At Rocket Outdoor Co, we believe quality fencing starts with quality materials, professional installation,
          and attention to detail. As a locally and family-owned company, we take pride in delivering durable,
          well-crafted fences and a reliable experience from start to finish. With years of industry experience, we
          work closely with each customer to find the right fencing solution for their property, budget, and needs.
        </p>

        <div className="relative mx-auto mt-16 grid max-w-[980px] gap-y-16 md:grid-cols-2">
          <div className="absolute inset-y-0 left-1/2 hidden w-px bg-white/80 md:block" aria-hidden="true" />
          {whyChooseUs.map((item, i) => (
            <div key={item.title} className="mx-auto max-w-[360px] text-center">
              <div className="flex justify-center"><DotIcon variant={i} /></div>
              <h3 className="mt-6 text-2xl">{item.title}</h3>
              <p className="mt-5 text-[15px] font-light">{item.subtitle}</p>
              <p className="mt-4 text-[15px] leading-snug font-light">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/about"
            className="inline-block rounded-full bg-white px-9 py-3 text-[15px] text-slate transition-colors hover:bg-lavender"
          >
            Learn More
          </Link>
        </div>
      </section>

      <OfferBanner />
    </>
  )
}
