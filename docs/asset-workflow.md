# Asset Workflow

## 1. Recommended Assets per Recipe

All generated artwork follows the versioned visual system in [asset-style-guide.md](asset-style-guide.md). Asset storage and replacement remain independent of the generation method.

A complete recipe will usually benefit from:

- one hero image of the finished dish
- one image for each visually important step; not every step requires an image
- small ingredient illustrations for distinctive ingredients
- optionally, an alternate detail image for future cards or social previews

Missing images do not block publication. `heroImage: fallback` and omitted step images render designed placeholder artwork instead of a broken image icon.

## 2. File Naming

```text
hero.webp
hero-detail.webp
step-01.webp
step-02.webp
ingredient-white-beans.webp
ingredient-sunflower-seeds.webp
ingredient-cinnamon.webp
```

Use lowercase ASCII filenames with hyphens and two-digit step numbers. Store approved website artwork as lossless WebP with alpha. Keep high-quality PNG, keyed, or layered production masters locally outside version control; Astro creates additional size-optimised WebP delivery variants during the build. Current delivery quality is 82 for heroes and 80 for step, card, and ingredient artwork.

## 3. Storage Location

Recipe-specific assets live next to their content:

```text
src/content/recipes/<recipe-folder>/assets/
```

Global, reusable style assets live under:

```text
public/assets/global/
```

Examples include paper textures, photographed tape, or hand-drawn arrows. Version 1 creates most decoration with CSS; the global folder is prepared for final assets later.

Durable local production masters live under `local-assets/masters/`. Active keyed files and alpha-processing variants live under `local-assets/working/`, and contact sheets or review exports live under `local-assets/previews/`. The contents of `local-assets/` stay outside version control except for its short directory guide.

The `tmp/` directory is reserved for disposable build, conversion, and QA output. A file that would be expensive or impossible to reproduce must not exist only in `tmp/`. Neither local production directory is copied into the built website.

## 4. Referencing Images in Markdown

Local images use a path relative to the Markdown file:

```yaml
heroImage: ./assets/hero.webp

steps:
  - number: 1
    title: Toast the seeds
    text: Toast the seeds without oil.
    image: ./assets/step-01.webp
    imageAlt: Toasted sunflower seeds in a dark frying pan
```

Global assets use a public absolute path in markup or CSS, for example `/assets/global/paper-texture.webp`.

## 5. Replacing AI-Generated Images

1. Select a replacement with the same subject and functional perspective. Preserve transparency for step and ingredient cutouts.
2. Export it in a web-friendly format and at a reasonable file size.
3. Replace the existing file using the same filename, or update the Markdown path.
4. Review and update the alternative text if the visible subject changed.
5. Check the index, recipe page, and mobile crop.
6. Run `npm run check` and `npm run build`.

Components do not care how an image was produced. AI-generated artwork can therefore be replaced by photography or illustration without changing application code.

## 6. Reusing Global Decoration

Global decoration must not carry recipe information. It can support the paper, tape, brush, or doodle aesthetic only. Reference these assets centrally from CSS or the appropriate component so they can be replaced without editing recipe files.

## Quality Checklist

- The subject matches the actual recipe or step.
- The image does not invent additional ingredients.
- Hero and step images form a coherent series in lighting, paper, perspective, and colour temperature.
- The hero is an organic transparent cluster rather than an image rectangle.
- Hero, step, and ingredient assets have clean alpha edges when viewed on the real site paper.
- Alternative text describes content and purpose rather than style or filename.
- Text is not baked into recipe images; it remains editable HTML.
- The image works in both a wide desktop crop and a mobile portrait crop.
