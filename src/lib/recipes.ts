import type { CollectionEntry } from 'astro:content';
import type { Language } from '../config/site';

export type RecipeEntry = CollectionEntry<'recipes'>;

export function getRecipeUrl(recipe: RecipeEntry): string {
	const section = recipe.data.lang === 'de' ? 'rezepte' : 'recipes';
	return `/${recipe.data.lang}/${section}/${recipe.data.slug}/`;
}

export function getRecipeTranslation(
	recipe: RecipeEntry,
	allRecipes: RecipeEntry[],
	lang: Language,
): RecipeEntry | undefined {
	return allRecipes.find(
		(candidate) =>
			candidate.data.recipeKey === recipe.data.recipeKey && candidate.data.lang === lang,
	);
}
