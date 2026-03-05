# UI.md — Visual Design & Frontend Specification

## Aesthetic Direction: "Machined Precision"

**Concept:** The website feels like it was engineered, not just designed. Inspired by technical drawings, factory signage, and the confidence of heavy industry — but executed with modern web polish. Every element communicates: *"We build things that work."*

**Tone:** Industrial-confident. Not sterile corporate, not flashy startup. The visual equivalent of a firm handshake in a well-organized factory.

**Differentiator:** Where most Indian manufacturing sites look like WordPress templates from 2015, this one feels like a premium engineering firm's portfolio. The precision of the layout *is* the brand message.

---

## Typography

### Primary Display: **Archivo Black**
- Google Fonts, free
- Condensed, bold, industrial feel — reads like stamped metal lettering
- Used for: H1 hero titles, stat numbers, section headings
- All-caps for hero headlines with generous `letter-spacing: 0.05em`

### Secondary Heading: **DM Sans**
- Google Fonts, free
- Clean geometric sans-serif with excellent weight range (400–700)
- Used for: H2/H3 subheadings, card titles, nav links, button text
- Crisp at small sizes, professional at large sizes

### Body: **Source Sans 3**
- Google Fonts, free
- Designed for readability on screen, excellent for longer text blocks
- Used for: paragraphs, form labels, descriptions, footer text
- Regular (400) for body, Semibold (600) for emphasis

### Monospace Accent: **JetBrains Mono** (sparingly)
- Used only for: stat numbers, capacity figures, spec data
- Reinforces the "precision engineering" motif
- Tabular numbers for aligned stat displays

**Loading Strategy:** Two font requests max. Archivo Black + DM Sans as primary bundle. Source Sans 3 as secondary (body text renders fine with system fallback during load). JetBrains Mono loaded only on pages with stat displays.

```css
/* Font scale — mobile-first */
--text-xs:    0.75rem;   /* 12px - captions, fine print */
--text-sm:    0.875rem;  /* 14px - labels, meta */
--text-base:  1rem;      /* 16px - body text */
--text-lg:    1.125rem;  /* 18px - lead paragraphs */
--text-xl:    1.25rem;   /* 20px - card titles */
--text-2xl:   1.5rem;    /* 24px - section subheads */
--text-3xl:   1.875rem;  /* 30px - section heads */
--text-4xl:   2.25rem;   /* 36px - page titles */
--text-5xl:   3rem;      /* 48px - hero headlines (desktop) */
--text-6xl:   3.75rem;   /* 60px - hero stat numbers (desktop) */
```

---

## Color System

### Core Palette

```css
/* Primary — Industrial Blue */
--blue-900:  #1E3A5F;   /* Deepest — footer bg, heavy accents */
--blue-800:  #1E40AF;   /* Primary brand — buttons, links, headings */
--blue-700:  #2563EB;   /* Hover states */
--blue-100:  #DBEAFE;   /* Light tint — card backgrounds, highlights */
--blue-50:   #EFF6FF;   /* Whisper — alternating section backgrounds */

/* Secondary — Forge Amber */
--amber-600: #D97706;   /* Deep amber — accent borders, icons */
--amber-500: #F59E0B;   /* Primary accent — stat highlights, CTAs */
--amber-400: #FBBF24;   /* Hover on amber elements */
--amber-100: #FEF3C7;   /* Light tint — badge backgrounds */
--amber-50:  #FFFBEB;   /* Whisper — warm section variant */

/* Neutrals — Steel */
--steel-950: #0A0F1A;   /* Near-black — hero overlay text */
--steel-900: #111827;   /* Primary text */
--steel-700: #374151;   /* Secondary text */
--steel-500: #6B7280;   /* Muted text, placeholders */
--steel-300: #D1D5DB;   /* Borders, dividers */
--steel-200: #E5E7EB;   /* Card borders, subtle lines */
--steel-100: #F3F4F6;   /* Alternating section bg */
--steel-50:  #F9FAFB;   /* Page background variant */

/* Functional */
--green-600: #059669;   /* WhatsApp, success states */
--green-500: #10B981;   /* WhatsApp hover */
--red-600:   #DC2626;   /* Form errors */
--white:     #FFFFFF;   /* Card backgrounds, primary bg */
```

