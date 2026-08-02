# Basic Flatbread Rolls — Production Record

**Status:** complete bilingual recipe and asset set integrated  
**Style ID:** `RECIPE-NOTES-MIXED-MEDIA-V1`  
**Content sources:** `src/content/recipes/basic-fladenbroetchen/de.md` and `en.md`

This record preserves the recipe-specific factual lock, reuse decision, and generated source mapping. It must be read together with the [editorial charter](../editorial-charter.md), [asset style guide](../asset-style-guide.md), and [image prompt workflow](../image-prompt-workflow.md).

## Factual lock

```text
Required subject: ten soft, relatively flat wheat rolls with a lightly browned surface and airy crumb.
Allowed edible ingredients: wheat flour, water, dried yeast, salt, and optional turmeric, paprika, garlic powder, rosemary, thyme, or Italian herbs.
Allowed tools: mixing bowl or unbranded stand mixer with dough hook, work surface, bench scraper, baking tray, baking paper, cooling rack, and cloth.
Required preparation states: soft slightly sticky dough; ten divided portions; ten pale proofed rounds; lightly golden finished rolls.
Forbidden additions: seeds, toppings, dips, sandwich fillings, butter, cheese, vegetables, fruit, glaze, and unrelated garnish.
```

## Visual decisions

- The hero uses a loose cooling-rack composition with one opened roll so the soft irregular crumb is legible.
- The dough step deliberately reuses the approved unbranded black stand-mixer illustration from Steamed Red Bean Buns. The text continues to make hand kneading equally valid.
- The shaping image contains ten countable pieces: four rough portions and six formed rounds.
- The second proof uses a deliberately simple two-by-five arrangement. Earlier generated variants repeatedly reduced the batch to eight; the approved source shows all ten without a cloth obstructing the count.
- No optional spice is visibly applied to the surface, so the series remains accurate for every seasoning variation.

## Asset manifest and ImageGen sources

| Final asset | Subject | Built-in ImageGen source |
| --- | --- | --- |
| `hero-cutout.webp` | finished flatbread rolls with an opened crumb | `exec-87e2a6fd-d386-4b02-b8b7-1146d03c0371.png` |
| `step-01.webp` | reused unbranded stand mixer kneading soft dough | reused from `steamed-red-bean-buns/step-03.webp`; original `exec-89cfabbb-3f4c-475d-aa4c-b199ef88d218.png` |
| `step-02.webp` | ten divided and shaped dough portions | `exec-a574e875-3849-4908-9cfb-0c8e6e440336.png` |
| `step-03.webp` | ten raw rounds in two rows of five | `exec-31d9bbeb-44df-4527-bd5d-4b700ae441ba.png` |
| `step-04.webp` | lightly golden rolls on a cooling rack | `exec-7be9cccc-b985-4f72-8a65-f72a0c3d30f2.png` |

Selected keyed sources and full-resolution alpha masters live under `local-assets/masters/basic-fladenbroetchen/`. Website derivatives are transparent lossless WebP files beside the recipe content.
