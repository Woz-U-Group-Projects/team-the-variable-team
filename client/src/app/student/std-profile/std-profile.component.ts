import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StdUsersService } from '../../services/stdusers.service';
import { StdUsers } from '../../angular-models/Std_Users';

@Component({
  selector: 'app-std-profile',
  templateUrl: './std-profile.component.html',
  styleUrls: ['./std-profile.component.css']
})
export class StdProfileComponent implements OnInit {
  student: StdUsers[] = [];
  constructor(private stdUsersService: StdUsersService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'))
      this.stdUsersService.getStudent(params.get('id')).subscribe((data: StdUsers[]) => {
        console.log(data);
        this.student = data;
      })
    });
  }
}
