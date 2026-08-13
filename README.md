# TarkovHacks.net

Production website for **Escape From Tarkov** cheat content — ESP, aimbot, loot ESP, extraction tracking, and related guides.

**Live domain:** [https://tarkovhacks.net/](https://tarkovhacks.net/)

## Stack

- React 18 + TypeScript
- Vite 6
- React Router 7
- Lenis smooth scroll
- Cloudflare Workers SPA deploy (`wrangler.jsonc`)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Build generates `public/sitemap.xml`, copies assets to `dist/`, and pings IndexNow.

## Pages

- `/` — Homepage with features, FAQ, videos, SEO content
- `/blog` — Blog index
- `/blog/:slug` — Long-form articles
- `/privacy` — Privacy policy

## SEO

- Canonical domain: `https://tarkovhacks.net/`
- Sitemap: `https://tarkovhacks.net/sitemap.xml`
- Robots: `https://tarkovhacks.net/robots.txt`
