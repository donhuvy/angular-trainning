import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from '../mat/mat.module';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutListComponent } from './checkout-list/checkout-list.component';
import { CheckoutDoneComponent } from './checkout-done/checkout-done.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [CheckoutComponent, CheckoutListComponent, CheckoutDoneComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    MatModule,
    FlexLayoutModule
  ]
})
export class CheckoutModule { }
