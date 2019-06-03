import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmpUsersService } from '../services/empusers.service';
import { StdUsersService } from '../services/stdusers.service';
import { EmpUsers } from '../angular-models/Emp_Users';
import { StdUsers } from '../angular-models/Std_Users';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  employers: any[] = [];
  students: any[] = [];
  showSelected: boolean;
  hideSelected: boolean;

  constructor(private empUsersService: EmpUsersService, private stdUsersService: StdUsersService) {
    this.showSelected = false;
  }

  ngOnInit() {
    this.empUsersService.getEmployers().subscribe((data: any[]) => {
      console.log(data);
      this.employers = data;
    });

    this.stdUsersService.getStudents().subscribe((data: any[]) => {
      console.log(data);
      this.students = data;
    });
  }

  toggleButton() {
    this.showSelected = true;
    this.hideSelected = false;
  }

  changeButton() {
    this.showSelected = false;
    this.hideSelected = true;
  }

}
