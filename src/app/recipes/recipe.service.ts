import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://c.pxhere.com/images/f6/06/425094deab9d401d26651dbbea78-1638927.jpg!d'
    ),
    new Recipe(
      'A 2nd Test Recipe',
      'This is simply another test',
      'https://c.pxhere.com/images/f6/06/425094deab9d401d26651dbbea78-1638927.jpg!d'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
