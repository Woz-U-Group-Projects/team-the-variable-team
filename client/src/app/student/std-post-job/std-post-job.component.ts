import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StdJobPostsService } from '../../services/stdjobposts.service'
import { StdJobPosts} from '../../angular-models/std_JobPosts';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SafeHtmlPipe } from '../../core/safehtml.pipe';


@Component({
  selector: 'app-std-post-job',
  templateUrl: './std-post-job.component.html',
  styleUrls: ['./std-post-job.component.css']
})
export class StdPostJobComponent implements OnInit {
  @ViewChild('content') modalContent;

  closeResult: string;
  // Reactive form reference
  postForm: FormGroup;
  // Config Options for the Froala editor
  editorOptions = {
    placeholderText: 'Enter Job Description',
    imageUpload: false,
  }
  // Id of the student (url parameter)
  studentId: string;
  @Output() jobCreated = new EventEmitter<StdJobPosts>();
  @Output() jobUpdated = new EventEmitter<any>();
  // Job post to edit
  editJobPost;

  constructor(
    private stdJobPostsService: StdJobPostsService, 
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
    if (jobPost && jobPost.StdJobID) {
      // Generate Angular's Reactive Form
      this.postForm.patchValue({
        'JobName': jobPost.StdJobName,
        'JobLocation': jobPost.StdJobLocation,
        'JobWebsite': jobPost.StdJobWebsite,
        'JobContactNum': jobPost.StdJobContactNum,
        'JobEmail': jobPost.StdJobEmail,
        'JobDescription': jobPost.StdJobDescription
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
      this.studentId = params.get('id');
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
    if (this.editJobPost && this.editJobPost.StdJobID) {
      // If there is a jobPost, update it
      this.stdJobPostsService.updateStdJob(this.editJobPost.StdJobID, value).subscribe((res: any) => {
        if (res && res.success) {
          this.jobUpdated.emit({
            value: value,
            id: this.editJobPost.StdJobID
          });
          this.modalService.dismissAll();
        }
      })
    }
    else {
      // If there is no jobPost, create it
      // Set std id 
      value['JobCreatedById'] = this.studentId;
      // Set post date
      value['JobPostedDate'] = this.getCurrentDate();
      // Submit the form
      this.stdJobPostsService.addStdJob(value).subscribe((res: StdJobPosts) => {
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

