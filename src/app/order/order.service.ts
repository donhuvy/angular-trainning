import { Injectable } from '@angular/core';
const productHistory:string = 'product_history';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { 

  }
  getOrderHistory(){
    return JSON.parse(localStorage.getItem(productHistory)) || [];
  }
}
