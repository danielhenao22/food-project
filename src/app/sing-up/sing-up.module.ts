import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingUpComponent } from './sing-up.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: SingUpComponent }];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SingUpComponent],
  exports: [SingUpComponent]
})
export class SingUpModule { }
