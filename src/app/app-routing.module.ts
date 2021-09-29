import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateOrderComponent } from './create-order/create-order.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { ShowallComponent } from './showall/showall.component';
import { UsersComponent } from './users/users.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [

  {path:'order',component:CreateOrderComponent},
  {path:'updateorder',component:UpdateOrderComponent},
  {path:'',component:ShowallComponent},
  {path:'user',component:UsersComponent},
  {path:'userlogin',component:UserloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
