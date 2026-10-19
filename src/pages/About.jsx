import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-6 pt-16 pb-24 md:px-12 md:pt-20 md:pb-40">
        <h1 className="max-w-[700px] font-display text-5xl leading-[1.05] font-bold md:text-[76px]">
          Crafting Durable Outdoor Solutions
        </h1>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-10 border-t border-white/80 pt-2 pb-12 md:grid-cols-[1fr_auto] md:gap-16 md:pl-[140px] md:pr-[70px]">
          <div className="pt-4">
            <h2 className="text-lg font-semibold">Our Mission</h2>
            <p className="mt-4 max-w-[650px] text-[17px] leading-snug">
              Our mission is to provide high-quality, long-lasting fencing and outdoor solutions with a focus on
              craftsmanship, fair pricing, and exceptional customer service. We strive to make every project simple
              and transparent while delivering results our customers can be proud of.
            </p>
            <p className="mt-12 text-center text-lg leading-snug font-semibold md:pr-24">
              We’re here to help you protect
              <br />
              and enhance your property.
            </p>
            <div className="mt-10 text-center md:pr-24">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white px-4 py-1.5 text-[15px] tracking-wider transition-colors hover:bg-white hover:text-navy"
              >
                Contact Us
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M3 1l4 4-4 4" />
                </svg>
              </Link>
            </div>
          </div>
          <img
            src="/images/about-install.webp"
            alt="Installers fitting a white vinyl fence panel"
            className="w-full max-w-[351px] justify-self-center object-cover md:h-[459px]"
          />
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <div className="bg-white px-6 pt-6 pb-10 text-navy md:px-28">
          <h2 className="font-display text-5xl font-bold md:text-[58px]" style={{ fontStretch: '100%' }}>Our Story</h2>
          <img src="/images/about-logo.png" alt="Rocket Outdoor Co logo" className="mx-auto mt-2 w-[420px]" />
        </div>
        <div className="px-6 py-14 md:px-14 md:pt-20">
          <h3 className="text-xl font-medium">Get to Know Us</h3>
          <p className="mt-8 max-w-[560px] text-[15px] leading-snug">
            Rocket Outdoor Co. started with a simple idea: fences shouldn’t just be functional—they should be built
            to last, look great, and be installed by people you can trust. What began as a small local crew helping
            homeowners in Wesley Chapel has grown into a trusted fencing company serving homeowners and businesses
            throughout the area.
          </p>
          <p className="mt-0 max-w-[560px] text-[15px] leading-snug">
            We’ve built our reputation one project at a time, focusing on quality craftsmanship, fair and transparent
            pricing, and treating every property as if it were our own. From vinyl and aluminum to wood and
            chain-link fencing, we’re committed to delivering quality work and an experience our customers can feel
            confident in.
          </p>
        </div>
      </section>
    </>
  )
}
