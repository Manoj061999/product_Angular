import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {

  //update
  updatedata = new FormGroup({
    orderid : new FormControl(''),
    productquantity : new FormControl(''),
    address : new FormControl('')
  });
  update: any;
  updateorder: any;

  //cancle
  CancleData = new FormGroup({
    orderid : new FormControl('')
  })
  cancle: any;
  canor: any;

  //find
  finddetails = new FormGroup({
    email : new FormControl('')
  })
  find: any;
  FindEmail: any;
  constructor(private route : ActivatedRoute , private router : Router , private data : DataService) { }

  ngOnInit() {
  }

  updateOrderFunction(){
    console.log(this.updatedata.value);
  }
  cancleFunction(){
    console.log(this.CancleData.value);
  }
  FindFunction(){
    console.log(this.finddetails.value);
  }




updateDataFun(){
  this.data.updateOrder(this.updatedata).subscribe((data: {})=> {
    console.log(data);
    this.update = data;
    this.updateorder = this.update.message;
  })
}

CancleDataFun(){
  this.data.CancleOrder(this.CancleData).subscribe((data: {})=> {
    console.log(data);
    this.cancle = data;
    this.canor = this.cancle.message;
  })
}

e=false;
f=false;

findorderFun(){
  this.data.findOrder(this.finddetails).subscribe((data: {})=> {
    console.log(data);
    this.find = data;
    this.FindEmail = this.find.message;

    //condition
    if(this.FindEmail=="no records found"){
      this.e=false;
      this.f=true;
    }else{
      this.e=true;
      this.f=false;
    }
  })
}
}
