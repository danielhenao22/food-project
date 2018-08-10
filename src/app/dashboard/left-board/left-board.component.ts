import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../services/dashboard.service';

@Component({
  selector: 'app-left-board',
  templateUrl: './left-board.component.html',
  styleUrls: ['./left-board.component.css']
})
export class LeftBoardComponent implements OnInit {
  panelOpenState = false;
  recipesList: any[];
  food = '';
  finished = false;
  maxData = 10;
  // path = 'http://mx.emedemujer.com/wp-content/uploads/sites/5/2015/10/receta3-770x507.jpg';
  path = 'https://source.unsplash.com/random';

  constructor(private dashboardService: DashboardService) {

  }

  ngOnInit() {
   this.loadRecipesList();
  }
  loadRecipesList() {
    this.dashboardService.getRecipes(this.food, this.maxData).subscribe(value => this.recipesList = value);
  }

  onScroll() {
        this.maxData += 5;
        this.dashboardService.getRecipes(this.food, this.maxData).subscribe(value => this.recipesList = value);
  }
}
