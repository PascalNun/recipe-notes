# Coding Principles

## Core Guidelines

1. **Simplicity before cleverness.** A directly understandable Astro component is better than a generic abstraction without a current use case.
2. **Content remains file-based.** Recipes live in Markdown and are validated during the build. There is no runtime database.
3. **Static by default.** New features should work without server logic unless a concrete requirement makes it necessary.
4. **Minimal JavaScript.** Navigation, language switching, and layout use HTML and CSS. Client-side code is added only for genuine interaction.
5. **Semantics and accessibility.** Headings, lists, navigation, alternative text, focus states, and contrast are part of the definition of done.
6. **Responsive around content.** The desktop poster may be asymmetrical. On smaller screens, readability determines order and density.
7. **Design values are tokens.** Colours, typography, spacing, radii, shadows, and layers are stored as CSS custom properties in `global.css`.
8. **Optional data stays optional.** Components render information boxes only when the corresponding recipe field exists.
9. **Names describe editorial purpose.** Components are named after what they communicate, such as `IngredientsPanel`, `StepCard`, and `InfoBox`.
10. **Dependencies need a reason.** Small CSS or TypeScript solutions take precedence over UI frameworks and utility packages.

## Validate Changes

At minimum, both commands should pass before merging a change:

```bash
npm run check
npm run build
```

After layout changes, also review all four core routes on desktop and mobile. Pay particular attention to long ingredient lists, long English titles, and missing images.

## Abstraction Rule

Introduce a new abstraction only when at least two concrete places benefit from it or when it removes a known class of errors. Recipe data does not belong in components, and interface copy does not belong in recipe files.
