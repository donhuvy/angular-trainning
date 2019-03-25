import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../restaurant';
import { LoaderService } from '../../core/services/loader.service/loader.service';
LoaderService
@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {
  resId:string;
  mRestaurant:Restaurant;
  constructor(private restaurantService: RestaurantService, private activatedRoute: ActivatedRoute,
    private loaderService:LoaderService

  ) {

  }

  ngOnInit() {
    this.onLoadParams();
    this.onLoadData();
  }
  onLoadParams(){
    this.resId = this.activatedRoute.snapshot.params['id'];
  }
  onLoadData(){
    this.loaderService.showLoading();
    this.restaurantService.getRestaurantDetail({
      res_id:this.resId
    }).subscribe(res=>{
      this.loaderService.hideLoading();
      this.mRestaurant = res;
      console.log(res);
    })
  }
}
