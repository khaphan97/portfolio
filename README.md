# Phan Huy Kha — Portfolio

Personal portfolio site. A single-page, minimal design with light and dark
themes (dark by default, switchable from the nav) built with Next.js 15 (App
Router), TypeScript, and Tailwind CSS v4.

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

## Checks

```bash
npm run lint    # ESLint (eslint-config-next)
npm run build   # Type-check + production build
```

## Editing content

### Theme

Colors are semantic CSS variables defined in [`app/globals.css`](app/globals.css):
the dark values live in `@theme`, and `:root[data-theme="light"]` overrides them.
`components/ThemeToggle.tsx` flips the `data-theme` attribute on `<html>` and
persists the choice in `localStorage`; a small inline script in
[`app/layout.tsx`](app/layout.tsx) applies the saved theme before paint to avoid
a flash. To add a color, add a `--color-*` token for both themes and use the
matching Tailwind utility.

All copy lives in one place — [`lib/data.ts`](lib/data.ts). Update the
`profile`, `stats`, `experience`, `projects`, and `skills` objects there and
the page updates automatically. No component changes needed for routine content
edits.

### Résumé

The "Résumé" nav button downloads [`public/PhanHuyKha-CV.pdf`](public/PhanHuyKha-CV.pdf)
(via the `download` attribute in `components/Nav.tsx`). The PDF is generated
from the source [`public/cv.html`](public/cv.html). After editing the HTML,
regenerate the PDF with headless Chrome:

```bash
chrome --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="public/PhanHuyKha-CV.pdf" \
  "file:///ABSOLUTE/PATH/TO/public/cv.html"
```

The HTML uses `@page` (A4) margins for print and an `@media screen` block for
comfortable on-screen viewing, so the PDF output stays clean regardless.

## Project structure

```
app/
  layout.tsx      # Metadata, fonts, root layout
  page.tsx        # Assembles all sections + footer
  globals.css     # Tailwind + theme tokens (colors, fonts)
components/        # Nav, Hero, About, Experience, Projects, Skills, Contact, icons
  ThemeToggle.tsx  # Light/dark theme switch
lib/data.ts       # Single source of truth for all content
public/cv.html    # Downloadable résumé
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no configuration required. Deploy.

Alternatively: `npx vercel` from this directory.
