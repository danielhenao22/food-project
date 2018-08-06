import { MainPanelComponent } from './dashboard/main-panel/main-panel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'home', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'login', loadChildren:  './login/login.module#LoginModule'},
  { path: 'registry', loadChildren: './sing-up/sing-up.module#SingUpModule' },
  { path: 'main', loadChildren:  './main-cart/main-cart.module#MainCartModule'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
