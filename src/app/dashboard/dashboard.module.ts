import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { CartComponent } from './cart/cart.component';
import { PersonalizationComponent } from './personalization/personalization.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { AccountContainerComponent } from './account-container/account-container.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: MainPanelComponent }];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ItemsComponent, CartComponent, PersonalizationComponent, MainPanelComponent, AccountContainerComponent],
  entryComponents: [PersonalizationComponent],
  exports: [MainPanelComponent, AccountContainerComponent]
})
export class DashboardModule { }
