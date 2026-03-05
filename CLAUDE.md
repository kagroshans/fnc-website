# Freedom Note Capital — Website Project

## Project Overview
Single-page marketing website for Freedom Note Capital (FNC), a mortgage note investing company. This is a static HTML/CSS/JS site hosted on GitHub Pages. The goal is a clean, professional front door for the business — not a blog, not a pitch deck. Simple now, expandable later.

## Tech Stack
- Plain HTML, CSS, vanilla JS only
- No frameworks, no build tools, no npm
- Single `index.html` to start; multi-page expansion by adding new HTML files later
- Shared `css/styles.css` across all future pages
- Hosted on GitHub Pages (public repo)

## File Structure
```
fnc-website/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    ├── logo-rectangle.png     (horizontal logo, transparent background)
    ├── logo-square.png        (square/icon logo, transparent background)
    └── favicon.ico
```

## Brand Identity

### Colors
| Role | Name | Hex |
|------|------|-----|
| Primary | Navy | `#001F3E` |
| Accent | Gold | `#FFC354` |
| Background | White | `#FFFFFF` |
| Text | Near-black | `#1A1A1A` |
| Muted text | Gray | `#6B7280` |
| Light section bg | Off-white | `#F8F7F4` |

### Typography
- **Headings:** Playfair Display (Google Fonts) — serif, authoritative, pairs well with the logo's existing serif style
- **Body:** Source Sans 3 (Google Fonts) — clean, readable, professional
- Never use: Inter, Roboto, Arial, system-ui as primary fonts

### Logo
- Use `logo-rectangle.png` in the navbar and footer
- Use `logo-square.png` as favicon and any square contexts
- Logo has transparent background — works on white and navy surfaces
- Primary brand colors: Navy `#001F3E` text, Gold `#FFC354` frame/accents

### Design Principles
- Navy-dominant: navy backgrounds for hero and footer, white/off-white for content sections
- Gold as accent only: CTAs, highlights, hover states, dividers
- Generous whitespace — this is a finance brand, not a retail site
- No stock photography needed — typography and color carry the design
- Mobile-first responsive layout

## Site Structure — index.html

### 1. Navbar (sticky)
- Logo left, anchor nav links right
- Links: What We Do | Get Involved | Newsletter
- Collapses to hamburger on mobile
- Navy background, gold logo accent, white text

### 2. Hero Section
- Navy background, white text
- Headline: "We Buy and Sell Mortgage Notes"
- Subheadline: "Freedom Note Capital acquires performing residential mortgage notes — and we help others buy, sell, and invest in them too."
- Two CTA buttons side by side:
  - "I Have a Note to Sell" → scrolls to #get-involved
  - "I Want to Invest" → scrolls to #get-involved
- Primary button: gold fill, navy text
- Secondary button: white outline

### 3. What We Do Section
- White background
- Section heading: "What We Do"
- Gold underline accent beneath heading
- Three short paragraphs:
  1. FNC acquires performing mortgage notes — real estate loans already in place, secured by single-family homes. We collect the monthly payments, not the property.
  2. We hold notes as long-term cash flow assets. Our portfolio generates consistent monthly income backed by real estate collateral.
  3. We also sell notes and partials to other investors, and work with private lenders who want secured, fixed returns. There are multiple ways to participate.

### 4. Get Involved Section — 4 Cards
- Off-white (`#F8F7F4`) background
- Section heading: "Get Involved"
- Grid of 4 cards, 2x2 on desktop, stacked on mobile
- Each card: icon (simple SVG or Unicode), title, short description, expand/collapse toggle, expanded explanation, CTA link

#### Card 1: Sell Your Note
- Icon: 📄 or house icon
- Short: "You hold a mortgage note and want liquidity. We make it simple and straightforward."
- Expanded (150-200 words): Explain that note holders are often heirs, retiring sellers, or investors who originated seller financing and now want a lump sum. FNC purchases performing notes secured by single-family residential properties. We handle due diligence, closing, and funding. No realtors, no banks, no hassle. We evaluate your note based on payment history, property value, and remaining balance — and make a fair cash offer.
- CTA: "Get a Quote" → `mailto:info@freedomnotecapital.com?subject=Inquiry: Sell My Note`

