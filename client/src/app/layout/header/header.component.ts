import { Component, OnInit, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  // Text to search for students
  searchText: string;
  // Session info
  session;

  constructor(
    public router: Router,
    public sessionService: SessionService,
  ) { }

  ngOnInit() {
    this.session = this.sessionService.getSession();
    if (this.session && this.session.userId) {
      let query: any = {};
      if (this.session.userType == 'employer') {
        query.EmployerRecipientID = this.session.userId;
      }
      else if (this.session.userType == 'student') {
        query.StudentRecipientID = this.session.userId;
      }
    }
  }

  /**
   * Make the search request
   */
  search(): void {
    if (this.searchText) {
      this.router.navigateByUrl("/students/" + this.searchText);
    }
  }

  logout(): void {
    this.sessionService.logout();
    this.router.navigateByUrl("/login");
  }
}
