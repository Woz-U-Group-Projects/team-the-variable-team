import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employers } from '../../../../../models/employer';


@Component({
  selector: 'app-emp-profile',
  templateUrl: './emp-profile.component.html',
  styleUrls: ['./emp-profile.component.css']
})
export class EmpProfileComponent implements OnInit {
  employers: Employers[];
  @Input() dataPath: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Employers[]>(this.dataPath).subscribe(employers => {
      this.employers = employers;
    });
  }
}


