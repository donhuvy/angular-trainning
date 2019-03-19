import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { CartTotalService } from 'src/app/core/cart-total.service';
@Component({
  selector: 'app-product-child',
  templateUrl: './product-child.component.html',
  styleUrls: ['./product-child.component.scss']
})
export class ProductChildComponent implements OnInit {
  @Input('product') mProduct: Product;
  isChecked:boolean = false;
  constructor(private cartTotalService: CartTotalService) { }

  ngOnInit() {
    this.getCarts();
  }
  onClickAddToCart(){
    this.cartTotalService.addProducts(this.mProduct);
  }
  getCarts(){
    this.cartTotalService.getProducts().subscribe((products)=>{
      this.doCheckOnCart(products);
    })
  }
  doCheckOnCart(products){
    let check:boolean = false;
    products.map((pro)=>{
      if(pro.id == this.mProduct.id){
        this.isChecked = true;
      }
    })
  }
}
