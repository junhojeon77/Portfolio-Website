# Personal Portfolio Website

The personal site of Jun Ho Jeon — a freelance full-stack developer in Toronto.
Built with the Next.js App Router and React Bootstrap.

## Features

- **ASCII portrait with hover-repel physics** — a `<canvas>` renders a portrait as
  ASCII characters that scatter away from the cursor and spring back home. The
  animation loop idles when the characters settle, and reduced-motion users get the
  static art.
- **Light and dark themes** — a toggle in the header, persisted to `localStorage`,
  falling back to the OS preference. Applied before first paint, so there's no flash.
- **Responsive projects section** — a carousel of featured work on desktop, a single
  column of cards on mobile, both driven by one `Projects.json`.
- Scroll-triggered fade-ins, typed hero heading, and `next/image` optimization.

## Tech

- **Framework**: Next.js 16 (App Router) + React 19
- **UI**: React Bootstrap 5, custom CSS variables for theming
- **Animation**: Canvas 2D + `requestAnimationFrame`, React Typed
- **Icons**: React Icons
- **Analytics**: Vercel Analytics

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Structure

```
app/            layout, page, global CSS (theme variables live here)
components/     one file per section, plus Projects.json as the content source
components/hooks/  FadeInSection, useIsMobile
public/         images (WebP) and resume PDF
```

## 🧾 License

This project is licensed under the [MIT License](./LICENSE)

© 2025 Jun ho Jeon. All rights reserved.
