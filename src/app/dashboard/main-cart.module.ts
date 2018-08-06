import { MainCartComponent } from './main-cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LeftBoardComponent } from './left-board/left-board.component';
import { RightBoardComponent } from './right-board/right-board.component';



const routes: Routes = [{ path: '', component: MainCartComponent }];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainCartComponent, LeftBoardComponent, RightBoardComponent],
  exports: [MainCartComponent]
})
export class MainCartModule { }
