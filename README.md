# Valko's Mobile Detailing — Website

Single-page marketing site for [@valko_mobiledetailing](https://www.instagram.com/valko_mobiledetailing/).

**Stack:** Next.js 14 (App Router) · React 18 · Tailwind CSS 3 · JavaScript

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run start        # serve production build
```

## Forms and deploy

The contact form posts directly to Formspree. Set this locally or as a GitHub
repository variable before publishing:

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

The repo includes `.github/workflows/deploy.yml` for GitHub Pages. On pushes to
`main`, it runs `npm ci`, builds the static export into `out/`, and deploys it.
For a project-page URL like `/valko-mobile-detailing`, set
`NEXT_PUBLIC_BASE_PATH=/valko-mobile-detailing`. If a custom domain is used,
remove that base path variable and add `public/CNAME` with the exact domain name.

## Asset pipeline

All media lives in `public/media/` with semantic names. To regenerate from the raw scrape in `assets/`:

```bash
npm run assets:rename   # copies assets/* → public/media/* with curated names
npm run assets:videos   # ffmpeg re-encode + extract poster jpgs (needs ffmpeg installed)
npm run assets:all      # both
```

## Layout

```
app/
  layout.jsx       # fonts (Oswald + Inter), metadata, LocalBusiness JSON-LD
  page.jsx         # composes the 10 sections
  globals.css      # Tailwind + design tokens + .btn-primary / .card utilities
components/        # Nav, Hero, WhyValko, Process, Pricing, BeforeAfter(+Slider),
                   # Gallery, About, FAQ, Contact, Footer
data/content.json  # all copy lives here — edit this, not the components
lib/content.js     # typed exports of content.json
public/media/      # brand, before-after, gallery, videos
assets/            # raw Brightdata scrape + posts.json manifest (audit trail)
scripts/           # rename_assets.js, process_videos.sh
```

## Editing copy

Touch only `data/content.json`. Hero copy, services, pricing, FAQ, gallery list — all live there.

## Open items (waiting on client)

- Real Formspree endpoint / form ID
- Booking phone, if it should be shown publicly
- Custom domain for `public/CNAME`
- Confirm/refine service-area cities (currently Toronto · Scarborough · Pickering · North York · Markham)
- Vehicle-size pricing matrix
- Ceramic-coat / headlight-restoration scope

Track in `assets/posts.json → open_questions_for_client`.
