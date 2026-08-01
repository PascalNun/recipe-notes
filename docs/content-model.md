# Content Model

## Recipe Folders and Translations

Each recipe lives in its own folder:

```text
src/content/recipes/white-bean-cinnamon-cream/
  de.md
  en.md
  assets/
    hero.webp
    step-01.webp
```

`de.md` and `en.md` use the same `recipeKey` but language-specific `slug` values. This allows the recipe page to find its translation without guessing from filenames or titles.

## Required Fields

| Field | Type | Purpose |
| --- | --- | --- |
| `draft` | boolean, optional | excludes an incomplete recipe from index pages, routes, and deployment; defaults to `false` |
| `order` | non-negative integer, optional | stable editorial order on the language index; defaults to `0` |
| `recipeKey` | string | stable, language-independent connection |
| `lang` | `de` or `en` | language of this version |
| `title` | string | recipe title |
| `titleLines` | string array, optional | editorial line breaks for the poster title; the semantic title remains in `title` |
| `subtitle` | string | recipe subtitle |
| `slug` | string | language-specific URL segment |
| `description` | string | card copy and meta description |
| `tags` | string array | categories shown on the index |
| `yieldText` | string, optional | localised serving or piece yield, for example `about 15–20 pieces` |
| `timeItems` | labelled string array, optional | localised preparation, proofing, cooking, and total-time values |
| `timeNote` | string, optional | visible state-based timing guidance when clock time is only approximate |
| `heroImage` | image or `fallback` | hero asset with an explicit fallback |
| `heroAlt` | string | meaningful image description |
| `ingredientSpotImage` | image, optional | transparent editorial ingredient cutout |
| `ingredientSpotAlt` | string, optional | alternative text for the ingredient cutout |
| `ingredientSections` | array | grouped ingredients |
| `steps` | array | numbered method steps |

An ingredient section contains `title` and `items`. A step requires `number`, `title`, and `text`; `image`, `imageAlt`, `note`, and `sketch` are optional. `sketch` selects one of the deliberately recipe-specific responsive line overlays: `toast`, `rinse`, `chill`, `mix`, `bake`, or `espresso`. Omit it when the generated artwork already contains the necessary marks or when no overlay belongs to that action.

A process that genuinely needs four ordered visual states can use separate `sequenceImages` instead of one wide raster composite:

```yaml
imageAlt: Four images show the shaping sequence
sequenceImages:
  first: ./assets/step-02-stage-1.webp
  second: ./assets/step-02-stage-2.webp
  third: ./assets/step-02-stage-3.webp
  fourth: ./assets/step-02-stage-4.webp
```

The website supplies the arrows and mobile stage numbers. Keeping each state separate prevents responsive arrows from crossing the food artwork and allows the sequence to become a large 2 × 2 arrangement on narrow screens.

## Optional Fields

- `claim`
- `introNote`
- `finish`
- `characterNotes`
- `contextNotes`
- `healthNotes`
- `environmentalNotes`
- `storage`
- `nutrition`
- `tips`
- `video`

Do not add empty fields. The interface renders a box only when the corresponding content exists.

Set `draft: true` while recipe facts, translations, or artwork are still awaiting approval. Draft entries are validated by Astro but do not appear on the index and do not generate production recipe routes. The local development server still exposes their direct detail URLs for layout review. Remove the field or set it to `false` only after the editorial and visual approval checks have passed.

`nutrition` is a structured estimate rendered as a collapsed disclosure. It always includes complete-recipe values and can add a per-serving or per-piece column when the recipe defines a usable yield:

```yaml
nutrition:
  basis: Estimated values for 12 pieces; optional ingredients are excluded.
  totalLabel: Whole recipe
  servingLabel: Per piece
  items:
    - label: Energy
      total: 6,000 kJ / 1,430 kcal
      perServing: 500 kJ / 119 kcal
    - label: Protein
      total: 42.0 g
      perServing: 3.5 g
  note: Brands and actual quantities will change the result.
```

Omit `servingLabel` and every `perServing` value when no yield has been defined. Keep the calculation assumptions and source references in `docs/nutrition-estimates.md` so the public value remains reproducible.

An optional self-hosted recipe video uses:

```yaml
video:
  title: Watch the recipe
  src: /videos/example-recipe.webm
  type: video/webm
  poster: ./assets/video-poster.webp
  caption: A short preparation overview.
```

The player uses `preload="none"`; the video is not downloaded as part of the initial page load. Prefer a compact WebM or MP4 file on the same server over a third-party embed.

## Minimal Example

```yaml
---
recipeKey: example-recipe
lang: en
title: Example Recipe
titleLines:
  - Example
  - Recipe
subtitle: with texture & freshness
slug: example-recipe
description: A short and concrete description.
tags:
  - Plant-based
heroImage: fallback
heroAlt: Description of the future dish photograph
ingredientSections:
  - title: For the base
    items:
      - 100 g example ingredient
steps:
  - number: 1
    title: Prepare
    text: A concrete instruction for this step.
---
```

Replace the fallback with a relative path when the hero asset exists:

```yaml
heroImage: ./assets/hero.webp
```

An optional ingredient spot uses the same local-image pattern:

```yaml
ingredientSpotImage: ./assets/ingredient-example.webp
ingredientSpotAlt: Illustrated example ingredient
```

A step image follows the same pattern:

```yaml
image: ./assets/step-01.webp
imageAlt: Close-up of the prepared ingredients
```

Add a separate line overlay only when it communicates the action and is not already part of the cutout:

```yaml
sketch: rinse
```

Run `npm run check` after every schema or content change. Invalid fields intentionally stop the build before an incomplete page can be published.
