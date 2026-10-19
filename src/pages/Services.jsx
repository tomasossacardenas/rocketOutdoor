import { fencingTypes } from '../data/site.js'
import Button from '../components/Button.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Faq from '../components/Faq.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { CheckIcon } from '../components/Icons.jsx'

export default function Services() {
  usePageMeta(
    'Vinyl, Aluminum, Wood & Chain-Link Fencing | Rocket Outdoor Co',
    'Professional fence installation for homes and businesses in Central Florida: vinyl, aluminum, wood, chain-link, custom fences and gates.',
  )

  return (
    <>
      <PageHero eyebrow="Services" title="Fencing solutions for every property">
        Residential and commercial fence installation throughout Central Florida, designed for privacy, security,
        durability and curb appeal.
      </PageHero>

      <nav aria-label="Fence types" className="sticky top-[68px] z-30 border-b border-line bg-white/95 backdrop-blur md:top-[105px]">
        <ul className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-5 py-3 text-sm md:px-8">
          {fencingTypes.map((t) => (
            <li key={t.id}>
              <a href={`#${t.id}`} className="block rounded-md px-3 py-1.5 whitespace-nowrap text-slate hover:bg-paper hover:text-navy">
                {t.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {fencingTypes.map((t, i) => (
          <section
            key={t.id}
            id={t.id}
            className="grid scroll-mt-40 items-center gap-10 border-b border-line py-16 last:border-0 md:py-24 lg:grid-cols-2 lg:gap-20"
          >
            <div className={i % 2 ? 'lg:order-2' : ''}>
              <img src={t.image} alt={t.alt} loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover" />
            </div>
            <div>
              <p className="text-[13px] font-medium tracking-[0.14em] text-slate uppercase">{t.tagline}</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{t.title === 'Custom & gates' ? 'Custom fences & gates' : `${t.title} fencing`}</h2>
              <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-slate">{t.text}</p>
              <h3 className="mt-8 text-sm font-medium">Great for</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {t.bestFor.map((b) => (
                  <li key={b} className="flex items-center gap-1.5 rounded-md bg-paper px-3 py-1.5 text-sm text-navy">
                    <CheckIcon className="h-3.5 w-3.5" /> {b}
                  </li>
                ))}
              </ul>
              <Button to="/contact" variant="outline" className="mt-8">Request a free quote</Button>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="FAQ" title="Common questions">
            Don’t see your question? Call or text us. We’re happy to help.
          </SectionHeading>
          <Faq />
        </div>
      </section>

      <CtaBand />
    </>
  )
}
