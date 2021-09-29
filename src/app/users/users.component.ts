import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userdetails = new FormGroup({
    firstname : new FormControl(''),
    lastname : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl(''),
    mobile :new FormControl('')
  })
  user: any;
  createuser: any;
  constructor(private route : ActivatedRoute , private router : Router , private data : DataService) { }

  ngOnInit() {
  }

  userFunction(){
    console.log(this.userdetails.value);
  }

  UserDataFun(){
    this.data.adduser(this.userdetails).subscribe((data: {})=>{
      console.log(data);
      this.user = data;
      this.createuser = this.user.message;
    })
  }

}
