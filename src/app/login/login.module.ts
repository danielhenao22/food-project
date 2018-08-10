import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingInComponent } from './sing-in/sing-in.component';
import { RouterModule, Routes } from '@angular/router';
import {
  MatStepperModule, MatInputModule, MatButtonModule,
  MatAutocompleteModule, MatTabsModule, MatCheckboxModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: SingInComponent }];
@NgModule({
  imports: [
    CommonModule,
    MatStepperModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SingInComponent],
  exports: [SingInComponent]
})
export class LoginModule { }
