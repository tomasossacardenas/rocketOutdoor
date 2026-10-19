// Compact header used at the top of inner pages.
export default function PageHero({ eyebrow, title, children }) {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-5 pt-14 pb-16 md:px-8 md:pt-20 md:pb-24">
        <p className="text-[13px] font-medium tracking-[0.14em] text-white/60 uppercase">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] font-semibold md:text-6xl">{title}</h1>
        {children && <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/75">{children}</p>}
      </div>
    </section>
  )
}
