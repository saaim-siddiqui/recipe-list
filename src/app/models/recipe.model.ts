export interface NutritionInformation {
  "@type"?: string;
  calories: string | undefined;
  fatContent?: string | undefined;
  cholesterolContent?: string | undefined;
  sodiumContent?: string | undefined;
  carbohydrateContent?: string | undefined;
  fiberContent?: string | undefined;
  proteinContent?: string | undefined;
  [key: string]: string | undefined;
}

export interface RecipeIngredient {
  name: string;
  quantity?: string;
  unit?: string;
  notes?: string;
}

export interface RecipeInstruction {
  name?: string;
  text: string;
}

export interface Recipe {
  "@context"?: string;
  "@type"?: string;
  author?: any;
  datePublished?: string;
  recipeCuisine?: string;
  prepTime?: string;
  cookTime?: string;
  totalTime?: string;
  keywords?: string;
  recipeYield?: string;
  recipeCategory?: string;
  name: string;
  image?: string[];
  description: string;
  nutrition?: NutritionInformation;
  recipeIngredient: RecipeIngredient[];
  recipeInstructions: RecipeInstruction[];
  video?: any;
  aggregateRating?: any;
}
