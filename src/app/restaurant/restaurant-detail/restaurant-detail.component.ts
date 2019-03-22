import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {

  constructor(private restaurantService:RestaurantService) { }

  ngOnInit() {
  }
  test(){
    this.restaurantService.doFilterCategory();
  }
}
