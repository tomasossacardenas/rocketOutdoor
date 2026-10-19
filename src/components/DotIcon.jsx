// Dotted ring ornament used above each "Why Choose Us" item.
export default function DotIcon({ variant = 0 }) {
  const dots = Array.from({ length: 14 }, (_, i) => {
    const angle = (i / 14) * Math.PI * 2
    const r = variant % 2 ? 11 + (i % 3) : 12
    return { cx: 14 + r * Math.cos(angle), cy: 14 + r * Math.sin(angle), r: 0.9 + ((i + variant) % 3) * 0.3 }
  })
  return (
    <svg width="30" height="30" viewBox="0 0 28 28" fill="white" aria-hidden="true">
      {dots.map((d, i) => (
        <circle key={i} {...d} />
      ))}
      {variant === 0 && <circle cx="14" cy="14" r="7" fill="none" stroke="white" strokeDasharray="1 2" />}
    </svg>
  )
}
