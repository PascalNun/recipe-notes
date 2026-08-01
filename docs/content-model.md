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
| `recipeKey` | string | stable, language-independent connection |
| `lang` | `de` or `en` | language of this version |
| `title` | string | recipe title |
| `titleLines` | string array, optional | editorial line breaks for the poster title; the semantic title remains in `title` |
| `subtitle` | string | recipe subtitle |
| `slug` | string | language-specific URL segment |
| `description` | string | card copy and meta description |
| `tags` | string array | categories shown on the index |
| `heroImage` | image or `fallback` | hero asset with an explicit fallback |
| `heroAlt` | string | meaningful image description |
| `ingredientSpotImage` | image, optional | transparent editorial ingredient cutout |
| `ingredientSpotAlt` | string, optional | alternative text for the ingredient cutout |
| `ingredientSections` | array | grouped ingredients |
| `steps` | array | numbered method steps |

An ingredient section contains `title` and `items`. A step requires `number`, `title`, and `text`; `image`, `imageAlt`, and `note` are optional.

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

`nutrition` is an array of concise values or notes and renders as a collapsed disclosure. Include a basis such as “per serving” in the content and label calculated values as estimates.

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

Run `npm run check` after every schema or content change. Invalid fields intentionally stop the build before an incomplete page can be published.
