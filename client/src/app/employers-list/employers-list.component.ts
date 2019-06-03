import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { EmpUsers } from '../angular-models/Emp_Users';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';
import { EmpJobpostsComponent } from '../employer/emp-jobposts/emp-jobposts.component';
import { EmpProfileViewComponent } from '../emp-profile-view/emp-profile-view.component';

@Component({
  selector: 'app-employers-list',
  templateUrl: './employers-list.component.html',
  styleUrls: ['./employers-list.component.css']
})
export class EmployersListComponent implements OnInit {
  @ViewChild('messageDialog') messageDialog: MessageDialogComponent;
  @ViewChild('empJobposts') empJobposts: EmpJobpostsComponent;
  @ViewChild('empprofileview') empprofileview: EmpProfileViewComponent;

  @Input() employers: EmpUsers[] = [];

  constructor() { }

  ngOnInit() {
  }

  openMessageBox(employer) {
    this.messageDialog.openLg(null, employer);
  }

  /**
   * Add the job to the std jobs list when created
   */
  openEmployerJobPosts(employer) {
    this.empJobposts.openLg(employer);
  }

  /**
   * Add the job to the std jobs list when created
   */
  openEmployersProfileView(student) {
    this.empprofileview.openLg(student);
  }
}
