import { business } from '../data/site.js'

export default function SocialLinks({ className = '', size = 'h-[22px] w-[22px]' }) {
  return (
    <div className={`flex gap-3 ${className}`}>
      <a href={business.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"
        className={`flex ${size} items-center justify-center rounded-full bg-white text-navy transition-opacity hover:opacity-80`}>
        <svg viewBox="0 0 24 24" className="h-3/5 w-3/5" fill="currentColor" aria-hidden="true">
          <path d="M14 8V6.2c0-.8.2-1.2 1.4-1.2H17V2h-2.6C11.6 2 10.7 3.4 10.7 5.9V8H8.5v3h2.2v11H14V11h2.6l.4-3H14z" />
        </svg>
      </a>
      <a href={business.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"
        className={`flex ${size} items-center justify-center rounded-full bg-white text-navy transition-opacity hover:opacity-80`}>
        <svg viewBox="0 0 24 24" className="h-3/5 w-3/5" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
        </svg>
      </a>
    </div>
  )
}
