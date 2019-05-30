import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StdUsers } from '../../angular-models/Std_Users';
import { SessionService } from '../../services/session.service';
import { StdUsersService } from '../../services/stdusers.service';
@Component({
  selector: 'app-std-profile',
  templateUrl: './std-profile.component.html',
  styleUrls: ['./std-profile.component.css']
})
export class StdProfileComponent implements OnInit {
  student: StdUsers = null;
  // Id of the employer (url parameter)
 studentId: string;
  
  

  session;
  
  constructor(
    public router: Router,
    private stdUsersService: StdUsersService,
     private route: ActivatedRoute, 
     private sessionService: SessionService
     ) {}



  ngOnInit(): void {
     // Get
     this.route.paramMap.subscribe(params => {
      this.studentId = params.get('id');

      // Retrieve session info  
      this.session = this.sessionService.getSession();
      // Students can only see their own profile
      if (this.session.userType == 'student' && this.session.userId != this.studentId) {
        this.sessionService.logout();
        this.router.navigateByUrl("/login");
      }
// Retrieve employer
this.getStudent();

      
    });
  
}
  
   /**
   * Retrieve students list
   */
  getStudent(): void {
    this.stdUsersService
        .getStudent(this.studentId)
        .subscribe((data: StdUsers) => {
      this.student = data;
    })
  }

}
