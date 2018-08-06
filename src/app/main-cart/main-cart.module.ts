import { MainCartComponent } from './main-cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: MainCartComponent }];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainCartComponent],
  exports: [MainCartComponent]
})
export class MainCartModule { }
