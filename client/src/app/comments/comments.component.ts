import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmpJobPostsService } from '../services/empjobposts.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @ViewChild('content') modalContent;

  // List of comments
  comments: any = [];
  // JobPost id 
  jobPost;
  // Form value
  create: any = {};

  constructor(
    private modalService: NgbModal, 
    private empJobPostsService: EmpJobPostsService
  ) { }

  ngOnInit() {
  }

  /**
   * Open modal
   * @param jobPost
   */
  openLg(jobPost) {
    this.jobPost = jobPost;
    // Retrieve comments
    this.modalService.open(this.modalContent, { size: 'lg' });
    // Retrieve comments
    this.empJobPostsService.getComments(this.jobPost.EmpJobID).subscribe(res => {
      this.comments = res || [];
    })
  }

  /**
   * Add comment to jobPost
   */
  onSubmit(parent, index) {
    let comment = {
      comment: this.create.comment,
      emppostjobid: this.jobPost.EmpJobID,
      parentComment: parent.id
    };
    this.empJobPostsService.addComment(comment).subscribe((res: any) => {
      if (res && res.success) {
        this.comments[index].child = res.result;
        this.create.comment = null;
      }
    })
  }
}
