import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatModule } from './mat/mat.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxInfiniteScrollerModule } from 'ngx-infinite-scroller';

import { NoResultComponent } from './component/no-result/no-result.component';
import { SpinnerComponent } from './component/spinner/spinner.component';


@NgModule({
  declarations: [NoResultComponent, SpinnerComponent],
  imports: [
    CommonModule,
    MatModule,
    FlexLayoutModule
  ],
  exports:[
    NoResultComponent,
    FormsModule,
    FlexLayoutModule,
    MatModule,
    HttpClientModule,
    NgxInfiniteScrollerModule,
    SpinnerComponent
  ]
})
export class SharedModule { }
