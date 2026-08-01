# Asset Style Guide

This document is the single source of truth for generated recipe artwork. It defines the stable visual language of the project; individual prompts define only the subject, action, and crop.

Read it together with the project-wide [editorial charter](editorial-charter.md), which defines the cultural position behind the visual rules.

**Style ID:** `RECIPE-NOTES-MIXED-MEDIA-V1`
**Status:** Production baseline
**Applies to:** hero images, step illustrations, ingredient spots, and optional decorative raster assets

If the visual direction changes materially, create a new style version instead of silently changing this one. That keeps older recipes reproducible and prevents a series from drifting during production.

## 1. Visual DNA

The target is a contemporary editorial food zine, not a literal copy of the reference poster.

- roughly 70% believable, appetising food and material detail
- roughly 30% refined hand-drawn, watercolour, and paper-collage character
- warm natural café light with soft, short shadows
- tactile off-white paper, restrained grain, and occasional irregular collage edges
- real fibre and pigment variation should remain visible at normal reading scale; avoid perfectly flat digital fills
- confident black ink accents used sparingly
- urban, modern, plant-based, and editorial
- handmade but refined; playful but never childish
- regional through ingredients and seasonality, never through nostalgic rural clichés

The food must remain the most realistic part of every image. Ink, watercolour, and paper texture should frame and connect the subject rather than obscure its texture.

### Cultural Guardrails

Warmth must come from food, light, paper, pigment, and handwork—not from historical staging. Do not use half-timbered houses, folk costume, nostalgic bakery interiors, country-house props, gingham styling, sentimental family-kitchen scenes, or “grandmother's recipe” imagery. A regionally named pastry can still be shown in a contemporary café and editorial-design context.

The preferred cultural references are contemporary cafés, modern patisserie, independent food publications, architecture, and editorial design. The result should feel designed without becoming sterile and handmade without becoming rustic nostalgia.

## 2. Reference Hierarchy

References have different jobs. State those jobs explicitly in every generation request.

1. **Recipe-specific poster reference:** controls mood, visual density, mixed-media balance, editorial energy, and the broad identity of the featured dish. It is not an edit target. Do not reproduce its text, exact page layout, or individual decorations.
2. **Cross-recipe poster reference:** reveals which visual properties remain stable when the dish changes. It controls the shared series language, never the food, ingredients, or props of the current recipe.
3. **Approved recipe hero:** once available, this becomes the main anchor for light, food realism, palette, glassware, ceramics, shadows, and material treatment across the recipe series.
4. **Optional factual reference:** controls the identity or preparation state of a dish, ingredient, vessel, or tool only. It must not override the approved style.

Do not ask one reference to control every decision. When references are supplied, identify each one by its image order and describe its role. Use the smallest set needed for the asset. The current reference files and their exact roles are catalogued in [ref-img/README.md](ref-img/README.md).

## 3. Immutable Master Style Block

Copy this block unchanged into every asset prompt made under `RECIPE-NOTES-MIXED-MEDIA-V1`.

```text
STYLE ID: RECIPE-NOTES-MIXED-MEDIA-V1
Use case: stylized-concept
Asset type: contemporary editorial recipe-zine food artwork
Reference policy: follow the explicit image-by-image reference map at the start of this prompt. Poster references control only the roles assigned to them; do not copy their page, typography, generated text, or exact arrangement. An approved recipe hero outranks poster references for light, palette, food realism, materials, vessels, and shadow treatment. A factual subject reference must not override the visual style.
Style/medium: approximately 70% believable appetising food and tactile material detail, 30% refined hand-drawn mixed media; subtle black ink contours, restrained watercolour shadows, occasional paper-collage edges, light natural grain
Lighting/mood: warm natural café daylight, soft short shadows, fresh and calm, editorial rather than commercial, handmade but not childish
Color palette: warm paper white, oat beige, terracotta, muted warm pink, sage green, pale blue, cinnamon brown, espresso brown, and small black ink accents
Materials/textures: matte lightly fibrous paper, lightly speckled ceramic, clear glass, natural wood used sparingly, toasted grains and seeds, soft cream, restrained pigment variation
Food treatment: the food is the most realistic and detailed element; preserve believable moisture, crispness, weight, translucency, and preparation state; keep it recognisable and appetising
Regional character: express place through seasonal ingredients, restraint, and contemporary café culture; never use nostalgic rural or folk imagery
Cultural direction: contemporary Central European plant-based food culture informed by modern cafés, patisserie, architecture, design magazines, and food zines; warm but not nostalgic, expressive but not folkloric, refined but not sterile
Fixed constraints: no text, no letters, no labels, no numbers, no logo, no watermark, no packaging, no invented ingredients, no unrelated garnish, no people, no excessive props, no glossy advertising look, no childish cartoon style, no heritage staging, no romantic homeland imagery, no retro bakery interior, no vintage country-house styling, no folk costumes, no half-timbered architecture, no “grandmother's kitchen” symbolism
```

