# Visual Direction and Asset Production Plan

## Current Gap

The first implementation establishes the technical system, colour palette, paper texture, content model, and responsive components. It does not yet reproduce the visual density or editorial composition of the reference.

The reference works because several systems reinforce each other:

- a compact poster composition rather than a long conventional webpage
- one dominant food image that immediately explains the recipe
- ingredients arranged as narrow editorial columns beside the hero
- open step columns led by large concrete food illustrations rather than text
- many small ingredient and doodle accents that connect otherwise separate blocks
- varied but controlled typography, rules, paper scraps, marker strokes, and taped notes

Assets alone will not close the gap. The desktop layout must also be recomposed around the final image proportions.

## Target Composition

On a large screen, the recipe should read as one connected editorial sheet:

1. **Opening composition, roughly 40% of the visual page:** title, subtitle, hero image, claim, introduction, and compact ingredient columns.
2. **Method composition, roughly 35%:** five small steps in the first row, followed by the espresso and layering sequence.
3. **Closing composition, roughly 25%:** finish, character, context, optional notes, and a small sign-off card.

The browser page may still be taller than the original portrait reference, but every section should feel intentionally connected. There is one notebook-like paper surface, not a stack of cards. Mobile keeps the same content and visual language while switching to a readable single-column sequence separated by loose hand-drawn rules.

## Asset Families

| Family | Initial quantity | Format in layout | Purpose |
| --- | ---: | --- | --- |
| Hero | 1 | landscape transparent cluster | primary appetite and identity image |
| Step illustrations | 7 | square transparent cutout | make each action immediately readable |
| Ingredient spots | 5–7 | square transparent cutout | connect ingredients, notes, and empty corners |
| Global decoration | 4–6 | small reusable marks | tape, splashes, arrows, leaves, hearts, and grain |

Text, labels, numbers, marker headings, dividers, and responsive arrows remain HTML/CSS/SVG wherever possible. Generated images must contain no text or step numbers. Small sketch marks may overlap a generated subject as a separate layout layer.

## Recommended Production Strategy

### Phase 1: Three-Asset Pilot

Generate only three assets first:

1. the finished layered dessert as the hero
2. step 1, toasted sunflower seeds and seed butter
3. one ingredient spot, preferably the sunflower or white beans

This pilot answers the important questions before producing a complete set:

- Is the balance between photography and illustration correct?
- Are the cream, crunch, glass, espresso, and materials appetising?
- Does the palette integrate with the website?
- Do the hero and small assets clearly belong to one series?
- Is the visual language refined rather than childish?

### Phase 2: Establish an Anchor

After the hero is approved, use it as an additional visual reference for every later generation. The original poster remains the composition and mood reference; the approved hero becomes the recipe-specific anchor for food texture, colour, light, and material treatment.

### Phase 3: Complete the Series

Generate one distinct image per prompt rather than requesting many unrelated assets in one image. Keep the shared style block identical and change only the visible action or ingredient. Review all outputs together in a contact sheet before integration.

### Phase 4: Integrate and Recompose

Extract approved artwork to a lossless alpha master, encode the website derivative as lossless WebP, add meaningful alternative text, connect it through the recipe Markdown, then tune the open editorial columns around the real image proportions. Remove placeholder artwork only after its replacement is present.

## Shared Style Block

Use `RECIPE-NOTES-MIXED-MEDIA-V1` from [asset-style-guide.md](asset-style-guide.md) as the authoritative shared style block. Copy it unchanged into every generation prompt. Use the original reference as a **style and composition reference**, never as an edit target or website background.

The pilot prompts below are recipe-specific additions. They must be combined with the immutable master style block and the relevant asset-family block from the style guide.

The two current poster images and their distinct prompt roles are documented in [ref-img/README.md](ref-img/README.md). The white bean poster is the recipe-specific primary reference; the cinnamon-bun poster is evidence for the style that should remain stable across the collection.

## Pilot Prompts

### Hero

```text
Primary request: a layered white bean and cinnamon cream dessert with oat crunch, served in one clear straight-sided glass, with visible alternating layers of pale cream and golden-brown oat crunch; a small speckled ceramic espresso cup beside it; a lime half, a few oats, sunflower seeds, and cinnamon sticks used sparingly around the composition
Scene/backdrop: transparent outside one restrained irregular beige/sage watercolour grounding wash attached to the object cluster; no rectangular paper area
Composition/framing: editorial three-quarter view, dessert as the dominant subject, compact organic silhouette, enough transparent padding for responsive placement, no overhead typography space required
```

### Step 1

```text
Primary request: toasted sunflower seeds in a small dark pan beside a compact blender jar containing freshly blended sunflower seed butter; show the transformation clearly without text or arrows
Scene/backdrop: transparent, with no paper tile or rectangular background
Composition/framing: square, both objects fully visible, simple left-to-right visual sequence, generous edge padding
```

### Ingredient Spot

```text
Primary request: one botanical sunflower with a small scatter of sunflower seeds and one simple bowl of pale sunflower seed butter
Scene/backdrop: transparent, with no paper tile or rectangular background
Composition/framing: centered compact cluster with generous empty margin, suitable for use as a decorative ingredient spot
```

## What the User Needs to Provide

The existing reference and written recipe are sufficient for the three-asset pilot. Additional input is optional:

- a preferred serving glass or vessel
- a preference for more photographic or more illustrated results
- any ingredient presentation that must be avoided
- photographs to use as factual references for the final dish, if available later

No final asset batch should be produced before the pilot establishes the visual anchor.

## Acceptance Criteria

- The food is immediately recognisable and appetising.
- Every visible ingredient occurs in the recipe.
- Hero, steps, and ingredient spots feel like one collection.
- Images contain no baked-in copy or numbering.
- The mixed-media treatment supports the page without replacing editable layout.
- Assets remain effective when cropped on desktop, tablet, and mobile.
