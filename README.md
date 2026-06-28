# Apex Technologies — website

Marketing site for Apex Technologies. Built with **Next.js 15 (App Router)** and
**TypeScript**. Cool, minimal design with full **light/dark mode**, a dotted
background, and a floating pill nav. All styling is token-driven via CSS variables.

---

## Prerequisites

- **Node.js 18.18+** (20 LTS recommended)
- npm (bundled with Node)

## Run it locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. Edit any file and it hot-reloads.

```bash
npm run build   # production build
npm run start   # serve the production build locally
```

---

## Where to change things

You rarely need to touch JSX to edit the site:

| I want to change…                         | Edit this file                          |
| ----------------------------------------- | --------------------------------------- |
| Headlines, links, services, footer copy   | `lib/site.ts`                           |
| The console mockup data (rows, stats)     | `lib/site.ts` → `consoleData`           |
| Colours, fonts, spacing, shadows (tokens) | `app/globals.css` (top `:root`/`.dark`) |
| Page composition / section order          | `app/page.tsx`                          |
| A specific section's markup               | `components/*.tsx`                       |

### Project structure

```
app/
  layout.tsx      # <html>, fonts, no-flash theme script, nav + footer + bg
  page.tsx        # homepage = Hero + TechStrip + Services + ClosingCTA
  globals.css     # design tokens + all component styles
components/
  Nav.tsx, Hero.tsx, Console.tsx, TechStrip.tsx,
  Services.tsx, ClosingCTA.tsx, Footer.tsx, Background.tsx
  ThemeToggle.tsx # client — theme switch
  ClientFx.tsx    # client — nav-on-scroll + reveal-on-scroll
  icons.tsx       # inline SVG icons
lib/
  site.ts         # all site content/config
```

---

## Theming

- **Light is the CSS default** (`:root`); `.dark` on `<html>` swaps the palette.
- The site **defaults to dark** on first visit and remembers the visitor's choice
  in `localStorage` (`apex-theme`). A tiny inline script in `app/layout.tsx` applies
  the class **before paint**, so there's no flash.
- To default to the visitor's **system preference** instead, change the script in
  `app/layout.tsx` to check `matchMedia('(prefers-color-scheme: dark)')`.

---

## Deploy to Vercel

**Option A — Git + dashboard (recommended):**

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In Vercel, **Add New → Project** and import the repo.
3. Framework preset auto-detects **Next.js**. No env vars needed. Click **Deploy**.

After that: every push to `main` ships to production, and every branch/PR gets its
own **preview URL** automatically.

**Option B — CLI:**

```bash
npm i -g vercel
vercel          # first run links/creates the project (preview deploy)
vercel --prod   # production deploy
```

---

## Editing with Claude Code

Open the folder in **VS Code** or **Cursor**, then use Claude Code in the integrated
terminal:

```bash
npm install -g @anthropic-ai/claude-code
claude
```

Then ask for changes in plain English ("tighten the hero spacing", "add an About
page"). Review the diff, commit, push — Vercel deploys the preview.
Docs: <https://docs.claude.com/en/docs/claude-code/overview>

---

## Notes for later

- **Add a page:** create `app/about/page.tsx` — it's live at `/about`. The nav and
  footer come from `app/layout.tsx`, so they appear automatically.
- **Make the contact form real / add a blog or portal:** that's when a database
  earns its place. Wire up **Neon + Prisma** then (your existing stack) — not before.
  A static brochure doesn't need a DB.
- **Brand colour:** the accent is coral. Change `--accent` (and `--accent-text`,
  `--accent-tint`, `--accent-h`) in `app/globals.css` to rebrand everything at once.
```
