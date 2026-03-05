# DESIGN.md — What We're Building

## Problem
A medium-scale Indian manufacturer of plastic fan parts and table fans supplies to top brands but has zero online presence. When potential B2B buyers or partners search for the company, they find nothing — undermining credibility in an industry where even a basic website signals legitimacy and professionalism.

## Goal
A professional website that:
1. Establishes the company as a credible, established manufacturer
2. Showcases the full product range (plastic parts, table fans, custom OEM)
3. Makes it easy for interested buyers to enquire or request a quote
4. Works great on mobile (majority of Indian web traffic)

## Target Users

### Primary: B2B Procurement / Sourcing Manager
- Evaluating potential suppliers
- Wants to see: product range, manufacturing capability, existing clients, quality certifications
- Needs: easy way to request a quote with specific product + quantity

### Secondary: Existing Client
- Wants to share company info with their team
- Needs: quick access to product specs and contact details

### Tertiary: General Visitor
- Found the company via word of mouth or search
- Wants to understand what the company does and how to reach them

## What the Website Must Have

### Pages

1. **Home**
   - Clear statement of what the company does
   - Key company stats (years in business, products made, clients served)
   - Preview of product categories
   - Reasons to choose this company
   - Call-to-action to request a quote

2. **About Us**
   - Company story and history
   - Mission and vision
   - Leadership / founder information
   - Quality certifications (ISO, BIS, etc.)

3. **Products**
   - Three categories:
     - **Plastic Parts for Fans** — blades, motor housings, guards, base components
     - **Table Fans** — complete assembled fans with model details
     - **Custom OEM Manufacturing** — capabilities, materials, minimum order info
   - Each product: image, name, brief specs
   - "Enquire Now" on each product → links to /contact?product={id} with form pre-filled

4. **Manufacturing & Infrastructure**
   - Factory overview and location
   - Key machinery and equipment
   - Production capacity figures
   - Quality control process

5. **Our Clients**
   - Logo grid of companies supplied to
   - Optional client testimonials
   - Trust statement about B2B partnerships

6. **Contact Us**
   - Quote request form with fields: name, email, phone, company, product interest, quantity, message
   - WhatsApp chat button (very common and trusted in India for business enquiries)
   - Company address with map
   - Direct phone and email

### Features

- **Quote Request Form** — sends enquiry to company email (no backend needed, use a free form service)
  - Honeypot spam protection (hidden field that bots fill, humans don't)
  - HTML5 validation: required fields, email/phone type checks — no JS needed
  - Clear success state after submission ("Thank you, we'll respond within 24 hours")
- **WhatsApp Button** — floating button visible on all pages, opens WhatsApp chat with the company number
- **Mobile Responsive** — must work well on phones; this is non-negotiable for Indian audience
- **Fast Loading** — visitors on slower connections should still get a usable page quickly
- **SEO Basics** — proper page titles, descriptions, so the company shows up in Google searches
- **Analytics** — lightweight analytics (Plausible or Google Analytics) to measure traffic, form usage, and search visibility from day one

### Content Strategy
- Launch with **placeholder content** (stock images, sample text)
- Designed so real photos, product details, and client logos can be swapped in easily
- All content managed in a single data file — maintained by the developer (not the business owner)
- English only (standard for B2B manufacturing in India)

### Image Guidelines
- All images must be **< 200KB** each before adding to the project
- Use Astro's `<Image>` component (not raw `<img>`) for automatic WebP conversion and responsive sizes
- Factory/product photos from phone cameras must be resized to max **1600px wide** before committing
- Hero/banner images: max **1920×800px**

## What This Is NOT
- Not an e-commerce store — no cart, no payments, no order tracking
- Not a consumer-facing site — targeted at businesses
- Not a content platform — no blog, no news section (can add later)
- Not multilingual — English only for MVP

## Success Criteria
- [ ] All 6 pages load correctly on desktop and mobile
- [ ] A visitor can request a quote and it reaches the company email
- [ ] A visitor can start a WhatsApp conversation with one tap
- [ ] The site looks professional and builds confidence in the company
- [ ] Pages load fast (< 3 seconds on 4G)
- [ ] Company appears in Google search results within weeks of launch
- [ ] Analytics tracking is live and recording page views

## Future Possibilities (Not Now)
- Hindi language support
- Individual product detail pages
- Blog / news section
- PDF product catalogue download
- Video testimonials from clients
