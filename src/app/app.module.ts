import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LoginModule } from './login/login.module';
import { SingUpModule } from './sing-up/sing-up.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    DashboardModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LoginModule,
    SingUpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
