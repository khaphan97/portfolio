# Phan Huy Kha — Portfolio

Personal portfolio site. A single-page, dark, minimal design built with Next.js 15 (App Router), TypeScript, and Tailwind CSS v4.

## Tech stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Inter + JetBrains Mono (`next/font`)
- **Deployment:** Vercel (recommended)

## Getting started

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:3000)
npm run dev

# Production build
npm run build
npm run start
```

## Editing content

All copy lives in one place — [`lib/data.ts`](lib/data.ts). Update the
`profile`, `stats`, `experience`, `projects`, `skills`, and `education`
objects there and the page updates automatically. No component changes needed
for routine content edits.

The downloadable résumé is served from [`public/cv.html`](public/cv.html) —
replace that file to update the "Résumé" link. Swap in a PDF and update the
`href` in `components/Nav.tsx` if you prefer a PDF résumé.

## Project structure

```
app/
  layout.tsx      # Metadata, fonts, root layout
  page.tsx        # Assembles all sections + footer
  globals.css     # Tailwind + theme tokens (colors, fonts)
components/        # Nav, Hero, About, Experience, Projects, Skills, Contact, icons
lib/data.ts       # Single source of truth for all content
public/cv.html    # Downloadable résumé
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no configuration required. Deploy.

Alternatively: `npx vercel` from this directory.
