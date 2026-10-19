import { reasons } from '../data/site.js'
import CtaBand from '../components/CtaBand.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import usePageMeta from '../components/usePageMeta.js'

export default function About() {
  usePageMeta(
    'About Us | Rocket Outdoor Co',
    'Rocket Outdoor Co is a locally and family-owned fence company in Wesley Chapel, FL, focused on craftsmanship, fair pricing and great service.',
  )

  return (
    <>
      <PageHero eyebrow="About us" title="Crafting durable outdoor solutions" />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow="Our story" title="Started with one idea: build fences people can trust.">
            <p>
              Rocket Outdoor Co started with a simple idea: fences shouldn’t just be functional. They should be built
              to last, look great, and be installed by people you can trust.
            </p>
            <p className="mt-4">
              What began as a small local crew helping homeowners in Wesley Chapel has grown into a fencing company
              serving homeowners and businesses throughout the area. We’ve built our reputation one project at a
              time, through quality craftsmanship, fair and transparent pricing, and treating every property as if it
              were our own.
            </p>
          </SectionHeading>

          <figure className="mt-12 border-l-2 border-navy pl-6">
            <blockquote className="text-xl leading-snug font-medium md:text-2xl">
              “Our mission is to provide high-quality, long-lasting fencing with a focus on craftsmanship, fair pricing
              and exceptional customer service.”
            </blockquote>
            <figcaption className="mt-3 text-sm text-slate">Our mission</figcaption>
          </figure>
        </div>
        <div className="grid grid-cols-2 gap-4 self-start">
          <img src="/images/about-install.webp" alt="Installer fitting a vinyl fence panel" loading="lazy" className="col-span-2 aspect-[4/3] w-full rounded-lg object-cover object-top" />
          <img src="/images/gallery/03.webp" alt="Completed vinyl fence project" loading="lazy" className="aspect-square w-full rounded-lg object-cover" />
          <div className="flex aspect-square items-center justify-center rounded-lg bg-paper p-6">
            <img src="/images/logo-navy.png" alt="Rocket Outdoor Co logo" loading="lazy" className="w-full max-w-[160px]" />
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <SectionHeading eyebrow="What we value" title="How we work" />
          <dl className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <div key={r.title} className="border-t border-navy/15 pt-6">
                <dt className="text-lg font-semibold">{r.title}</dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-slate">{r.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
