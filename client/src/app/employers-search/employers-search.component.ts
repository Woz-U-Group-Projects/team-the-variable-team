import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { EmpUsers } from '../angular-models/Emp_Users';
import { EmpUsersService } from '../services/empusers.service';

@Component({
  selector: 'app-employers-search',
  templateUrl: './employers-search.component.html',
  styleUrls: ['./employers-search.component.css']
})
export class EmployersSearchComponent implements OnInit {

  // employers list
  employers: EmpUsers[] = [];
  // Search text
  search: string;

  constructor(
    private router: ActivatedRoute,
    private empService: EmpUsersService
  ) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.search = params.get('search');

      this.queryEmployers();
    });
  }

  /**
   * Retrieve students matching the search parameter
   */
  queryEmployers() {
    this.empService.searchEmployers(this.search).subscribe((res: any) => {
      this.employers = res;
    })
  }
}
