import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EmpJobPostsService} from '../../services/empjobposts.service'
import { EmpJobPosts} from '../../angular-models/Emp_JobPosts';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SafeHtmlPipe } from '../../core/safehtml.pipe';

@Component({
  selector: 'app-emp-post-job',
  templateUrl: './emp-post-job.component.html',
  styleUrls: ['./emp-post-job.component.css'],
  providers: [SafeHtmlPipe]
})
export class EmpPostJobComponent implements OnInit {
  @ViewChild('content') modalContent;

  closeResult: string;
  // Reactive form reference
  postForm: FormGroup;
  // Config Options for the Froala editor
  editorOptions = {
    placeholderText: 'Enter Job Description',
    imageUpload: false,
  }
  // Id of the employer (url parameter)
  employerId: string;
  @Output() jobCreated = new EventEmitter<EmpJobPosts>();
  @Output() jobUpdated = new EventEmitter<any>();
  // Job post to edit
  editJobPost;

  constructor(
    private empJobPostsService: EmpJobPostsService, 
    private modalService: NgbModal, 
    private route: ActivatedRoute
  ) {}

  /**
   * Open modal
   * @param jobPost
   */
  openLg(jobPost: any = null) {
    this.postForm.reset();

    this.editJobPost = jobPost;
    if (jobPost && jobPost.EmpJobID) {
      // Generate Angular's Reactive Form
      this.postForm.patchValue({
        'JobName': jobPost.EmpJobName,
        'JobLocation': jobPost.EmpJobLocation,
        'JobWebsite': jobPost.EmpJobWebsite,
        'JobContactNum': jobPost.EmpJobContactNum,
        'JobEmail': jobPost.EmpJobEmail,
        'JobDescription': jobPost.EmpJobDescription
      });
    }
    this.modalService.open(this.modalContent, { size: 'lg' });
  }

  /**
   * OnInit lifecycle hook
   */
  ngOnInit(): void {
    // Get
    this.route.paramMap.subscribe(params => {
      this.employerId = params.get('id');
    });
    this.postForm = new FormGroup({
      'JobName': new FormControl(),
      'JobLocation': new FormControl(),
      'JobWebsite': new FormControl(),
      'JobContactNum': new FormControl(),
      'JobEmail': new FormControl(),
      'JobDescription': new FormControl()
    });
  }

  /**
   * Called on submit action of the post form
   */
  create(): void {
    // Get form data
    let value = this.postForm.getRawValue();
    if (this.editJobPost && this.editJobPost.EmpJobID) {
      // If there is a jobPost, update it
      this.empJobPostsService.updateEmpJob(this.editJobPost.EmpJobID, value).subscribe((res: any) => {
        if (res && res.success) {
          this.jobUpdated.emit({
            value: value,
            id: this.editJobPost.EmpJobID
          });
          this.modalService.dismissAll();
        }
      })
    }
    else {
      // If there is no jobPost, create it
      // Set emp id 
      value['JobCreatedById'] = this.employerId;
      // Set post date
      value['JobPostedDate'] = this.getCurrentDate();
      // Submit the form
      this.empJobPostsService.addEmpJob(value).subscribe((res: EmpJobPosts) => {
        if (res) {
          this.jobCreated.emit(res);
          this.modalService.dismissAll();
        }
      })
    }
  }

  /**
   * Helper function to get current date as a string
   */
  getCurrentDate(): string {
    let date = [];
    let today = new Date();
    let month = today.getMonth();
    date.push(month.toString().length == 1 ? '0' + month.toString() : month.toString());
    let day = today.getDate();
    date.push(day.toString().length == 1 ? '0' + day.toString() : day.toString());
    date.push(today.getFullYear());
    return date.join('-');
  }
}
