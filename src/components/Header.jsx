import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { business, navLinks } from '../data/site.js'
import Button from './Button.jsx'
import { PhoneIcon } from './Icons.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`sticky top-0 z-50 bg-navy text-white transition-shadow ${scrolled ? 'shadow-[0_1px_0_rgba(255,255,255,0.08)]' : ''}`}>
      <div className="hidden border-b border-white/10 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2 text-[13px] text-white/70">
          <span>Serving Wesley Chapel, Zephyrhills, Dade City, San Antonio &amp; surrounding areas</span>
          <span className="flex items-center gap-5">
            <span>Hablamos español</span>
            <span aria-hidden="true" className="h-3 w-px bg-white/25" />
            <span>Mon–Fri 8–5 · Sat 9–1</span>
          </span>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Link to="/" aria-label="Rocket Outdoor Co, home">
          <img src="/images/logo-white.png" alt="Rocket Outdoor Co" width="600" height="390" className="h-11 w-auto md:h-12" />
        </Link>

        <nav className="hidden lg:block" aria-label="Main">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end
                  className={({ isActive }) =>
                    `rounded-md px-3.5 py-2 text-[15px] transition-colors ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}`
                  }
                >
                  {({ isActive }) => (
                    <span className="relative">
                      {link.label}
                      {isActive && <span className="absolute inset-x-0 -bottom-1.5 h-px bg-white" />}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href={business.phoneHref} className="flex items-center gap-2 text-[15px] font-medium hover:text-white/80">
            <PhoneIcon className="h-4 w-4" />
            {business.phone}
          </a>
          <Button to="/contact" variant="light" className="py-2.5">Free estimate</Button>
        </div>

        <button
          type="button"
          className="-mr-2 rounded-md p-2 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h10" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className="h-[calc(100dvh-68px)] overflow-y-auto border-t border-white/10 px-5 pt-4 pb-28 lg:hidden" aria-label="Mobile">
          <ul>
            {navLinks.map((link) => (
              <li key={link.to} className="border-b border-white/10">
                <NavLink to={link.to} end className={({ isActive }) => `block py-4 text-2xl ${isActive ? 'text-white' : 'text-white/70'}`}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-1 text-white/70">
            <p>Hablamos español</p>
            <p>Mon–Fri 8:00–5:00 · Sat 9:00–1:00</p>
          </div>
        </nav>
      )}
    </header>
  )
}
