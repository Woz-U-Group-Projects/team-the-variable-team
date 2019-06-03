import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmpPostJobViewComponent } from '../../emp-post-job-view/emp-post-job-view.component';
import { StdPostJobViewComponent } from '../../std-post-job-view/std-post-job-view.component';
import { CommentsComponent } from '../../comments/comments.component';

@Component({
  selector: 'app-emp-jobposts',
  templateUrl: './emp-jobposts.component.html',
  styleUrls: ['./emp-jobposts.component.css']
})
export class EmpJobpostsComponent implements OnInit {

  @ViewChild('content') modalContent;
  @ViewChild('empJobView') empJobView: EmpPostJobViewComponent;
  @ViewChild('stdJobView') stdJobView: StdPostJobViewComponent;
  @ViewChild('comments') commentsView: CommentsComponent;
  empjobPosts;

  constructor(
    private modalService: NgbModal, 
  ) {}

  ngOnInit() {
  }

  /**
   * Open modal
   * @param jobPost
   */
  openLg(employer: any = null) {
    if (employer && employer.jobPosts) {
      this.empjobPosts = employer.jobPosts;
      this.modalService.open(this.modalContent, { size: 'lg' });
    }
  }

  /**
   * Open employer job post view modal
   */
  openEmpViewModal(jobPost) {
    this.empJobView.openLg(jobPost);
  }

  /**
   * Open employer job post view modal
   */
  openStdViewModal(jobPost) {
    this.stdJobView.openLg(jobPost);
  }

  /**
   * Open edit modal
   */
  openCommentsModal(jobPost) {
    this.commentsView.openLg(jobPost);
  }
}
