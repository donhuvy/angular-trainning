import { Component, OnInit,OnDestroy,ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';


import { ProductService } from '../product.service';
import { Product } from '../product';
import { Categories } from '../product-mock';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit,OnDestroy {
  mProducts:Array<Product> = [];
  mobileQuery: MediaQueryList;
  mCategories:Array<string>=[];
  mCategoriesFilter:Array<string>=[];
  mProductsFilter:Array<Product>=[];
  mNameFilter:string='';
  _mobileQueryListener:()=>void;
  constructor(private productService:ProductService,private media:MediaMatcher,private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.doCheckMobileLayout();
    this.onLoadProducts();
  }
  ngOnDestroy(){
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  doCheckMobileLayout(){
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  onLoadProducts(){
    this.mProducts = this.mProducts.concat(this.productService.getProductsList());
    this.mProductsFilter = this.mProducts.concat(this.productService.getProductsList());
    this.mCategories = this.mCategories.concat(Categories);
  }
  onSelectCategory(){
    this.onSearchProduct();
  }
  onSearchProduct(){
    this.mProductsFilter = this.productService.searchProducts(this.mProducts,this.mNameFilter,this.mCategoriesFilter);
  }
}
