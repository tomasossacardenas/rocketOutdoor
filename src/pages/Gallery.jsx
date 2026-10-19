import { useCallback, useEffect, useRef, useState } from 'react'
import { gallery } from '../data/site.js'
import CtaBand from '../components/CtaBand.jsx'
import PageHero from '../components/PageHero.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { ArrowIcon } from '../components/Icons.jsx'

function Lightbox({ index, onClose, onStep }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const prevFocus = document.activeElement
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onStep(1)
      if (e.key === 'ArrowLeft') onStep(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      prevFocus?.focus()
    }
  }, [onClose, onStep])

  const img = gallery[index]
  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-navy-900/95 text-white" role="dialog" aria-modal="true" aria-label="Photo viewer">
      <div className="flex items-center justify-between px-5 py-4 text-sm">
        <span className="text-white/70">{index + 1} / {gallery.length}</span>
        <button ref={closeRef} type="button" onClick={onClose} className="rounded-md px-3 py-1.5 hover:bg-white/10">Close</button>
      </div>
      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6" onClick={onClose}>
        <img src={img.src} alt={img.alt} className="max-h-full max-w-full rounded-md object-contain" onClick={(e) => e.stopPropagation()} />
        <button type="button" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); onStep(-1) }}
          className="absolute left-3 rounded-full bg-white/10 p-3 hover:bg-white/20 md:left-6">
          <ArrowIcon className="h-5 w-5 rotate-180" />
        </button>
        <button type="button" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); onStep(1) }}
          className="absolute right-3 rounded-full bg-white/10 p-3 hover:bg-white/20 md:right-6">
          <ArrowIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

export default function Gallery() {
  usePageMeta(
    'Fence Installation Gallery | Rocket Outdoor Co',
    'Recent vinyl, aluminum, wood and custom fence projects in Wesley Chapel, Zephyrhills, Dade City, San Antonio and Central Florida.',
  )
  const [active, setActive] = useState(null)
  const close = useCallback(() => setActive(null), [])
  const step = useCallback((d) => setActive((i) => (i + d + gallery.length) % gallery.length), [])

  return (
    <>
      <PageHero eyebrow="Our work" title="Recent fence installations">
        A look at fence projects and styles from Wesley Chapel, San Antonio, Zephyrhills, Dade City and surrounding
        Central Florida areas.
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.map((img, i) => (
            <li key={img.src} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group block w-full overflow-hidden rounded-lg"
                aria-label={`View photo ${i + 1} of ${gallery.length}`}
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full transition-transform duration-700 group-hover:scale-[1.03]" />
              </button>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
      {active !== null && <Lightbox index={active} onClose={close} onStep={step} />}
    </>
  )
}
