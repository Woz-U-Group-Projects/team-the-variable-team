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
  avatar: string;
  preview: string;

  constructor(private empUsersService: EmpUsersService, private route: ActivatedRoute, private router: Router) {}

  addEmployer(): void {
    this.empUsers.avatar = this.avatar;
    this.empUsersService.addEmployer(this.empUsers).subscribe(() => {
      this.router.navigate(['/login'])
    })
  }

  ngOnInit() {
  }

  onFileChange(event) {
    let reader: any = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.avatar = reader.result.split(',')[1];
        this.preview = reader.result;
      };
    }
  }
}
