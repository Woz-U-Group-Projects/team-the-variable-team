import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StdUsers } from '../../angular-models/Std_Users';
import { SessionService } from '../../services/session.service';
import { StdUsersService } from '../../services/stdusers.service';
import { EmpUsersService } from '../../services/empusers.service';
import { EmpUsers } from '../../angular-models/Emp_Users';
import { EmpJobPostsService } from '../../services/empjobposts.service';
import { EmpPostJobComponent } from '../../employer/emp-post-job/emp-post-job.component';
import { EmpPostJobViewComponent } from '../../emp-post-job-view/emp-post-job-view.component';
import { StdJobPostsService } from '../../services/stdjobposts.service';
import { StdPostJobViewComponent } from '../../std-post-job-view/std-post-job-view.component';
import { CommentsComponent } from '../../comments/comments.component';

@Component({
  selector: 'app-std-profile',
  templateUrl: './std-profile.component.html',
  styleUrls: ['./std-profile.component.css']
})
export class StdProfileComponent implements OnInit {
  @ViewChild('postJobForm') postJobForm: EmpPostJobComponent;
  @ViewChild('empJobView') empJobView: EmpPostJobViewComponent;
  @ViewChild('stdJobView') stdJobView: StdPostJobViewComponent;
  @ViewChild('comments') commentsView: CommentsComponent;
  

  student: StdUsers = null;
  // Id of the employer (url parameter)
  studentId: string;
  session;
  
  // employers list
  employers: EmpUsers[];
  // Employer jobPosts
  empjobPosts;
  // student jobPosts
  stdjobPosts;
  // students list
  students;

  constructor(
    public router: Router,
    private stdUsersService: StdUsersService,
    private empUsersService: EmpUsersService,
    private route: ActivatedRoute, 
    private sessionService: SessionService,
    private empjobpostService: EmpJobPostsService,
    private stdjobpostService: StdJobPostsService
  ) {}

  ngOnInit(): void {
     // Get
     this.route.paramMap.subscribe(params => {
      this.studentId = params.get('id');

      // Retrieve session info  
      this.session = this.sessionService.getSession();
      // Students can only see their own profile
      if (this.session.userType == 'student' && this.session.userId != this.studentId) {
        this.sessionService.logout();
        this.router.navigateByUrl("/login");
      }
      // Retrieve employer
      this.getStudent();
      // Retrieve employer
      this.getStudents();
      // Retrieve students
      this.getEmployers();
      // Retrieve employer jobPosts
      this.getEmpJobPosts();
      // Retrieve student jobPosts
      this.getStdJobPosts();
    });
  }

  /**
   * Retrieve students list
   */
  getStudents(): void {
    this.stdUsersService
        .getStudentsWithJobPosts()
        .subscribe((data: any) => {
      // Remove session student from the list
      for (let i in data) {
        if (data[i].StudentID == this.session.userId) {
          data.splice(i, 1);
          break;
        }
      }
      this.students = data;
    })
  }

  /**
   * Retrieve employer jobPosts
   */
  getEmpJobPosts(): void {
    this.empjobpostService
        .getEmpJobs()
        .subscribe(data => {
      this.empjobPosts = data;
    })
  }

  /**
   * Retrieve student jobPosts
   */
  getStdJobPosts(): void {
    this.stdjobpostService
        .getStdJobs()
        .subscribe(data => {
      this.stdjobPosts = data;
    })
  }

  /**
   * Retrieve students list
   */
  getEmployers(): void {
    this.empUsersService
        .getEmployersWithJobPosts()
        .subscribe((data: EmpUsers[]) => {
      this.employers = data;
    })
  }
  
   /**
   * Retrieve students list
   */
  getStudent(): void {
    this.stdUsersService
        .getStudent(this.studentId)
        .subscribe((data: StdUsers) => {
      this.student = data;
    })
  }

  /**
   * Open edit modal
   */
  openEditModal(jobPost) {
    this.postJobForm.openLg(jobPost);
  }

  /**
   * Add the job to the std jobs list when created
   */
  onJobCreated(created) {
    created.StudentID = {
      StudentID: this.session.userId
    }
    this.stdjobPosts.push(created);
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

  /**
   * On job updated
   */
  onJobUpdated(config: any) {
    for (let post of this.stdjobPosts) {
      if (post.StdJobID == config.id) {
        post.StdJobName = config.value['JobName'];
        post.StdJobLocation = config.value['JobLocation'];
        post.StdJobWebsite = config.value['JobWebsite'];
        post.StdJobContactNum = config.value['JobContactNum'];
        post.StdJobEmail = config.value['JobEmail'];
        post.StdJobDescription =config.value['JobDescription'];
      }
    }
  }
}
