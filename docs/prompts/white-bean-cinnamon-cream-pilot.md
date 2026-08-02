# White Bean Cinnamon Cream — Image Pilot

This production note records the first three-asset pilot for the white bean cinnamon cream recipe. It should be read together with [the asset style guide](../asset-style-guide.md).

- **Style ID:** `RECIPE-NOTES-MIXED-MEDIA-V1`
- **Generation mode:** built-in ImageGen
- **Recipe-specific reference:** [`../ref-img/image.png`](../ref-img/image.png)
- **Cross-recipe style reference:** [`../ref-img/imagezopf.png`](../ref-img/imagezopf.png)
- **Hero anchor:** `src/content/recipes/weisse-bohnen-zimt-creme/assets/hero-cutout-v3.webp`
- **Transparent pilot assets:** `hero-cutout-v3.webp`, `ingredient-sunflower.webp`, and `step-01.webp` in the same recipe asset folder

## Shared Master Block

Every prompt below included the immutable master style block from section 3 of [the asset style guide](../asset-style-guide.md) without modification. The blocks recorded below are the reference, family, subject, and output instructions that surrounded it.

## Initial Hero Prompt

```text
Reference map:
- Image 1 is the recipe-specific white bean cinnamon cream poster. Use it for the dish identity, mixed-media balance, warm paper atmosphere, visual density, and editorial energy. Do not copy its text or page layout.
- Image 2 is a cross-recipe cinnamon-bun poster. Use it only to identify the stable series language: believable food, warm café light, restrained ink, watercolour, collage edges, and contemporary hand-made refinement.

[Insert the immutable RECIPE-NOTES-MIXED-MEDIA-V1 master style block here verbatim.]

Asset family: hero.
Create one compact editorial three-quarter composition of a clear straight-sided dessert glass layered with smooth pale white-bean cinnamon cream and crisp oat crunch. Make the cream velvety and appetising, with visible cinnamon flecks but no visible whole beans. Show convincing toasted oat clusters and sunflower-seed texture. Beside it, place one small speckled ceramic espresso cup, half a fresh lime, and two cinnamon sticks. Keep all props subordinate to the dessert. Add only restrained black-ink and watercolour accents around the outer paper area. Use warm natural café daylight and short soft contact shadows.

Required subject: layered white-bean cinnamon cream with oat crunch.
Allowed supporting cues: espresso, lime, cinnamon, sunflower seeds.
Forbidden additions: berries, mint, chocolate, dairy foam, flowers, icing sugar, labels, typography, people.

Output: one 4:3 hero artwork, no text, no border or framed card, generous warm paper around the composition, safe for responsive cropping. The outer paper must be quiet enough to fade into the website's shared paper background.
```

## Hero Background Extraction Prompt

The first hero generation established the approved food and prop composition, but its rectangular paper field still behaved like an embedded image. The following built-in ImageGen edit preserved the approved subject and converted it into the final organic cluster:

```text
Use case: background-extraction
Asset type: responsive recipe-poster hero cutout
Input image: Image 1 is the edit target. Preserve its central food-and-prop composition and visual identity.

Primary request: replace only the broad rectangular paper background of Image 1 with a perfectly flat, uniform, high-saturation #ff00ff magenta chroma-key field. Preserve the layered white-bean cinnamon cream dessert glass, all oat and sunflower-seed crunch texture, the speckled espresso cup and espresso, the half lime, cinnamon sticks, scattered oats/seeds/crumbs, the two existing black-ink botanical sketches, small ink marks, and one restrained irregular beige/sage watercolour grounding wash beneath the objects. Keep these preserved elements together as one organic editorial cutout cluster.

Invariants: retain the same three-quarter composition, proportions, appetising realism, warm café light, glass shape, cup shape, object positions, ink weight, and mixed-media treatment. Do not redesign the food or add anything. Keep the outer silhouette irregular, with scattered seeds and sketch marks extending beyond the central objects. Preserve generous padding around the full cluster.

Background requirements: all pixels outside the preserved organic cluster must be one uniform #ff00ff with no paper grain, no texture, no gradient, no floor plane, no lighting variation, and no shadows extending into the key. Do not tint the clear glass, cream highlights, ceramic, or ink with magenta. No magenta reflections or magenta fringe on the subject.

Avoid: rectangular paper area, framed image, card, typography, numbers, labels, logo, watermark, new ingredients, flowers, people.
```

