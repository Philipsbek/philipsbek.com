# Philips Bek — Portfolio

A six-page personal portfolio for **Philips Bek** — Web Developer & AI Tools Enthusiast.
Built with [Astro](https://astro.build): fast, static HTML, component-based, and easy to update.

## Pages
Home · About · Services · Portfolio · AI & Automation · Contact (+ a custom 404).

## Run it

```bash
npm install      # first time only
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to /dist
npm run preview  # preview the production build
npm run check    # type / diagnostics check
```

## Where the content lives

**Almost all text and data is in one file: [`src/data/site.js`](src/data/site.js).**
Edit that file to update your name, intro, experience, education, services,
projects, socials, and contact details — every page stays in sync automatically.

### Things to replace (marked as placeholders)
| What | Where |
| --- | --- |
| GitHub & LinkedIn URLs | `socials` in `src/data/site.js` (set `ready: true`) |
| Real project write-ups, screenshots & live links | `projects` in `src/data/site.js` + images in `public/projects/` |
| Résumé PDF for the download button | add `public/philips-bek-resume.pdf` |
| Certifications (none listed yet) | `certifications` in `src/data/site.js` |
| Spoken languages | `languages` in `src/data/site.js` |
| Production domain (for SEO/OG/sitemap) | `site` in `astro.config.mjs` |

## Notes
- The contact form has **no server backend**. It validates on the client and
  opens the visitor's email app with the message pre-filled — nothing is sent
  silently. To collect submissions automatically, connect a form service
  (e.g. Formspree, Web3Forms) in `src/pages/contact.astro`.
- Project thumbnails are tasteful generated placeholders — no external images
  needed until you add real screenshots.

## Structure
```
src/
  data/site.js          ← all editable content
  layouts/BaseLayout.astro   ← <head>, SEO, header/footer, shared scripts
  components/            ← Header, Footer, Icon, ProjectCard, ServiceCard, …
  pages/                ← one file per page (+ 404.astro)
  styles/global.css     ← design system (colors, type, spacing)
public/                 ← favicon, OG image, robots.txt, project images
```

## Design system
- **Palette:** warm paper white, near-black ink, a single terracotta accent, deep navy for dark surfaces.
- **Type:** Space Grotesk (headings) + Inter (body), via Google Fonts.
- Responsive, keyboard-accessible, respects `prefers-reduced-motion`.
