# Rocket Outdoor Co: Website

React + Tailwind CSS rebuild of [rocketoutdoorco.com](https://www.rocketoutdoorco.com), built with Vite.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # serve the build locally
```

## Structure

- `src/pages/`: Home, Gallery, About, Services, Contact
- `src/components/`: Header, Footer, shared pieces
- `src/data/site.js`: business info (phone, address, hours) and page copy
- `public/images/`: optimized site images (WebP/PNG)

## Deploy (Vercel)

Import the repo in Vercel. It detects Vite automatically (build: `npm run build`, output: `dist`).
`vercel.json` rewrites every route to `index.html` so client-side routes work on refresh.

See [IMPROVEMENTS.md](IMPROVEMENTS.md) for recommended UX/SEO/performance improvements.