## Ingredient Spot Prompt

```text
Reference map:
- Use the approved recipe hero as the primary anchor for palette, light, ink weight, watercolour restraint, and material treatment.
- Use the two poster references only as secondary confirmation of the shared editorial-zine language. Do not copy their layout or decorations.

[Insert the immutable RECIPE-NOTES-MIXED-MEDIA-V1 master style block here verbatim.]

Asset family: ingredient spot.
Create one compact botanical ingredient study: a small sunflower with a short green stem and two leaves, a loose scattering of striped sunflower seeds, and one small shallow bowl of creamy golden sunflower-seed butter. Keep the three elements close enough to read as one editorial spot, with a clean irregular silhouette and generous empty margin. Food and seeds remain believable; the flower and leaves may be slightly more illustrative.

Required subject: sunflower, sunflower seeds, sunflower-seed butter.
Forbidden additions: packaging, labels, text, other nuts, flowers of another species, extra food, props, people.

Output: one centred 1:1 cutout source on a perfectly flat, uniform, high-saturation magenta chroma-key background. No magenta may appear in the subject. No paper rectangle, cast shadow extending into the key, text, border, or watermark. Preserve ample padding for alpha extraction.
```

## Step 01 Prompt

```text
Reference map:
- Use the approved recipe hero as the primary anchor for warm light, palette, toasted-food realism, ink contours, and material treatment.
- Use the poster references only for the stable editorial-zine language. Do not copy their layout, text, arrows, or numbered panels.

[Insert the immutable RECIPE-NOTES-MIXED-MEDIA-V1 master style block here verbatim.]

Asset family: step illustration.
Show the state and tools for toasting sunflower seeds and blending them into seed butter: one small dark frying pan holding lightly golden toasted sunflower seeds beside one compact countertop blender containing smooth pale-golden sunflower-seed butter. Use a simple, immediately legible arrangement with no hand, no before-and-after panels, no arrow, and no step number. Simplify the blender jar into a lightly filled editorial illustration so its edge extracts cleanly; keep the seeds and seed butter tactile and believable.

Required subject: toasted sunflower seeds in a pan and sunflower-seed butter in a blender.
Forbidden additions: oil bottle, nuts, beans, garnish, labels, text, people, extra appliances.

Output: one 1:1 cutout source on a perfectly flat, uniform, high-saturation magenta chroma-key background. No magenta may appear in the subject. No paper rectangle, ground plane, caption, border, or watermark. Keep a clean silhouette and generous padding for alpha extraction.
```

## Steps 02–07 Completion

The remaining process artwork was generated as six distinct built-in ImageGen requests. Steps 02 and 03 used the two poster references, approved hero, and approved step 01. The successful step 04–07 requests used the smaller reference set below after a larger parallel reference upload failed at the network layer:

```text
Reference map:
- Image 1 is the approved white bean dessert hero and the authoritative anchor for warm café light, palette, appetising food realism, materials, ink weight, and restrained watercolour treatment.
- Image 2 is the approved step-01 illustration and the closest anchor for process-image scale, simplification, clean silhouette, and the balance between realistic food and editorial illustration.
```

Every request then included the immutable `RECIPE-NOTES-MIXED-MEDIA-V1` master block verbatim, followed by the step-illustration family block from the style guide and one of these exact recipe blocks:

### Step 02

```text
Recipe step 02 — prepare the beans.
Primary request: one compact stainless-steel mesh colander or sieve holding thoroughly rinsed plain white beans, with a small number of clean water droplets clinging to the beans and falling from the colander. The beans are pale ivory, drained, fresh, and neutral-looking rather than saucy. Use a slightly elevated three-quarter view. Keep the object readable at small size and let the beans remain the most realistic detail.
Required subject: rinsed and briefly drained white beans in one simple metal colander.
Allowed vessels and tools: one unbranded stainless-steel colander or sieve only.
Required preparation state: beans rinsed clean, moist but not sitting in liquid.
Forbidden additions: chickpeas, kidney beans, herbs, oil, sauce, garnish, hands, faucet, kitchen scene, extra bowls.
```

### Step 03

