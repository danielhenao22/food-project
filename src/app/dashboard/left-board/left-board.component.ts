import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../services/dashboard.service';

@Component({
  selector: 'app-left-board',
  templateUrl: './left-board.component.html',
  styleUrls: ['./left-board.component.css']
})
export class LeftBoardComponent implements OnInit {
  panelOpenState = false;
  constructor(private dashboardService: DashboardService) { }
  recipesList: any[];
  food = '';
  ngOnInit() {
    this.loadRecipesList();
    console.log(this.recipesList);
  }

  loadRecipesList() {
    this.dashboardService.getRecipes(this.food).subscribe(value => this.recipesList = value);
  }
}
