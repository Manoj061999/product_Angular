import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  logindetails = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  })
  login: any;
  user: any;
  constructor(private route : ActivatedRoute , private router : Router , private data : DataService) { }

  ngOnInit() {
  }

  loginFunction(){
    console.log(this.logindetails.value);
  }

  LoginUserFun(){
    this.data.loginuser(this.logindetails).subscribe((data: {})=> {
      console.log(data);
      this.login = data;
      this.user = this.login.message;
    })
  }

}
