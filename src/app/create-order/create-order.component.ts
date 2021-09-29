import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute , Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  orderdata = new FormGroup({
    productname : new FormControl(''),
    productquantity : new FormControl(''),
    productprice : new FormControl(''),
    address : new FormControl(''),
    paymentmethod : new FormControl(''),
    mobile : new FormControl(''),
    email : new FormControl(''),
    firstname : new FormControl(''),
    lastname : new FormControl('')
  })
  create: any;
  createOrder: any;
  constructor(private route : ActivatedRoute , private router : Router , private data : DataService) { }

  ngOnInit() {
  }

  orderFunction(){
    console.log(this.orderdata.value);
  }


  orderdataFun(){
    this.data.addOrder(this.orderdata).subscribe((data: {})=>{
      console.log(data);
      this.create = data;
       this.createOrder = this.create.message;
    })
  }
  }

