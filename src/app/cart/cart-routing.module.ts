import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CartListComponent } from './cart-list/cart-list.component';

const routes: Routes = [
  {
    path: '', component: CartComponent, children: [
      { path: 'cart-list', component: CartListComponent },
      { path: '', redirectTo: 'cart-list' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
