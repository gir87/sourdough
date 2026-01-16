import { RecipeData } from "../types";

export const recipe: RecipeData = {
  title: "Sourdough Recipe",
  description:
    "This beginner-friendly sourdough recipe uses whole wheat, spelt, and bread flour for enhanced flavour and nutrition. The 68% hydration dough is easy to handle, creating a beautiful loaf.",
  heroImage: "images/top.jpg",
  ingredients: [
    {
      name: "Water",
      category: "liquid",
      weight: 273,
      image: "images/water.webp",
      description: "Filtered water at room temperature (75°F/24°C)",
    },
    {
      name: "Sourdough Starter",
      category: "starter",
      weight: 94,
      image: "images/starter.jpg",
      description: "Active, bubbly starter fed 6 hours prior",
    },
    {
      name: "High Protein Bread Flour",
      category: "flour",
      weight: 353,
      image: "images/americana-1.png",
      link: "https://www.thuisbakkerswinkel.nl/product/americana",
      description: "T55 Americana contains a very high protein content (14%)",
    },
    {
      name: "Whole Wheat Flour",
      category: "flour",
      weight: 47,
      image: "images/speltmeelvolkoren.jpg",
      link: "https://www.thuisbakkerswinkel.nl/product/speltmeel-volkoren-100",
      description: "Coarsely ground whole wheat spelt flour",
    },
    {
      name: "Spelt Flour",
      category: "flour",
      weight: 24,
      image: "images/speltbloem.jpg",
      link: "https://www.thuisbakkerswinkel.nl/product/speltbloem",
      description: "Flour with high nutritional value",
    },
    {
      name: "Sea Salt",
      category: "salt",
      weight: 9,
      image: "images/salt.jpg",
      link: "https://www.thuisbakkerswinkel.nl/product/bakkerszout",
      description: "Fine sea salt for even distribution",
    },
  ],
  steps: [
    {
      title: "Add Ingredients",
      timeOffset: "Start",
      description:
        "Combine the active starter and water in a bowl. Stir to dissolve. Add the flours and salt. Mix everything until no dry flour remains. It will look shaggy.",
      iconType: "prep",
    },
    {
      title: "Mix",
      timeOffset: "+ 20 mins",
      description:
        "Do a proper mix by working the dough with your hands until it's smooth. This should take about 5-10 minutes.",
      iconType: "mix",
    },
    {
      title: "First Fold",
      timeOffset: "+ 30 mins",
      description:
        "Perform a set of stretch and folds. Grab one side, pull up, and fold over. Rotate bowl and repeat 4 times.",
      iconType: "fold",
    },
    {
      title: "Second Fold",
      timeOffset: "+ 30 mins",
      description:
        "Perform a second set of coil folds or stretch and folds to build structure.",
      iconType: "fold",
    },
    {
      title: "Bulk Fermentation",
      timeOffset: "+ 6 hours",
      description:
        "Cover and let the dough rise at room temperature until it has increased in volume by about 50-75% and is bubbly.",
      iconType: "wait",
    },
    {
      title: "Cold Retard",
      timeOffset: "+ 1 night",
      description:
        "Shape the dough, place it in a banneton, and put it in the fridge overnight (12-16 hours) to develop flavor.",
      iconType: "cold",
    },
    {
      title: "Bake",
      timeOffset: "Next Morning",
      description:
        "Preheat Dutch oven to 450°F (230°C). Score the dough and bake covered for 25 mins, then uncovered for another 25 mins.",
      iconType: "bake",
    },
  ],
};
