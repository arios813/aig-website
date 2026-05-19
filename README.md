# American Investment Group Inc. — Website

Production-ready Next.js website for American Investment Group Inc., a real estate and cattle ranching investment company focused on Asunción, Paraguay.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: Cormorant Garamond (headings) + DM Sans (body) via next/font/google
- **Deploy**: Vercel-ready

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this folder to a GitHub/GitLab repository
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel will auto-detect Next.js — no configuration needed
4. Click **Deploy**

## Project Structure

```
aig-website/
├── app/
│   ├── layout.tsx        # Root layout + SEO metadata + fonts
│   ├── page.tsx          # Main page (assembles all sections)
│   └── globals.css       # Tailwind base + custom styles
├── components/
│   ├── Navbar.tsx        # Fixed nav with scroll-aware background
│   ├── Logo.tsx          # SVG globe logo with silver ring
│   ├── Hero.tsx          # Full-viewport hero with entrance animations
│   ├── OurStory.tsx      # Two-column bios + stats bar
│   ├── Team.tsx          # Team cards with credentials
│   ├── Services.tsx      # 4-column services grid
│   ├── Portfolio.tsx     # 2x2 portfolio cards
│   ├── Testimonials.tsx  # 3 client testimonial cards
│   ├── Contact.tsx       # Lead capture form + contact info
│   └── Footer.tsx        # Footer with links + disclaimer
└── hooks/
    └── useScrollReveal.ts  # Intersection Observer scroll animations
```

## Customization

### Contact Form Backend
The contact form is currently UI-only. To wire up a backend:
- **Option A**: Add a Next.js API route at `app/api/contact/route.ts`
- **Option B**: Use a service like [Resend](https://resend.com), [Formspree](https://formspree.io), or [EmailJS](https://emailjs.com)
- **Option C**: Integrate with a CRM like HubSpot via their Forms API

Replace the simulated delay in `Contact.tsx` `handleSubmit` with a real `fetch('/api/contact', ...)` call.

### Adding Real Photos
Replace the circular avatar initials in `Team.tsx` with `<Image>` components:
```tsx
import Image from 'next/image'
// Replace the initials div with:
<Image src="/team/alcides.jpg" alt="Alcides Rios" width={60} height={60} className="rounded-full object-cover" />
```
Place photos in `/public/team/`.

### Colors & Fonts
Edit `tailwind.config.js` for color tokens and `app/layout.tsx` to swap fonts.

### SEO
Update `app/layout.tsx` → `metadata` object with your real domain once it's live.

---

Built with Next.js 14 · Tailwind CSS · TypeScript

## Internationalization (English / Spanish)

Every visible string lives in one of two typed locale files — editing them is all that's needed to update the site's copy.

### File locations

```
locales/
  en.ts   ← English strings (source of truth — defines the TypeScript type)
  es.ts   ← Spanish strings (must match the shape of en.ts exactly)
contexts/
  LanguageContext.tsx   ← React context, useTranslation() hook, localStorage persistence
```

### How it works

- The **EN / ES** toggle button in the navbar calls `toggleLocale()` from the context.
- The selected language is saved to `localStorage` and restored on the next visit.
- The `<html lang="…">` attribute updates automatically when the locale changes.
- All 9 sections re-render instantly — no page reload, no route change.

### Adding a third language (e.g. Portuguese)

1. Duplicate `locales/es.ts` → `locales/pt.ts`, translate all values.
2. In `contexts/LanguageContext.tsx`:
   - Add `'pt'` to the `Locale` union type.
   - Import and add `pt` to the `locales` map.
3. Update the toggle button in `Navbar.tsx` to cycle through three options (or add a dropdown).

### Updating copy

Open the relevant locale file and change the string value — the TypeScript compiler will warn you if a key is missing or mistyped.
