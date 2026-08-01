# Contemporary Regional Kitchen

A small bilingual recipe zine built as a static Astro website. The project translates the visual language of a handmade recipe poster into an editable, responsive web system: content lives in Markdown, images can be replaced independently, and new recipes do not require a CMS.

Live site: [recipes.pascalnun.eu](https://recipes.pascalnun.eu)

## Project Goal

Version 1 deliberately focuses on a durable foundation:

- German and English landing pages and recipe detail pages
- one complete example recipe in both languages
- a validated Astro Content Collection
- responsive poster, ingredient, step, and note layouts
- visual fallbacks for recipe images that do not exist yet
- central branding, small UI dictionaries, and documented workflows

## Why Astro?

Astro is a strong fit because the site is static, content-driven, and requires almost no browser JavaScript. A heavier React or CMS stack would add complexity without a clear benefit for this first version. The harder parts are the responsive poster composition, reliable links between translations, and consistent recipe assets. Search, a CMS, automatic translation, and an advanced image pipeline are therefore intentionally out of scope for now.

## Tech Stack

- Astro 7
- strict TypeScript
- Markdown and Astro Content Collections
- modern custom CSS without a framework
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

## German and English Content

Each language version is a separate Markdown file. `recipeKey` connects translations; `lang` and `slug` determine the language and public URL. When a translation is missing, no broken page is generated and that language is disabled in the recipe language switcher. Interface terms such as “Ingredients” and “So geht’s” are stored separately under `src/i18n/`.

## Recipe Assets

Recipe-specific images belong in `src/content/recipes/<recipe>/assets/`. `heroImage` can reference a local image or use the value `fallback`. Step images are optional; a designed placeholder is rendered when an image is missing. Naming, replacement, and global decoration are covered in [docs/asset-workflow.md](docs/asset-workflow.md).

The authoritative visual rules live in [docs/asset-style-guide.md](docs/asset-style-guide.md). The recommended visual sequence is documented in [docs/visual-direction.md](docs/visual-direction.md), while [docs/recipe-production-pipeline.md](docs/recipe-production-pipeline.md) defines the repeatable path from a raw recipe to a bilingual illustrated page. The supplied art-direction images are catalogued in [docs/ref-img/README.md](docs/ref-img/README.md), and the reproducible prompts are recorded in [the first recipe pilot](docs/prompts/white-bean-cinnamon-cream-pilot.md) and [the global material texture note](docs/prompts/global-material-textures.md).

## Design Principles

- warm paper, marker-like colour fields, and handmade accents
- asymmetrical composition on large screens and clear stacking on mobile
- readability before decorative density
- semantic HTML, visible focus states, and meaningful alternative text
- CSS custom properties instead of scattered design values
- no client JavaScript for layout or language switching

See [docs/coding-principles.md](docs/coding-principles.md) for the engineering guidelines.

## GitHub and Deployment

The repository is ready for an initial commit. A GitHub repository still needs to be created and connected as `origin`; no remote repository is configured yet. The production site is deployed independently at `recipes.pascalnun.eu`. See [docs/deployment.md](docs/deployment.md) for the exact GitHub and VPS workflow.

## Intentionally Open in Version 1

- artwork for future recipes beyond the completed white-bean pilot
- automated consistency checks between German and English recipes
- search, filtering, and sorting for a larger collection
- a more advanced responsive image production pipeline
- an optional Git-based CMS and editorial preview

## Initial Milestones

1. **Foundation** — Astro, design tokens, content schema, and URL structure.
2. **First recipe** — German and English content, landing pages, and language switching.
3. **Poster system** — hero, ingredients, steps, optional notes, and fallbacks.
4. **Quality** — responsive behaviour, accessibility, type checking, and production build.
5. **Asset production** — final images following the documented prompt workflow.
6. **Collection growth** — more recipes, followed by search or a lightweight CMS only when needed.
