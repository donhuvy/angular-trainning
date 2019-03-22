import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

import { CartTotalComponent } from './cart-total/cart-total.component';
import { CartTotalService } from './cart-total.service';
import { LoaderService } from './loader.service/loader.service';

@NgModule({
  declarations: [CartTotalComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    NgxUiLoaderModule
  ],
  exports:[
    CartTotalComponent,
    NgxUiLoaderModule
    
  ],
  providers:[
    CartTotalService,
    LoaderService
  ]
})
export class CoreModule { }
