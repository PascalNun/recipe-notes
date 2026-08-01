export const supportedLanguages = ['de', 'en'] as const;

export type Language = (typeof supportedLanguages)[number];

export const siteConfig = {
	name: {
		de: 'Neue Regionale Küche',
		en: 'Contemporary Regional Kitchen',
	},
	tagline: {
		de: 'Pflanzlich. Urban. Eigenständig.',
		en: 'Plant-based. Urban. Distinctive.',
	},
	intro: {
		de: 'Ein digitales Rezept-Zine für neue regionale Ideen: pflanzlich gedacht, alltagstauglich gekocht und mit Freude an Creme, Crunch und Röstaromen gestaltet.',
		en: 'A digital recipe zine for a new kind of regional cooking: plant-based, made for everyday life, and shaped by a love of creaminess, crunch and toasted flavours.',
	},
} as const;

export function isLanguage(value: string | undefined): value is Language {
	return supportedLanguages.includes(value as Language);
}
