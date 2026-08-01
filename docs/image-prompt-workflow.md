# Image Prompt Workflow

This process turns a finished recipe into a consistent and replaceable asset series. Prompts belong in editorial or production notes, never in the public website interface.

All generated assets must use the current style ID and immutable master block from [asset-style-guide.md](asset-style-guide.md). The templates below supply recipe-specific subject information; they do not replace the central style definition.

## Process

1. **Finish the recipe.** Finalise ingredients, steps, and serving details.
2. **Structure the Markdown.** Add all required fields, ingredient sections, and steps.
3. **Derive the asset list.** Choose one hero, only the visually relevant steps, and a small number of characteristic ingredients.
4. **Write the hero prompt.** Describe the dish, vessel, perspective, light, and material precisely.
5. **Write the step prompts.** Describe exactly one visible action or state per image.
6. **Write ingredient prompts.** Request isolated cutout-ready subjects on a flat removable chroma-key background.
7. **Assemble the prompts.** Combine the immutable master style block, the relevant asset-family block, and the recipe-specific subject block.
8. **Generate the images.** Produce one distinct asset per request and use the approved hero as the recipe anchor after the pilot.
9. **Store the assets.** Place files in `src/content/recipes/<recipe>/assets/` and reference them from Markdown.
10. **Review and refine.** Check ingredient accuracy, series consistency, crop, contrast, file size, and alternative text.

## Asset List Template

```text
Recipe:
Hero:
  Filename:
  Subject:
  Perspective:
  Format:

Steps:
  step-01.webp — transparent visible state or action
  step-02.webp — transparent visible state or action

Ingredient illustrations:
  ingredient-<name>.webp — isolated transparent subject

Shared visual language:
  Style ID: CRK-MIXED-MEDIA-V1
  Approved recipe anchor:
  Factual references:
```

## Hero Prompt Template

```text
Recipe: [RECIPE NAME]
Primary request: show [DISH AND SPECIFIC VISIBLE ELEMENTS] in or on [VESSEL OR MATERIAL], viewed from [PERSPECTIVE]
Recipe fidelity: use only [ALLOWED VISIBLE INGREDIENTS]; required preparation state is [STATE]; do not add [COMMON BUT INCORRECT GARNISHES]
Composition/framing: [ARRANGEMENT, WORKING RATIO, AND CROP SPACE]
```

## Step Prompt Template

```text
Recipe: [RECIPE NAME]
Visible step: [ONE SPECIFIC ACTION OR STATE]
Required subjects: [RELEVANT INGREDIENTS, VESSELS, AND TOOLS]
Recipe fidelity: required preparation state is [STATE]; do not add [FORBIDDEN ELEMENTS]
Composition/framing: square composition, [SPECIFIC ARRANGEMENT], sufficient quiet space around the subject for a step card
Background: perfectly flat removable chroma-key colour; no paper texture, gradient, floor plane, or cast shadow
```

## Ingredient Illustration Prompt Template

```text
Recipe: [RECIPE NAME]
Primary request: one isolated ingredient study of [INGREDIENT OR TIGHTLY RELATED CLUSTER]
Recipe fidelity: show [SPECIFIC FORM OR PREPARATION STATE]; do not add [FORBIDDEN ELEMENTS]
Composition/framing: square cutout-ready canvas, [CENTRED OR ASYMMETRICAL ARRANGEMENT], clear silhouette, generous empty margin
Background: perfectly flat removable chroma-key colour; no paper texture, gradient, floor plane, or cast shadow
```

## Example Recipe Constraints

For “White Bean Cinnamon Cream with Oat Crunch & Espresso”, only ingredients present in the recipe may appear: white beans, sunflower seeds, vegan skyr or yoghurt cream, oats, cinnamon, lime, and espresso. Quantities and preparation remain defined by the written recipe; images must not imply new ingredients.

The hero should ideally show a clearly layered glass with pale cream and oat crunch next to a small espresso cup. The seven step images should follow the seven Markdown steps exactly. Text, numbers, and information boxes are rendered by the website and must never be included in generated imagery.
