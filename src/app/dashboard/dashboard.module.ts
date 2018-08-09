import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LeftBoardComponent } from './left-board/left-board.component';
import { RightBoardComponent } from './right-board/right-board.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

const routes: Routes = [{ path: '', component: DashboardComponent }];
@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    InfiniteScrollModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent, LeftBoardComponent, RightBoardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
