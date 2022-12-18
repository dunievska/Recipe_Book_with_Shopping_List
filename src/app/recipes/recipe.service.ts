import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Chicken sandwich',
      'Easy and delicious sandwich with crispy chicken',
      'https://c.pxhere.com/images/f6/06/425094deab9d401d26651dbbea78-1638927.jpg!d',
      [
        new Ingredient('Chicken meat', 1),
        new Ingredient('Bread', 2),
        new Ingredient('Tomato', 1),
        new Ingredient('Mayonnaise', 1),
      ]
    ),
    new Recipe(
      'Big Fat Burger',
      'A super tasty burher with fresh vegetables',
      'https://c.pxhere.com/images/f6/06/425094deab9d401d26651dbbea78-1638927.jpg!d',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Tomato', 2),
        new Ingredient('Cucumber', 1),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
