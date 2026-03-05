# ARCHITECTURE.md — Technical Design

## Tech Stack Decision

### Framework: Astro
**Why Astro over alternatives:**
- **Zero JS by default** — ships pure HTML/CSS, critical for fast loading on Indian 4G/3G
- **Built for content sites** — exactly our use case (multi-page, content-heavy, no app logic)
- **Component reuse** — layouts, header, footer, product cards shared across 6 pages
- **Static output** — pre-rendered HTML files, deploy anywhere, perfect SEO
- **Simple mental model** — `.astro` files are basically HTML with superpowers

**Rejected alternatives:**
| Option | Why Not |
|--------|---------|
| Plain HTML | 6 pages = too much duplication (header, footer, nav repeated everywhere) |
| Next.js | Overkill — ships React runtime, we have zero interactivity needs |
| React SPA | Terrible SEO, slow first load, needs hydration |
| WordPress | Server dependency, maintenance overhead, security surface |

### Styling: Tailwind CSS
- Utility-first = fast to build, consistent spacing/colors
- Purged in production = tiny CSS bundle
- Responsive utilities (`md:`, `lg:`) make mobile-first trivial
- Astro has first-class Tailwind integration

### Form Handling: Web3Forms
- Free tier (unlimited submissions)
- No backend, no server — just a POST to their API
- Sends submissions directly to company email
- Works with plain HTML forms (no JS required)
- Alternative: Formspree (same concept, also free tier)

### Hosting: Netlify
- Free tier is more than enough for this traffic level
- Auto-deploys from GitHub push
- Global CDN = fast from India
- Free SSL certificate
- Launch on `*.netlify.app` subdomain (custom domain can be added later if needed)

---

## Project Structure

```
suraj/
├── DESIGN.md                    # Business requirements
├── ARCHITECTURE.md              # This file
├── PLAN.md                      # Implementation steps (next)
│
├── astro.config.mjs             # Astro configuration
├── tailwind.config.mjs          # Tailwind configuration
├── package.json
├── tsconfig.json
│
├── public/                      # Static assets (copied as-is)
│   ├── favicon.ico
│   ├── og-image.jpg             # Social sharing image
│   └── images/
│       ├── products/            # Product placeholder images
│       ├── factory/             # Factory/manufacturing images
│       ├── clients/             # Client logo placeholders
│       └── team/                # Leadership photos
│
├── src/
│   ├── data/
│   │   └── siteData.ts          # ⭐ Single content file — all text, images, config
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro     # HTML shell, head, nav, footer, WhatsApp button
│   │
│   ├── components/
│   │   ├── Navbar.astro         # Responsive navigation with mobile hamburger
│   │   ├── Footer.astro         # Company info, quick links, contact details
│   │   ├── WhatsAppButton.astro # Floating WhatsApp CTA (all pages)
│   │   ├── HeroSection.astro    # Reusable hero banner
│   │   ├── StatsBar.astro       # Company stats (years, products, clients)
│   │   ├── ProductCard.astro    # Individual product display
│   │   ├── CategoryCard.astro   # Product category preview (home page)
│   │   ├── ClientLogo.astro     # Logo grid item
│   │   ├── TestimonialCard.astro# Client testimonial
│   │   ├── ContactForm.astro    # Quote request form (Web3Forms)
│   │   ├── CertificationBadge.astro # Quality cert display
│   │   └── SectionHeading.astro # Consistent section titles
│   │
│   ├── pages/
│   │   ├── index.astro          # Home
│   │   ├── about.astro          # About Us
│   │   ├── products.astro       # Products
│   │   ├── manufacturing.astro  # Manufacturing & Infrastructure
│   │   ├── clients.astro        # Our Clients
│   │   ├── contact.astro        # Contact Us (handles ?product= and ?success=)
│   │   └── 404.astro            # Custom 404 — links back to home + contact
│   │
│   └── styles/
│       └── global.css           # Tailwind directives + any custom CSS
│
└── .gitignore
```

---

## Data Architecture

### Single Content File: `src/data/siteData.ts`

All website content lives in one typed TypeScript file. The owner (or anyone) can update text, swap images, and change contact info without touching any component code.

