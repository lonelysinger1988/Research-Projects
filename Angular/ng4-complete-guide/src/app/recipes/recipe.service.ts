
import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://static.toiimg.com/thumb/msid-66476758,width-800,height-600,resizemode-75,imgsize-1640939,pt-32,y_pad-40/66476758.jpg')
    ];

    getRecipes(): any {
        return this.recipes.slice();
    }
}
