import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-emp-post-job-view',
  templateUrl: './emp-post-job-view.component.html',
  styleUrls: ['./emp-post-job-view.component.css']
})
export class EmpPostJobViewComponent implements OnInit {

  @ViewChild('content') modalContent;
  jobPost;

  constructor(
    private modalService: NgbModal, 
  ) {}

  ngOnInit() {
  }

  /**
   * Open modal
   * @param jobPost
   */
  openLg(jobPost: any = null) {
    this.jobPost = jobPost;
    this.modalService.open(this.modalContent, { size: 'lg' });
  }
}
