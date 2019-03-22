import { Component, OnInit,Input } from '@angular/core';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-restaurant-child',
  templateUrl: './restaurant-child.component.html',
  styleUrls: ['./restaurant-child.component.scss']
})
export class RestaurantChildComponent implements OnInit {
  @Input('restaurant') mRestaurant:Restaurant;
  constructor() { }

  ngOnInit() {
  }

}
