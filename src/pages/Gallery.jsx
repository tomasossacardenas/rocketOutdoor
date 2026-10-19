import { useEffect, useState } from 'react'
import { galleryRows } from '../data/site.js'
import OfferBanner from '../components/OfferBanner.jsx'

// Column templates reproduce the mixed-width rows of the original gallery.
const rowLayouts = ['md:grid-cols-2', 'md:grid-cols-[1fr_3fr_1fr]', 'md:grid-cols-[2fr_3fr_3fr]', 'md:grid-cols-[3fr_2fr_3fr]', 'md:grid-cols-[2fr_3fr_2fr]', 'md:grid-cols-2']

export default function Gallery() {
  const images = galleryRows.flat()
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') setActive((i) => (i + 1) % images.length)
      if (e.key === 'ArrowLeft') setActive((i) => (i - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, images.length])

  let index = 0
  return (
    <>
      <div className="bg-slate px-4 py-6 md:px-14 md:py-10">
        <section className="mx-auto grid max-w-[1280px] bg-navy md:grid-cols-[320px_1fr]">
          <img src="/images/gallery-header.webp" alt="Modern black fence beside a lit pool walkway" className="h-64 w-full object-cover md:h-[380px]" />
          <div className="px-8 py-10 md:px-[132px] md:py-14">
            <h1 className="font-display text-5xl font-bold md:text-[58px]" style={{ fontStretch: '100%' }}>Gallery</h1>
            <p className="mt-8 max-w-[540px] text-[15px] leading-[1.75] font-light">
              Explore some of our recent fence installation projects throughout Wesley Chapel, San Antonio,
              Zephyrhills, Dade City, and surrounding Central Florida areas. From vinyl and aluminum fencing to wood
              and custom gates, our gallery showcases the quality materials, attention to detail, and workmanship we
              bring to every project.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-6 max-w-[1280px] space-y-6 bg-navy p-6 md:mt-14 md:space-y-10 md:p-10">
          {galleryRows.map((row, r) => (
            <div key={r} className={`grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-10 ${rowLayouts[r]}`}>
              {row.map((img) => {
                const i = index++
                return (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setActive(i)}
                    className="group block h-64 overflow-hidden md:h-[470px]"
                    aria-label={`Open photo ${i + 1}`}
                  >
                    <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </button>
                )
              })}
            </div>
          ))}
        </section>
      </div>

      <OfferBanner />

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <img src={images[active].src} alt={images[active].alt} className="max-h-[90vh] max-w-full object-contain" />
          <button type="button" className="absolute top-4 right-5 text-4xl" aria-label="Close" onClick={() => setActive(null)}>×</button>
          <button
            type="button"
            className="absolute left-3 p-3 text-4xl"
            aria-label="Previous photo"
            onClick={(e) => { e.stopPropagation(); setActive((active - 1 + images.length) % images.length) }}
          >‹</button>
          <button
            type="button"
            className="absolute right-3 p-3 text-4xl"
            aria-label="Next photo"
            onClick={(e) => { e.stopPropagation(); setActive((active + 1) % images.length) }}
          >›</button>
        </div>
      )}
    </>
  )
}
