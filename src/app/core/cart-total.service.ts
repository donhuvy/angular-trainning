import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
const productStorage: string = 'product_storage';
@Injectable({
  providedIn: 'root'
})
export class CartTotalService {
  mCartSubject: BehaviorSubject<Array<any> | null>;
  constructor() {
    this.mCartSubject = new BehaviorSubject(null);
    this.onLoadProductsFromLocal();
  }
  onLoadProductsFromLocal() {
    let products:any = JSON.parse(localStorage.getItem(productStorage));
    if(products==null) products = [];
    this.mCartSubject.next(products);
  }

  getProducts() {
    return this.mCartSubject;
  }
  addProducts(product) {
    if (this.doCheckProdcut(product)) {
      let products = JSON.parse(localStorage.getItem(productStorage)) || [];
      products.push(product);
      localStorage.setItem(productStorage,JSON.stringify(products));
      this.mCartSubject.next(products);
    }
  }
  removeAllProducts(){
    this.mCartSubject.next([]);
  }
  private doCheckProdcut(product): boolean {
    let check: boolean = true;
    let products = JSON.parse(localStorage.getItem(productStorage));
    if (!products) { check = true }
    else {
      products.map((pro) => {
        if (pro.id == product.id) {
          check = false;
        }
      })
    }
    return check;
  }
}
