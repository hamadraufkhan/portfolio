# Hamad Khan — Backend & System Design Portfolio

Jackson-style personal portfolio built with **Vite + React + TypeScript + Tailwind CSS + Framer Motion**.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Customize your data

**All content lives in one file:**

```
src/data/profile.ts
```

Edit name, role, bio, skills, experience, projects, blog posts, contact info, and more. Replace placeholder images with your own URLs or local assets in `public/`.

## Sections

1. **Hero** — Full-screen slider with CTAs
2. **About** — Bio + capability highlights + hire CTA
3. **Services** — 6 expertise cards
4. **Stats** — Animated counters
5. **Skills** — Progress bars
6. **Education** — Accordion list
7. **Experience** — Vertical timeline
8. **Portfolio** — Filterable project grid
9. **Blog** — Recent articles
10. **Contact** — Info + form

## Layout

- Fixed **300px left sidebar** (desktop) with profile, nav, and footer
- **Scroll-spy** highlights active section in navigation
- **Mobile** off-canvas sidebar with hamburger toggle

## Stack

- React 18 + TypeScript
- Tailwind CSS 3.4
- Framer Motion (hero slider)
- Lucide React (icons)
- Google Fonts: Playfair Display + Quicksand

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
