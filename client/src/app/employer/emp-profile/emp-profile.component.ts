import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmpUsersService } from '../../services/empusers.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-emp-profile',
  templateUrl: './emp-profile.component.html',
  styleUrls: ['./emp-profile.component.css']
})
export class EmpProfileComponent implements OnInit {

  employer: any;
  constructor(private empUsersService: EmpUsersService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'))
      this.empUsersService.getEmployer(params.get('id')).subscribe(e => {
        console.log(e);
        this.employer = e;
      })
    });
  }
}


