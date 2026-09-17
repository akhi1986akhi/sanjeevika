# Mamta Theme — Tailwind v4 Design System

Extracted from your `INDEX.HTML` (Sanjeevika Mother & Child Care) reference page.

## Theme name

**Mamta** (मम्ता — maternal love/warmth) is the recommendation: short, meaningful for a
mother-and-child clinic, and matches the warm rose + teal palette. Other options if you
want alternatives: **Snigdha** ("tender"), **Komal** ("gentle"), **Sanjeevani Bloom**,
**RoseTeal Care**.

## File structure

```
app/
  globals.css        <- imports everything, this is what you import in layout.tsx
styles/
  theme.css           <- @theme tokens: colors, fonts, radius, shadows (theme vitals)
  typography.css       <- heading/body/eyebrow text classes
  buttons.css           <- btn-primary / btn-secondary / btn-nav-cta / btn-call-row
  forms.css               <- inputs, textarea, select, checkbox, radio, form-card
```

Copy the `styles/` folder and `app/globals.css` into your Next.js project (adjust the
relative `@import` paths in `globals.css` if your `app/` and `styles/` folders sit
differently than shown above).

## 1. Install Tailwind v4

```bash
npm install tailwindcss @tailwindcss/postcss
```

`postcss.config.mjs`:
```js
export default {
  plugins: { "@tailwindcss/postcss": {} },
};
```

## 2. Import in your root layout

`app/layout.tsx`:
```tsx
import "./globals.css";
```

That's it — Tailwind v4 is CSS-first, so there's no `tailwind.config.js` needed. Every
token in `theme.css` (e.g. `--color-rose`) automatically becomes real utilities:
`bg-rose`, `text-rose`, `border-rose`, `rounded-pill`, `shadow-card`, `font-display`, etc.

## 3. Fonts — use `next/font/google` instead of the `<link>` tags

The reference page loads fonts via a Google Fonts `<link>`. In Next.js, load them with
`next/font` instead (faster, self-hosted, no layout shift), then feed the CSS variables
into the same token names used in `theme.css`.

`app/layout.tsx`:
```tsx
import { Fraunces, Inter, Noto_Serif_Devanagari, Noto_Sans_Devanagari } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});
const notoSerifDeva = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  weight: ["500", "600", "700"],
  variable: "--font-hi-serif",
});
const notoSansDeva = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hi-sans",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="hi"
      className={`${fraunces.variable} ${inter.variable} ${notoSerifDeva.variable} ${notoSansDeva.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
```

Because `theme.css` already defines `--font-display`, `--font-sans`, `--font-hi-serif`,
and `--font-hi-sans` with the same names `next/font` writes to, the values just override
in place — no other file needs to change.

## 4. Usage examples

```tsx
// Hero heading
<h1 className="heading-hero">
  Care for <span className="accent">mother</span> and child, at every stage.
</h1>

// Buttons
<a href="tel:+919453022762" className="btn-primary">📞 Call 94530 22762</a>
<a href="#contact" className="btn-secondary">Get Directions</a>

// A card using raw utilities generated from theme.css tokens
<div className="bg-paper border border-line rounded-2xl shadow-card p-8">...</div>

// A form field
<div className="field-group">
  <label className="field-label" htmlFor="name">Full name</label>
  <input id="name" className="field-input" placeholder="Your name" />
</div>
```

## Notes

- `--color-line` is intentionally translucent (`rgb(42 22 32 / 12%)`) — matches the
  reference page's hairline borders on cream/paper backgrounds.
- `forms.css` is new (the reference page had no forms); it follows the same rose/teal,
  soft-radius, colored-shadow language as the rest of the page so a contact form will
  look native to the design.
- All shadows are brand-tinted (rose/teal/ink), not generic grey — keep that pattern if
  you add more components.