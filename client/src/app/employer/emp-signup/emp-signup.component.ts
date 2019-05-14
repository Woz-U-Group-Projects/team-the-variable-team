import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpUsersService } from '../../services/empusers.service';
import { EmpUsers } from '../../angular-models/Emp_Users';

@Component({
  selector: 'app-emp-signup',
  templateUrl: './emp-signup.component.html',
  styleUrls: ['./emp-signup.component.css']
})
export class EmpSignupComponent implements OnInit {
  empUsers: EmpUsers = new EmpUsers();

  constructor(private empUsersService: EmpUsersService, private route: ActivatedRoute, private router: Router) {}

  addEmployer(): void {
    this.empUsersService.addEmployer(this.empUsers).subscribe(() => {
      this.router.navigate(['/login-page'])
    })
  }

  ngOnInit() {
  }

}
