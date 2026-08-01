# Recipe Production Pipeline

The cultural and editorial decisions behind this workflow are defined in the [editorial charter](editorial-charter.md). Every recipe and asset must satisfy that charter as well as the technical stages below.

The long-term authoring goal is simple: provide one complete recipe draft and turn it into a bilingual, illustrated recipe-zine page with minimal manual assembly. The pipeline below separates deterministic content work from visual generation and editorial judgement so new recipes stay consistent without becoming formulaic.

## Intended Input

A useful recipe draft contains:

- working title
- servings or yield
- grouped ingredients with quantities
- ordered preparation steps
- timing and temperature where relevant
- serving and finishing suggestions
- the regional idea behind the dish
- optional character, storage, nutrition, and video notes

Missing factual information must be flagged instead of invented silently.

Do not complete a recipe from convention. A familiar filling, coating, garnish, finish, shaping method, or preparation step remains forbidden unless the source recipe explicitly defines it. When an omission prevents a clear page or illustration, ask for the missing fact rather than borrowing it from a typical version of the dish. German source decisions remain authoritative when producing the English version; quantities, sequence, and deliberate omissions must remain unchanged.

## Production Stages

### 1. Normalise the Recipe

Convert the draft into the repository content model. Check ingredient-step consistency, numbering, units, temperatures, and whether every visible garnish occurs in the ingredient list.

### 2. Build Both Language Versions

Create German and English Markdown files with the same `recipeKey`. Translation should preserve quantities and cooking meaning while allowing titles, subtitles, and editorial notes to read naturally in each language.

### 3. Derive the Asset Manifest

Identify:

- one finished-dish hero
- only the steps that materially benefit from illustration
- one or two distinctive ingredient studies
- optional video poster and social crop

The manifest records filename, subject, preparation state, crop, factual constraints, and alternative text before generation begins.

### 4. Establish the Hero Anchor

Generate the hero against the current poster references and shared style block. Review it in the actual page before generating the rest of the series. Once approved, the hero becomes the recipe-specific anchor for light, colour, food realism, vessels, and material treatment.

### 5. Generate and Extract Supporting Artwork

Generate each approved step or ingredient asset as an isolated chroma-key source. Extract it locally, inspect the alpha edge on the real paper background, and encode the tracked website derivative as lossless WebP. Keep keyed and PNG masters under the ignored local production directory.

### 6. Recompose the Live Page

Connect the final assets through Markdown. Tune scale, overlap, dividers, marker washes, and the responsive sketch layer around the real artwork. Sketch overlays are opt-in per step rather than inferred from the step number. Ordered four-state processes use separate transparent assets, editable arrows on wider screens, and numbered 2 × 2 tiles on narrow screens. The reference poster controls rhythm and editorial density, but the website remains responsive HTML rather than a sliced poster image.

### 7. Add Optional Modules

- Nutrition is omitted unless reliable data is available. When supplied, it appears in a collapsed disclosure so it does not dominate the zine composition. Estimates must be labelled as estimates and should come from a reproducible nutrition source rather than language-model inference.
- Video is omitted unless `video` metadata is present. Native video uses a poster and `preload="none"`, so the media file is not downloaded on initial page load.
- Storage, tips, health notes, and environmental notes render only when present.

### 8. Validate

Run the content and build checks, then review German and English routes at desktop and mobile widths. Compare the final composition with the primary poster reference for hierarchy, density, tactile depth, playful transitions, and image scale.

## Automation Boundary

The following work can be automated reliably:

- folder and Markdown scaffolding
- schema validation
- translation draft
- ingredient-step consistency checks
- asset manifest and prompt assembly
- image conversion and responsive optimisation
- route and build checks

The following work should retain an editorial approval point:

- final recipe facts when the source draft is incomplete
- the hero image
- generated food accuracy
- title and subtitle quality
- nutrition values and claims
- the final reference-versus-page visual review

Once the pilot recipe is visually stable, this pipeline can be packaged as a repository-local Codex skill or command that accepts a recipe brief and creates the complete production scaffold.
