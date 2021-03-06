import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingInComponent } from './sing-in/sing-in.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: SingInComponent }];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SingInComponent],
  exports: [SingInComponent]
})
export class LoginModule { }
