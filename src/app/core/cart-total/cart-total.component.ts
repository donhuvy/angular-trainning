import { Component, OnInit,OnDestroy } from '@angular/core';
import { CartTotalService } from '../cart-total.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.scss']
})
export class CartTotalComponent implements OnInit,OnDestroy {
  mTotal:number = 0;
  mSubscription:Subscription;
  mProcduts:Array<any>=[];
  constructor(private cartTotalService:CartTotalService) { }

  ngOnInit() {
    this.getProduct();
  }
  ngOnDestroy(){
    this.mSubscription.unsubscribe();
  }
  getProduct(){
    this.mSubscription = this.cartTotalService.getProducts().subscribe((res)=>{
      console.log(res);
      this.mTotal = res.length;
      this.mProcduts = res;
    })
  }
}