```typescript
// src/data/siteData.ts

export const company = {
  name: "Suraj Fan Industries",
  tagline: "Precision Plastic Parts & Table Fans — Trusted by India's Top Brands",
  phone: "+91-XXXXX-XXXXX",
  email: "info@surajfanindustries.com",
  whatsapp: "91XXXXXXXXXX",          // WhatsApp number (no + or spaces)
  address: {
    line1: "Plot No. XX, Industrial Area",
    line2: "City, State — XXXXXX",
    mapEmbedUrl: "https://maps.google.com/...",
  },
  established: 1995,
  stats: {
    yearsInBusiness: 30,
    productsManufactured: "50,000+",
    clientsServed: "100+",
    monthlyCapacity: "25,000 units",
  },
};

export const products = {
  categories: [
    {
      id: "plastic-parts",
      name: "Plastic Parts for Fans",
      description: "High-quality injection-molded components...",
      image: "/images/products/plastic-parts-hero.jpg",
      items: [
        { name: "Fan Blades", specs: "ABS plastic, 3/5 blade options", image: "..." },
        { name: "Motor Housing", specs: "Heat-resistant PP compound", image: "..." },
        // ...
      ],
    },
    {
      id: "table-fans",
      name: "Table Fans",
      description: "Complete assembled table fans...",
      // ...
    },
    {
      id: "oem",
      name: "Custom OEM Manufacturing",
      description: "End-to-end custom manufacturing...",
      // ...
    },
  ],
};

export const clients = {
  logos: [
    { name: "Brand A", image: "/images/clients/brand-a.png" },
    // ...
  ],
  testimonials: [
    { quote: "...", author: "...", company: "...", designation: "..." },
  ],
};

// ... about, manufacturing, certifications, navigation, SEO metadata
```

**Why a single file:**
- Non-technical person can find and edit any content in one place
- TypeScript gives autocomplete and catches typos
- No database, no CMS, no API calls
- Content changes = edit file → push → auto-deploys

---

## Component Architecture

### Layout Hierarchy

```
BaseLayout.astro
├── <head> (SEO meta, fonts, global CSS)
├── Navbar.astro
├── <main> (page-specific content via <slot />)
├── Footer.astro
└── WhatsAppButton.astro (fixed position, always visible)
```

### Component Data Flow

```
siteData.ts ──→ Page (.astro) ──→ Components (via props)
```

- Pages import from `siteData.ts`
- Pages pass data to components as Astro props
- **No state management, no client-side JS, no reactivity needed**
- Everything renders at build time to static HTML

### Key Components

| Component | Used On | Props |
|-----------|---------|-------|
| `Navbar` | All (via layout) | `currentPage` for active highlight |
| `Footer` | All (via layout) | None (reads from siteData) |
| `WhatsAppButton` | All (via layout) | None (reads whatsapp number from siteData) |
| `HeroSection` | Home, About, Manufacturing | `title`, `subtitle`, `backgroundImage`, `ctaText`, `ctaLink` |
| `StatsBar` | Home | None (reads stats from siteData) |
| `ProductCard` | Products | `product` object |
| `CategoryCard` | Home | `category` object |
| `ContactForm` | Contact | `prefilledProduct?` (from URL query param) |
| `ClientLogo` | Clients, Home | `logo` object |

---

## Page Breakdown

### 1. Home (`index.astro`)
```
HeroSection → StatsBar → CategoryCard×3 → WhyChooseUs (static) → CTA Banner
```

### 2. About (`about.astro`)
```
HeroSection → Company Story → Mission/Vision → Leadership → CertificationBadge×N
```

### 3. Products (`products.astro`)
```
HeroSection → Category Tabs/Sections → ProductCard×N per category → Enquire CTA
```
- "Enquire Now" on each product links to `/contact?product={productId}`
- Contact page reads query param and pre-fills the product interest field

### 4. Manufacturing (`manufacturing.astro`)
```
HeroSection → Factory Overview → Machinery List → Capacity Stats → QC Process
```

### 5. Clients (`clients.astro`)
```
HeroSection → ClientLogo Grid → TestimonialCard×N → Partnership CTA
```

### 6. Contact (`contact.astro`)
```
HeroSection → ContactForm + Contact Info (side by side) → Map Embed
```
- Reads `?product=` query param to pre-fill product interest dropdown
- Reads `?success=true` to show thank-you message instead of form

---

## External Integrations

### Web3Forms (Contact Form)
```html
<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />
  <input type="hidden" name="subject" value="New Quote Request from Website" />
  <input type="hidden" name="redirect" value="https://yoursite.com/contact?success=true" />
  <!-- Honeypot spam protection — hidden from real users, bots fill it -->
  <input type="checkbox" name="botcheck" class="hidden" style="display:none" />
  <!-- form fields with HTML5 validation -->
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <input type="tel" name="phone" required />
  <!-- ... -->
</form>
```
- Pure HTML form, zero JS
- **Spam protection:** honeypot `botcheck` field (Web3Forms native support)
- **Validation:** HTML5 `required`, `type="email"`, `type="tel"` — no JS needed
- **Success state:** redirect to `/contact?success=true`, page detects query param and shows thank-you message
- Free tier: unlimited submissions
- Sends email to configured address
- Setup: register at web3forms.com → get access key → paste in siteData

### WhatsApp Button
```
https://wa.me/{whatsappNumber}?text={encodedDefaultMessage}
```
- Opens WhatsApp with pre-filled message
- Works on both mobile (opens app) and desktop (opens WhatsApp Web)
- Default message: "Hi, I'm interested in your products. Please share more details."

### Google Maps Embed
```html
<iframe src="{mapEmbedUrl}" width="100%" height="300" loading="lazy"></iframe>
```
- Free, no API key needed for basic embeds
- `loading="lazy"` — doesn't block initial page load

