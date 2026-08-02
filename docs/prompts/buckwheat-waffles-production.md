# Buckwheat Waffles — Production Record

**Status:** complete bilingual recipe and asset set integrated  
**Style ID:** `RECIPE-NOTES-MIXED-MEDIA-V1`  
**Content sources:** `src/content/recipes/buchweizenwaffeln/de.md` and `en.md`

This record preserves the recipe-specific factual lock, exact waffle geometry, and generated source mapping. It must be read together with the [editorial charter](../editorial-charter.md), [asset style guide](../asset-style-guide.md), and [image prompt workflow](../image-prompt-workflow.md).

## Factual lock

```text
Required subject: thin round buckwheat waffles made from exactly five heart-shaped segments.
Allowed edible ingredients: chia seeds, water, coconut oil, sugar, buckwheat flour, cornstarch, plant drink, baking powder, cinnamon, vinegar, and optional greasing oil.
Allowed tools: small and large mixing bowls, spoon, whisk, small cup, ladle, unbranded round heart-waffle iron, and cooling rack.
Required preparation states: gelled chia mixture; smooth thick grey-brown batter; batter portioned into a five-heart iron; warm golden- to grey-brown finished waffles.
Forbidden additions: eggs, dairy, berries, yoghurt, cream, syrup, chocolate, powdered sugar, fruit, nut butter, and unrelated garnish.
```

## Visual decisions

- Every complete waffle in the hero and final step has exactly five hearts and a shallow European profile.
- The waffle-iron source was corrected after an early version produced six segments. Both approved cooking plates now show exactly five broad radial hearts.
- A separated heart in the hero and final step clarifies the characteristic geometry without introducing a serving garnish.
- The batter is deliberately grey-brown and thick rather than pale or pourably thin.
- The chia step uses a lifted ribbon of gel so the binding transformation reads without hands or text.

## Asset manifest and ImageGen sources

| Final asset | Subject | Built-in ImageGen source |
| --- | --- | --- |
| `hero-cutout.webp` | finished five-heart buckwheat waffles on a cooling rack | `exec-5e7823cf-d256-45c8-9774-1500d3ccef99.png` |
| `step-01.webp` | gelled chia mixture in a small bowl | `exec-3634d8f3-6071-4faa-ac3a-5bb8688b7344.png` |
| `step-02.webp` | thick buckwheat batter under a whisk | `exec-ed8859c8-f6e9-4684-82cd-f53f2eb86670.png` |
| `step-03.webp` | batter entering an exact five-heart round waffle iron | `exec-6e2ee857-1519-4d38-bd96-6d085f333180.png` |
| `step-04.webp` | three five-heart waffles cooling separately | `exec-7d69117b-68ca-49fc-9ccd-0ba5ec1de093.png` |

Selected keyed sources and full-resolution alpha masters live under `local-assets/masters/buchweizenwaffeln/`. Website derivatives are transparent lossless WebP files beside the recipe content.
