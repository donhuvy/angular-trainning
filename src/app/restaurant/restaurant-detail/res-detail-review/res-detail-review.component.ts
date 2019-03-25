import { Component, OnInit,Input,OnChanges } from '@angular/core';

import { Restaurant } from '../../restaurant';
import { RestaurantService } from '../../restaurant.service';

@Component({
  selector: 'app-res-detail-review',
  templateUrl: './res-detail-review.component.html',
  styleUrls: ['./res-detail-review.component.scss']
})
export class ResDetailReviewComponent implements OnInit,OnChanges {
  @Input('restaurant') mRestaurant:Restaurant;
  mReviews:Array<any>=[];
  constructor(private restaurantService:RestaurantService) { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.getReviews();
  }
  getReviews(){
    this.mReviews = [];
    let resId:string = this.mRestaurant.id;
    this.restaurantService.getRestaurantReviews({
      res_id:resId
    }).subscribe(res=>{
      this.mReviews = this.mReviews.concat(res.user_reviews);
      console.log(res);
    })
  }
}