#### Card 2: Buy a Note
- Icon: 💰 or yield icon
- Short: "Earn passive income secured by real estate. We sell performing notes and partials to qualified investors."
- Expanded: Explain that buying a mortgage note means becoming the lender — you receive monthly principal and interest payments from a borrower who is already paying. Notes are secured by a deed of trust or mortgage on real property. FNC sells performing notes from our portfolio to investors seeking yield. Typical returns of 9-12% annually. All notes have payment history, title, and full documentation.
- CTA: "Inquire About Available Notes" → `mailto:info@freedomnotecapital.com?subject=Inquiry: Buy a Note`

#### Card 3: Buy a Partial
- Icon: ✂️ or split icon
- Short: "Want a defined investment horizon? Purchase a specific stream of payments from an existing note."
- Expanded: Explain that a partial is a portion of a note's payment stream. Example: you purchase the next 60 payments on a 20-year note. You receive those 60 monthly payments, then the note reverts back to FNC. This gives investors a shorter, defined investment window with a predictable return — without waiting for a 15 or 30-year note to mature. Secured by the same real estate collateral as the full note.
- CTA: "Learn More About Partials" → `mailto:info@freedomnotecapital.com?subject=Inquiry: Buy a Partial`

#### Card 4: Hypothecate / Lend to Us
- Icon: 🤝 or handshake icon
- Short: "Accredited investors can earn fixed returns secured by our note collateral."
- Expanded: Explain hypothecation — FNC borrows against notes in our portfolio to deploy capital faster. Private lenders (accredited investors) provide capital at a negotiated fixed rate, secured by our performing note collateral. This is not equity — it is a secured private loan. FNC pays interest on the borrowed amount; you receive consistent fixed payments. A simple, documented arrangement between our LLC and qualified investors.
- CTA: "Connect With Us" → `mailto:info@freedomnotecapital.com?subject=Inquiry: Hypothecation`

#### Card expand/collapse behavior
- Cards collapsed by default — show only icon, title, short description, and a "Learn More ▾" toggle
- Click expands to show full explanation + CTA button
- Smooth CSS transition, no JS library needed
- Only one card can be expanded at a time (optional UX improvement)

### 5. Newsletter Section
- Navy background, white text
- Heading: "Quarterly Note Investing Insights"
- Subtext: "Join our list for quarterly deal analysis, market observations, and portfolio updates. No spam — just signal."
- GHL form embed placeholder:

```html
<!-- ============================================
     GHL NEWSLETTER FORM EMBED
     Replace this comment block with your
     GoHighLevel form embed code.
     In GHL: Sites → Forms → [your form] → Share/Embed
     ============================================ -->
<div class="ghl-form-placeholder">
  <p style="color: #FFC354; text-align: center;">[Newsletter signup form loads here]</p>
</div>
```

### 6. Footer
- Navy background
- Logo (rectangle, left)
- Entity: Freedom Note Capital LLC
- Email: info@freedomnotecapital.com
- Copyright: © 2025 Freedom Note Capital LLC. All rights reserved.
- Disclaimer (small, muted): "Freedom Note Capital LLC is not a registered investment advisor. Nothing on this site constitutes investment advice. All investments involve risk. Nothing on this site is an offer to sell or solicitation to buy securities."

## Coding Standards
- Use CSS custom properties (variables) for all colors and fonts
- Mobile-first: base styles for mobile, `@media (min-width: 768px)` for desktop
- Smooth scroll behavior: `scroll-behavior: smooth` on html element
- Navbar: `position: sticky; top: 0; z-index: 100`
- No external JS libraries — vanilla JS only for accordion and mobile nav
- Keep JS minimal: accordion toggle and mobile hamburger menu only
- All images use `alt` text
- Valid, semantic HTML5 (header, nav, main, section, footer)

## Deployment
- Host on GitHub Pages (public repo)
- Custom domain via GitHub Pages settings + DNS update
- No build step — push HTML/CSS/JS directly to `main` branch

## Future Expansion Notes
When adding new pages:
- Create new `.html` files in root (e.g., `about.html`, `portfolio.html`)
- Link shared `css/styles.css` from each page
- Update navbar links accordingly
- Keep consistent header/footer by duplicating the HTML blocks (or refactor to JS includes later)
