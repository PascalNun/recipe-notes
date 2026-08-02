# Small Cinnamon Braids — Production Plan

**Status:** complete asset set integrated, responsive review passed, and recipe published
**Style ID:** `RECIPE-NOTES-MIXED-MEDIA-V1`
**Content sources:** `src/content/recipes/kleine-zimtzoepfe/de.md` and `en.md`

This note records the approved braid geometry, cinnamon quantity, and yield and prepares the first hero pilot. It must be used together with the [editorial charter](../editorial-charter.md) and [asset style guide](../asset-style-guide.md).

## Reference Roles

- `../ref-img/imagezopf.png`: primary recipe-adjacent art-direction reference for contemporary yeast-pastry presentation, warmth, mixed media, and editorial rhythm. It must not dictate the new recipe's exact braid shape or generated wording.
- Approved white-bean hero: collection anchor for food realism, café light, paper integration, and restrained illustration.
- Optional future factual photograph or shaping sketch: authoritative source for the exact cutting, twisting, and braiding sequence.

## Factual Lock

```text
Required subject: small vegan cinnamon braids made from soft yeast dough with an agave, cinnamon, and sugar filling.
Allowed edible ingredients: flour, oat milk, margarine with about 80% fat, sugar, liquid stevia, dried yeast, salt, cinnamon, agave syrup, optional vanilla, optional cardamom, and optional small amounts of oat milk and neutral oil in the filling.
Allowed tools: plain mixing bowl, rolling pin, dough scraper or knife, baking tray, baking paper, pastry brush.
Required preparation states: smooth risen dough; rectangular rolled dough with agave, cinnamon, and sugar; shaped small braids; lightly golden baked braids with a tender crumb.
Required shape: each of 14 portions is divided lengthways into three strands that remain connected at the top, plaited into one small three-strand braid, then lightly pinched and tucked at the end. The filling is applied before dividing and braiding.
Required filling quantity: approximately 2–3 tsp cinnamon for the batch, depending on intensity.
Forbidden additions: butter, dairy milk, eggs, pearl sugar, icing, nuts, chocolate, fruit, cream cheese, powdered sugar, unrelated garnish, and unapproved glaze.
```

## Approved Editorial Decisions

- One batch makes exactly 14 small braids.
- The yeast dough uses 75 g softened margarine with about 80% fat; neutral oil is not the standard dough fat.
- The filling uses approximately 2–3 tsp cinnamon, according to desired intensity.
- The filling is applied across the rectangular dough before it is divided into 14 portions.
- Every portion becomes one small, clearly legible three-strand plait; it must not resemble a cinnamon roll or spiral bun.
- Vanilla and cardamom remain optional variations, not mandatory visible ingredients.
- The second proof ends when the shaped braids look visibly risen and more relaxed; the stated 15–20 minutes is a guide.

## Proposed Asset Manifest

| Filename | Family | Subject | Status |
| --- | --- | --- | --- |
| `hero-cutout-v4.webp` | hero | elongated cinnamon braids staged on one plate with a secondary tea cup and cinnamon cue | approved collection anchor |
| `ingredient-cinnamon.webp` | ingredient spot | cinnamon sticks, restrained ground cinnamon, and a small agave cue | generated and integrated |
| `step-01.webp` | step | smooth risen yeast dough in a simple bowl | generated and integrated |
| `step-02-stage-1.webp` | sequence | rectangular dough evenly coated with agave, cinnamon, and sugar | generated and integrated |
| `step-02-stage-2.webp` | sequence | one portion cut lengthways into three strands, connected at the top | generated and integrated |
| `step-02-stage-3-v2.webp` | sequence | exactly three connected strands, partly plaited with three loose ends | corrected and integrated |
| `step-02-stage-4.webp` | sequence | finished unbaked three-strand braid with its end tucked | generated and integrated |
| `step-03.webp` | step | lightly golden three-strand braids on a dark tray | generated and integrated |

Step 02 should use separate transparent state assets with editable SVG arrows, following the successful four-stage layering system from the white-bean recipe. Do not generate one wide composite with baked-in arrows.

## Hero Prompt Shell

### Hero-scene lock from `imagezopf.png`

The upper-left reference works because it is a small editorial food scene rather than a product lineup:

- a neutral ceramic plate acts as the compositional carrier and creates one coherent contact shadow;
- the camera is close and three-quarter, so the pastries show front faces, side volume, and depth;
- one large foreground braid leads into overlapping middle and background pieces;
- cropping, occlusion, varied rotations, and scale changes create appetite and visual density;
- the diagonal plate and pastry flow connects the title area to the method section;
- surrounding notes and doodles frame the photograph but remain separate editorial layers.

For the new recipe, preserve the approved elongated v2 braid form. Do not copy the reference's sugar or oat topping, cup, cinnamon sticks, wording, or knotted pastry geometry. A plain neutral plate is allowed as the hero's structural carrier; other props remain excluded unless separately approved.

