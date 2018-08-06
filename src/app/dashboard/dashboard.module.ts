import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { CartComponent } from './cart/cart.component';
import { PersonalizationComponent } from './personalization/personalization.component';
import { RouterModule } from '@angular/router';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { AccountContainerComponent } from './account-container/account-container.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ItemsComponent, CartComponent, PersonalizationComponent, MainPanelComponent, AccountContainerComponent],
  entryComponents: [PersonalizationComponent],
  exports: [AccountContainerComponent]
})
export class DashboardModule { }
