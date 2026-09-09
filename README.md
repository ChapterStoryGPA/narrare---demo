# NARRĀRE

*Stories to remember.*

The personal archive of Gilang Prasetyo Adjie — built with Next.js (App Router),
React, TypeScript, Tailwind CSS, and a lightweight React Three Fiber ambient
particle field in the hero.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx        Root layout — fonts, metadata, header/footer shell
  page.tsx           Home
  about/page.tsx      About
  project/page.tsx     Project archive
  contact/page.tsx    Contact
  globals.css        Base styles + a few small custom utilities

components/          All UI pieces, one responsibility each
  Header.tsx          Fixed nav, scroll-aware background, mobile menu
  Footer.tsx
  Hero.tsx / HeroParticles.tsx   Homepage hero + R3F particle field
  Shelf.tsx           Interactive "shelf" of project volumes (home)
  ArchiveList.tsx      Filterable, expandable project archive (/project)
  AboutNav.tsx         Scroll-spy side nav (/about)
  ContactChannels.tsx   Contact links with inline icons
  SectionHead.tsx, DisciplineList.tsx, EditorialList.tsx, NetworkList.tsx

lib/
  site-config.ts      *** Edit this first *** — name, tagline, email, phone,
                       social links, ARTICLE_URL, PRODUCT_URL, nav structure
  projects.ts         Project archive data — add/edit/remove entries here.
                       Each project can later grow a `caseStudy` array
                       without changing the data shape.
  content.ts          Journal previews, workshop previews, discipline list,
                       and the eight About-page entries.

public/images/        logo.png, profile.jpg — replace these two files
                       directly to update the mark and portrait everywhere.
```

## Editing your content

1. **Personal info & links** — `lib/site-config.ts`. This is the single
   source of truth for email, phone, social URLs, the external Article and
   Product destinations, and the primary nav. Two values are intentionally
   left as placeholders and should be replaced before launch:
   - `articleUrl` → your WordPress or Medium URL
   - `social.discord` → your Discord invite/URL
2. **Projects** — `lib/projects.ts`. All entries are sample/placeholder
   copy with no invented results, clients, or credentials. Replace freely;
   the first six projects automatically populate the homepage shelf.
3. **About page copy** — `lib/content.ts` → `aboutEntries`.
4. **Journal / Workshop previews** — `lib/content.ts` → `journal`,
   `workshop`.
5. **Logo & photo** — replace `public/images/logo.png` and
   `public/images/profile.jpg` with your own files of the same name (any
   aspect ratio works; the layout crops the portrait to 4:5).

## Design system

Colors, and the display/body font pairing (Cormorant Garamond + EB
Garamond, loaded via `next/font/google`) are defined in
`tailwind.config.ts` and `app/layout.tsx`. Reduced-motion preferences are
respected globally, including in the R3F particle field.

## Build

```bash
npm run build
npm run start
```

## Deploying

This is a standard Next.js app — deploy to Vercel, Netlify, or any Node
host. No environment variables are required.
