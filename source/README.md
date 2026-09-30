# Denham & Grey Website

Production source for the Denham & Grey institutional website.

## Technology

- React 19
- Next.js 16 (standard App Router, built with the Next.js CLI)
- TypeScript and Tailwind CSS

The website currently has no database, API integration, authentication,
contact-form backend, or required environment variables. Contact actions use
email, telephone and map links.

## Requirements

- Node.js 22.13.0 or later
- npm

## Local setup

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

This runs the standard `next build`. Both routes prerender as fully static
content, so the site can be hosted anywhere that serves a Next.js app
(Vercel, Node, or any static/edge host).

## Recommended deployment

Push this repository to Git and import it into Vercel — it auto-detects
Next.js and builds with no extra configuration. Then attach
`www.denhamandgrey.com` as a custom domain in the Vercel project settings.
Test on the generated preview/production URL before changing live DNS.

## Main editing locations

- `app/page.tsx` — all page content and section structure
- `app/globals.css` — visual design, responsive layouts and animations
- `app/layout.tsx` — metadata and fonts
- `public/` — images, favicon and leadership portraits

## Brand palette

- Forest: `#0C3528`
- Evergreen: `#17493B`
- Ivory: `#F4F0E6`
- Deep ivory: `#EAE4D7`
- Brass: `#B89A5D`
- Clay: `#B96F4A`
- Olive: `#879074`
- Ink: `#10251E`
- Paper: `#FBF8F1`

See the package-level `docs/IT-HANDOVER-GUIDE.md` and
`docs/LAUNCH-CHECKLIST.md` before deployment.
