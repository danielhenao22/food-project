import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MenuComponent } from './navbar/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule
  ],
  declarations: [NavbarComponent, MenuComponent],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
