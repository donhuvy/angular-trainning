import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutListComponent } from './checkout-list/checkout-list.component';
import { CheckoutDoneComponent } from './checkout-done/checkout-done.component';
@NgModule({
  declarations: [CheckoutComponent, CheckoutListComponent, CheckoutDoneComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    SharedModule

  ]
})
export class CheckoutModule { }
