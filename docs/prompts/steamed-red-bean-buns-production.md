# Steamed Red Bean Buns — Production Record

**Status:** complete bilingual recipe and asset set integrated
**Style ID:** `RECIPE-NOTES-MIXED-MEDIA-V1`
**Content sources:** `src/content/recipes/steamed-red-bean-buns/de.md` and `en.md`

This record preserves the recipe-specific factual lock, the approved visual decisions, and the source mapping for the generated artwork. It must be read together with the [editorial charter](../editorial-charter.md), [asset style guide](../asset-style-guide.md), and [image prompt workflow](../image-prompt-workflow.md).

## Factual lock

```text
Required subject: eight soft plant-based steamed yeast buns filled with a mild homemade azuki bean paste.
Allowed edible ingredients: German Type 405 wheat flour or plain flour, water, agave syrup, canola oil, dried yeast, salt, and dried azuki beans.
Allowed tools: saucepan, lid, immersion blender, narrow mixing vessel, mixing bowl or stand mixer with dough hook, bamboo steamer, wide wok or shallow steaming pot, baking-paper squares.
Required preparation states: soaked beans cooked until crushable; smooth thick cooled paste; smooth elastic risen dough; flat wrapper with a thicker centre; paste centred on the wrapper; gathered and sealed crown; smooth seam-side-down bun on baking paper; soft steamed buns.
Forbidden additions: sesame, scallions, flowers, berries, jam, powdered sugar, glaze, icing, sauce, garnish, tea, chopsticks, dairy, eggs, unrelated ingredients, and branded appliance marks.
```

## Visual decisions

- The hero uses one open bamboo steamer as its compositional anchor, with overlapping buns, a lifted lid, one opened foreground bun, and a small factual cluster of dry azuki beans.
- The opened bun shows a cohesive finely puréed paste rather than identifiable whole beans.
- Hands are excluded from the final step series to preserve the established object-and-state illustration language.
- The dough step uses an unbranded dark stand mixer as a neutral tool illustration; the recipe text does not require this appliance.
- Shaping uses four separate transparent states so responsive HTML and SVG arrows can reflow without crossing the artwork.
- The steaming step shows one bamboo basket above hot water in a wide dark wok. A second stacked basket was deliberately omitted because it would imply unnecessary equipment or a second tier for this eight-bun batch.

## Asset manifest and ImageGen sources

| Final asset | Subject | Built-in ImageGen source |
| --- | --- | --- |
| `hero-cutout.webp` | finished buns in an open bamboo steamer with one opened bun | `exec-e0a6535d-5b7b-4d7c-a4d7-3ea4f550165f.png` |
| `ingredient-adzuki.webp` | dry azuki beans in a small ceramic bowl | `exec-6810c0df-932f-477b-856f-b7cc724be9a7.png` |
| `step-01.webp` | azuki beans simmering in a small pot | `exec-4a043b61-a07b-4395-a39b-f7534498f618.png` |
| `step-02.webp` | thick azuki paste under an immersion blender | `exec-30d40a15-5d59-405f-82ed-3d9642ba73f4.png` |
| `step-03.webp` | unbranded stand mixer kneading the dough | `exec-89cfabbb-3f4c-475d-aa4c-b199ef88d218.png` |
| `step-04-stage-1.webp` | flat wrapper with a thicker centre | `exec-48d8626e-4874-44b5-b59f-eb311672cf80.png` |
| `step-04-stage-2.webp` | smooth paste centred on the wrapper | `exec-e2fabc02-9976-423a-b22a-26c81a8fce91.png` |
| `step-04-stage-3.webp` | gathered and sealed pleated crown | `exec-b3107447-e3e4-462c-91bc-0c686102dcb9.png` |
| `step-04-stage-4.webp` | smooth seam-side-down bun on baking paper | `exec-0d03a5b5-fb53-4651-b2ba-fb66d73f52f3.png` |
| `step-05.webp` | bamboo basket above hot water in a wide wok | `exec-30f18e5e-590b-4275-b804-31b647238382.png` |

The hero and primary support assets were generated against an explicit `#ff00ff` chroma key. Final website assets use transparent lossless WebP. Red-heavy azuki artwork uses a tighter hard key and a restrained neutral edge correction because a broad magenta despill would desaturate the actual beans and paste. Local keyed and alpha working files remain under `tmp/imagegen/steamed-red-bean-buns/` and are excluded from version control.
