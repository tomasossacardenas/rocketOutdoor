import { Link } from 'react-router-dom'
import { business, fencingTypes, gallery, reasons, serviceAreas, steps } from '../data/site.js'
import Button from '../components/Button.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Rating from '../components/Rating.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { ArrowIcon, CheckIcon, PhoneIcon } from '../components/Icons.jsx'

const recentWork = [gallery[1], gallery[3], gallery[11], gallery[8], gallery[13]]

export default function Home() {
  usePageMeta(
    'Fence Installation in Wesley Chapel & Central FL | Rocket Outdoor Co',
    'Locally and family-owned fence company in Wesley Chapel, FL. Vinyl, aluminum, wood and chain-link fencing, custom gates and HOA help. Free estimates.',
  )

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <img
          src="/images/hero-picket.webp"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/20" />
        <div className="mx-auto max-w-7xl px-5 pt-20 pb-24 md:px-8 md:pt-32 md:pb-36">
          <p className="text-[13px] font-medium tracking-[0.14em] text-white/70 uppercase">Fence installation · Central Florida</p>
          <h1 className="mt-5 max-w-2xl text-[42px] leading-[1.04] font-semibold md:text-7xl">
            Fences built to last, installed right.
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/80 md:text-lg">
            Vinyl, aluminum, wood and chain-link fencing for homes and businesses in Wesley Chapel, Zephyrhills,
            Dade City, San Antonio and nearby communities.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button to="/contact" variant="light">
              Get a free estimate <ArrowIcon className="h-4 w-4" />
            </Button>
            <Button href={business.phoneHref} variant="outline-light">
              <PhoneIcon className="h-4 w-4" /> {business.phone}
            </Button>
          </div>
          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/85">
            <li><Rating light /></li>
            <li className="flex items-center gap-2"><CheckIcon className="h-4 w-4" /> Family-owned & local</li>
            <li className="flex items-center gap-2"><CheckIcon className="h-4 w-4" /> HOA approval help</li>
            <li className="flex items-center gap-2"><CheckIcon className="h-4 w-4" /> Hablamos español</li>
          </ul>
        </div>
      </section>

      {/* Service area strip */}
      <div className="border-b border-line bg-paper">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-2 px-5 py-5 text-sm text-slate md:px-8">
          <span className="font-medium text-navy">Proudly serving</span>
          {serviceAreas.map((a) => <span key={a}>{a}</span>)}
        </div>
      </div>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="What we install" title="The right fence for your property">
            Whether it’s privacy, security, curb appeal or a safe yard for the kids and dogs, we’ll help you choose the
            material that fits.
          </SectionHeading>
          <Link to="/services" className="group inline-flex shrink-0 items-center gap-2 text-[15px] font-medium">
            All services <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <ul className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {fencingTypes.slice(0, 4).map((t) => (
            <li key={t.id}>
              <Link to={`/services#${t.id}`} className="group block">
                <div className="aspect-[4/5] overflow-hidden rounded-lg bg-paper">
                  <img src={t.image} alt={t.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <h3 className="text-xl font-semibold">{t.title} fencing</h3>
                  <ArrowIcon className="h-4 w-4 shrink-0 text-slate transition-transform group-hover:translate-x-1" />
                </div>
                <p className="mt-1 text-sm text-slate">{t.tagline}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* About split */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <img src="/images/about-install.webp" alt="Installer setting a white vinyl fence panel" loading="lazy" className="aspect-[4/5] w-full rounded-lg object-cover sm:max-w-md" />
            <div className="absolute right-0 -bottom-6 hidden w-64 rounded-lg bg-navy p-6 text-white shadow-xl sm:block lg:right-4">
              <p className="text-3xl font-semibold">Free</p>
              <p className="mt-1 text-sm text-white/75">on-site estimates, with no pressure and no obligation.</p>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Who we are" title="A local, family-owned fence company">
              <p>
                Rocket Outdoor Co started with a simple idea: a fence should be built to last, look great, and be
                installed by people you can trust.
              </p>
              <p className="mt-4">
                What began as a small crew helping homeowners in Wesley Chapel now serves homes and businesses across
                Pasco, Hillsborough and Polk counties. We still treat every property as if it were our own.
              </p>
            </SectionHeading>
            <Button to="/about" variant="outline" className="mt-8">More about us</Button>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading eyebrow="Why Rocket" title="Quality you can see along every foot of fence" />
        <ol className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <li key={r.title} className="bg-white p-7">
              <span className="text-sm font-medium text-mist">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-8 text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate">{r.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Process */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <SectionHeading light eyebrow="How it works" title="From first call to final walkthrough" />
          <ol className="mt-14 grid gap-10 md:grid-cols-4 md:gap-8">
            {steps.map((s, i) => (
              <li key={s.title} className="border-t border-white/20 pt-6">
                <span className="text-sm text-white/50">Step {i + 1}</span>
                <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/70">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Recent work */}
      <section className="mx-auto max-w-7xl px-5 pt-20 md:px-8 md:pt-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Recent projects" title="Our work around Central Florida" />
          <Link to="/gallery" className="group inline-flex shrink-0 items-center gap-2 text-[15px] font-medium">
            View the gallery <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[240px] md:grid-cols-4 md:gap-4">
          {recentWork.map((img, i) => (
            <Link
              key={img.src}
              to="/gallery"
              className={`overflow-hidden rounded-lg ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]" />
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
