import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../services/dashboard.service';

@Component({
  selector: 'app-right-board',
  templateUrl: './right-board.component.html',
  styleUrls: ['./right-board.component.css']
})
export class RightBoardComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
  }

}