## 4. Prompt Assembly

Build every prompt from the same five blocks and keep them in this order:

```text
1. Reference roles
2. Immutable master style block
3. Asset-family block
4. Recipe-specific subject block
5. Output and crop requirements
```

Blocks 1 and 3–5 may vary as references and subjects change. Block 2 must remain identical. Do not paraphrase the master style block between assets. A recipe production note should also list the exact approved references and the style ID.

For the initial white bean cinnamon cream pilot, use the exact reference map in [ref-img/README.md](ref-img/README.md). The two poster images are complementary, not interchangeable: one is recipe-specific and the other establishes cross-recipe consistency.

## 5. Asset-Family Blocks

### Hero

The hero creates appetite and establishes the recipe's material world.

```text
Asset family: hero
Composition: one dominant finished dish in a compact editorial three-quarter view; a small number of recipe-accurate supporting objects; clear visual hierarchy; an organic outer silhouette with enough transparent padding for responsive placement
Treatment: highest food realism in the series; include only a restrained irregular watercolour grounding wash and attached ink marks, never a rectangular paper backdrop
Avoid: flat overhead catalogue layout, excessive garnish, crowded prop styling, cut-off vessel rims, or decoration competing with the food
Preferred working ratio: 4:3 or 5:4
```

### Step Illustration

Each step image explains one action or preparation state at a glance.

```text
Asset family: step illustration
Composition: one action or state, one or two essential tools or vessels, simple silhouette, generous edge padding, minimal background, no visual storytelling beyond the named step
Treatment: consistent light and materials from the approved hero; slightly more illustrative than the hero while keeping ingredients believable
Avoid: montage panels, arrows, captions, step numbers, unnecessary hands, additional ingredients, or showing both before and after unless explicitly requested
Preferred working ratio: 1:1
```

Use a hand only when the action cannot otherwise be understood. If a transformation must be shown, prefer two clearly related objects within one quiet composition rather than a comic-strip sequence.

When a process genuinely requires three or more ordered states, export every state as a separate transparent crop. Place the states and editable HTML or SVG arrows in alternating layout columns. Do not bake arrows into the raster artwork or overlay them across a single tightly spaced composite; responsive resizing otherwise causes the arrows to cover the subject.

### Ingredient Spot

Ingredient spots connect sections and fill small editorial gaps without carrying instructions.

```text
Asset family: ingredient spot
Composition: one ingredient or one tightly related cluster, centred or gently asymmetrical, isolated on warm off-white paper, clear silhouette, generous empty margin
Treatment: refined botanical or object-study character with restrained ink and watercolour; simpler than the hero and steps
Avoid: packaging, labels, decorative ingredients not used in the recipe, dense scenery, or multiple unrelated subjects
Preferred working ratio: 1:1
```

Ingredient spots are transparent cutouts by default. The shared paper, marker fields, and grounding shadows belong to the website layer so the artwork can move, overlap, collapse, and recompose without exposing rectangular image boundaries.

### Global Decoration

Generate raster decoration only when paper texture or physical material is important. Simple hearts, arrows, lines, labels, and marker strokes should remain editable HTML, CSS, or SVG.

```text
Asset family: global decoration
Composition: one reusable non-informational mark or material sample, isolated with generous margin
Treatment: tactile paper, tape, pigment, or restrained hand-drawn botanical detail that can support multiple recipes
Avoid: recipe ingredients, text, symbols with instructional meaning, or a visual centre strong enough to compete with food
```

The production baseline includes one subtle seamless paper scan and one neutral watercolour alpha mask. The exact prompts and processing are recorded in [prompts/global-material-textures.md](prompts/global-material-textures.md). Recolour the shared watercolour mask in CSS for marker fields and textured grounding shadows instead of drawing clean digital rectangles or applying generic blurred drop shadows.

## 6. Palette and Material Reference

The interface palette is a useful anchor, but generated imagery should interpret it as natural material colour rather than flat digital swatches.

| Role | Project colour | Use in imagery |
| --- | --- | --- |
| Paper | `#f7f1e5` | warm off-white paper and quiet background |
| Light paper | `#fffaf0` | highlights and clean breathing room |
| Oat | `#e8d0a4` | grains, tape, pale collage fields |
| Terracotta | `#b95f35` | restrained warmth and ceramic accents |
| Warm pink | `#e9a09f` | small painted fields or splashes |
| Sage | `#a8b971` | botanical accents and paper scraps |
| Pale blue | `#a8c9d1` | cool counterpoint in small areas |
| Coffee | `#563a2c` | espresso, dark shadows, ceramics |
| Cinnamon | `#a76632` | toasted food and spice warmth |
| Ink | `#1e1b18` | fine contours and minimal graphic accents |

