import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'product', loadChildren: './product/product.module#ProductModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartModule' },
  { path: 'order', loadChildren: './order/order.module#OrderModule' },
  { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutModule' },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: 'restaurant', canActivate: [AuthGuard], loadChildren: './restaurant/restaurant.module#RestaurantModule' },
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
