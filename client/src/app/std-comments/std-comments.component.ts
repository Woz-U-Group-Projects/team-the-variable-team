import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmpJobPostsService } from '../services/empjobposts.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-std-comments',
  templateUrl: './std-comments.component.html',
  styleUrls: ['./std-comments.component.css']
})
export class StdCommentsComponent implements OnInit {
  @ViewChild('content') modalContent;

  // List of comments
  comments: any = [];
  // JobPost id 
  jobPost;
  // Form value
  create: any = {};
  reply: any = {};
  // Session
  session;

  constructor(
    private modalService: NgbModal, 
    private sessionService: SessionService,
    private empJobPostsService: EmpJobPostsService
  ) { }

  ngOnInit() {
    // Retrieve session info  
    this.session = this.sessionService.getSession();
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
    let jobPostId = this.jobPost.EmpJobID || this.jobPost.StdJobID;
    this.empJobPostsService.getComments(jobPostId).subscribe(res => {
      this.comments = res || [];
    })
  }

  /**
   * Add comment to jobPost
   */
  onReplySubmit(parent, index) {
    if (!this.reply || !this.reply.comment) {
      return;
    }
    let comment = {
      comment: this.reply.comment,
      emppostjobid: this.jobPost.EmpJobID || this.jobPost.StdJobID,
      parentComment: parent.id,
      std_creator: this.session.userId
    };
    this.empJobPostsService.addComment(comment).subscribe((res: any) => {
      if (res && res.success) {
        this.comments[index].child = res.result;
        this.reply.comment = null;
      }
    })
  }

  /**
   * Add comment to jobPost
   */
  onCommentSubmit() {
    if (!this.create || !this.create.comment) {
      return;
    }
    let comment = {
      comment: this.create.comment,
      emppostjobid: this.jobPost.EmpJobID || this.jobPost.StdJobID,
      parentComment: null,
      std_creator: this.session.userId
    };
    this.empJobPostsService.addComment(comment).subscribe((res: any) => {
      if (res && res.success) {
        this.comments.push(res.result);
        this.create.comment = null;
      }
    })
  }
}
