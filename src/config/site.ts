export const supportedLanguages = ['de', 'en'] as const;

export type Language = (typeof supportedLanguages)[number];

export const siteConfig = {
	name: {
		de: 'Recipe Notes',
		en: 'Recipe Notes',
	},
	displayNameLines: {
		de: ['Recipe', 'Notes'],
		en: ['Recipe', 'Notes'],
	},
	tagline: {
		de: 'Nah gedacht. Frei kombiniert.',
		en: 'Rooted nearby. Combined freely.',
	},
	intro: {
		de: 'Ein wachsendes digitales Rezeptbuch mit pflanzlichen Rezepten, eigenen Entwürfen und frei kombinierten Einflüssen.',
		en: 'A growing digital recipe book of plant-based recipes, original ideas and freely combined influences.',
	},
} as const;

export function isLanguage(value: string | undefined): value is Language {
	return supportedLanguages.includes(value as Language);
}
