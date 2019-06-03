import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-std-profile-view',
  templateUrl: './std-profile-view.component.html',
  styleUrls: ['./std-profile-view.component.css']
})
export class StdProfileViewComponent implements OnInit {
  @ViewChild('content') modalContent;
  student;

  constructor(
    private modalService: NgbModal 
  ) {}


  ngOnInit() {
  }

  /**
   * Open modal
   * @param jobPost
   */
  openLg(student) {
    this.student = student;
    this.modalService.open(this.modalContent, { size: 'lg' });
  }
}
