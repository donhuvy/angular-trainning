import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {path:'',component:UserComponent,children:[
    {path:'user-list',component:UserListComponent},
    {path:'user-login',component:UserLoginComponent},
    {path:'',redirectTo:'user-login'}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
