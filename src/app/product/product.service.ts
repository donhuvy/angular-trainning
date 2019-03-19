import { Injectable } from '@angular/core';
import { Product } from './product';
import { Products } from './product-mock';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {

  }
  getProductsList(): Array<Product> {
    return Products;
  }
  searchProducts(products: Array<Product>, name: string, categories: Array<string>) {
    let productsFilter: Array<Product> = products;
    let matchFilterName: boolean = false;
    let matchFilterCate: boolean = false;
    name = name.trim();
    if (name !== '') matchFilterName = true;
    if (categories.length !== 0) matchFilterCate = true;
    if (matchFilterCate) {
      productsFilter = productsFilter.filter((prod, i) => {
        return categories.indexOf(prod.category) !== -1;
      });
    }
    if (matchFilterName) {
      productsFilter = productsFilter.filter((prod, i) => {
        return prod.name.indexOf(name) !== -1;
      });
    }
    return productsFilter;
  }
}
