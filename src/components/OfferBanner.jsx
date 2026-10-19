import { Link } from 'react-router-dom'

export default function OfferBanner() {
  return (
    <section className="bg-white px-6 py-20 text-center text-navy">
      <p className="font-display text-3xl font-bold">- Limited Time Offer -</p>
      <h2 className="mt-6 font-display text-5xl font-extrabold md:text-6xl">Get $100 Off</h2>
      <Link
        to="/contact"
        className="mt-8 inline-block bg-navy px-10 py-3 text-sm font-semibold text-white transition-colors hover:bg-royal"
      >
        Contact Us
      </Link>
    </section>
  )
}
