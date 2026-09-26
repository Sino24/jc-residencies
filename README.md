# JC Residencies

A static property showcase and booking-enquiry website. No backend, no
payment gateway — booking enquiries go out through WhatsApp or email.

## Stack
React + TypeScript + Vite + React Router + React Hook Form + Lucide icons.

## Getting started
```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Editing content
Everything the site says lives in `src/data/`:
- `property.ts` — hero copy, about/story text, "why choose us", policies, SEO
- `rooms.ts` — the four room types, pricing, amenities, images
- `services.ts` — the services/amenities grid
- `gallery.ts` — gallery photos and categories (add a `layout: "wide" | "tall"`
  on any entry to pin its shape; otherwise the grid auto-varies tile sizes
  for visual rhythm)
- `contact.ts` — phone, WhatsApp number, email, address, hours, nearby places
- `images.ts` — the central image registry, importing real photos from
  `src/assets/` (optimized to web-sized JPEGs)
- `navigation.ts` — the main nav links

No component code needs to change for normal content edits.

## Recent changes
- Removed the image-banner page header from every inner page in favor of a
  plain title (`PageIntro`) — the navbar is now always solid/fixed rather
  than transparent-over-a-banner
- Fixed several button/badge/skip-link contrast bugs left over from the
  black-and-white theme conversion (a few spots still referenced the old
  brass/pine palette, making text invisible)
- Wired up real frosted-glass (backdrop-filter) on the navbar, the hero
  quick-enquiry bar, and the mobile menu panel — previously the glass
  tokens existed but weren't actually applied anywhere, or were used over
  flat backgrounds with nothing to blur
- Gallery grid now auto-assigns a wide/tall rhythm so uniform photos still
  read as a designed layout, not a plain row-and-column grid
- Converted all gallery photos from unoptimized PNG (37 MB total) to
  compressed JPEG (~3 MB total) — same visual quality, much faster to load
- Fixed a couple of TypeScript errors in `gallery.ts` (an undefined
  "Bathrooms" category, a reference to an image that doesn't exist)

## Before going live
- [x] Real photos are wired in (`src/assets/`, optimized JPEGs)
- [ ] Replace placeholder details in `src/data/contact.ts` (phone, WhatsApp
      number, email, address, map query) with the real ones
- [ ] Add a real Open Graph image and update `og:image` in `index.html`
- [ ] Double check `src/data/property.ts` copy reads correctly end to end

## Deploying
This is a static site — the included `vercel.json` handles SPA routing
(all paths rewrite to `index.html`). Push to GitHub and import the repo
in Vercel, or run `vercel` from this folder.
