# Critical Lenses in Literary Studies

A survey of sixteen schools of literary criticism grouped into three families, with guiding questions, a timeline, a thesis template, and an MLA Works Cited.

Built with [Slidev](https://sli.dev) and the `seriph` theme, plus custom components (`components/`), a custom `hero` layout (`layouts/`), and an academic style layer (`style.css`).

## Run locally

```bash
npm install
npm run dev        # http://localhost:3030 (press P for presenter view with narration notes)
npm run build      # static site in dist/
npm run export     # PDF (needs: npx playwright install chromium)
npm run export:png # one PNG per click state
```

## Deploy to Vercel

Push this folder to a GitHub repository and import it in Vercel, or run `npx vercel`.
`vercel.json` sets the build command (`npm run build`), output directory (`dist`), and the SPA rewrite Slidev needs.
`style.css` includes `#slidev-goto-dialog { display: none !important; }` so the go-to dialog never appears in renders.

## Narrated video with deck2video

Narration is written in each slide's speaker notes (`<!-- ... -->`). Slides with step-by-step reveals use
`[click]` markers so each narration segment is paired with its animation step, as
[deck2video](https://github.com/pjdoland/deck2video) expects.

```bash
npm install -g @slidev/cli playwright-chromium && npx playwright install chromium
deck2video slides.md --format slidev
```

## Images

All photographs and artworks are public-domain works hosted on Wikimedia Commons and are credited on the slides
and in the Works Cited. They load from Commons at view time. To bundle them with the deck instead:

```bash
npm run localize   # downloads to public/images/ and rewrites slides.md
```

Maps, diagrams, timelines, and icons are original SVG components in `components/`.