```text
Recipe step 03 — make the cream.
Primary request: one compact countertop blender containing a smooth pale ivory white-bean cinnamon cream. The cream is thick, velvety, completely blended, lightly flecked with cinnamon, and visibly swirling near the top. Use a simple three-quarter view. Simplify the blender jar into a lightly filled editorial illustration so its silhouette extracts cleanly, while the cream remains appetising and believable.
Required subject: smooth pale white-bean cinnamon cream in one compact blender.
Allowed vessels and tools: one unbranded countertop blender only.
Required preparation state: fully blended, thick, silky, no visible whole beans.
Forbidden additions: loose beans, garnish, mint, berries, chocolate, extra bowls, hands, labels, buttons with text, kitchen scene.
```

### Step 04

```text
Recipe step 04 — prepare the oat crunch.
Primary request: one lightly speckled ceramic mixing bowl holding a moist, irregular oat-crunch mixture, with one simple metal spoon resting in the bowl. Show distinct fine and jumbo oat flakes bound into loose golden-beige clumps; the mixture should look lightly moist and crumbly, not baked and not like porridge. Use a close three-quarter view with the bowl filling most of the composition.
Required subject: unbaked oat-crunch mixture in one bowl with one spoon.
Allowed vessels and tools: one small speckled ceramic bowl, one plain metal spoon.
Required preparation state: mixed, lightly moist, loose crumbly clumps.
Forbidden additions: fruit, nuts, chocolate, yoghurt, milk splash, hands, whisk, extra bowls, kitchen scene.
```

### Step 05

```text
Recipe step 05 — bake the crunch.
Primary request: one shallow dark metal baking tray covered with an irregular single layer of freshly baked golden oat crunch clusters, paired with one small simplified front-facing oven as a subordinate editorial object. The crunch should look crisp, toasted, uneven, and appetising without being burnt. Keep the tray visually dominant and the oven secondary, like a refined process illustration rather than a kitchen scene.
Required subject: baked oat crunch spread across a dark baking tray; one small oven cue.
Allowed vessels and tools: one unbranded rimmed baking tray and one compact unbranded oven.
Required preparation state: fully baked, golden-brown, dry and crisp, irregular clusters.
Forbidden additions: cookies, granola bars, fruit, nuts, chocolate, parchment text, oven flames, hands, utensils, kitchen room.
```

### Step 06

```text
Recipe step 06 — add the espresso finish.
Primary request: one small speckled ceramic bowl filled with crisp golden oat crunch while a simple metal teaspoon above it releases one restrained dark espresso droplet onto the crunch. The droplet and a very small darkened patch should make light flavouring clear without making the crunch soaked. No hand is visible. Use a compact close three-quarter composition with the spoon and bowl forming one clean silhouette.
Required subject: crisp oat crunch in a bowl, lightly drizzled with espresso from one teaspoon.
Allowed vessels and tools: one speckled ceramic bowl and one plain metal teaspoon.
Required preparation state: crunch remains crisp; only a few drops of espresso.
Forbidden additions: full coffee cup, milk, foam, chocolate, syrup bottle, fruit, nuts, hands, kitchen scene.
```

The first approved step-06 composition clipped the spoon handle. It was corrected with this built-in edit prompt:

```text
Use case: precise-object-edit
Asset type: square chroma-key source for a responsive recipe-zine step illustration
Input image: Image 1 is the edit target.

Primary request: change only the spoon placement and the surrounding padding. Shorten or reposition the spoon so the complete spoon, including the entire handle tip, is fully visible inside the square canvas with generous clear magenta margin on every side. Keep the spoon above the bowl releasing the same restrained espresso droplet.

Invariants: preserve the exact speckled ceramic bowl, crisp golden oat crunch, central darkened espresso spot, espresso colour, food detail, warm light, ink contour treatment, camera angle, and overall mixed-media style. Preserve the perfectly flat uniform high-saturation #ff00ff magenta chroma-key background. Do not redesign or move the bowl.

Constraints: no object may touch or cross a canvas edge; no text, letters, numbers, logos, hands, additional props, ingredients, shadows, paper texture, gradient, floor plane, border, or watermark. No magenta may appear in the subject.
```

### Step 07

