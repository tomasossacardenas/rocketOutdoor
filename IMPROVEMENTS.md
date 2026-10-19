# Suggested Improvements: Rocket Outdoor Co Website

This is an audit of the current site (rocketoutdoorco.com on Wix) and of this React replica, which copies the original on purpose. Items are grouped by priority: what most affects **leads (quote requests and calls)**, then search visibility, performance, accessibility and maintainability.

---

## 1. Conversion & UX (highest impact)

| # | Issue on current site | Recommendation |
|---|---|---|
| 1.1 | The phone number in the header is plain text, so mobile visitors can't tap it to call. | Make every phone number a `tel:` link and add a **sticky "Call / Text / Free Quote" bar on mobile**. Most homeowners searching "fence company near me" are on a phone. (Done in this replica for links; the sticky bar is still to do.) |
| 1.2 | The footer email link points to `mailto:info@mysite.com`, a leftover Wix placeholder, so **emails go nowhere**. | Fix it now on the live site. The replica uses the real address. |
| 1.3 | The contact form asks for name, email, phone and address, but **nothing about the project**. | Add **Fence type** (vinyl / aluminum / wood / chain-link / not sure), **approximate linear feet**, **HOA? (Y/N)**, **timeline**, **photo upload**, and **preferred contact method (call / text / email)**. Better leads make for faster, more accurate quotes. Make phone *or* email required, not both. |
| 1.4 | The form has no visible confirmation or error states, and in this replica it falls back to `mailto:`. | Connect the form to a real backend (Vercel serverless function + Resend/SendGrid, or Formspree/Basin) with inline validation, a success page, and an auto-reply email. Send leads to a CRM or Google Sheet as well. |
| 1.5 | The "$100 Off" offer has no terms, no expiry date and no way to claim it. | Add a deadline ("Book by Nov 30"), short terms, and a pre-filled form field or promo code so you can track how many leads it brings in. A real deadline creates urgency; an open-ended "limited time" offer reads as permanent. |
| 1.6 | There is **no social proof on the page** (the Google Reviews widget shows 5.0 ★ from 13 reviews, but only as a small floating badge). | Add a **testimonials section** with 3–6 real Google reviews and photos, the star rating near the hero, and trust badges (Licensed & Insured, license #, years in business, warranty). This is the biggest trust gap for a contractor site. |
| 1.7 | The hero is a long paragraph in a semi-transparent box over a photo, and the main headline ("Fence Installation… Central FL") sits in a separate band above the photo. | Replace it with a single, focused hero: a large headline ("Fence Installation in Wesley Chapel & Central Florida"), a one-line value proposition, **two CTAs** (Get a Free Quote / Call (656) 235-9435) and 3 trust bullets. Move the long copy lower on the page. |
| 1.8 | The service cards on Home link to old, unrelated Wix template URLs (`/services-1/cosmetic-laser`, `/manicure`, `/skin-product-consultation`). | Fix the broken links. Create a **dedicated page for each fence type** (`/vinyl-fencing`, `/aluminum-fencing`, …) with photos, styles, heights, colors, pros/cons, typical price range and FAQs. These pages also rank well in search. |
| 1.9 | The Services page is text only, with no photos, while the Gallery is not tied to any material. | Add photos to each service and **filter the gallery by fence type**, with captions (city, material, height). Before/after sliders work especially well for this kind of business. |
| 1.10 | There is no pricing guidance or FAQ. | Add an FAQ (cost per foot, permits & HOA approval, timeline, warranty, property-line/survey, financing). It answers the questions that stop people from reaching out and qualifies for FAQ rich results. |
| 1.11 | The "Hablamos Español" message is in the header, but no Spanish content exists. | Add a Spanish version (`/es`) of key pages or at least the contact page. This is a real differentiator in the target market. |
| 1.12 | There are no clear process steps. | Add a "How it works" section: 1) Free estimate → 2) Design & HOA paperwork → 3) Installation → 4) Final walkthrough. It reduces uncertainty for first-time buyers. |
| 1.13 | Service area is mentioned only in paragraphs. | Add a service-area section or map listing each city/county, and consider a page for each major city for local SEO. |
| 1.14 | Some layouts are wide on desktop and have awkward empty space (e.g., the About hero, the empty boxes in the footer). | Tighten the vertical rhythm, use one consistent container width, and reduce the very large gaps between sections. |

## 2. SEO & local search

