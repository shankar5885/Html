import {Recipe} from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model.';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';

@Injectable()
export class RecipeService{
    recipeChanged=  new Subject<Recipe[]>();
   private recipes:Recipe[]= [
        new Recipe('Tasty Noodles',
        'A super-tasty Noodles ',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEhVjB-fWNa_831azMmgTlUxA-jQN3TUuQZxCdKTLD_SjUJ3ia&usqp=CAU',
        [
            new Ingredient('Meat',1),
            new Ingredient('French Fries',20)
        ]),
        new Recipe('Big Fat Burger',
        'What else You need to say??',
        'https://i.ytimg.com/vi/L6yX6Oxy_J8/maxresdefault.jpg',
        [
            new Ingredient('Buns',2),
            new Ingredient('Meat',1)
        ])
     
      ];
// private recipes:Recipe[] = [];

      constructor(
        private store: Store<fromApp.AppState>){}
      
     setRecipes(recipes:Recipe[]){
     this.recipes= recipes;
     this.recipeChanged.next(this.recipes.slice());
     }

      getRecipes(){
          return this.recipes.slice();
        
        } 
        getRecipe(index:number){
            return this.recipes[index];
        }
        addIngredientToShoppingList(ingredients: Ingredient[]){
            // this.slService.addIngredients(ingredients);
            this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
        }
    addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
    }
    updateRecipe(index:number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index:number){
        this.recipes.splice(index,1);
       this.recipeChanged.next(this.recipes.slice());
    }
}
