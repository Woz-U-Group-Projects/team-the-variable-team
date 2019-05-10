import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmpUsers } from '../../angular-models/Emp_Users';
import { of } from 'rxjs';

import { EmpUsersService } from '../../services/empusers.service';

@Component({
  selector: 'app-display-employers',
  templateUrl: './display-employers.component.html',
  styleUrls: ['./display-employers.component.css']
})
export class DisplayEmployersComponent implements OnInit {
  user = 'User:';
  employers: any[] = [];

  constructor(private empUsersService: EmpUsersService) {}

  ngOnInit() {
    this.empUsersService.getEmployers().subscribe((data : any[]) => {
      console.log(data);
      this.employers = data;
    })
  }

}
