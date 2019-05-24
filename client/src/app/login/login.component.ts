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
  empUser: EmpUsers = new EmpUsers();
  stdUser: StdUsers = new StdUsers();
  constructor(private empUsersService: EmpUsersService, private stdUsersService: StdUsersService,private router: Router) {}

  login(): void {
    this.empUsersService.loginEmp(this.empUser).subscribe(() => {
      this.empUsersService.getEmployers().subscribe(() => {
        this.empUsersService.loggedIn = true;
        this.router.navigate(["/:id"]);
      });
    });
  }

  empsignup(): void {
    this.router.navigate(['/empsignup']);
  }

  stdsignup(): void {
    this.router.navigate(['stdsignup']);
  }

  ngOnInit() {}
}

