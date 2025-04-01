import { Component } from '@angular/core';
import { RecipeComponent } from './recipe-list/recipe-list.component';
import recipeData1 from './assets/example-1.json';
import recipeData2 from './assets/example-2.json';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RecipeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My recipe app';
  recipeData1 : Recipe = recipeData1;
  recipeData2 : Recipe = recipeData2;
}
