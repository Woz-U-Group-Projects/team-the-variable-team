import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Emp_Users } from '../../../../../models/Emp_Users';


@Component({
  selector: 'app-emp-profile',
  templateUrl: './emp-profile.component.html',
  styleUrls: ['./emp-profile.component.css']
})
export class EmpProfileComponent implements OnInit {
  Emp_Users: Emp_Users[];
  @Input() dataPath: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Emp_Users[]>(this.dataPath).subscribe(Emp_Users => {
      this.Emp_Users = Emp_Users;
    });
  }
}


