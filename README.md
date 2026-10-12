# Freedom Note Capital — Website

Marketing site for freedomnotecapital.com.

## Stack

Static site built with [Eleventy](https://www.11ty.dev/) (11ty). No client-side framework, no database, no server — the build produces plain HTML/CSS/JS in `_site/`, which is what gets deployed.

- Templates: Nunjucks (`.njk`), ships with Eleventy — no extra templating dependency.
- Content: JSON data files for site-wide/marketing copy, Markdown for blog posts.
- CSS/JS: hand-written, unchanged from before the Eleventy migration. No preprocessor, no bundler.

## Folder structure

```
fnc-website/
├── eleventy.config.js        Eleventy config: input/output dirs, passthrough copies, filters
├── .pages.yml                 Pages CMS schema — what's editable and how it's labeled
├── .github/workflows/deploy.yml   Build + deploy to GitHub Pages
├── src/
│   ├── CNAME                  Custom domain, copied through to _site/ unchanged
│   ├── index.njk              Homepage — assembles the partials below
│   ├── css/styles.css         Unchanged, copied through as-is
│   ├── js/main.js             Unchanged, copied through as-is
│   ├── assets/
│   │   ├── logo-rectangle.png
│   │   └── images/uploads/    Pages CMS media uploads land here
│   ├── _data/                 Site-wide and section content (JSON)
│   │   ├── site.json          Title, description, entity name, email, disclaimer, nav links
│   │   ├── hero.json
│   │   ├── whatWeDo.json
│   │   ├── about.json
│   │   ├── cards.json         The 4 "Get Involved" cards
│   │   └── newsletter.json
│   ├── _includes/
│   │   ├── layouts/base.njk   HTML shell: <head>, navbar, footer
│   │   ├── layouts/post.njk   Blog post layout (extends base.njk)
│   │   └── partials/          One file per homepage section
│   └── blog/
│       ├── index.njk          Blog index, newest first
│       └── posts/             Markdown posts live here (none yet)
└── _site/                     Build output — gitignored, not committed
```

## Local development

```
npm install
npm run dev      # Eleventy serve + watch, http://localhost:8080
npm run build     # one-off build to _site/
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci && npm run build` and publishes `_site/` to GitHub Pages via `actions/deploy-pages`. The custom domain (`freedomnotecapital.com`) keeps working because `src/CNAME` is copied into `_site/CNAME` as part of the build.

This replaced the previous "deploy from branch" setup. **One manual one-time step is required**: in the GitHub repo, go to Settings → Pages → Build and deployment → Source, and switch it to **GitHub Actions** (it currently reads "Deploy from a branch").

## Editing content

Two ways to edit, depending on what you're changing:

**Through Pages CMS** (https://pagescms.org) — connect this repo once, then edit through a form UI instead of raw files:
- Site settings (title, description, entity name, email, disclaimer, nav links)
- Homepage copy: hero, "What We Do", "About", the 4 "Get Involved" cards, newsletter section
- Blog posts (create, edit, publish/draft)
- Images (uploads go to `src/assets/images/uploads/`)

Pages CMS reads its schema from `.pages.yml` — if you add a new field to a data file, add a matching entry there or it won't show up in the CMS UI.

**By editing files directly** — anything structural:
- `src/_includes/` (layouts and partials) — HTML structure, classes, markup
- `src/css/styles.css`, `src/js/main.js` — styling and behavior
- `eleventy.config.js`, `.pages.yml`, `.github/workflows/deploy.yml` — build/CMS/deploy config

If you're not sure which bucket something falls in: if it's a sentence of marketing copy, a date, or an image, it's probably a `src/_data/*.json` file or a blog post and belongs in the CMS. If it's a CSS class, a `<div>`, or JS behavior, it's in `src/_includes/`, `src/css/`, or `src/js/` and should be hand-edited.

## Writing a blog post

Add a new Markdown file to `src/blog/posts/`, e.g. `src/blog/posts/my-post.md`:

```markdown
---
title: My Post Title
date: 2026-03-01
description: One-sentence summary shown on the blog index and in SEO.
author: Dr. Keith G.
featuredImage: /assets/images/uploads/my-image.jpg
featuredImageAlt: Description of the image
tags: []
draft: false
---

Post content goes here, in Markdown.
```

The permalink is derived from the filename: `my-post.md` → `/blog/my-post/`. Set `draft: true` to keep it out of the published blog index while you're still writing. The blog index sorts newest-first by `date`; each post page gets automatic previous/next links based on publish date.
