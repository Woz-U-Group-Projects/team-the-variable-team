import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpUsersService } from '../services/empusers.service';
import { StdUsersService } from '../services/stdusers.service';
import { EmpUsers } from '../angular-models/Emp_Users';
import { StdUsers } from '../angular-models/Std_Users';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private empUsersService: EmpUsersService
  ) { }
  username: string;
  password: string;


  login(): void {
    this.empUsersService.employerSignin({
      username: this.username,
      password: this.password
    })
    .subscribe(res => {
      console.log(res)
    })
  }

  empsignup(): void {
    this.router.navigate(['/empsignup']);
  }

  stdsignup(): void {
    this.router.navigate(['stdsignup']);
  }

  ngOnInit() {}
}

