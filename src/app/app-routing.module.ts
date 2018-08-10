import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'login', loadChildren:  './login/login.module#LoginModule'},
  { path: 'registry', loadChildren: './sing-up/sing-up.module#SingUpModule' },
  { path: 'main', loadChildren:  './dashboard/dashboard.module#DashboardModule'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
