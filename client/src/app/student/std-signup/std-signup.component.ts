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
  avatar: string;
  preview: string;

  constructor(private stdUsersService: StdUsersService, private route: ActivatedRoute, private router: Router) {}

  addStudent(): void {
    this.stdUsers.avatar = this.avatar;
    this.stdUsersService.addStudent(this.stdUsers).subscribe(() => {
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
