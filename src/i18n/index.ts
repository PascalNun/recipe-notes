import type { Language } from '../config/site';
import { de } from './de';
import { en } from './en';

export const dictionaries = { de, en } as const;

export type Dictionary = (typeof dictionaries)[Language];

export function getDictionary(lang: Language): Dictionary {
	return dictionaries[lang];
}
