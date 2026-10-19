import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-navy text-white hover:bg-navy-700',
  light: 'bg-white text-navy hover:bg-paper',
  outline: 'border border-navy/20 text-navy hover:border-navy',
  'outline-light': 'border border-white/30 text-white hover:border-white hover:bg-white/5',
}

// Renders a router Link for internal paths, a plain anchor for tel:/mailto:/external.
export default function Button({ to, href, variant = 'primary', className = '', children, ...rest }) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-[15px] font-medium transition-colors ${variants[variant]} ${className}`
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  return <a href={href} className={cls} {...rest}>{children}</a>
}
