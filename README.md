# Recipe Notes

I built Recipe Notes primarily as a personal, long-term recipe archive: a place to keep recipes I develop, refine, cook, and want to return to. Publishing the archive as a bilingual website makes it pleasant to browse, simple to share, and straightforward to maintain over time.

That archival purpose shapes the implementation. The site is deliberately simple and robust: recipes live in plain Markdown files, images are stored alongside them, pages are generated statically, and very little browser JavaScript is required. The collection should remain understandable, portable, and maintainable for years without depending on a database, a CMS, or a proprietary service.

Within that durable foundation, the project translates the visual language of a contemporary handmade food zine into an editable, responsive web system.

Live site: [recipes.pascalnun.eu](https://recipes.pascalnun.eu)

## Project Goal

The primary goal is a durable personal home for recipes rather than a content platform with a complex publishing workflow. Longevity matters more than feature breadth, so version 1 deliberately focuses on a small, dependable foundation:

- German and English landing pages and recipe detail pages
- six complete illustrated recipes in both languages
- lightweight title, ingredient, keyword, and tag filtering on the landing page
- a validated Astro Content Collection
- responsive poster, ingredient, step, and note layouts
- visual fallbacks for recipe images that do not exist yet
- central branding, small UI dictionaries, and documented workflows

## Why Astro?

Astro is a strong fit because the site is static, content-driven, and requires very little browser JavaScript. A small vanilla enhancement provides landing-page search and tag filtering; the recipe content, layout, navigation, and language routes remain fully static. A heavier React or CMS stack would add complexity without a clear benefit for this first version.

## Tech Stack

- Astro 7
- strict TypeScript
- Markdown and Astro Content Collections
- modern custom CSS without a framework
- small framework-free search and tag-filter enhancement
- static output with no database or backend

## Project Structure

```text
src/
  components/                 reusable zine components
  config/site.ts              central name, tagline, and introduction
  content/recipes/            one folder per recipe
  content.config.ts           validated content schema
  i18n/                       translated interface copy
  layouts/BaseLayout.astro    shared HTML document structure
  lib/recipes.ts              recipe URL and translation helpers
  pages/                      static German and English routes
  styles/global.css           design tokens and responsive layout
docs/                         authoring and maintenance guides
public/assets/global/         optional global decorative assets
scripts/                      local deployment helpers
```

## Local Development

Node.js 22.12 or newer is required.

```bash
npm install
npm run dev
```

Astro prints the local URL in the terminal. The German index is available at `/de/`, and the English index at `/en/`.

## Validate and Build

```bash
npm run check
npm run build
npm run preview
```

The production site is generated in `dist/`. It can be served by any standard static web server.

## Add a Recipe

1. Create a new folder under `src/content/recipes/`.
2. Add `de.md`, `en.md`, or both.
3. Use the same `recipeKey` in both language files.
4. Give each language its own `slug`.
5. Add the required fields, ingredient sections, and steps.
6. Store recipe images in an `assets/` folder next to the Markdown files and reference them with relative paths.
7. Run `npm run check`.

See [docs/content-model.md](docs/content-model.md) for all supported fields and examples.

The landing page is a continuous recipe-book index rather than a simulated magazine issue. Its information hierarchy, filtering behaviour, and relationship to the more expressive recipe pages are documented in [docs/landing-page.md](docs/landing-page.md).

## German and English Content

Each language version is a separate Markdown file. `recipeKey` connects translations; `lang` and `slug` determine the language and public URL. When a translation is missing, no broken page is generated and that language is disabled in the recipe language switcher. Interface terms such as “Ingredients” and “So geht’s” are stored separately under `src/i18n/`.

## Recipe Assets

Recipe-specific images belong in `src/content/recipes/<recipe>/assets/`. `heroImage` can reference a local image or use the value `fallback`. Step images are optional; a designed placeholder is rendered when an image is missing. Naming, replacement, and global decoration are covered in [docs/asset-workflow.md](docs/asset-workflow.md).

The authoritative visual rules live in [docs/asset-style-guide.md](docs/asset-style-guide.md). The recommended visual sequence is documented in [docs/visual-direction.md](docs/visual-direction.md), while [docs/recipe-production-pipeline.md](docs/recipe-production-pipeline.md) defines the repeatable path from a raw recipe to a bilingual illustrated page. The supplied art-direction images are catalogued in [docs/ref-img/README.md](docs/ref-img/README.md), and the reproducible prompts are recorded in [the first recipe pilot](docs/prompts/white-bean-cinnamon-cream-pilot.md) and [the global material texture note](docs/prompts/global-material-textures.md).

The project-wide cultural position is defined in the [editorial charter](docs/editorial-charter.md): contemporary regional plant-based cooking, warm but never nostalgic, with regional ingredients treated as a starting point for open and internationally informed combinations.

The completed production records for the additional recipes live in [the Hessian Kreppel brief](docs/prompts/hessian-kreppel-production.md) and [the small cinnamon braids brief](docs/prompts/small-cinnamon-braids-production.md). They preserve the factual locks, approved hero direction, supporting asset sources, and transparent WebP workflow for future recipe production.

The [steamed red bean buns production record](docs/prompts/steamed-red-bean-buns-production.md) extends the same system with an unbranded dough-mixing illustration, a four-state shaping sequence, and a bamboo-steamer-over-wok setup.

The [basic flatbread rolls](docs/prompts/basic-flatbread-rolls-production.md) and [buckwheat waffles](docs/prompts/buckwheat-waffles-production.md) records document the next reusable production decisions: a shared personal stand-mixer illustration, countable dough states, and the exact five-heart European waffle geometry.

## Design Principles

- warm paper, marker-like colour fields, and handmade accents
- asymmetrical composition on large screens and clear stacking on mobile
- readability before decorative density
- semantic HTML, visible focus states, and meaningful alternative text
- CSS custom properties instead of scattered design values
- no client JavaScript for layout or language switching; search and tags use a small progressive enhancement

See [docs/coding-principles.md](docs/coding-principles.md) for the engineering guidelines.

## GitHub and Deployment

The source is maintained in the public `PascalNun/recipe-notes` GitHub repository. The production site is deployed independently at `recipes.pascalnun.eu`. See [docs/deployment.md](docs/deployment.md) for the GitHub and VPS workflow.

## Rights and Reuse

This repository is public for transparency and personal archival purposes. Unless explicitly stated otherwise, the original source code, recipe texts, editorial content, visual design, illustrations, generated artwork, and reference images in this repository are © 2026 Pascal Nünninghoff. No additional permission for reuse, redistribution, or derivative works is granted beyond GitHub's Terms of Service.

Third-party software and dependencies remain subject to their respective licences.

## Intentionally Open in Version 1

- artwork for future recipes beyond the three completed launch recipes
- automated consistency checks between German and English recipes
- category architecture and sorting controls for a much larger collection
- a more advanced responsive image production pipeline
- an optional Git-based CMS and editorial preview

## Initial Milestones

1. **Foundation** — Astro, design tokens, content schema, and URL structure.
2. **First recipe** — German and English content, landing pages, and language switching.
3. **Poster system** — hero, ingredients, steps, optional notes, and fallbacks.
4. **Quality** — responsive behaviour, accessibility, type checking, and production build.
5. **Asset production** — final images following the documented prompt workflow.
6. **Collection growth** — more recipes, with the existing search and tag index ready to expand; add a lightweight CMS only when needed.
