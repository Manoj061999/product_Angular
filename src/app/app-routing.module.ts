import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateOrderComponent } from './create-order/create-order.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { ShowallComponent } from './showall/showall.component';
import { UsersComponent } from './users/users.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { CreateItemsComponent } from './create-items/create-items.component';
import { ShowAllItemsComponent } from './show-all-items/show-all-items.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [

  {path:'order',component:CreateOrderComponent},
  {path:'updateorder',component:UpdateOrderComponent},
  {path:'showallorders',component:ShowallComponent},
  {path:'user',component:UsersComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'items',component:CreateItemsComponent},
  {path:'showallitems',component:ShowAllItemsComponent},
  {path:'',component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
