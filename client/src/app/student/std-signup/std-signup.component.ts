import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StdUsersService } from '../../services/stdusers.service';
import { StdUsers } from '../../angular-models/Std_Users';

@Component({
  selector: 'app-std-signup',
  templateUrl: './std-signup.component.html',
  styleUrls: ['./std-signup.component.css']
})
export class StdSignupComponent implements OnInit {
  stdUsers: StdUsers = new StdUsers();

  constructor(private stdUsersService: StdUsersService, private route: ActivatedRoute, private router: Router) {}

  addStudent(): void {
    this.stdUsersService.addStudent(this.stdUsers).subscribe(() => {
      this.router.navigate(['/login-page'])
    })
  }

  ngOnInit() {
  }

}
