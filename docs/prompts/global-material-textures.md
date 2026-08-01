# Global Material Textures

These two non-semantic global assets provide the shared physical surface for `RECIPE-NOTES-MIXED-MEDIA-V1`. They contain no recipe information and may be reused across the collection.

- **Generation mode:** built-in ImageGen
- **Paper:** `public/assets/global/paper-texture-v1.webp`
- **Watercolour alpha mask:** `public/assets/global/watercolor-wash-mask-v1.webp`

## Paper Texture Prompt

```text
Use case: stylized-concept
Asset type: seamless global website paper texture
Primary request: one flat, front-facing, evenly lit texture of warm natural off-white editorial sketchbook paper for a contemporary handmade recipe zine. It must feel like the tactile paper surface of an illustrated European recipe poster: subtly fibrous, softly toothy, lightly absorbent, and materially deep, but clean and modern rather than vintage.
Style/medium: realistic high-resolution scan of uncoated cotton-and-cellulose art paper.
Materials/textures: restrained short paper fibres, microscopic speckles, soft irregular tooth, very faint uneven cream tone, tiny natural pinprick shadows within the fibres, and almost imperceptible pressure variation.
Composition/framing: square seamless tile, uniform detail density, no focal point, all four edges tile without visible seams.
Color palette: warm off-white around #f7f1e5 and #fffaf0 with extremely subtle oat and grey-brown fibre variation.
Lighting/mood: diffuse scan-like lighting with no directional cast shadow, vignette, or gradient.
Constraints: texture only, seamless edges, high readability under small black recipe text.
Avoid: text, letters, numbers, food, objects, drawings, coloured brush marks, splatters, stains, grime, parchment aging, folds, torn edges, holes, borders, watermark, strong contrast, or obvious repeating motif.
```

## Watercolour Mask Prompt

```text
Use case: stylized-concept
Asset type: reusable watercolor texture mask for a responsive recipe zine
Primary request: one isolated, broad, horizontal hand-painted watercolor wash with an irregular organic silhouette, dry-brush gaps, softly feathered edges, visible cold-press paper grain within the pigment, darker pigment pooling along a few edges, and 8–12 tiny related splatter droplets close to the main wash.
Style/medium: authentic translucent artist watercolor scanned from textured paper, refined editorial food-zine quality, tactile and imperfect rather than a digital gradient.
Composition/framing: one low horizontal swatch centred in a square canvas, approximately 75% of canvas width and 30% of canvas height, generous clean padding on every side. The main wash must remain one coherent shape suitable for scaling behind headings, notes, and object shadows.
Color palette: neutral warm charcoal-brown and medium grey only, with varied opacity; no green, pink, blue, yellow, or magenta inside the wash.
Background: perfectly flat, uniform, high-saturation #ff00ff magenta chroma-key field. No paper texture, floor plane, gradient, lighting variation, or cast shadow in the background.
Constraints: no text, no objects, no symbols, no border, no frame, no watermark. Keep the chroma background completely separate from the watercolor pigment and preserve a crisp removable outer boundary despite the naturally feathered painted edge.
```

## Processing and Use

The paper source is resized to 1024 × 1024 and stored as a compact WebP tile. It is used both as the page background and as a very low-opacity multiply overlay so HTML, generated artwork, and coloured notes share one printed surface.

The watercolour source is keyed locally. Its neutral pigment luminance is multiplied into the alpha channel, producing a reusable white alpha mask with real granulation and opacity variation. The website copy is encoded as lossless WebP with exact alpha; the PNG production master remains local. CSS recolours that same mask for sage, pink, blue, oat, and dark brown applications. This keeps marker fields, notes, splatters, and grounding shadows materially consistent without baking interface text into images.
