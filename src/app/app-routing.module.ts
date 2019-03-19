import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'product',loadChildren:'./product/product.module#ProductModule'},
  {path:'cart',loadChildren:'./cart/cart.module#CartModule'},
  {path:'order',loadChildren:'./order/order.module#OrderModule'},
  {path:'checkout',loadChildren:'./checkout/checkout.module#CheckoutModule'},
  {path:'',redirectTo:'product',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
