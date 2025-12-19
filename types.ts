export type IngredientCategory = 'flour' | 'liquid' | 'starter' | 'salt' | 'other';

export interface Ingredient {
  name: string;
  category: IngredientCategory;
  weight: number; // in grams
  image: string;
  link?: string;
  description?: string;
}

export interface Step {
  title: string;
  description: string;
  timeOffset: string; // e.g., "Start", "20 mins later"
  iconType: 'mix' | 'wait' | 'fold' | 'bake' | 'cold' | 'prep';
}

export interface RecipeData {
  title: string;
  description: string;
  heroImage: string;
  ingredients: Ingredient[];
  steps: Step[];
}