Do not force every colour into every image. Most assets should be dominated by paper, natural food colour, and one or two supporting accents.

## 7. Recipe Fidelity

Before generating, create a short factual lock for the recipe:

```text
Required subject:
Allowed ingredients:
Allowed vessels and tools:
Required preparation state:
Forbidden additions:
```

Every visible edible element must occur in the recipe. Common image-model additions such as mint, berries, chocolate, powdered sugar, dairy foam, or decorative flowers are forbidden unless the written recipe includes them.

For the white bean cinnamon cream series, the allowed edible elements are white beans, sunflower seeds, vegan skyr or soy yoghurt, fine and jumbo rolled oats, flour, sugar, stevia, agave syrup, vanilla, cinnamon, salt, lime juice, neutral oil, optional plant milk, baking powder, and espresso. Not every allowed ingredient needs to be visible. The hero should not expose whole beans unless they are intentionally shown as a small factual ingredient cue; the finished cream itself must look smooth.

## 8. Output Standards

Keep the highest-quality approved source separately when practical. Website filenames remain stable so artwork can be replaced without changing components.

| Asset | Working ratio | Web target | Filename pattern |
| --- | --- | --- | --- |
| Hero | 4:3 or 5:4 | about 1600 × 1200 px lossless WebP with alpha | `hero-cutout.webp` |
| Step | 1:1 | about 900 × 900 px lossless WebP with alpha | `step-01.webp` |
| Ingredient | 1:1 | about 600 × 600 px lossless WebP with alpha | `ingredient-<name>.webp` |

Final dimensions may change after layout testing. Preserve crop safety around the subject and avoid placing important detail against the image edge. PNG, keyed, or layered masters may remain in the local production workspace, but only approved lossless WebP derivatives belong in the website source.

### Layering Policy

- Hero, step, and ingredient artwork uses transparent backgrounds. The hero may carry one irregular watercolour grounding wash as part of its organic cluster, but never a rectangular paper field.
- The shared notebook-like paper exists only once at page level. Coloured strokes, editorial rules, labels, and most shadows are rendered by the website.
- A subtle paper overlay may cross HTML, raster artwork, and coloured notes so they feel printed onto the same physical sheet. It must never reduce text contrast.
- Grounding shadows are irregular, pigment-based washes with visible grain and broken edges. Do not use a generic CSS drop shadow as the primary depth treatment for recipe artwork.
- Generated subjects should occupy roughly 65–85% of their available editorial slot. Tiny centred icons immediately make the composition feel like a conventional component grid.
- Playful ink arrows, sparks, droplets, seeds, leaves, and motion lines are a separate sketch layer. Keep them in SVG/CSS when they must recompose responsively; include them in a raster cutout only when they are inseparable from the subject.
- For cutouts, generate against a flat removable chroma-key colour, remove it locally, and inspect the alpha edge on the actual site paper before approval.
- Simplify glass and other translucent materials into lightly filled editorial illustrations when a clean cutout matters more than physical transparency.
- Keep a self-contained paper tile only as a documented exception when a subject cannot be extracted cleanly.

### Layout Geometry

- Do not wrap poster sections in reusable card shells.
- Organise content with open columns, whitespace, overlap, and lightly irregular hand-drawn rules.
- A divider marks a real editorial boundary only; it does not outline every component.
- Paper notes may remain physical-looking rectangles when the reference genuinely uses a taped or torn note.
- On mobile, replace desktop column rules with loose horizontal sketch rules rather than rounded cards.

## 9. Consistency Workflow

1. Generate the three-asset pilot: hero, one step, and one ingredient spot.
2. Approve the hero before completing the series.
3. Use the approved hero as the recipe anchor in all later prompts.
4. Generate one distinct asset per request. Do not ask for a sheet of unrelated final assets in one image.
5. Keep the style block identical and change only family, subject, and crop blocks.
6. Review all assets together in a contact sheet.
7. Regenerate outliers instead of compensating for them with CSS filters.
8. Integrate approved files, write factual alternative text, and test desktop and mobile crops.

## 10. Approval Checklist

An asset is ready only when all answers are yes:

- Is the food or action immediately recognisable?
- Are all visible edible elements allowed by the recipe?
- Does the food look appetising rather than merely decorative?
- Does it match the approved hero's light, palette, paper, and material treatment?
- Is the photography-to-illustration balance close to the style baseline?
- Is the composition useful in its intended layout slot and safe to crop?
- Is there no text, pseudo-text, number, logo, or watermark?
- Does the result feel contemporary and refined rather than childish or nostalgic?

## 11. Change Control

Small recipe-specific corrections do not require a new version. A new style ID is required when changing the realism ratio, drawing language, lighting model, palette, paper treatment, or overall cultural direction. Record the new ID in the recipe production notes and never mix style versions within one recipe series without an explicit editorial reason.
