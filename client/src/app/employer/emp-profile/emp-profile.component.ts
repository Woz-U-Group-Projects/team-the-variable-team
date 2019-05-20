import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpUsersService } from '../../services/empusers.service';
import { EmpUsers } from '../../angular-models/Emp_Users';

@Component({
  selector: 'app-emp-profile',
  templateUrl:'./emp-profile.component.html',
  styleUrls: ['./emp-profile.component.css']
})
export class EmpProfileComponent implements OnInit {
  employer: EmpUsers[] = [];
  constructor(private empUsersService: EmpUsersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'))
      this.empUsersService.getEmployer(params.get('id')).subscribe((data: EmpUsers[]) => {
        console.log(data);
        this.employer = data;
      })
    });
  }
}