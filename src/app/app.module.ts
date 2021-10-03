import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule} from '@angular/common/http';
import { CreateOrderComponent } from './create-order/create-order.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { ShowallComponent } from './showall/showall.component';
import { UsersComponent } from './users/users.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { CreateItemsComponent } from './create-items/create-items.component';
import { ShowAllItemsComponent } from './show-all-items/show-all-items.component';
import { EmployeeComponent } from './employee/employee.component';




@NgModule({
  declarations: [
    AppComponent,
    CreateOrderComponent,
    UpdateOrderComponent,
    ShowallComponent,
    UsersComponent,
    UserloginComponent,
    CreateItemsComponent,
    ShowAllItemsComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
