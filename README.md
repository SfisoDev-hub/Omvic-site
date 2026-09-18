# [COMPANY NAME] — Website

A React + TypeScript + Tailwind CSS website for a South African construction and property maintenance company.

## Getting started

```bash
npm install
npm run dev       # local development, http://localhost:5173
npm run build     # production build, output in /dist
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  data/                     ← all editable content lives here
    siteConfig.ts           ← company name, contact details, nav links, socials
    images.ts                ← every image URL used on the site, in one place
    services.ts               ← the 16 services + 3 categories (Services section)
    featuredServices.ts       ← the 7 large highlighted services (Featured section)
    projects.ts                ← portfolio/gallery items + categories

  components/
    layout/                 ← Navbar, Footer, WhatsAppButton
    sections/                ← one component per page section (Hero, About, Services,
                                 FeaturedServices, WhyChooseUs, Process, Projects, CTA, Contact)
    ui/                        ← reusable pieces: Button, SectionHeading, ServiceCard, ProjectCard

  hooks/
    useServiceRequest.tsx    ← lets a "Request a Quote" click on any service pre-fill
                                 the Service field on the contact form
```

## Where to put your real information

Everything that needs your actual company details is a placeholder in **one file**:

### 1. Company details, contact info, socials — `src/data/siteConfig.ts`
Replace:
- `[COMPANY NAME]`
- `[OWNER NAME]`
- `[PHONE NUMBER]` (appears twice — display text and `tel:` link)
- `[WHATSAPP NUMBER]` (appears twice — display text and the `wa.me/` link; use the
  international format with no `+` or spaces, e.g. `27821234567`)
- `[EMAIL ADDRESS]` (appears twice)
- `[COMPANY ADDRESS]`
- `social.facebook` / `social.instagram` / `social.linkedin` (currently `#`)

### 2. Images — `src/data/images.ts`
All photography is currently placeholder stock photography from Unsplash, clearly
labelled as such. Replace each URL with your own photos — either:
- host them in `public/images/...` and point to `/images/your-photo.jpg`, or
- use your own CDN/asset URLs.

The file is grouped by where each image appears (`hero`, `about`, `featured.*`,
`projects.*`, `cta`) so you can swap them one at a time without touching any
component code.

### 3. Projects / portfolio — `src/data/projects.ts`
Each entry has a `title`, `category`, `location` (currently `[Project Location]`)
and an `image` reference. Add real completed projects here as they're finished —
the gallery and category filter will pick them up automatically.

### 4. Page title & meta description — `index.html`
Also contains `[COMPANY NAME]` in the `<title>` and meta tags for SEO/social sharing.

## Content notes

- No years of experience, project counts, certifications, registrations
  (CIDB, B-BBEE, etc.) or client names have been included or implied anywhere
  on the site, since none were supplied. Add these only once you can confirm
  them, ideally in `src/data/siteConfig.ts` and the `About` / `WhyChooseUs`
  sections.
- The contact form (`src/components/sections/Contact.tsx`) currently validates
  and displays a success message on submit, but is **not wired to a backend**.
  Connect it to your form handler of choice (e.g. an API route, Formspree, or
  a serverless function) inside the `handleSubmit` function — the spot is
  marked with a `NOTE:` comment.

## Design system

- **Colours**: charcoal (`#17181A`) and sand/off-white as the base, with a gold
  accent (`#C4862E`) — defined in `tailwind.config.js`.
- **Type**: "Big Shoulders Display" for headings (an industrial, steel-beam
  feel), "Inter" for body text — loaded via Google Fonts in `index.html`.
- Sharp, single-corner-cut panels (`.cut-corner` / `.cut-corner-sm` in
  `src/index.css`) are used instead of rounded cards, to keep the industrial,
  blueprint-adjacent tone rather than a generic "SaaS" look.
