import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LoginModule } from './login/login.module';
import { SingUpModule } from './sing-up/sing-up.module';
import { HomeModule } from './home/home.module';
import { SidenavService } from './shared/Sidenav.service';
import { DashboardService } from './dashboard/services/dashboard.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LoginModule,
    SingUpModule,
    HomeModule
  ],
  providers: [SidenavService, DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
