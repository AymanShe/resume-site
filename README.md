# Ayman AlShehri — Personal Resume Site

A personal portfolio and resume website for Ayman AlShehri, Backend Developer and Technical Team Leader. Built with plain HTML, CSS, and vanilla JavaScript — no frameworks, no build step.

## Sections

- **Hero** — Name, title, and CTA buttons (contact + CV download)
- **About** — Bio and highlight stats (experience, mentoring, certifications)
- **Experience** — Chronological work history with a vertical timeline
- **Skills** — Technical and leadership skills in a two-column layout
- **Projects** — Notable projects with tech tags
- **Education & Certifications** — Degree, CKAD, PMI-ACP, and online courses
- **Contact** — Links (email, LinkedIn, GitHub, phone) and a contact form

## Tech Stack

| Layer | Detail |
|-------|--------|
| Markup | HTML5, semantic elements |
| Styling | CSS custom properties, Grid, Flexbox, mobile-first |
| Scripting | Vanilla JS — hamburger menu, IntersectionObserver active-nav highlight |
| Font | Inter via Google Fonts |
| Form backend | [Formspree](https://formspree.io) (requires form ID in `index.html`) |

## File Structure

```
resume-site/
├── index.html                        # Single-page site
├── style.css                         # All styles
├── script.js                         # Mobile nav + scroll highlighting
└── Ayman AlShehri Resume SA (1).pdf  # Downloadable CV
```

## Local Development

No build tooling required. Just open `index.html` in a browser:

```bash
# Option 1 — direct file open
open index.html

# Option 2 — local server (avoids any file:// quirks)
npx serve .
# or
python -m http.server
```

## Setup Notes

**Contact form:** Replace `YOUR_FORM_ID` in `index.html` (line 420) with your actual Formspree form ID:

```html
<form class="contact__form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## Design

- **Color scheme:** Dark navy (`#0f172a`) background with teal (`#0d9488`) accent
- **Max content width:** 900px
- **Responsive breakpoints:** 640px (tablet), 768px (desktop)