```text
Reference map:
- Image 1 is the recipe-adjacent cinnamon-pastry poster. Use its upper-left photograph for scene architecture: plate anchor, close three-quarter camera, strong foreground pastry, overlapping depth, asymmetrical crop, and editorial appetite. Do not copy its bun shape, topping, cup, cinnamon sticks, wording, or page layout.
- Image 2 is the approved collection hero. Use it for natural café light, food realism, material detail, and integration with the shared paper page.
- Image 3 is the approved elongated v2 braid pilot and is authoritative for pastry geometry, cinnamon seams, colour, and surface.

[Insert the immutable RECIPE-NOTES-MIXED-MEDIA-V1 master style block here verbatim.]

Asset family: hero.
Create a close contemporary editorial food scene of five elongated vegan cinnamon braids on one plain neutral ceramic plate. Preserve the approved v2 pastry form exactly: every pastry is an open-ended elongated three-strand plait, never a knot, ring, spiral bun, or cinnamon roll. Build depth through one dominant foreground braid, overlapping middle pieces, and smaller or partly obscured rear pieces. Use varied rotations and natural occlusion rather than showing five complete silhouettes. The cinnamon-agave filling was applied before the dough was divided, so restrained dark seams remain visible along the plaited strands. Show a lightly golden, soft, appetising surface rather than a dry or heavily browned pastry.

Approved secondary hero elements: one small tea cup and two cinnamon sticks, used only as quiet compositional support.

Forbidden additions: icing, powdered sugar, pearl sugar, oat topping, nuts, chocolate, fruit, dairy ingredients, additional cups or ingredient props, cloth, old kitchen props, rustic bakery scenery, folk imagery, text, labels, people.

Output: one 4:3 transparent editorial scene cutout containing the plate, pastries, and their shared tactile shadow. Use an irregular softly feathered photographic or watercolour edge so the scene integrates with the website's separate paper background. No rectangular baked-in page and no baked-in typography.
```

## Generation Order

1. Generate and approve the hero. **Complete: v4 approved.**
2. Generate the ingredient spot, dough state, four shaping states, and baked-tray asset against the approved hero. **Complete.**
3. Extract to alpha and encode final lossless WebP derivatives. **Complete.**
4. Integrate the assets, verify the responsive sequence, and remove `draft: true` only after editorial approval. **Complete; German and English routes published.**

## Pilot Record

- Initial source: built-in ImageGen output `exec-f9067b0a-d904-4c45-b815-7b3db4402091.png`
- Correction source: built-in ImageGen output `exec-b69c359c-db9b-47cf-b301-cb6fb6bc7a55.png`
- Reference-led v2 source: built-in ImageGen output `exec-a1612ab9-2981-4cfb-898f-11f1a8750e93.png`
- Spatial v3 source: built-in ImageGen output `exec-527f53ee-df41-425c-bd80-91217fdd0d4c.png`
- Editorial plate-scene v4 source: built-in ImageGen output `exec-f94c5444-8350-4ab1-a217-a06f11012ec8.png`
- Working key image: `tmp/imagegen/small-cinnamon-braids/hero-key-v5.png`
- Current draft asset: `src/content/recipes/kleine-zimtzoepfe/assets/hero-cutout-v4.webp`
- Processing: explicit `#ff00ff` chroma key, soft alpha matte, one-pixel edge contraction, despill, then lossless WebP encoding with exact transparent RGB preservation
- Approval lock: exactly five pastries; each must read as a simple three-strand plait; no knot, spiral, cinnamon-roll coil, glaze, icing, sugar dusting, nuts, or garnish

### Supporting asset record

| Final asset | Built-in ImageGen source |
| --- | --- |
| `ingredient-cinnamon.webp` | `exec-1bbfdabd-e80a-416f-8285-2704c323e982.png` |
| `step-01.webp` | `exec-536fd7bc-6a08-4e08-90d4-c8e8736430d2.png` |
| `step-02-stage-1.webp` | `exec-c5090959-1571-4bfa-895c-e10022288dd8.png` |
| `step-02-stage-2.webp` | `exec-9a669e0d-5bee-4843-b4ed-93e3b00a8720.png` |
| `step-02-stage-3-v2.webp` | `exec-a193ea4e-ac49-43f9-aedc-f661733f6e36.png` |
| `step-02-stage-4.webp` | `exec-ac5eb0f1-eadc-4513-bccd-67290424d574.png` |
| `step-03.webp` | `exec-455bd995-425d-4262-b211-11a3654f92e6.png` |

All supporting assets use the same explicit `#ff00ff` key, soft alpha extraction, one-pixel edge contraction, despill, and lossless WebP encoding as the approved hero. Their keyed and alpha-master PNG files are preserved under `tmp/imagegen/small-cinnamon-braids/`.

The third shaping state was replaced after responsive review because the original partly braided form could be read as having duplicated or disconnected strands. The v2 asset uses one conventional three-strand over-under structure, exactly three connected loose ends, and a transparent WebP derivative. Its production key used `#00ff00`; the website derivative is lightly compressed at quality 88 with full-quality alpha.

The initial pilot was rejected internally because its pastry geometry read as knotted and twisted rather than as a clear three-strand plait. A targeted ImageGen edit made the geometry clearer, but its pastries remained too dry, stiff, and uniform compared with `imagezopf.png`. The v2 prompt therefore used that reference only for soft laminated dough, dark cinnamon seams, loose handmade rhythm, caramelisation, and food-zine warmth. It explicitly excluded the reference's sugar topping and unapproved recipe details. A subsequent spatial pilot changed the approved elongated pastry form into wreath-like shapes and was rejected. The v4 pilot instead treats the hero as one editorial café scene: the plate acts as the compositional carrier, the elongated braids overlap at multiple depths, and one tea cup plus two cinnamon sticks provide restrained secondary context. The completed recipe is published at `/de/rezepte/kleine-zimtzoepfe/` and `/en/recipes/small-cinnamon-braids/`.
