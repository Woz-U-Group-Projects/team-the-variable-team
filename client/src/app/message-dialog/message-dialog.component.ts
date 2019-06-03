import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { MessengerService } from '../services/messenger.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.css']
})
export class MessageDialogComponent implements OnInit {
  @ViewChild('content') modalContent;
  // Reference to the list of messages
  @ViewChildren('messagesReference') messagesReference: QueryList<any>;

  // Message this dialog is displaying
  parent: any;
  // Received message
  received: any;
  // Message history
  messageHistory: any = [];
  // Reply to message history
  create: any = {};
  // Session info
  session: any;
  user;

  constructor(
    private modalService: NgbModal, 
    private messengerService: MessengerService,
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.session = this.sessionService.getSession();
  }

  ngAfterViewInit() {
  }

  /**
   * Open modal
   * @param jobPost
   */
  openLg(message = null, user = null) {
    this.clearModal();

    if (user) {
      this.user = user;
    }
    else if (message) {
      this.received = message;
      // Mark this message as read if is unread
      if (!message.Read) {
        this.messengerService.markAsRead(message.ID);
      }
      if (!message.ParentMessage) {
        // This is the parent message of this conversation
        this.parent = message;
        this.getHistory();
      }
      else {
        // Retrieve the parent message
        this.messengerService.getMessage(message.ParentMessage).subscribe((res: any) => {
          if (res && res.length) {
            this.parent = res[0];
            this.getHistory();
          }
        })
      }
    }
    // Retrieve comments
    this.modalService.open(this.modalContent, { size: 'lg' });
  }

  /**
   * Retrieve the conversation history
   */
  getHistory() {
    // Retrieve message history
    this.messengerService.getHistory(this.parent.ID).subscribe((res: any) => {
      if (res && res.length) {
        this.messageHistory = res;
        // Mark conversation as read
        this.markAsRead();

        this.scrollListToBottom();
        this.messagesReference.changes.subscribe(t => {
          this.scrollListToBottom();
        })
      }
    })
  }

  /**
   * Scroll messages list to bottom
   */
  scrollListToBottom() {
    setTimeout(() => {
      // Scoll list to bottom
      let element = document.getElementById('messages-list');
      if (element) {
        element.scrollTop = element.scrollHeight
      }
    })
  }

  /**
   * Mark messages as read
   */
  markAsRead() {
    for (let message of this.messageHistory) {
      if (!message.Read && 
         ((message.EmpRecipient && message.EmpRecipient.ID == this.session.userId && this.session.userType == 'employer') || 
         (message.StdRecipient && message.StdRecipient.StudentID == this.session.userId && this.session.userType == 'student'))) {
        this.messengerService.markAsRead(message.ID);
      }
    }
  }

  clearModal() {
    this.parent = null;
    this.received = null;
    this.messageHistory = [];
    this.create = {};
  }

  /**
   * Add comment to jobPost
   */
  onSubmit() {
    let message: any = {
      Message: this.create.Message
    };

    if (this.parent) {
      message.ParentMessage = this.parent.ID;
    }
    // Set message creator
    if (this.session.userType == 'student') {
      message.StudentCreatorID = this.session.userId;
    }
    else if (this.session.userType == 'employer') {
      message.EmployerCreatorID = this.session.userId;
    }
    // Set message recipient
    if (this.received) {
      if (this.received.StdCreator) {
        message.StudentRecipientID = this.received.StdCreator.StudentID;
      }
      if (this.received.EmpCreator) {
        message.EmployerRecipientID = this.received.EmpCreator.ID;
      }
    }
    else if (this.user) {
      if (this.user.StudentID) {
        message.StudentRecipientID = this.user.StudentID;
      }
      else {
        message.EmployerRecipientID = this.user.ID;
      }
    }
    this.messengerService.createMessage(message).subscribe((res: any) => {
      if (res && res.success) {
        if (this.received) {
          // Initialize messageHistory if needed
          this.messageHistory = this.messageHistory || [];
          // Add recipient to the created message, 
          // So that the UI can show it as sent
          if (this.received.StdCreator) {
            res.result.StdRecipient = this.received.StdCreator;
          }
          else if (this.received.EmpCreator) {
            res.result.StdRecipient = this.received.EmpCreator;
          }
          if (this.session.userType == 'student') {
            // The current user is a student
            res.result.StdCreator = this.received.StdRecipient;
          }
          else if (this.session.userType == 'employer') {
            // The current user is an employer
            res.result.EmpCreator = this.received.EmpRecipient;
          }
          // Add the message to the history
          this.messageHistory.push(res.result);
        }
          // Clear the form
          this.create.Message = null;
        // Close the modal
        this.modalService.dismissAll();
      }
    })
  }
}
