# Landing Page Architecture

## Purpose

The landing page is the entrance to a growing digital recipe book. It is not a cover for a fixed issue, volume, or completed magazine. New recipes join one continuous collection, and the interface should remain useful when the archive contains substantially more than the three launch recipes.

The page keeps the same tactile visual world as the recipe details—paper, collage, watercolour washes, hand-drawn marks, and high-quality food imagery—but uses it more quietly. Individual recipe pages can behave like expressive editorial spreads; the landing page provides orientation, discovery, and reliable access.

## Information Hierarchy

1. A compact identity composition introduces the project name, tagline, short description, and a small ingredient collage.
2. The recipe index begins immediately after the introduction.
3. Search and tags help visitors narrow the collection without changing routes or requiring a backend.
4. Recipe cards show the hero image, title, subtitle, short description, and a small tag set.

The page deliberately avoids issue numbers, volume labels, a cover manifesto, or copy such as “in this issue.” Editorial character comes from composition and materials rather than from imitating the publishing structure of a specific magazine.

## Responsive Behaviour

The card index uses three columns on wide screens, two columns on medium screens, and one column on narrow screens. Cards remain open compositions on the shared paper surface rather than becoming boxed interface panels.

The identity collage stacks below the introduction on smaller viewports. Search, filters, result counts, headings, and long translated titles must wrap without overlapping neighbouring content or forcing horizontal scrolling.

## Search and Tags

Search matches the localised recipe title, subtitle, description, and tags. Tag buttons apply an exact tag filter and can be combined with the current search query. Filtering is implemented as a small client-side enhancement over the complete static HTML list, so all recipes remain available when JavaScript is unavailable.

Tags are authored in each recipe's Markdown frontmatter. No separate landing-page taxonomy is required for the current collection. Before the tag list becomes large, consolidate synonyms and introduce a controlled category vocabulary rather than adding increasingly narrow interface filters.

## Central Configuration

The public name, display title lines, tagline, and introduction are configured in `src/config/site.ts`, with separate German and English values. Interface labels for the collection, search, filters, result counts, and empty state live in `src/i18n/de.ts` and `src/i18n/en.ts`.

This separation allows the project name and positioning to evolve without rewriting page components or recipe content.
