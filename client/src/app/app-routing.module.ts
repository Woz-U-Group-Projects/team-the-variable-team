import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmpSignupComponent } from './employer/emp-signup/emp-signup.component';
import { StdSignupComponent } from './student/std-signup/std-signup.component';
import { EmpProfileComponent } from './employer/emp-profile/emp-profile.component';
import { StdProfileComponent } from './student/std-profile/std-profile.component';
import { EmpProfEditComponent} from './employer/emp-prof-edit/emp-prof-edit.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login-page', component: LoginComponent },
  { path: 'adminpage', component: AdminComponent },
  { path: 'empsignup-page', component: EmpSignupComponent },
  { path: 'stdsignup-page', component: StdSignupComponent },
  { path: 'empprofile/:id', component: EmpProfileComponent },
  { path: 'stdprofile/:id', component: StdProfileComponent },
  { path: 'empprofile-edit/:id,', component: EmpProfEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
