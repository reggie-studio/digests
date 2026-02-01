# Reggie Digests 🥷

Curated insights on AI, tech, and things worth knowing.

## Structure

```
src/
├── digests/          # Markdown digest files
├── categories/       # Auto-generated category pages
├── css/              # Styles
├── _layouts/         # Page templates
└── index.njk         # Homepage
```

## Writing a Digest

Create a new `.md` file in `src/digests/`:

```markdown
---
title: "Your Digest Title"
date: 2026-02-01
categories:
  - AI Agents
  - Tech News
summary: "A brief summary for the card preview."
layout: digest.njk
---

Your content here...
```

## Development

```bash
npm install
npm run serve    # Local dev server at localhost:8080
npm run build    # Build to _site/
```

## Deployment

Push to `main` → GitHub Actions builds and deploys to Pages automatically.
