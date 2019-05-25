import { Component, OnInit, Input } from '@angular/core';
import { StdUsers } from '../angular-models/Std_Users';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  @Input() students: StdUsers[] = [];

  constructor() { }

  ngOnInit() {
  }

}
