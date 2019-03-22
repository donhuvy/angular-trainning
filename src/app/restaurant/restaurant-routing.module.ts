import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';

const routes: Routes = [
  {path:'',component:RestaurantComponent,children:[
    {path:'restaurant-list',component:RestaurantListComponent},
    {path:'restaurant-detail/:id',component:RestaurantDetailComponent},
    {path:'',redirectTo:'restaurant-list'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
