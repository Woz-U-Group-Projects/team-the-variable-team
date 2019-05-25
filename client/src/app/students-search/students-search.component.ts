import { Component, OnInit } from '@angular/core';
import { StdUsers } from '../angular-models/Std_Users';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { StdUsersService } from '../services/stdusers.service';

@Component({
  selector: 'app-students-search',
  templateUrl: './students-search.component.html',
  styleUrls: [
    './students-search.component.css',
    '../employer/emp-profile/emp-profile.component.css',
  ]
})
export class StudentsSearchComponent implements OnInit {

  // Students list
  students: StdUsers[] = [];
  // Search text
  search: string;

  constructor(
    private router: ActivatedRoute,
    private stdService: StdUsersService
  ) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.search = params.get('search');

      this.queryStudents();
    });
  }

  /**
   * Retrieve students matching the search parameter
   */
  queryStudents() {
    this.stdService.searchStudents(this.search).subscribe((res: any) => {
      this.students = res;
    })
  }
}
