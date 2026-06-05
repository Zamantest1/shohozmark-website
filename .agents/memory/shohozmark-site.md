---
name: ShohozMark site structure
description: Multi-page React+Vite marketing website — routing, data layer, brand rules, and conventions.
---

## Brand rules (non-negotiable)
- Fonts: Syne 800 for headings (`font-serif font-bold/extrabold`), DM Sans for body. NEVER add new fonts.
- Colors: `--primary: #00C853`, `--background: #0A0A0A`, `--card: #1A1A1A`. NEVER add new color variables.
- Logo imports: `greenLogo` (on dark), `whiteLogo` (navbar/dark), `blackLogo` (light bg), `yellowLogo` (highlights).
  - Paths: `@assets/Green_1780696036870.png`, `@assets/White_1780696036870.png`, `@assets/Black_1780696036868.png`, `@assets/Yellow_1780696036871.png`

## Routing (wouter)
- `/` → Home, `/services` → ServicesPage, `/services/:slug` → ServicePage
- `/portfolio` → Portfolio, `/team` → Team, `/blog` → Blog, `/blog/:slug` → BlogPost
- `*` → NotFound

## Data layer (src/data/)
All data typed as TypeScript interfaces — designed to map 1:1 to future Supabase tables.
- `services.ts` — 7 services, `getServiceBySlug(slug)`
- `team.ts` — 3 team members
- `portfolio.ts` — 4 case studies, `getPortfolioItemBySlug(slug)`, `getFeaturedPortfolioItems()`
- `testimonials.ts` — 5 testimonials, `getFeaturedTestimonials()`
- `blog.ts` — 4 posts, `getBlogPostBySlug(slug)`, `getFeaturedBlogPosts()`

## Utilities
- `src/lib/media.ts` — `getMediaUrl(path, options)` (Cloudinary-ready via `VITE_CLOUDINARY_CLOUD_NAME`), `getAvatarPlaceholder(initials)`, `getPortfolioPlaceholder(label, color)` — returns data URIs
- `src/lib/seo.ts` — `useSEO(options)` hook that sets document.title, meta description, keywords, og tags

## Shared components (src/components/)
- `Navbar.tsx` — Services dropdown (7 items), Portfolio/Team/Blog links, hamburger mobile drawer
- `Footer.tsx` — 4-column layout, wouter Link for all internal nav
- `ConsultationModal.tsx` — shadcn Dialog lead gen form, used as wrapper around trigger elements

## Key patterns
- Section labels: `className="text-primary font-bold tracking-[0.2em] text-xs sm:text-sm uppercase mb-3 sm:mb-4 block"`
- Hero h1 clamp: `clamp(1.6rem, 8.5vw, 5rem)` on homepage; `clamp(1.75rem, 3.5vw, 3rem)` on service/inner pages
- Blog/inner page title clamp: `clamp(1.6rem, 3vw, 2.75rem)` — Syne 800 on long titles needs tight clamp
- Card: `bg-card border border-card-border p-6 sm:p-8 rounded-sm`
- Container: `max-w-7xl mx-auto px-4 sm:px-6`
- Section padding: `py-16 sm:py-24 md:py-32`
- Animation variants: `FADE_UP` (opacity 0→1, y 30→0, 0.6s easeOut) and `STAGGER` (staggerChildren 0.1)

**Why:** Maintaining these patterns keeps all pages visually consistent and avoids Tailwind class collisions.
