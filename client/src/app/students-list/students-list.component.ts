import { ViewChild, Component, OnInit, Input } from '@angular/core';
import { StdUsers } from '../angular-models/Std_Users';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';
import { StdJobpostsComponent } from '../student/std-jobposts/std-jobposts.component';
import { StdProfileViewComponent } from '../std-profile-view/std-profile-view.component';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  @ViewChild('messageDialog') messageDialog: MessageDialogComponent;
  @ViewChild('stdJobposts') stdJobposts: StdJobpostsComponent;
  @ViewChild('stdprofileview') stdprofileview: StdProfileViewComponent;
  

  @Input() students: StdUsers[] = [];

  constructor() { }

  ngOnInit() {
  }

  openMessageBox(student) {
    this.messageDialog.openLg(null, student);
  }

  /**
   * Add the job to the std jobs list when created
   */
  openStudentsJobPosts(student) {
    if (student && student.jobPosts && student.jobPosts.length) {
      this.stdJobposts.openLg(student);
    }
  }

  /**
   * Add the job to the std jobs list when created
   */
  openStudentsProfileView(student) {
    this.stdprofileview.openLg(student);
  }
}
