import { ViewChild, Component, OnInit, Input } from '@angular/core';
import { StdUsers } from '../angular-models/Std_Users';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  @ViewChild('messageDialog') messageDialog: MessageDialogComponent;

  @Input() students: StdUsers[] = [];

  constructor() { }

  ngOnInit() {
  }

  openMessageBox(student) {
    this.messageDialog.openLg(null, student);
  }


}
