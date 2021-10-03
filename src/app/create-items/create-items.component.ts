import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create-items',
  templateUrl: './create-items.component.html',
  styleUrls: ['./create-items.component.css']
})
export class CreateItemsComponent implements OnInit {
  itemsdetails = new FormGroup({
    itemname : new FormControl(''),
    itemquantity : new FormControl(''),
    itemprice : new FormControl(''),
    address : new FormControl(''),
    mobile : new FormControl(''),
    email : new FormControl(''),
    firstname : new FormControl(''),
    lastname : new FormControl('')
  })
  created: any;
  items: any;


  //UPDATE
  updatedetails = new FormGroup({
    itemsid : new FormControl(''),
    itemquantity : new FormControl(''),
    address : new FormControl('')
  })
  updated: any;
  itemsUpdate: any;

  //CANCLE
  cancledetails = new FormGroup({
    itemsid : new FormControl('')
  })
  cancled: any;
  itemscancle: any;
  constructor(private route : ActivatedRoute , private router : Router , private data : DataService) { }

  ngOnInit() {
  }

  ItemsFunction(){
    console.log(this.itemsdetails.value);
  }
  UpdateFunction(){
    console.log(this.updatedetails.value);
  }
  CancleFunction(){
    console.log(this.cancledetails.value);
  }




  ItemsFun(){
    this.data.AddItems(this.itemsdetails).subscribe((data: {})=> {
      console.log(data);
      this.created = data;
      this.items = this.created.message;
    })
  }

  UpdateFun(){
    this.data.updateitems(this.updatedetails).subscribe((data: {})=> {
      console.log(data);
      this.updated = data;
      this.itemsUpdate = this.updated.message;
    })
  }

  CancleFun(){
    this.data.cancleItems(this.cancledetails).subscribe((data: {})=> {
      console.log(data);
      this.cancled = data;
      this.itemscancle = this.cancled.message;
    })
  }


}
