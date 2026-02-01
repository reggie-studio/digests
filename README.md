# Reggie Digests 🥷

Curated insights on AI, tech, and things worth knowing.

## Structure

```
src/
├── digests/          # Markdown digest files
├── _data/            # JSON data files for dynamic content (if needed)
├── css/              # Styles
├── _includes/        # Nunjucks includes
├── _layouts/         # Page templates
└── index.njk         # Homepage
└── categories/       # Auto-generated category index page
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
npm run build    # Build static site to _site/ directory
npm run serve    # Local dev server at localhost:8080 (with live reload)
```

## Deployment

Push to the `main` branch → GitHub Actions automatically builds andDeploy the site to GitHub Pages.

## Workflow Memory Note

*   **GitHub Pages Subdirectory:** When deploying to a GitHub Pages site that's in a subdirectory (e.g., `github.com/user/repo/subdirectory/`), ensure static site generator configurations (like Eleventy's `pathPrefix` or relative URL handling) correctly prepend the subdirectory (`/subdirectory/`) to all generated links.
*   **URL Generation:** Use relative paths within templates and context-aware filters (like `| url`) to ensure links correctly resolve under the site's base URL. Avoid hardcoded absolute paths except for external links.
*   **Adding New Content:** New Markdown files for digests should be placed in `src/digests/`. After adding a file, run `npm run build` to generate the static files, then `git add .`, `git commit -m "feat: Add new digest title"`, and `git push` to deploy. The site will rebuild automatically.
