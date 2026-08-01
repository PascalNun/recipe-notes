import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const ingredientSection = z.object({
	title: z.string(),
	items: z.array(z.string()).min(1),
});

const recipes = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
	schema: ({ image }) => z.object({
		draft: z.boolean().default(false),
		order: z.number().int().nonnegative().default(0),
		recipeKey: z.string(),
		lang: z.enum(['de', 'en']),
		title: z.string(),
		titleLines: z.array(z.string()).min(1).optional(),
		subtitle: z.string(),
		slug: z.string(),
		description: z.string(),
		tags: z.array(z.string()).min(1),
		yieldText: z.string().optional(),
		timeItems: z.array(z.object({
			label: z.string(),
			value: z.string(),
		})).min(1).optional(),
		timeNote: z.string().optional(),
		heroImage: z.union([image(), z.literal('fallback')]),
		heroAlt: z.string(),
		ingredientSpotImage: image().optional(),
		ingredientSpotAlt: z.string().optional(),
		ingredientEspressoImage: image().optional(),
		ingredientEspressoAlt: z.string().optional(),
		characterSpotImage: image().optional(),
		characterSpotAlt: z.string().optional(),
		healthSpotImage: image().optional(),
		healthSpotAlt: z.string().optional(),
		ingredientSections: z.array(ingredientSection).min(1),
		steps: z.array(z.object({
			number: z.number().int().positive(),
			title: z.string(),
			text: z.string(),
			sketch: z.enum(['toast', 'rinse', 'chill', 'mix', 'bake', 'espresso']).optional(),
			image: z.union([image(), z.literal('fallback')]).optional(),
			imageAlt: z.string().optional(),
			sequenceImages: z.object({
				first: image(),
				second: image(),
				third: image(),
				fourth: image(),
			}).optional(),
			note: z.string().optional(),
		})).min(1),
		claim: z.string().optional(),
		introNote: z.string().optional(),
		finish: z.array(z.string()).optional(),
		characterNotes: z.array(z.string()).optional(),
		contextNotes: z.array(z.string()).optional(),
		healthNotes: z.array(z.string()).optional(),
		environmentalNotes: z.array(z.string()).optional(),
		storage: z.string().optional(),
		nutrition: z.array(z.string()).optional(),
		tips: z.array(z.string()).optional(),
		video: z.object({
			title: z.string(),
			src: z.string(),
			type: z.enum(['video/mp4', 'video/webm']).optional(),
			poster: image().optional(),
			caption: z.string().optional(),
		}).optional(),
	}),
});

export const collections = { recipes };
