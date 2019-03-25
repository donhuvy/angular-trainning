import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatModule } from './mat/mat.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxInfiniteScrollerModule } from 'ngx-infinite-scroller';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { NoResultComponent } from './component/no-result/no-result.component';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { ImageLoaderComponent } from './component/image-loader/image-loader.component';
import { InfiniteScrollDirective } from './directives/infinite-scroll.directive';

@NgModule({
  declarations: [NoResultComponent, SpinnerComponent,ImageLoaderComponent, InfiniteScrollDirective],
  imports: [
    CommonModule,
    MatModule,
    FlexLayoutModule,
    LazyLoadImageModule
  ],
  exports:[
    NoResultComponent,
    FormsModule,
    FlexLayoutModule,
    MatModule,
    HttpClientModule,
    NgxInfiniteScrollerModule,
    SpinnerComponent,
    LazyLoadImageModule,
  ImageLoaderComponent

  ]
})
export class SharedModule { }
