# Hessian Kreppel — Production Plan

**Status:** complete asset set integrated, responsive review passed, and recipe published
**Style ID:** `RECIPE-NOTES-MIXED-MEDIA-V1`
**Content sources:** `src/content/recipes/hessische-kreppel/de.md` and `en.md`

This note records the approved recipe facts and prepares the first hero pilot. It must be used together with the [editorial charter](../editorial-charter.md) and [asset style guide](../asset-style-guide.md).

## Reference Roles

- `../ref-img/imagezopf.png`: cross-recipe reference for contemporary yeast-pastry presentation, editorial density, paper, watercolour, ink, and café atmosphere. It is not a factual Kreppel reference.
- Approved white-bean hero: collection anchor for food realism, warm light, paper integration, and the photography-to-illustration balance. It does not control the pastry's form.
- Optional future factual photograph: controls the exact Kreppel shape, frying colour, crumb, and finish only.

No rural, folkloric, heritage-bakery, or nostalgic domestic reference should be added.

## Factual Lock

```text
Required subject: vegan Hessian Kreppel made from yeast dough and fried until golden.
Allowed edible ingredients: flour, margarine, sugar, yeast, oat milk, salt, and frying oil.
Allowed tools: plain mixing bowl, measuring jug, dough scraper, rolling pin, round cutter, unbranded frying vessel, draining paper, wooden skewer.
Required preparation states: activated yeast mixture; smooth risen dough; dough rolled to about 2 cm and cut into rounds; Kreppel fried at 170–180 °C and drained.
Required finished state: deliberately plain, unfilled, and without any external sugar or glaze; approximately 15–20 pieces per batch.
Forbidden: jam, custard, chocolate, any filling, icing, glaze, powdered sugar, granulated-sugar coating, decorative finish, fruit, dairy ingredients, and unrelated garnish.
```

## Approved Editorial Decisions

- The Kreppel remain deliberately unfilled and uncoated.
- No jam, powdered sugar, granulated-sugar crust, or glaze may be implied visually.
- One batch makes approximately 15–20 pieces.
- The visual emphasis is the smooth golden fried surface, restrained simplicity, and airy yeast-dough volume.
- The wooden-skewer bubble test is a factual process cue, not a decorative tradition symbol.

## Proposed Asset Manifest

| Filename | Family | Subject | Status |
| --- | --- | --- | --- |
| `hero-cutout-v1.webp` | hero | compact group of deliberately plain, unfilled, uncoated finished Kreppel | approved collection anchor |
| `ingredient-yeast.webp` | ingredient spot | small jug of oat milk, yeast granules, and restrained flour cue | generated and integrated |
| `step-01.webp` | step | activated yeast mixture in lukewarm oat milk | generated and integrated |
| `step-02.webp` | step | smooth risen yeast dough in a simple bowl | generated and integrated |
| `step-03.webp` | step | 2 cm rolled dough with clean circular cut-outs and one cutter | generated and integrated |
| `step-04.webp` | step | Kreppel frying in one plain vessel, with the wooden-skewer bubble test | generated and integrated |

The wooden-skewer bubble test is incorporated as a small factual cue within the frying asset and remains subordinate to the pastry.

## Hero Prompt Shell

```text
Reference map:
- Image 1 is the cross-recipe cinnamon-pastry poster. Use it for series language only; do not copy its bun shapes, wording, or layout.
- Image 2 is the approved collection hero. Use it for warm café light, food realism, material detail, and restrained mixed-media treatment.
- Image 3, when supplied, is a factual Kreppel reference. Use it only for exact shape, crumb, frying colour, and approved finish.

[Insert the immutable RECIPE-NOTES-MIXED-MEDIA-V1 master style block here verbatim.]

Asset family: hero.
Create one compact contemporary editorial composition of five whole vegan Hessian Kreppel. They are deliberately plain, unfilled, unglazed, and completely free from powdered sugar or external sugar coating. Their yeast dough should look light and airy through the gently puffed volume, with a believable smooth and evenly golden fried surface. Arrange the five pieces in one quiet, slightly asymmetrical café-pastry cluster. Keep the pastry visually dominant and use only recipe-accurate supporting cues.

Forbidden additions: cut-open filling, jam, custard, powdered sugar, granulated-sugar coating, icing, glaze, fruit, dairy ingredients, rustic bakery scenery, gingham cloth, old kitchen props, folk imagery, text, labels, people.

Output: one 4:3 transparent organic cutout cluster with generous responsive padding, no rectangular paper background, no baked-in typography, and only a restrained irregular watercolour grounding wash.
```

## Generation Order

1. Generate and approve the hero. **Complete: v1 approved.**
2. Use the hero as the recipe anchor for one ingredient spot and four process assets. **Complete.**
3. Extract to alpha and encode final lossless WebP derivatives. **Complete.**
4. Integrate the assets and tune the recipe-specific layout before removing `draft: true`. **Complete; German and English routes published.**

## Pilot Record

- Source: built-in ImageGen output `exec-57b91258-bbdf-4615-8aa0-303f0cb0650b.png`
- Working key image: `tmp/imagegen/hessian-kreppel/hero-key-v1.png`
- Final draft asset: `src/content/recipes/hessische-kreppel/assets/hero-cutout-v1.webp`
- Processing: explicit `#ff00ff` chroma key, soft alpha matte, one-pixel edge contraction, despill, then lossless WebP encoding with exact transparent RGB preservation
- Approval lock: five whole pastries; no filling, cut surface, powdered sugar, granulated-sugar coating, glaze, or garnish

### Supporting asset record

| Final asset | Built-in ImageGen source |
| --- | --- |
| `ingredient-yeast.webp` | `exec-f24e6d62-bb77-478e-9859-f1cbf2227243.png` |
| `step-01.webp` | `exec-815322e3-6c98-4a04-8437-13856a7c3f8e.png` |
| `step-02.webp` | `exec-5785eb2c-2386-4950-a64f-e22b0c20d990.png` |
| `step-03.webp` | `exec-7240d4f7-6588-4de6-a26b-deeec5c3f34e.png` |
| `step-04.webp` | `exec-c782a442-0f55-4601-aab7-f4f6aedf19db.png` |

All supporting assets use the same explicit `#ff00ff` key, soft alpha extraction, one-pixel edge contraction, despill, and lossless WebP encoding as the approved hero. Their keyed and alpha-master PNG files are preserved under `tmp/imagegen/hessian-kreppel/`.

The full generation prompts combined the factual lock with the immutable `RECIPE-NOTES-MIXED-MEDIA-V1` style block from the asset style guide. The completed recipe is published at `/de/rezepte/hessische-kreppel/` and `/en/recipes/hessian-kreppel/`.