---

## Visual Design System

### Color Palette
```
Primary:    #1E40AF (industrial blue — trust, professionalism)
Secondary:  #F59E0B (amber/gold — manufacturing, energy)
Neutral:    #1F2937 (dark gray text)
Background: #FFFFFF (white) / #F9FAFB (light gray sections)
Accent:     #059669 (green — for WhatsApp button, success states)
```

**Rationale:** Blue conveys trust and reliability (critical for B2B). Amber adds warmth and energy associated with manufacturing. Green is universally associated with WhatsApp in India.

### Typography
```
Headings: Inter (clean, modern, professional — Google Fonts, free)
Body:     Inter (same family for consistency, excellent readability)
```
- Single font family = one network request = faster loading
- Inter has excellent support for numbers (important for stats/specs)

### Responsive Breakpoints (Tailwind defaults)
```
Mobile:  < 640px   (primary target — Indian mobile users)
Tablet:  640-1024px
Desktop: > 1024px
```

### Image Strategy
- **Placeholder images:** Use quality stock photos from Unsplash/Pexels (free, commercial use)
- **Format:** WebP with JPEG fallback (Astro handles this with `<Image>` component)
- **Lazy loading:** All images below fold use `loading="lazy"`
- **Sizes:** Generate responsive sizes at build time (Astro image optimization)
- **Size limits:** All source images < 200KB, max 1600px wide (hero: 1920×800)
- **Always use `<Image>` component** from `astro:assets` — never raw `<img>` for content images

---

## SEO Strategy

### Per-Page Meta
Each page in `siteData.ts` defines:
```typescript
export const seoMeta = {
  home: {
    title: "Suraj Fan Industries — Plastic Fan Parts & Table Fan Manufacturer",
    description: "Leading manufacturer of plastic fan components and table fans. OEM supplier to India's top brands. ISO certified. Request a quote today.",
  },
  products: {
    title: "Products — Fan Blades, Motor Housings, Table Fans | Suraj Fan Industries",
    description: "Browse our range of injection-molded plastic fan parts...",
  },
  // ... per page
};
```

### Technical SEO
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`)
- Proper heading hierarchy (single `<h1>` per page)
- `<meta>` descriptions on all pages
- Open Graph tags for social sharing
- `robots.txt` and `sitemap.xml` (Astro generates these)
- Structured data (Organization schema) for Google Knowledge Panel

### Analytics
- **Google Analytics 4** (or Plausible if privacy-first preferred)
- Single async `<script>` tag in `BaseLayout.astro` `<head>`
- Tracks: page views, form submissions (via redirect to success page), WhatsApp button clicks (outbound link)
- No impact on performance budget — loads async, non-blocking

---

## Performance Budget

| Metric | Target | How |
|--------|--------|-----|
| First Contentful Paint | < 1.5s on 4G | Zero JS, static HTML, CDN |
| Largest Contentful Paint | < 2.5s on 4G | Optimized hero images, preload |
| Total Page Weight | < 500KB | Purged Tailwind, compressed images, no JS |
| Time to Interactive | < 2s on 4G | No hydration, no client-side framework |
| Lighthouse Score | > 90 | All of the above |

---

## Deployment Pipeline

```
Developer edits code
       ↓
Git push to GitHub (main branch)
       ↓
Netlify detects push → runs `astro build`
       ↓
Static HTML/CSS/images deployed to global CDN
       ↓
Site live at *.netlify.app (custom domain optional later)
```

### Launch Setup
1. Connect GitHub repo to Netlify
2. Site goes live at `suraj-fan-industries.netlify.app` (or similar)
3. SSL included automatically
4. Custom domain can be added later by pointing DNS to Netlify

---

## Technical Decisions Summary

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | Astro | Zero-JS, static, built for content sites |
| Styling | Tailwind CSS | Fast dev, tiny output, responsive utilities |
| Language | TypeScript | Type safety for data file, catches errors |
| Forms | Web3Forms | Free, no backend, email delivery |
| Chat | WhatsApp link | Standard for Indian B2B, zero integration |
| Maps | Google Maps embed | Free, familiar, no API key |
| Images | Astro Image + WebP | Auto-optimization, responsive sizes |
| Hosting | Netlify free tier | CDN, auto-deploy, SSL, *.netlify.app subdomain |
| Fonts | Inter (Google Fonts) | Professional, single request, great numbers |
| SEO | Astro sitemap + meta | Built-in sitemap, per-page meta from data |

---

## Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Web3Forms goes down | Forms stop working | WhatsApp is backup contact; can switch to Formspree in minutes |
| Slow images on 3G | Bad first impression | WebP, lazy loading, blur placeholders, responsive sizes |
| Owner can't update content | Stale website | Developer maintains siteData.ts; owner provides content via any channel |
| Google doesn't index | No search visibility | Sitemap, structured data, submit to Google Search Console manually |
