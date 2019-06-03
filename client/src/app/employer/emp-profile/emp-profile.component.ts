import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpUsersService } from '../../services/empusers.service';
import { StdUsersService } from '../../services/stdusers.service';
import { EmpUsers } from '../../angular-models/Emp_Users';
import { StdUsers } from '../../angular-models/Std_Users';
import { EmpJobPosts } from '../../angular-models/Emp_JobPosts';
import { EmpJobPostsService } from '../../services/empjobposts.service';
import { StdJobPosts } from '../../angular-models/Std_JobPosts';
import { EmpPostJobComponent } from '../emp-post-job/emp-post-job.component';
import { CommentsComponent } from '../../comments/comments.component';
import { SessionService } from '../../services/session.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-emp-profile',
  templateUrl:'./emp-profile.component.html',
  styleUrls: ['./emp-profile.component.css']
})
export class EmpProfileComponent implements OnInit {
  @ViewChild('postJobForm') postJobForm: EmpPostJobComponent;
  @ViewChild('comments') commentsView: CommentsComponent;

  // Employer
  employer: EmpUsers = null;
  // Students
  students: StdUsers[] = [];
  // JobPosts
  jobPosts: any[] = [];
  // Id of the employer (url parameter)
  employerId: string;
  // Job post to edit
  editJob: StdJobPosts;
  // Object holding all comments per jobPost
  comments;
  // Comments showing in the comments component
  activeComments;
  // Session
  session;

  constructor(
    public router: Router,
    private empUsersService: EmpUsersService, 
    private stdUsersService: StdUsersService, 
    private empJobPostsService: EmpJobPostsService, 
    private sessionService: SessionService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  /**
   * OnInit lifecycle hook
   */
  ngOnInit(): void {
    // Get
    this.route.paramMap.subscribe(params => {
      this.employerId = params.get('id');

      // Retrieve session info  
      this.session = this.sessionService.getSession();
      // Employers can only see their own profile
      if (this.session.userType == 'employer' && this.session.userId != this.employerId) {
        this.sessionService.logout();
        this.router.navigateByUrl("/login");
      }


      // Retrieve employer
      this.getEmployer();
      // Retrieve students
      this.getStudents();
      // Retrieve jobPosts of this employer
      this.getJobPostByCreated();
    });
  }

  /**
   * Retrieve employer using employer ID
   */
  getEmployer(): void {
    this.empUsersService
        .getEmployer(this.employerId)
        .subscribe((data: EmpUsers) => {
      this.employer = data;
    })
  }

  /**
   * Retrieve students list
   */
  getStudents(): void {
    this.stdUsersService
        .getStudents()
        .subscribe((data: StdUsers[]) => {
      this.students = data;
    })
  }

  /**
   * Retrieve job posts created by this employer
   */
  getJobPostByCreated(): void {
    this.empJobPostsService
        .getEmpJobsByCreated(this.employerId)
        .subscribe((data: EmpJobPosts[]) => {
      this.jobPosts = data;
    })
  }

  /**
   * On job created
   */
  onJobCreated(post: EmpJobPosts): void {
    this.jobPosts.push(post);
  }

  /**
   * On job updated
   */
  onJobUpdated(config: any) {
    for (let post of this.jobPosts) {
      if (post.EmpJobID == config.id) {
        post.EmpJobName = config.value['JobName'];
        post.EmpJobLocation = config.value['JobLocation'];
        post.EmpJobWebsite = config.value['JobWebsite'];
        post.EmpJobContactNum = config.value['JobContactNum'];
        post.EmpJobEmail = config.value['JobEmail'];
        post.EmpJobDescription =config.value['JobDescription'];
      }
    }
  }

  /**
   * Open edit modal
   */
  openEditModal(jobPost: StdJobPosts) {
    this.postJobForm.openLg(jobPost);
  }

  /**
   * Open edit modal
   */
  openCommentsModal(jobPost) {
    this.commentsView.openLg(jobPost);
  }
}
