import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from '../mat/mat.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductChildComponent } from './product-child/product-child.component';

@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductChildComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatModule,
    FlexLayoutModule,
    FormsModule,
    SharedModule
  ]
})
export class ProductModule { }
