# PLAN.md — Implementation Plan

## Phase 1: Project Scaffolding

### Step 1.1: Initialize Astro project
- [ ] Run `npm create astro@latest` with empty template
- [ ] Install dependencies: `@astrojs/tailwind`, `@astrojs/sitemap`
- [ ] **Files:** `package.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`
- [ ] **Verify:** `npm run dev` starts without errors

### Step 1.2: Configure Tailwind
- [ ] Create `tailwind.config.mjs` with custom colors (primary #1E40AF, secondary #F59E0B, accent #059669), Inter font
- [ ] Create `src/styles/global.css` with Tailwind directives and Inter import from Google Fonts
- [ ] **Files:** `tailwind.config.mjs`, `src/styles/global.css`
- [ ] **Verify:** Tailwind classes render correctly in browser

### Step 1.3: Create placeholder image directories
- [ ] Create `public/images/products/`, `public/images/factory/`, `public/images/clients/`, `public/images/team/`
- [ ] Add placeholder images (use solid color SVGs or download free stock photos < 200KB each)
- [ ] Add `public/favicon.ico`
- [ ] **Files:** `public/` directory tree
- [ ] **Verify:** Images accessible at `/images/*` paths

---

## Phase 2: Data Layer

### Step 2.1: Create siteData.ts
- [ ] Define and export all typed data objects: `company`, `products`, `clients`, `about`, `manufacturing`, `certifications`, `navigation`, `seoMeta`
- [ ] Use placeholder text and image paths matching the public/ structure
- [ ] Include Web3Forms access key placeholder, WhatsApp number, map embed URL
- [ ] **Files:** `src/data/siteData.ts` — create
- [ ] **Verify:** File imports without TypeScript errors

---

## Phase 3: Layout & Shared Components

### Step 3.1: BaseLayout
- [ ] HTML shell with `<head>` (charset, viewport, SEO meta via props, Inter font preload, global.css, OG tags)
- [ ] Props: `title`, `description`, `ogImage?`
- [ ] Body: `<Navbar />` → `<main><slot /></main>` → `<Footer />` → `<WhatsAppButton />`
- [ ] Analytics script tag (GA4 placeholder, async)
- [ ] **Files:** `src/layouts/BaseLayout.astro` — create
- [ ] **Verify:** Empty page renders with correct `<head>`, no layout shift

### Step 3.2: Navbar
- [ ] Desktop: logo/company name left, nav links right (Home, About, Products, Manufacturing, Clients, Contact)
- [ ] Mobile: hamburger menu (CSS-only or minimal JS toggle)
- [ ] `currentPage` prop for active link highlight
- [ ] Sticky top, white background, subtle shadow on scroll
- [ ] **Files:** `src/components/Navbar.astro` — create
- [ ] **Verify:** Navigation works on mobile and desktop, active page highlighted

### Step 3.3: Footer
- [ ] Three columns: company info + address, quick links (all 6 pages), contact details (phone, email, WhatsApp)
- [ ] Copyright line with dynamic year
- [ ] Reads data from `siteData.ts`
- [ ] **Files:** `src/components/Footer.astro` — create
- [ ] **Verify:** Footer renders on all pages with correct links

### Step 3.4: WhatsApp floating button
- [ ] Fixed bottom-right position, green (#25D366), WhatsApp icon (inline SVG)
- [ ] Links to `https://wa.me/{number}?text={encoded message}`
- [ ] Visible on all pages, doesn't overlap content on mobile
- [ ] **Files:** `src/components/WhatsAppButton.astro` — create
- [ ] **Verify:** Button visible, opens WhatsApp on click

### Step 3.5: Reusable UI components
- [ ] `SectionHeading.astro` — consistent section titles with optional subtitle, centered
- [ ] `HeroSection.astro` — props: `title`, `subtitle`, `backgroundImage`, `ctaText?`, `ctaLink?`. Full-width banner with overlay text
- [ ] `StatsBar.astro` — horizontal row of 4 stats from `siteData.company.stats`
- [ ] **Files:** `src/components/SectionHeading.astro`, `HeroSection.astro`, `StatsBar.astro` — create
- [ ] **Verify:** Components render with placeholder data

---

## Phase 4: Pages (build in order, each verifiable)

### Step 4.1: Home page
- [ ] `HeroSection` with main tagline + "Request a Quote" CTA → `/contact`
- [ ] `StatsBar` — years, products, clients, capacity
- [ ] Product categories section — 3x `CategoryCard` (plastic parts, table fans, OEM) linking to `/products`
- [ ] "Why Choose Us" section — 4 reasons with icons (experience, quality, capacity, custom)
- [ ] CTA banner — "Ready to Partner?" with button to `/contact`
- [ ] **Files:** `src/pages/index.astro`, `src/components/CategoryCard.astro` — create
- [ ] **Verify:** Page loads, all sections visible, links work, mobile layout correct

### Step 4.2: About page
- [ ] Hero section
- [ ] Company story — founding year, growth, current position (2-3 paragraphs)
- [ ] Mission & Vision — side by side cards
- [ ] Leadership — founder photo + bio
- [ ] Certifications — `CertificationBadge` components (ISO, BIS placeholders)
- [ ] **Files:** `src/pages/about.astro`, `src/components/CertificationBadge.astro` — create
- [ ] **Verify:** Page loads, all sections render, certification badges display

### Step 4.3: Products page
- [ ] Hero section
- [ ] Three category sections, each with heading + description + grid of `ProductCard`s
- [ ] Each `ProductCard`: image, name, brief specs, "Enquire Now" button → `/contact?product={id}`
- [ ] **Files:** `src/pages/products.astro`, `src/components/ProductCard.astro` — create
- [ ] **Verify:** Products display in categories, "Enquire Now" links include correct product param

### Step 4.4: Manufacturing page
- [ ] Hero section
- [ ] Factory overview with image + description
- [ ] Machinery & equipment list (icon + name + description grid)
- [ ] Production capacity stats (reuse `StatsBar` pattern or custom layout)
- [ ] Quality control process — numbered steps
- [ ] **Files:** `src/pages/manufacturing.astro` — create
- [ ] **Verify:** Page loads, all sections render, images display

### Step 4.5: Clients page
- [ ] Hero section
- [ ] Logo grid — `ClientLogo` components in responsive grid (3 cols mobile, 5 cols desktop)
- [ ] Testimonials — `TestimonialCard` components (quote, author, company, designation)
- [ ] Partnership CTA — "Become a Partner" → `/contact`
- [ ] **Files:** `src/pages/clients.astro`, `src/components/ClientLogo.astro`, `src/components/TestimonialCard.astro` — create
- [ ] **Verify:** Logos display in grid, testimonials render, CTA links to contact

### Step 4.6: Contact page
- [ ] Hero section
- [ ] Two-column layout: `ContactForm` left, contact info right (phone, email, WhatsApp, address)
- [ ] `ContactForm`: Web3Forms POST, honeypot field, HTML5 validation, fields: name, email, phone, company, product interest (dropdown from siteData categories), quantity, message
- [ ] Read `?product=` query param → pre-select product interest dropdown
- [ ] Read `?success=true` → show thank-you message instead of form
- [ ] Google Maps iframe embed below form section
- [ ] **Files:** `src/pages/contact.astro`, `src/components/ContactForm.astro` — create
- [ ] **Verify:** Form submits to Web3Forms, honeypot present, pre-fill works from product links, success state shows

### Step 4.7: 404 page
- [ ] Simple "Page Not Found" with links to Home and Contact
- [ ] Uses BaseLayout
- [ ] **Files:** `src/pages/404.astro` — create
- [ ] **Verify:** Navigating to invalid URL shows 404 page

---

## Phase 5: SEO & Meta

### Step 5.1: Per-page SEO
- [ ] Add `seoMeta` to `siteData.ts` with title + description for all 6 pages
- [ ] `BaseLayout` reads and renders `<title>`, `<meta name="description">`, OG tags
- [ ] **Files:** Update `src/data/siteData.ts`, update `src/layouts/BaseLayout.astro`
- [ ] **Verify:** Each page has unique title and meta description in view-source

### Step 5.2: Sitemap & robots.txt
- [ ] Enable `@astrojs/sitemap` in `astro.config.mjs` with site URL
- [ ] Add `public/robots.txt` allowing all crawlers, pointing to sitemap
- [ ] **Files:** Update `astro.config.mjs`, create `public/robots.txt`
- [ ] **Verify:** `/sitemap-index.xml` generated at build, `robots.txt` accessible

### Step 5.3: Structured data
- [ ] Add Organization JSON-LD schema in `BaseLayout.astro` `<head>` (company name, logo, contact info)
- [ ] **Files:** Update `src/layouts/BaseLayout.astro`
- [ ] **Verify:** Google Rich Results Test validates the markup

---

## Phase 6: Polish & Performance

### Step 6.1: Mobile responsiveness pass
- [ ] Test all 6 pages at 375px, 640px, 1024px widths
- [ ] Fix any layout breaks, text overflow, touch target sizes
- [ ] Ensure navbar hamburger works correctly
- [ ] **Verify:** All pages usable on mobile Chrome DevTools

### Step 6.2: Performance optimization
- [ ] Preload Inter font in `<head>` with `font-display: swap`
- [ ] Verify all images use Astro `<Image>` (not raw `<img>`) for WebP + responsive sizes
- [ ] Confirm `loading="lazy"` on below-fold images and map iframe
- [ ] **Verify:** Lighthouse score > 90 on all pages

### Step 6.3: Final review
- [ ] All internal links work (no broken links)
- [ ] Contact form submits successfully (test with real Web3Forms key)
- [ ] WhatsApp button opens chat correctly
- [ ] All placeholder content is coherent and professional-looking
- [ ] **Verify:** Manual walkthrough of all pages on desktop + mobile

---

## Dependency Order

```
Phase 1 (scaffold) → Phase 2 (data) → Phase 3 (layout/components) → Phase 4 (pages) → Phase 5 (SEO) → Phase 6 (polish)
```

Within Phase 4, pages can be built in any order since they all depend on Phase 3 components. The recommended order (4.1→4.7) builds from simplest to most complex, with Contact last since it has the most interactive behavior.

---

## Estimated File Count

| Type | Count |
|------|-------|
| Config files | 4 (`package.json`, `astro.config.mjs`, `tailwind.config.mjs`, `tsconfig.json`) |
| Data | 1 (`siteData.ts`) |
| Layout | 1 (`BaseLayout.astro`) |
| Components | 12 |
| Pages | 7 (6 + 404) |
| Styles | 1 (`global.css`) |
| Static | ~15-20 placeholder images + favicon + robots.txt |
| **Total source files** | **~26** |
