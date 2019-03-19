import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from '../mat/mat.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';
import { CartListComponent } from './cart-list/cart-list.component';

@NgModule({
  declarations: [CartComponent, CartListComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CartModule { }
