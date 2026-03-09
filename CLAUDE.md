# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static single-page resume/portfolio site for Ayman AlShehri. No build tooling, no frameworks, no dependencies — just HTML, CSS, and vanilla JS.

## Local Development

```bash
# Open directly in browser
open index.html

# Or serve locally (avoids file:// quirks)
npx serve .
# or
python -m http.server
```

## Architecture

Everything lives in three files:

- **`index.html`** — The entire single-page site. All content is hardcoded here. Sections (in order): Nav, Hero, About, Experience, Skills, Projects, Education, Contact, Footer.
- **`style.css`** — All styles. Uses CSS custom properties defined in `:root` for the color palette and spacing tokens. Mobile-first with breakpoints at 640px (tablet) and 768px (desktop).
- **`script.js`** — Two behaviors only: hamburger menu toggle (ARIA-managed) and IntersectionObserver-based active nav link highlighting.
- **`Ayman AlShehri Resume SA (1).pdf`** — Downloadable CV linked from the hero section.

## Design Tokens (`:root` in style.css)

- Primary background: `--color-navy` (`#0f172a`)
- Accent: `--color-teal` (`#0d9488`)
- Max content width: `--max-w` (`900px`)
- Font: Inter via Google Fonts

## Setup Required

The contact form at `index.html:420` uses Formspree and has a placeholder that must be replaced before the form works:

```html
<form class="contact__form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
