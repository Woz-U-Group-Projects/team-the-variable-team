import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { EmpUsersService } from '../services/empusers.service';
import { SessionService } from '../services/session.service';
import { MessengerService } from '../services/messenger.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private empUsersService: EmpUsersService,
    private sessionService: SessionService,
    private messengerService: MessengerService
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
        this.initInbox(res.id, type);
        if (type == 'student') {
          // Redirect the user to the student profile
          // hard redirecr to refresh the session
          window.location.href = '/stdprofile/' + res.id;
        }
        else if (type == 'employer') {
          // Redirect the user to the employer profile
          window.location.href = '/empprofile/' + res.id;
        }
      }
      else {
        // Show error message
        this.loginError = true;
      }
    })
  }

  /**
   * Initializ eimbox messages for the new user
   */
  initInbox(userId, userType) {
    let query: any = {};
    if (userType == 'employer') {
      query.EmployerRecipientID = userId;
    }
    else if (userType == 'student') {
      query.StudentRecipientID = userId;
    }
    this.messengerService.getIncoming(query).subscribe(res => {
      if (res && res.length) {
        this.messengerService.incoming = res;
        // Get unread messages
        this.messengerService.unread = 0;
        this.messengerService.incoming.forEach(message => {
          if (message.Read == 0 && 
            ((message.EmpRecipient && message.EmpRecipient.ID == userId) ||
              (message.StdRecipient && message.StdRecipient.StudentID == userId))) {
            this.messengerService.unread++;
          }
        });
      }
    });
  }

  empsignup(): void {
    this.router.navigate(['empsignup']);
  }

  stdsignup(): void {
    this.router.navigate(['stdsignup']);
  }
}

