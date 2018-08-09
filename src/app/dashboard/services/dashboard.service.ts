import { Injectable } from '@angular/core';
import { RECIPES } from './../../shared/mock-recipies/recipies.mock';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  recipesList: any[];
  constructor() { }

  getRecipes(food: string, maxData: number): Observable<any> {
    this.recipesList = RECIPES;
    if (maxData < this.recipesList.length) {
      return Observable.of(this.recipesList.slice(0, maxData));
    } else {
      return Observable.of(RECIPES);
    }
  }
}
