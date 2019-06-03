import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-std-post-job-view',
  templateUrl: './std-post-job-view.component.html',
  styleUrls: ['./std-post-job-view.component.css']
})
export class StdPostJobViewComponent implements OnInit {

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
