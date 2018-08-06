import { MainPanelComponent } from './dashboard/main-panel/main-panel.component';
import { SingUpComponent } from './login/sing-up/sing-up.component';
import { SingInComponent } from './login/sing-in/sing-in.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainPanelComponent },
  { path: 'home', component: MainPanelComponent },
  { path: 'login', component:  SingInComponent},
  { path: 'register', component:  SingUpComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