```text
Recipe step 07 — layer the dessert.
Primary request: four simple straight-sided dessert glasses arranged left to right as one quiet instructional sequence: glass one contains a bottom layer of golden oat crunch; glass two adds a smooth pale cream layer; glass three adds a loose middle crunch layer; glass four shows the finished top cream layer. Keep the four glasses closely related and evenly spaced, with only the dessert layers changing. Use lightly filled pale blue-grey editorial glass outlines rather than physically transparent glass so the cutout remains clean. Make the cream smooth with fine cinnamon flecks and the crunch crisp and golden.
Required subject: four-stage layering sequence of the same dessert glass.
Allowed vessels and tools: four identical unbranded straight-sided glasses only.
Required preparation state: exact sequence crunch, cream, crunch, final cream.
Forbidden additions: arrows, numbers, captions, spoons, espresso cup, fruit, garnish, hands, extra glasses, kitchen scene.
```

Every generation request ended with this exact output block:

```text
Output requirements: one square cutout source on a perfectly flat, uniform, high-saturation #ff00ff magenta chroma-key background. The background must have no paper texture, gradient, floor plane, lighting variation, cast shadow, or reflection. Keep the entire subject fully separated from the background with generous padding and a crisp irregular silhouette. No magenta may appear in the subject. No text, number, border, card, frame, or watermark.
```

## Layout-Correction Asset Set

The final layout review showed that four small editorial gaps needed purpose-built artwork instead of repeated CSS decoration. Each request used built-in ImageGen, the same reference hierarchy, and the immutable `RECIPE-NOTES-MIXED-MEDIA-V1` block. The exact subject and output instructions were:

### Slim Sunflower Ingredient Spot

```text
Asset family: ingredient spot.
Create one slim upright botanical study: exactly one small sunflower on a short sage-green stem with exactly two leaves, accompanied by a loose scattering of 6–10 striped sunflower seeds. Keep the composition airy, narrow, and vertically oriented so it can sit inside a recipe ingredient column. Use believable seed detail, restrained black-ink contours, and light watercolour pigment variation.

Required subject: one sunflower, one short stem, two leaves, and 6–10 loose sunflower seeds.
Forbidden additions: bowl, seed butter, other flowers, packaging, text, labels, people, extra food.

Output: one centred 1:1 cutout source on a perfectly flat, uniform, high-saturation #ff00ff magenta chroma-key background. No magenta may appear in the subject. No paper rectangle, floor plane, cast shadow extending into the key, text, border, or watermark. Preserve generous padding for alpha extraction.
```

### Espresso Ingredient Spot

```text
Asset family: ingredient spot.
Create exactly one small speckled ceramic espresso cup filled with dark espresso, viewed from a gentle three-quarter angle. Add only two or three restrained black-ink steam strokes and one tiny hand-drawn grounding line. Keep the cup compact, warm, tactile, and readable at small size.

Required subject: one small speckled ceramic espresso cup with espresso.
Forbidden additions: saucer, spoon, beans, cinnamon, milk, foam, second cup, text, labels, people.

Output: one centred 1:1 cutout source on a perfectly flat, uniform, high-saturation #ff00ff magenta chroma-key background. No magenta may appear in the subject. No paper rectangle, floor plane, broad cast shadow, text, border, or watermark. Preserve generous padding for alpha extraction.
```

### Character Vignette

```text
Asset family: ingredient spot.
Create one compact editorial still life for the dessert's character: a small speckled ceramic cup or ramekin holding pale cinnamon cream and a little oat crunch, accompanied by exactly two cinnamon sticks, one fresh lime wedge, and a restrained scatter of oats and sunflower seeds. Keep the arrangement asymmetrical and lively, with believable food at the centre and restrained ink accents around its outer silhouette.

Required subject: pale cinnamon cream, oat crunch, cinnamon sticks, lime wedge, oats, and sunflower seeds.
Forbidden additions: flowers, berries, mint, chocolate, cutlery, packaging, text, labels, people.

Output: one centred 1:1 cutout source on a perfectly flat, uniform, high-saturation #ff00ff magenta chroma-key background. No magenta may appear in the subject. No paper rectangle, floor plane, broad cast shadow, text, border, or watermark. Preserve generous padding for alpha extraction.
```

### Health Botanical

