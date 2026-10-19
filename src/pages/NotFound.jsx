import Button from '../components/Button.jsx'
import usePageMeta from '../components/usePageMeta.js'

export default function NotFound() {
  usePageMeta('Page not found | Rocket Outdoor Co')
  return (
    <section className="mx-auto max-w-7xl px-5 py-32 md:px-8">
      <p className="text-sm font-medium text-slate">404</p>
      <h1 className="mt-3 text-4xl font-semibold md:text-5xl">This page jumped the fence.</h1>
      <p className="mt-4 max-w-md text-slate">The page you’re looking for doesn’t exist or has moved.</p>
      <div className="mt-8 flex gap-3">
        <Button to="/">Back home</Button>
        <Button to="/contact" variant="outline">Contact us</Button>
      </div>
    </section>
  )
}
