import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { EmpSignupComponent } from './employer/emp-signup/emp-signup.component';
import { StdSignupComponent } from './student/std-signup/std-signup.component';
import { EmpProfileComponent } from './employer/emp-profile/emp-profile.component';
import { StdProfileComponent } from './student/std-profile/std-profile.component';

const routes: Routes = [
  { path: 'login-page', component: LoginComponent },
  { path: 'empsignup-page', component: EmpSignupComponent },
  { path: 'stdsignup-page', component: StdSignupComponent },
  { path: 'empprofile/:id', component: EmpProfileComponent },
  { path: 'stdprofile/:id', component: StdProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
