import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeedetails = new FormGroup({
    employeename : new FormControl(''),
    employeeId : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl(''),
    mobile : new FormControl('')
  })
  employe: any;
  employeData: any;

  //LOGIN 
  Logindetails = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  })
  login: any;
  loginemp: any;
  constructor(private route : ActivatedRoute , private router : Router , private data : DataService) { }

  ngOnInit() {
  }

  EmployeeFunction(){
    console.log(this.employeedetails.value);
  }
  LoginFunction(){
    console.log(this.Logindetails.value);
  }


  EmployeeDetailsFun(){
    this.data.AddEmployee(this.employeedetails).subscribe((data: {})=> {
      console.log(data);
      this.employe = data;
      this.employeData = this.employe.message;
    })
  }

  LoginEmployeeFun() {
    this.data.LoginEmployee(this.Logindetails).subscribe((data)=> {
      console.log(data);
      this.login = data;
      this.loginemp = this.login.message;
    })
  }

}
