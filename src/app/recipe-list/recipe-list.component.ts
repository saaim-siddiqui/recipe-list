import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';


@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeComponent implements OnInit {
  @Input() recipe!: Recipe;

  state:  'error' | 'ready' = 'ready';
  errorMessage: string | null = null;

  ngOnInit(): void {
    this.loadRecipe();
  }

  private loadRecipe(): void {
    try {
      const recipe = this.recipe;

      if (!recipe?.name
        || !recipe.description
        || !recipe.recipeInstructions
        || !recipe.recipeIngredient) {
        throw new Error('Recipe data is incomplete');
      }

      this.state = 'ready';
    } catch (error) {
      console.error('Recipe loading error:', error);
      this.state = 'error';
      this.errorMessage = this.getErrorMessage(error);
    }
  }


  private getErrorMessage(error: any): string {
    if (error instanceof Error) {
      return error.message;
    }
    return 'Failed to load recipe. Please try again later.';
  }
}
