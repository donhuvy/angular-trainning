import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from '../mat/mat.module';
import { RouterModule } from '@angular/router';


import { CartTotalComponent } from './cart-total/cart-total.component';
import { CartTotalService } from './cart-total.service';

@NgModule({
  declarations: [CartTotalComponent],
  imports: [
    CommonModule,
    MatModule,
    RouterModule,
  ],
  exports:[
    CartTotalComponent
  ],
  providers:[
    CartTotalService,
  ]
})
export class CoreModule { }
