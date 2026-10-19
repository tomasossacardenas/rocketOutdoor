export default function SectionHeading({ eyebrow, title, children, light = false, className = '' }) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {eyebrow && (
        <p className={`text-[13px] font-medium tracking-[0.14em] uppercase ${light ? 'text-white/60' : 'text-slate'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`mt-3 text-3xl leading-[1.15] font-semibold md:text-[42px] ${light ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {children && <div className={`mt-4 text-[17px] leading-relaxed ${light ? 'text-white/75' : 'text-slate'}`}>{children}</div>}
    </div>
  )
}