- **Unique title and meta description for every page.** Wix currently uses generic ones such as "Services | Rocket Outdoor Co". Include the service and the city, e.g. *"Vinyl Fence Installation in Wesley Chapel, FL | Rocket Outdoor Co"*.
- **Structured data (JSON-LD):** `LocalBusiness` / `HomeAndConstructionBusiness` with address, phone, hours, `areaServed`, `aggregateRating`; `Service` for each fence type; `FAQPage`.
- **Open Graph / Twitter tags and a share image**, so links shared on Facebook and in texts show a proper preview.
- Make sure the **heading hierarchy** is correct: one `<h1>` per page. The Wix site repeats the H1 text four times.
- **Prerender or SSR.** This replica is a client-side SPA. For best SEO, move to **Next.js (App Router) or Astro** with static generation, which deploys to Vercel with no extra setup. As a smaller step, add `vite-plugin-prerender` or React Router's prerendering.
- Add `sitemap.xml` and `robots.txt`, and a canonical URL.
- Keep the **Google Business Profile** up to date and linked, and add the NAP (name/address/phone) exactly as it appears there.
- Image file names and `alt` text should describe the content ("white-vinyl-privacy-fence-wesley-chapel.webp"). The original uses names like `IMG_4070.jpeg` and template alt text.

## 3. Performance

- Images are already converted to **WebP** in this replica. Next steps: generate responsive `srcset` sizes (e.g., with `vite-imagetools` or `next/image`), add **AVIF**, and set explicit `width`/`height` to prevent layout shift.
- Preload the hero image (`<link rel="preload" as="image">`) and lazy-load everything below the fold (already done for the gallery and cards).
- Self-host fonts (`@fontsource`) and limit the number of weights, or use `font-display: swap` (already in place).
- Lazy-load the Google Map only when it's scrolled into view, or replace it with a static map image plus a "Get directions" link.
- Target Core Web Vitals of **LCP < 2.5s, CLS < 0.1, INP < 200ms**, and monitor them with Vercel Speed Insights.

## 4. Accessibility (WCAG 2.2 AA)

- **Contrast:** light-weight body text (Sora 300) at 14–15px on navy, and the white-on-photo hero box, should be checked. Use at least weight 400 for body text and ≥ 16px.
- Every form input needs a visible `<label>` (done here), plus `aria-invalid` and error messages tied to fields with `aria-describedby`.
- Add a **"Skip to content" link**, visible focus styles everywhere, and keyboard support for the gallery lightbox, including focus trapping and returning focus to the trigger.
- Respect `prefers-reduced-motion` for hover zooms and smooth scrolling.
- Don't rely on underline/color alone for the active nav item. Add `aria-current="page"` (React Router's `NavLink` does this automatically).

## 5. Content & branding

- Fix the copy typos. For example, the Custom Fences text says *"the perfect boundary for your while enhancing…"* (a word is missing; fixed here as "your property"), and Custom Fences reuses the "Stylish Security" subtitle from Aluminum.
- Use **real project photos** wherever possible rather than stock images, and add short captions.
- Add an "About the team" section with owner photos and names. Family-owned is a selling point, so show the family.
- Show the license number, insurance, and warranty terms.
- Update the copyright year automatically (done here).

## 6. Analytics & tracking

- Add **Vercel Analytics** or GA4 with conversion events: form submit, `tel:` click, `mailto:` click, "Get directions" click, offer CTA click.
- Use UTM-tagged links for Google Business Profile, Facebook and Instagram so you can see which channels bring leads.
- Consider call tracking numbers if you run paid ads.

## 7. Engineering / maintainability (this codebase)

- All business info and copy is in `src/data/site.js`. Next step: move it to a headless CMS (Sanity, Contentful, Decap) or MDX so the owner can edit content and upload gallery photos without a developer.
- Add **ESLint + Prettier**, a **404 page** (currently unknown routes show Home), and basic tests (Playwright smoke test for every route and the form).
- Add security headers in `vercel.json` (CSP, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`).
- Protect the form from spam with a honeypot field and Cloudflare Turnstile or hCaptcha once it posts to a backend.

---

### Quick-win checklist (can be done in a day)

- [ ] Fix `info@mysite.com` and the broken `/services-1/...` links on the live site
- [ ] Tap-to-call phone and sticky mobile CTA bar
- [ ] Testimonials and Google rating section
- [ ] Add fence type, linear feet and photo upload to the quote form, and connect it to email
- [ ] Unique titles/meta descriptions plus LocalBusiness JSON-LD
- [ ] Offer expiry date and terms

---

## Status: `redesign/modern-ui` branch

Implemented on this branch:

- New visual design using **Poppins**, the same navy palette, and a lighter, editorial layout with more whitespace, real photos and fewer boxes
- Hero with a clear headline, two CTAs (estimate + tap-to-call), and a trust row (Google rating, family-owned, HOA help, Spanish)
- **Sticky mobile Call / Text / Free estimate bar**
- Service-area strip, "How it works" process, recent-work grid, and an offer band that tells visitors how to claim it
- Services page with a photo per fence type, "great for" tags, anchor sub-nav and an **FAQ**
- Masonry gallery with an accessible lightbox (focus handling, keyboard, counter)
- Richer quote form: fence type, preferred contact method, project details (still `mailto:`; connect a backend next)
- Per-page titles and meta descriptions, **LocalBusiness JSON-LD**, Open Graph tags, hero preload
- Skip link, visible focus styles, `prefers-reduced-motion` support, 404 page

Still to do: real form backend, testimonials from actual Google reviews, Spanish pages, pre-rendering/SSR, license and insurance details.
