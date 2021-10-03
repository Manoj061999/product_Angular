import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.css']
})
export class ShowallComponent implements OnInit {
  show: any;
  showall: any;
  count: any;
  datebycount: any;
  purchased: any;
  emp: any;
  Empdata: any;

  constructor(private route : ActivatedRoute, private router : Router, private data:DataService) { }

  ngOnInit() {
    this.fetchOrder()
    this.fetchorderbydate()
    this.fetchorderpurchased()
    //EMPLOYEE
    this.fetchEmployee()
  }

  correct = false;
  wrong = false;

  fetchOrder(){
    return this.data.getorder().subscribe((items:any)=>{
      console.log(items);
      this.show = items;
      this.showall = this.show.message;

      //condition
      if(this.showall=="Orders Not Found"){
        this.correct=false;
        this.wrong=true;
      }else{
        this.correct=true;
        this.wrong=false;
      }
    })
  }


  a = false;
  b= false;

  fetchorderbydate(){
    return this.data.getordercount().subscribe((items:any)=> {
      console.log(items);
      this.count = items;
      this.datebycount = this.count.message;

      //condition
      if(this.datebycount=="Orders Not Found"){
        this.a = false;
        this.b = true;
      }else{
        this.a = true;
        this.b = false;
      }
    })
  }

  x = false;
  y = false;
  
  fetchorderpurchased(){
    return this.data.getpurchasedcount().subscribe((items:any)=> {
      console.log(items);
      this.count = items;
      this.purchased = this.count.message;

      //condition
      if(this.purchased=="Orders Not Found"){
        this.x = false;
        this.y = true;
      }else{
        this.x = true;
        this.y = false;
      }
    })
  }

  fetchEmployee(){
    return this.data.getEmployee().subscribe((items:any)=> {
      console.log(items);
      this.emp = items;
      this.Empdata = this.emp.message;
    })
  }

}
