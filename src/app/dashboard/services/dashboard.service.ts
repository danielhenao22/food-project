import { Injectable } from '@angular/core';
import { RECIPES } from './../../shared/mock-recipies/recipies.mock';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getRecipes(food: string): Observable<any> {
    return Observable.of(RECIPES);
  }
}
