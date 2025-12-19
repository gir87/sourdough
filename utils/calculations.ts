import { Ingredient } from '../types';

/**
 * Calculates the total hydration percentage of the recipe.
 * Assumptions:
 * - 'flour' category is 100% flour.
 * - 'liquid' category is 100% water.
 * - 'starter' category is assumed to be 100% hydration (50% flour, 50% water).
 */
export const calculateHydration = (ingredients: Ingredient[]): number => {
  let totalFlour = 0;
  let totalWater = 0;

  ingredients.forEach(ing => {
    if (ing.category === 'flour') {
      totalFlour += ing.weight;
    } else if (ing.category === 'liquid') {
      totalWater += ing.weight;
    } else if (ing.category === 'starter') {
      // Assuming 100% hydration starter (1:1 ratio)
      const halfWeight = ing.weight / 2;
      totalFlour += halfWeight;
      totalWater += halfWeight;
    }
  });

  if (totalFlour === 0) return 0;

  return Math.round((totalWater / totalFlour) * 100);
};

export const getTotalWeight = (ingredients: Ingredient[]): number => {
  return ingredients.reduce((sum, ing) => sum + ing.weight, 0);
};