### Usage Rules
- **Blue-800** is the workhorse — nav, buttons, headings, links
- **Amber-500** is the spark — used sparingly for maximum impact (stat numbers, key CTAs, accent lines)
- **Never** use amber for large surfaces; it's an accent, not a background
- Alternating sections use `white` → `steel-50` → `white` → `blue-50` rhythm
- Dark sections (hero, footer, CTA banners) use `blue-900` with white text

---

## Layout & Spatial System

### Grid
- **Max content width:** 1280px (`max-w-7xl`), centered
- **Padding:** 16px mobile, 24px tablet, 0 desktop (within max-width)
- **Section vertical spacing:** 64px mobile, 96px desktop (`py-16` / `py-24`)
- **Card grid:** 1 col mobile → 2 col tablet → 3 col desktop

### The "Precision Line" Motif
A recurring design element: a short, thick amber line (4px tall, 48px wide) that appears:
- Below section headings (left-aligned, not centered)
- As a left border on blockquotes/testimonials (4px wide, full height)
- As top borders on feature cards (full width, 3px)
- In the hero, as a horizontal rule between tagline and CTA

This creates visual rhythm and reinforces the "machined" aesthetic — like a precise cut mark.

```css
.precision-line {
  width: 48px;
  height: 4px;
  background: var(--amber-500);
  margin-top: 12px;
  margin-bottom: 24px;
}
```

### Section Rhythm
Sections alternate between:
1. **Full-bleed** (colored background edge to edge, content constrained)
2. **Contained** (white background, content constrained)

This creates breathing room and visual variety without complex layouts.

### Asymmetric Hero Layout (Desktop)
- Hero sections use a 60/40 split: text left, image right
- Text block is vertically centered with generous left padding
- Image bleeds to the right edge (no right padding)
- On mobile: stacks to full-width image above, text below

---

## Component Design Language

### Navbar
- **Desktop:** Fixed top, white background with subtle bottom border (`steel-200`), slight blur backdrop
- **Height:** 72px desktop, 64px mobile
- **Logo:** Left-aligned, company name in Archivo Black, amber accent dot after "Industries"
- **Links:** DM Sans medium, `steel-700`, active state: `blue-800` with 2px bottom border
- **CTA Button:** "Get a Quote" — solid `blue-800` background, white text, right-aligned
- **Mobile:** Hamburger menu (3 horizontal lines, not an X until opened), full-screen overlay with centered links
- **Scroll behavior:** Adds subtle drop shadow after 50px scroll

### Hero Sections
- **Home hero:** Full-viewport-height minus navbar. Dark overlay (blue-900 at 85% opacity) over factory/product image. White headline in Archivo Black (all caps). Amber precision line. Subtext in Source Sans 3. Two CTAs: primary solid (amber) + secondary outline (white border).
- **Interior page heroes:** 40vh height. Same dark overlay treatment but more compressed. Breadcrumb trail above headline.
- **Text shadow** on hero text for readability over images: `text-shadow: 0 2px 4px rgba(0,0,0,0.3)`

### Buttons
```
Primary:   bg-blue-800, white text, rounded-lg (8px), px-6 py-3
           Hover: bg-blue-700, subtle lift (translateY -1px + shadow)

Accent:    bg-amber-500, steel-900 text, rounded-lg, px-6 py-3
           Hover: bg-amber-400, same lift effect
           Used sparingly — only for primary CTA in heroes

Outline:   border-2 border-blue-800, blue-800 text, rounded-lg
           Hover: bg-blue-800, text becomes white (fill transition)

Ghost:     No border, blue-800 text, underline on hover
           Used for "Learn more →" style links

All buttons: font-medium (DM Sans), letter-spacing 0.01em
Transition: all 200ms ease
```

### Cards (Product, Category, Feature)
- **White background** with `steel-200` border (1px)
- **No border-radius** on images (sharp corners = precision), subtle radius on card itself (8px)
- **Top amber accent line** (3px) on hover (transition from 0 to 3px, or opacity 0→1)
- **Shadow:** None at rest → `shadow-md` on hover (elevation change)
- **Image:** Top of card, 16:10 aspect ratio, `object-cover`
- **Content:** 24px padding, title in DM Sans semibold, description in Source Sans 3
- **CTA link:** Bottom of card, "Enquire Now →" in blue-800, arrow slides right on hover

