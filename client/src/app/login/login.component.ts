import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { EmpUsersService } from '../services/empusers.service';


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

  ngOnInit() {
  }

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
    this.router.navigate(['empsignup']);
  }

  stdsignup(): void {
    this.router.navigate(['stdsignup']);
  }
}

