import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmpUsers } from '../../Emp_Users';


@Component({
  selector: 'app-emp-profile',
  templateUrl: './emp-profile.component.html',
  styleUrls: ['./emp-profile.component.css']
})
export class EmpProfileComponent implements OnInit {
  Emp_Users: EmpUsers[];
  @Input() dataPath: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<EmpUsers[]>(this.dataPath).subscribe(empusers => {
      this.Emp_Users = empusers;
    });
  }
}