### Stats Bar
- **Background:** `blue-900` (dark, high contrast)
- **Layout:** 4 columns on desktop, 2×2 grid on mobile
- **Numbers:** JetBrains Mono, `text-5xl` desktop, `amber-500` color
- **Labels:** Source Sans 3 regular, white, `text-sm`, uppercase, `letter-spacing: 0.1em`
- **Dividers:** 1px vertical line in `blue-700` between stats (desktop only)
- **Animation:** Numbers count up from 0 when section scrolls into view (CSS-only using `@keyframes` + `animation-play-state` triggered by `IntersectionObserver` — minimal JS)

### Testimonial Cards
- **Light amber background** (`amber-50`)
- **Left border:** 4px solid `amber-500` (precision line motif)
- **Quote mark:** Large decorative `"` in `amber-200`, Archivo Black, positioned top-left
- **Quote text:** Source Sans 3 italic, `steel-700`, `text-lg`
- **Attribution:** DM Sans semibold for name, regular for company/title

### Contact Form
- **Two-column layout** on desktop: form left (60%), contact info right (40%)
- **Input fields:** Full-width, `steel-100` background, `steel-300` border, 12px padding
- **Focus state:** Border transitions to `blue-800`, subtle blue glow (`ring-2 ring-blue-100`)
- **Labels:** DM Sans medium, `steel-700`, above field
- **Submit button:** Full-width on mobile, auto-width on desktop, amber accent style
- **Success state:** Green checkmark icon, "Thank you" message in green-600, replaces entire form

### Footer
- **Background:** `blue-900` (matches stats bar — bookending the page in dark blue)
- **Text:** White and `blue-200` for links
- **Layout:** 4-column grid: Company info | Quick Links | Products | Contact
- **Bottom bar:** `blue-950`, copyright text, small text
- **Amber accent:** Thin top border (2px `amber-500`) on the entire footer

### WhatsApp Floating Button
- **Position:** Fixed, bottom-right, 24px from edges
- **Size:** 56px circle (desktop), 48px circle (mobile)
- **Color:** `green-600` background, white WhatsApp icon
- **Shadow:** `shadow-lg` for floating effect
- **Animation:** Subtle pulse every 5 seconds (scale 1 → 1.1 → 1, with shadow expansion)
- **Hover:** Scale to 1.1, deeper shadow
- **Mobile:** Slightly smaller, 16px from edges (thumb-friendly zone)
- **Z-index:** 50 (above everything except modals)

---

## Page-Specific Layouts

### Home Page Flow
```
[Nav - fixed]
[Hero - full viewport, dark overlay, dual CTA]
[Stats Bar - blue-900 bg, 4 animated numbers]
[Product Categories - 3 cards on white bg, section heading with precision line]
[Why Choose Us - alternating image+text rows (zigzag), steel-50 bg]
[Client Logos - logo grid on white, subtle grayscale→color on hover]
[CTA Banner - blue-900 bg, centered text, amber CTA button]
[Footer]
```

### About Page Flow
```
[Nav]
[Hero - 40vh, "Our Story" headline]
[Company Story - text-heavy section, timeline-style with year markers on left border]
[Mission/Vision - two-column cards, blue-50 bg]
[Leadership - photo cards with name/title overlay at bottom]
[Certifications - badge grid, steel-50 bg, cert logos in organized row]
[CTA Banner]
[Footer]
```

### Products Page Flow
```
[Nav]
[Hero - 40vh, "Our Products"]
[Category Navigation - sticky sub-nav below main nav, horizontal scroll on mobile]
[Category Section ×3 - each has: heading, description, product card grid]
  - Cards show: image, name, specs snippet, "Enquire Now →" link
[Custom OEM Section - different layout: full-width with capabilities list]
[CTA Banner - "Need a custom solution? Let's talk."]
[Footer]
```

### Manufacturing Page Flow
```
[Nav]
[Hero - 40vh, factory image]
[Factory Overview - image left, text right, key highlights as icon+text list]
[Machinery & Equipment - card grid, each card: icon, machine name, capability]
[Capacity Stats - stats bar variant, amber-50 bg instead of blue-900]
[Quality Control - step-by-step process (numbered), alternating layout]
[CTA Banner]
[Footer]
```

### Clients Page Flow
```
[Nav]
[Hero - 40vh]
[Logo Grid - 4×3 grid desktop, logos in grayscale, full color on hover]
[Testimonials - 2-column masonry-style layout of testimonial cards]
[Partnership Statement - centered text block, dignified, minimal]
[CTA Banner]
[Footer]
```

