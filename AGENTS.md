# Recipe Notes agent guide

## Product

Recipe Notes is Pascal's personal, long-term recipe archive. It is a bilingual static website, not a content platform or a simulated magazine issue. Prefer simple, durable solutions that keep the recipe collection understandable and maintainable over time.

The public project documentation is written in English. Recipe content exists in German and English.

## Editorial rules

- Treat `docs/editorial-charter.md` as the project-wide editorial baseline.
- The visual and cultural direction is contemporary regional plant-based cooking: warm, urban, open, and editorial, never folkloric or nostalgic.
- Never invent ingredients, finishes, preparation steps, yields, times, or nutritional assumptions. Ask when a recipe fact is genuinely missing.
- German and English versions of one recipe use the same `recipeKey` and must preserve the same facts, quantities, and decisions.
- Keep incomplete recipes as drafts until their content and artwork are approved.

## Visual rules

- Treat the supplied poster references in `docs/ref-img/` as the primary visual authority.
- Read `docs/asset-style-guide.md` and `docs/asset-workflow.md` before producing or replacing artwork.
- Build the page as responsive layers on one continuous paper surface. Avoid generic cards, clean digital borders, repeated drop shadows, and decoration that competes with the food.
- Final website raster assets should be lightweight WebP files. Keep transparent backgrounds for movable artwork; PNG or keyed masters may remain only in the local production workspace.
- Check wide desktop, intermediate widths, and narrow mobile layouts. Titles, ingredient columns, step sequences, and notes must never overlap or cross their editorial rules.

## Content and code

- Recipe files live in `src/content/recipes/<recipe>/de.md` and `en.md`; recipe-specific artwork belongs in the adjacent `assets/` folder.
- Shared decorative artwork belongs in `src/assets/`.
- Follow `docs/content-model.md` for supported recipe fields and `docs/coding-principles.md` for implementation decisions.
- Preserve semantic HTML, keyboard access, useful alternative text, and the site's low-JavaScript static architecture.
- Do not commit secrets, `.env.local`, temporary image-generation files, or unapproved source images.

## Verification and publishing

Run both checks before committing a completed change:

```bash
npm run check
npm run build
```

Use focused commits on `main`. Push and deploy only work that has been requested and verified. Production deployment uses `npm run deploy:vps`; details and safety boundaries are documented in `docs/deployment.md`.
