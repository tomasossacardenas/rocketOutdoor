import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { business, navLinks } from '../data/site.js'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-navy">
      <div className="mx-auto flex max-w-[1340px] items-center justify-between px-6 py-3 lg:px-24">
        <Link to="/" aria-label="Rocket Outdoor Co home" onClick={() => setOpen(false)}>
          <img src="/images/logo-white.png" alt="Rocket Outdoor Co" className="h-[66px] w-auto" />
        </Link>

        <nav className="hidden md:block" aria-label="Main">
          <ul className="flex gap-7 font-sans text-[17px] font-medium">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end
                  className={({ isActive }) =>
                    `transition-opacity hover:opacity-70 ${isActive ? 'underline underline-offset-8' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden flex-col items-start md:flex">
          <span className="text-[17px] font-light">Hablamos Español</span>
          <a href={business.phoneHref} className="text-[19px] font-medium tracking-wide">
            {business.phone}
          </a>
          <Link
            to="/contact"
            className="mt-1 w-[182px] rounded-full bg-white py-0.5 text-center text-[13px] text-slate transition-colors hover:bg-lavender"
          >
            Get a free quote
          </Link>
        </div>

        <button
          type="button"
          className="p-2 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/20 px-6 pb-6 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-4 pt-4 text-lg">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end onClick={() => setOpen(false)}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-light">Hablamos Español</p>
          <a href={business.phoneHref} className="text-xl font-medium">{business.phone}</a>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-white py-2 text-center text-slate"
          >
            Get a free quote
          </Link>
        </nav>
      )}
    </header>
  )
}
