import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutListComponent } from './checkout-list/checkout-list.component';
import { CheckoutDoneComponent } from './checkout-done/checkout-done.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {
    path: '', component: CheckoutComponent, children: [
      { path: 'checkout-list', component: CheckoutListComponent },
      { path: 'checkout-done', component: CheckoutDoneComponent },
      { path: '', redirectTo: 'checkout-list' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
