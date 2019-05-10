import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmpUsersService } from '../services/empusers.service';
import { EmpUsers } from '../angular-models/Emp_Users';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  employers: any[] = [];
  showSelected: boolean;
  hideSelected: boolean;
  // x: any[] = [document.getElementById('myDIV')];
  // style: any[] = [];

  constructor(private empUsersService: EmpUsersService) {
    this.showSelected = false;
  }

  ngOnInit() {
    this.empUsersService.getEmployers().subscribe((data: any[]) => {
      console.log(data);
      this.employers = data;
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
