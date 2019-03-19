import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  mOrders:Array<any>=[];
  constructor(private orderService:OrderService) { }

  ngOnInit() {
    this.onLoadOrders();
  }
  onLoadOrders(){
    this.mOrders = this.orderService.getOrderHistory();
  }
}
