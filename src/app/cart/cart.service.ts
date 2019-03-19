import { Injectable } from '@angular/core';
import { CartTotalService } from '../core/cart-total.service';
const productStorage:string = 'product_storage';
const productHistory:string = 'product_history';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private cartTotalService:CartTotalService) { 

  }
  getCarts(){
    return JSON.parse(localStorage.getItem(productStorage)) || [];
  }
  removeCarts(){
    localStorage.removeItem(productStorage);
    this.cartTotalService.mCartSubject.next([]);
  }
  addToHistory(products:Array<any>){
    localStorage.setItem(productHistory,JSON.stringify(products));
  }
}
