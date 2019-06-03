import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-emp-profile-view',
  templateUrl: './emp-profile-view.component.html',
  styleUrls: ['./emp-profile-view.component.css']
})
export class EmpProfileViewComponent implements OnInit {
  @ViewChild('content') modalContent;
  employer;

  constructor(
    private modalService: NgbModal 
  ) {}


  ngOnInit() {
  }

  /**
   * Open modal
   * @param jobPost
   */
  openLg(employer) {
    this.employer = employer;
    console.log(employer)
    this.modalService.open(this.modalContent, { size: 'lg' });
  }
}
