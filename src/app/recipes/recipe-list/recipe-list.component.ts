import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
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

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
