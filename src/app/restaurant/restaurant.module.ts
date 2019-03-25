import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantChildComponent } from './restaurant-child/restaurant-child.component';
import { ResDetailMenuComponent } from './restaurant-detail/res-detail-menu/res-detail-menu.component';
import { ResDetailReviewComponent } from './restaurant-detail/res-detail-review/res-detail-review.component';

@NgModule({
  declarations: [RestaurantComponent, RestaurantListComponent, RestaurantDetailComponent, RestaurantChildComponent, ResDetailMenuComponent, ResDetailReviewComponent],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    SharedModule
  ]
})
export class RestaurantModule { }
