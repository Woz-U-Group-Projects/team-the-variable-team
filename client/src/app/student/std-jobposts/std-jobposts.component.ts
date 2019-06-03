import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StdPostJobViewComponent } from '../../std-post-job-view/std-post-job-view.component';
import { CommentsComponent } from '../../comments/comments.component';

@Component({
  selector: 'app-std-jobposts',
  templateUrl: './std-jobposts.component.html',
  styleUrls: ['./std-jobposts.component.css']
})
export class StdJobpostsComponent implements OnInit {

  @ViewChild('content') modalContent;
  @ViewChild('stdJobView') stdJobView: StdPostJobViewComponent;
  @ViewChild('comments') commentsView: CommentsComponent;
  stdjobPosts;

  constructor(
    private modalService: NgbModal, 
  ) {}

  ngOnInit() {
  }

  /**
   * Open modal
   * @param jobPost
   */
  openLg(student: any = null) {
    if (student && student.jobPosts) {
      this.stdjobPosts = student.jobPosts;
      this.modalService.open(this.modalContent, { size: 'lg' });
    }
  }

  /**
   * Open student job post view modal
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
