import { Component, OnInit,ViewChild, ElementRef,OnDestroy } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Category } from '../category';
import { Restaurant } from '../restaurant';
import { LoaderService } from '../../core/services/loader.service/loader.service';
LoaderService
@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit,OnDestroy {
  mCategoriesList:Array<Category>=[];
  mCategoriesFilter:any;
  mRestaurantsList:Array<Restaurant>=[];
  isShowSpinner:boolean=false;
  isShowLoadMore:boolean=false;
  isLoading:boolean = true;
  constructor(private restaurantService:RestaurantService,private loaderService:LoaderService) { }

  ngOnInit() {
    this.getCategoriesList();
    this.searchRestaurant();
  }
  ngOnDestroy(){
    this.restaurantService.resetSearchRes();
  }
  getCategoriesList(){
    this.restaurantService.getCategoriesList().subscribe((res)=>{
      this.mCategoriesList = this.mCategoriesList.concat(res);
    },e=>{
    })
  }
  searchRestaurant(){
    this.loaderService.showLoading();
    this.restaurantService.serchRestaurant().subscribe((res=>{
      this.mRestaurantsList = this.mRestaurantsList.concat(res);
      this.isShowLoadMore = false;
      this.isShowSpinner = false;
      this.isLoading = false;
      this.loaderService.hideLoading();
    }),e=>{
      this.loaderService.hideLoading();

    })
  }
  onSelectCategory(){
    this.mRestaurantsList = [];
    this.loaderService.showLoading();
    this.isLoading = true;
    this.restaurantService.doFilterPage(0);
    this.restaurantService.doFilterCategory(this.mCategoriesFilter);
  }
  onScrollDown(){
    this.isShowLoadMore = true;
    this.restaurantService.doLoadMore();
  }
  onSearch(query:string){
    this.mRestaurantsList = [];
    this.isShowSpinner = true;
    this.isLoading = true;
    this.restaurantService.doFilterPage(0);
    this.restaurantService.doFilterQuery(query);
  }
}
