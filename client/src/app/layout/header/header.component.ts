import { Component, OnInit, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { MessengerService } from '../../services/messenger.service';
import { MessageDialogComponent } from '../../message-dialog/message-dialog.component';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('messageDialog') messageDialog: MessageDialogComponent;
  
  // Text to search for students
  searchText: string;
  // Session info
  session;

  constructor(
    public router: Router,
    public sessionService: SessionService,
    public messengerService: MessengerService,
    public config: NgbDropdownConfig
  ) {
    config.autoClose = 'outside';
  }

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
      this.messengerService.getIncoming(query).subscribe(res => {
        if (res && res.length) {
          this.messengerService.incoming = res;
          // Get unread messages
          this.messengerService.unread = 0;
          this.messengerService.incoming.forEach(message => {
            if (message.Read == 0 && 
              ((message.EmpRecipient && message.EmpRecipient.ID == this.session.userId) ||
               (message.StdRecipient && message.StdRecipient.StudentID == this.session.userId))) {
              this.messengerService.unread++;
            }
          });
        }
      });
    }
  }

  /**
   * Make the search request
   */
  search(): void {
    if (this.searchText) {
      if (this.session.userType == 'employer') {
        this.router.navigateByUrl("/students/" + this.searchText);
      }
      else if (this.session.userType == 'student') {
        this.router.navigateByUrl("/employers/" + this.searchText);
      }
    }
  }

  logout(): void {
    this.sessionService.logout();
  }

  /**
   * Open edit modal
   */
  openMessageDialog(message) {
    this.messageDialog.openLg(message);
  }
}
