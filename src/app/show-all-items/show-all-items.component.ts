import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, items } from '../data.service';

@Component({
  selector: 'app-show-all-items',
  templateUrl: './show-all-items.component.html',
  styleUrls: ['./show-all-items.component.css']
})
export class ShowAllItemsComponent implements OnInit {
  placed: any;
  placedItems: any;
  purchased: any;
  purchasedItems: any;
  cancled: any;
  cancledItems: any;
  view: any;
  viewItems: any;

  constructor(private route : ActivatedRoute , private router : Router , private data : DataService) { }

  ngOnInit() {
    this.fetchplacedItems()
    this.fetchpurchasedItems()
    this.fetchCancledItems()
    this.fetchItems()
  }

  a = false;
  b = false;

  fetchplacedItems(){
    return this.data.getplaceditems().subscribe((items:any)=>{
      console.log(items);
      this.placed = items;
      this.placedItems = this.placed.message;

      //condition
      if(this.placedItems=="No records found"){
        this.a = false;
        this.b = true;
      }else{
        this.a = true;
        this.b = false;
      }
  });
  }

  x = false;
  y = false;

  fetchpurchasedItems(){
    return this.data.getpurchasedItemcount().subscribe((items: any)=>{
      console.log(items);
      this.purchased = items;
      this.purchasedItems = this.purchased.message;

      //condition
      if(this.purchasedItems=="No Completed records"){
        this.x = false;
        this.y = true;
      }else{
        this.x = true;
        this.y = false;
      }
    });
  }

  c = false;
  d = false;

  fetchCancledItems(){
    return this.data.getCancledItems().subscribe((items:any)=>{
      console.log(items);
      this.cancled = items;
      this.cancledItems = this.cancled.message;

      //condition
      if(this.cancledItems=="No cancelled records"){
        this.c = false;
        this.d = true;
      }else{
        this.c = true;
        this.d = false;
      }
    })
  }

s = false;
f = false;

  fetchItems(){
    return this.data.getitems().subscribe((items: any)=>{
      console.log(items);
      this.view = items;
      this.viewItems = this.view.message;

      //condition
      if(this.viewItems=="No records found!"){
        this.s = false;
        this.f = true;
      }else{
        this.s = true;
        this.f = false;
      }
    })
  }

}
