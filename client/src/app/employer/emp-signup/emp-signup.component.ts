import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpUsersService } from '../../services/empusers.service';
import { EmpUsers } from '../../angular-models/Emp_Users';

@Component({
  selector: 'app-emp-signup',
  templateUrl: './emp-signup.component.html',
  styleUrls: ['./emp-signup.component.css']
})
export class EmpSignupComponent implements OnInit {

  constructor(private empUsersService: EmpUsersService, private route: ActivatedRoute) {}

  ngOnInit() {
  }

}
