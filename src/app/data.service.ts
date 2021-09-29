import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { FormGroup } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

//CREATE
export class orders {
    productname: String | undefined;
    productquantity: Number | undefined;
    productprice: Number | undefined;
    address:String | undefined;
    paymentmethod:String | undefined;
    mobile:String | undefined;
    email:String | undefined;
    firstname:String | undefined;
    lastname:String | undefined;
  }

  //UPDATE
  export class updateorder {
    orderid : string | undefined;
    productquantity : Number | undefined;
    address : string | undefined;
  }

  //CANCLE
  export class cancleorder {
    orderid : string | undefined;
  }

  //USER 
  export class user {
    firstname : string | undefined;
    lastname : string | undefined;
    email : string | undefined;
    password : string | undefined;
    mobile : Number | undefined;
  }

  //LOGIN USER
  export class userlogin {
    email : string | undefined;
    password : string | undefined;
  }
  

@Injectable({
  providedIn: 'root'
})
export class DataService {
  endPoint = 'http://localhost:9000';
  AddResult: any;

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }





//getdata form mongoDB
getorder(): Observable<orders> {
  return this.httpClient.get<orders>(this.endPoint + '/api/vieworders');
}
getordercount(): Observable<orders> {
  return this.httpClient.get<orders>(this.endPoint +'/api/getorderedproductcountbydate');
}
getpurchasedcount(): Observable<orders> {
  return this.httpClient.get<orders>(this.endPoint +'/api/getpurchesedproductcountbycustomer');
}
 














//adddata 
//CREATE
addOrder(data: FormGroup): Observable<orders> {
    
  let senddata={
    "productname":data.value.productname,
	  "productquantity":data.value.productquantity,
    "productprice":data.value.productprice,
    "address":data.value.address,
    "paymentmethod":data.value.paymentmethod,
    "mobile":data.value.mobile,
	  "email":data.value.email,
    "firstname":data.value.firstname,
    "lastname":data.value.lastname
  }
  console.log(senddata,"ORDER DATA");
  return this.httpClient.post<orders>(this.endPoint + '/api/createorder', JSON.stringify(senddata), this.httpHeader)
}

//UPDATE
updateOrder(data: FormGroup):Observable<updateorder> {

  let updatedata = {
    "orderid": data.value.orderid,
    "productquantity":data.value.productquantity,
    "address":data.value.address
  }
  console.log(updatedata,"UPDATE ORDER");
  return this.httpClient.post<updateorder>(this.endPoint + '/api/updateorder',JSON.stringify(updatedata),this.httpHeader)
}

//CANCLE
CancleOrder(data: FormGroup): Observable<cancleorder> {

  let cancledata = {
    "orderid": data.value.orderid
  }
  console.log(cancledata,"CANCLE ORDER");
  return this.httpClient.post<cancleorder>(this.endPoint + '/api/cancelorder',JSON.stringify(cancledata), this.httpHeader)
}

//USER
adduser(data: FormGroup): Observable<user> {

  let savedata = {
    "firstname":data.value.firstname,
    "lastname":data.value.lastname,
    "email":data.value.email,
    "password":data.value.password,
    "mobile":data.value.mobile
  }
  console.log(savedata,"SAVE USER DATA");
  return this.httpClient.post<user>(this.endPoint + '/api/user',JSON.stringify(savedata),this.httpHeader)
  }

  //USER LOGIN
  loginuser(data: FormGroup): Observable<userlogin> {

    let logindata = {
      "email":data.value.email,
      "password":data.value.password
    }
    console.log(logindata,"LOGIN USER DATA");
    return this.httpClient.post<userlogin>(this.endPoint + '/api/userlogin',JSON.stringify(logindata), this.httpHeader)
  }
}
