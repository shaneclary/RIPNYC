# VERSE — RIP NYC Monuments

> Quiet acknowledgments of what ended—and what remains.

A production website selling limited apparel pieces as quiet monuments—reverent, sorrowful acknowledgments that something beloved is no longer; and yet something remains: **we remain**.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Backend:** Supabase (from mothership)
- **Fonts:** UnifrakturCook (titles), Inter (body), League Gothic (Lennon detail)
- **Deployment:** Vercel

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your configuration
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)**

## Project Structure

```
/app
  /monuments/[slug]/page.tsx  → Dynamic monument detail pages
  /meaning/page.tsx           → Lennon story & project meaning
  layout.tsx                  → Root layout with fonts & navigation
  page.tsx                    → Home page
/components
  Badge.tsx                   → Small pill badges
  MonumentCard.tsx            → Product card component
  VerseHeader.tsx             → Site header with navigation
  VerseFooter.tsx             → Site footer with legal
  PricingTable.tsx            → Interactive pricing calculator
  BuyCta.tsx                  → Buy button (links/Shopify modes)
/data
  monuments.json              → Six monument products
  lines.json                  → Standard & USA production lines
  meaning.md                  → Lennon story markdown
/lib
  config.ts                   → Environment config
  pricing.ts                  → Pricing utilities
  seo.ts                      → SEO metadata helpers
  utils.ts                    → Tailwind merge utility
/public/images                → Product mockups
```

## Commerce Configuration

### Buy Mode: Links (Default)

External product URLs open in new tabs. Set `NEXT_PUBLIC_BUY_MODE=links` in `.env.local`.

Update product URLs in `/data/monuments.json` → `href` field.

### Buy Mode: Shopify

Embed Shopify Buy Button on detail pages. Set `NEXT_PUBLIC_BUY_MODE=shopify` and configure:
- `NEXT_PUBLIC_SHOPIFY_DOMAIN`
- `NEXT_PUBLIC_SHOPIFY_BUY_BUTTON_ID`

## Editing Content

### Update Products

Edit `/data/monuments.json`:
- Add/remove monuments
- Update titles, narratives, images
- Adjust markup percentages
- Change origin disclosures

### Update Production Lines

Edit `/data/lines.json`:
- Modify line names, descriptions
- Adjust wholesale examples

### Update Meaning Page

Edit `/data/meaning.md`:
- Markdown with basic formatting support
- Headings, lists, bold, blockquotes

## Image Specs

- **Format:** PNG with transparency preferred
- **Size:** ≥ 3000px longest side
- **Naming:** Use kebab-case (e.g., `ripnyc-old-english.png`)
- **Location:** `/public/images/`

## FTC Labeling Reminders

- **"Made in USA":** Only if all/virtually all components & processes are domestic
- **"Printed in USA":** If only printing is domestic, add "on imported blank"
- **Verify per SKU** before publishing
- Include origin disclosures in product detail pages

## Typography

- **Titles:** UnifrakturCook (Gothic blackletter)
- **Body/UI:** Inter (sans-serif)
- **Lennon detail only:** League Gothic (condensed sans)

Font loading via `next/font` with display swap for performance.

## Accessibility

- Semantic HTML with ARIA landmarks
- Focus-visible outlines (2px white)
- Skip link for keyboard navigation
- Reduced motion support
- WCAG AA compliant

## Performance

- Lighthouse scores target: ≥ 90 across all categories
- Image optimization via Next.js `<Image />`
- Static generation for monument detail pages
- Font subsetting & display swap

## Deployment

### Vercel (Recommended)

1. **Push to GitHub**
2. **Import project in Vercel**
3. **Add environment variables** from `.env.local.example`
4. **Deploy**

No special build config needed—Next.js defaults work out of the box.

## Analytics

Add your analytics script to `NEXT_PUBLIC_ANALYTICS_SCRIPT` in `.env.local`.

Default: no tracking.

## License

Proprietary. All rights reserved.

---

**© 2025 VERSE — A timestamp in cloth.**

Country-of-origin reflects supplier listings. Verify per SKU before publishing.
