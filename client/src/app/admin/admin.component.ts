import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmpUsers } from '../Emp_Users';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {  
  title = 'Racket Employer List';
  url: string = 'http://localhost:3001/employers';
  empusers: EmpUsers[];
  @Input() dataPath: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<EmpUsers[]>(this.dataPath).subscribe(empusers => {
      this.empusers = empusers;
    });
  }
}