```text
Asset family: ingredient spot.
Create one airy botanical cluster containing exactly one small side-facing sunflower, one white-bean sprig with exactly two pale bean pods, and exactly two oat stems. Keep the elements botanically legible, lightly interwoven, and refined enough to accompany a short nutrition note without becoming its own scene.

Required subject: one sunflower, one white-bean sprig with two pods, and two oat stems.
Forbidden additions: loose food, bowls, packets, other flowers, vegetables, text, labels, people.

Output: one centred 1:1 cutout source on a perfectly flat, uniform, high-saturation #ff00ff magenta chroma-key background. No magenta may appear in the subject. No paper rectangle, floor plane, broad cast shadow, text, border, or watermark. Preserve generous padding for alpha extraction.
```

The approved website files are `ingredient-sunflower-v2.webp`, `ingredient-espresso.webp`, `character-vignette.webp`, and `health-botanical.webp`. Step 07 uses four lossless local crops named `step-07-stage-1.webp` through `step-07-stage-4.webp`. Each glass and each editable SVG arrow occupies its own CSS Grid column. This keeps the sequence large and prevents arrows from crossing the glass artwork at any responsive width. The former wide composite is retained only as a local PNG master under `tmp/asset-masters/weisse-bohnen-zimt-creme/` and is not part of the website source.

## Alpha Extraction and Integration

All pilot cutout sources were generated or edited onto a removable magenta key because direct transparent generation was not sufficiently reliable for these complex mixed-media edges. The first ingredient and step tests used the repository-independent helper shipped with the ImageGen skill:

```text
remove_chroma_key.py --auto-key border --soft-matte --transparent-threshold 12 --opaque-threshold 90 --despill
```

The general soft-matte helper was too broad for the complex glass hero: it made pale glass, cream, oats, and ceramic partially transparent. The final `v3` extraction therefore keys only the narrow magenta colour range and keeps every remaining subject pixel opaque. A sub-pixel alpha blur softens only the immediate edge; a final narrow recolour removes the remaining magenta fringe without deleting pale detail:

```text
magick hero-key.png -alpha on -fuzz 40% -transparent '#f504e2' -channel A -blur 0x0.3 +channel hero-keyed.png
magick hero-keyed.png -fuzz 44% -fill '#b7a18b' -opaque '#f504e2' hero-cutout-v3.png
cwebp -lossless -z 9 -exact hero-cutout-v3.png -o hero-cutout-v3.webp
```

All cutouts were checked against the actual `#fffaf0` site paper. Temporary key sources and lossless PNG masters stay local and outside version control; recipe content references only the final lossless WebP files. The `-exact` flag preserves RGB values in fully transparent pixels as well as the alpha channel.

The completion assets were checked with the general soft-matte helper first, but that workflow reduced saturation and opacity in pale beans, ceramic, metal, cream, and oats. The final six assets therefore use the same narrow-key principle as the corrected hero. The sampled key colour varies slightly per generated source; the production command uses 38% key fuzz, a 0.3 px alpha blur, and 43% narrow fringe recolouring before trim, square padding, 1024 px resize, and lossless WebP encoding:

```text
magick step-key.png -alpha on -fuzz 38% -transparent '<sampled-key>' -channel A -blur 0x0.3 +channel step-direct-raw.png
magick step-direct-raw.png -fuzz 43% -fill '#b7a18b' -opaque '<sampled-key>' step-direct-clean.png
cwebp -lossless -z 9 -exact step-final.png -o step-final.webp
```

Final tracked assets are `step-02.webp` through `step-07.webp` in the recipe asset folder. Their keyed sources, direct-key PNGs, paper previews, and contact sheets remain under `tmp/imagegen/white-bean-complete/`.

## Pilot Decision

This pilot establishes the intended layer model:

- the hero is one transparent organic cluster containing the photographic centre, an irregular watercolour ground wash, and a few attached ink marks;
- ingredient and step artwork contains only the subject on transparency;
- page paper, marker fields, irregular dividers, and responsive doodles remain in HTML, CSS, or SVG;
- artwork is deliberately large within its editorial column instead of behaving like a small card icon.

The reviewed hero and seven-step sequence now form the visual reference set for future recipe production. New recipes should reuse the same separation of content, generated artwork, responsive doodles, and paper-layer styling while varying the composition and accent marks to suit the recipe.
