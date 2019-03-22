import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Category } from '../category';
import { Restaurant } from '../restaurant';
import { LoaderService } from 'src/app/core/loader.service/loader.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {
  mCategoriesList:Array<Category>=[];
  mRestaurantsList:Array<Restaurant>=[];
  isShowLoadMore:boolean=false;
  constructor(private restaurantService:RestaurantService,private loaderService:LoaderService) { }

  ngOnInit() {
    // this.restaurantService.doFilterCategory();
    this.getCategoriesList();
    this.searchRestaurant();
  }
  getCategoriesList(){
    this.restaurantService.getCategoriesList().subscribe((res)=>{
      console.log(res);
      this.mCategoriesList = this.mCategoriesList.concat(res);
    },e=>{
      console.log(e);
    })
  }
  searchRestaurant(){
    this.loaderService.showLoading();
    this.restaurantService.serchRestaurant({
      start:0,
      count:10
    }).subscribe((res=>{
      this.mRestaurantsList = this.mRestaurantsList.concat(res);
      // this.isShowLoadMore = false;
      console.log(res);
      this.loaderService.hideLoading();
    }),e=>{
      this.loaderService.hideLoading();

    })
  }
  onScrollDown(){
    this.isShowLoadMore = true;
    // this.restaurantService.doFilterPage();
  }
  onScrollUp(){

  }
}