### Contact Page Flow
```
[Nav]
[Hero - 30vh, shorter than other pages]
[Form + Info - two column: form left, info sidebar right]
  - Sidebar: phone, email, WhatsApp link, address, business hours
[Map Embed - full-width, 400px height, lazy loaded]
[Footer]
```

---

## Micro-Interactions & Motion

### Principles
- **Purposeful, not decorative** — every animation communicates something
- **CSS-only where possible** — respect the zero-JS architecture
- **Fast** — nothing longer than 300ms for UI responses; 600ms max for entrance animations

### Specific Animations

| Element | Trigger | Animation | Duration |
|---------|---------|-----------|----------|
| Card hover | Mouse enter | Lift (translateY -4px) + shadow increase | 200ms ease |
| Card amber line | Mouse enter | Opacity 0→1, scaleX 0→1 (from left) | 250ms ease-out |
| Button hover | Mouse enter | Slight lift + color shift | 150ms ease |
| Nav link | Active page | 2px bottom border slides in from center | 200ms ease |
| Hero text | Page load | Fade up (translateY 20px→0 + opacity) | 600ms ease-out, staggered 100ms per element |
| Stats numbers | Scroll into view | Count up from 0 (needs minimal JS via IntersectionObserver) | 1500ms ease-out |
| Client logos | Hover | Grayscale→color filter transition | 300ms ease |
| WhatsApp button | Interval (5s) | Gentle pulse (scale + shadow) | 1000ms ease-in-out |
| Section content | Scroll into view | Fade up (translateY 30px→0 + opacity) | 500ms ease-out |
| Mobile menu | Hamburger click | Slide in from right, overlay fade | 300ms ease |

### Scroll-Triggered Entrances
Use `IntersectionObserver` (lightweight, ~10 lines of JS) to add a `.visible` class when sections enter viewport:

```css
.fade-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 500ms ease-out, transform 500ms ease-out;
}
.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}
```

This is the **only client-side JS** on the site (besides analytics). Inline it in BaseLayout.astro — no external script needed.

---

## Responsive Behavior

### Mobile-First Priorities
1. **Touch targets:** All interactive elements minimum 44×44px
2. **Text readability:** Body text never below 16px (prevents iOS zoom)
3. **Thumb zone:** Key CTAs and WhatsApp button in bottom-right thumb zone
4. **Horizontal scroll:** Never. Product categories stack vertically on mobile.
5. **Images:** Full-width on mobile, constrained on desktop

### Breakpoint-Specific Adjustments

| Element | Mobile (<640px) | Tablet (640-1024px) | Desktop (>1024px) |
|---------|-----------------|---------------------|-------------------|
| Hero headline | `text-3xl` | `text-4xl` | `text-5xl` |
| Card grid | 1 column | 2 columns | 3 columns |
| Stats bar | 2×2 grid | 4 columns | 4 columns |
| Form layout | Single column | Single column | 2-column (form + sidebar) |
| Nav | Hamburger menu | Hamburger menu | Full horizontal nav |
| Section padding | `py-12` (48px) | `py-16` (64px) | `py-24` (96px) |
| Footer | Stacked columns | 2×2 grid | 4 columns |

---

## Image Treatment

### Photography Style (for placeholder selection)
- **Factory shots:** Wide-angle, well-lit, showing scale and organization (not messy workshops)
- **Product shots:** Clean white/light background, sharp focus, professional product photography aesthetic
- **Team/leadership:** Professional headshots or candid factory-floor portraits
- **Avoid:** Stock photos that look too Western/generic. Prefer images that feel authentically Indian industrial.

### Image Effects
- **Hero images:** Dark blue overlay (`blue-900` at 80-85% opacity) for text contrast
- **Client logos:** CSS `filter: grayscale(100%)` → `filter: grayscale(0%)` on hover
- **Product images:** Clean, no filters, sharp and true-to-color
- **Leadership photos:** Subtle `object-position: top` to keep faces centered in cropped containers

---

## Accessibility Baseline

- **Color contrast:** All text meets WCAG AA (4.5:1 for body, 3:1 for large text) — verified against palette
- **Focus indicators:** Visible focus ring (blue-800 outline, 2px offset) on all interactive elements
- **Alt text:** Every image gets descriptive alt text from siteData.ts
- **Semantic HTML:** Proper heading hierarchy, landmark regions, form labels
- **Skip link:** Hidden "Skip to main content" link, visible on focus
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` disables all animations
