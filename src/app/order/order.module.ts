import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from '../mat/mat.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';


import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  declarations: [OrderComponent, OrderListComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MatModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class OrderModule { }
