import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { EmpUsersService } from '../services/empusers.service';
import { SessionService } from '../services/session.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private empUsersService: EmpUsersService,
    private sessionService: SessionService
  ) { }
  username: string;
  password: string;
  // Type of user: 'employer' or 'student'
  type: string;
  // True if there was an error loggin in
  loginError: boolean;

  ngOnInit() {
    let session = this.sessionService.getSession();
    if (session.userType == 'student') {
      this.router.navigate(['/stdprofile/' + session.userId]);
    }
    else if (session.userType == 'employer') {
      // Redirect the user to the employer profile
      this.router.navigate(['/empprofile/' + session.userId]);
    }
  }

  /**
   * Log the user in
   */
  login(type): void {
    // Send login request
    this.empUsersService.employerSignin({
      username: this.username,
      password: this.password,
      userType: type
    })
    .subscribe((res: any) => {
      if (res.success) {
        this.sessionService.setSession(res.id, type);
        if (type == 'student') {
          // Redirect the user to the student profile
          this.router.navigate(['/stdprofile/' + res.id]);
        }
        else if (type == 'employer') {
          // Redirect the user to the employer profile
          this.router.navigate(['/empprofile/' + res.id]);
        }
        else {
          // Show error message
          this.router.navigate(['/login/']);
          this.loginError = true;
        }
      }
     
    })
  }

  empsignup(): void {
    this.router.navigate(['empsignup']);
  }

  stdsignup(): void {
    this.router.navigate(['stdsignup']);
  }
}

