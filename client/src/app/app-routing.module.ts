import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmpSignupComponent } from './employer/emp-signup/emp-signup.component';
import { StdSignupComponent } from './student/std-signup/std-signup.component';
import { EmpProfileComponent } from './employer/emp-profile/emp-profile.component';
import { StdProfileComponent } from './student/std-profile/std-profile.component';
import { EmpProfEditComponent} from './employer/emp-prof-edit/emp-prof-edit.component';
import { AdminComponent } from './admin/admin.component';
import { DisplayEmployersComponent } from './employer/display-employers/display-employers.component';
import { HeaderComponent } from './layout/header/header.component';
import { StudentsSearchComponent } from './students-search/students-search.component';
import { EmployersSearchComponent } from './employers-search/employers-search.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'empsignup', component: EmpSignupComponent },
  { path: 'stdsignup', component: StdSignupComponent },
  { path: 'empprofile/:id', component: EmpProfileComponent },
  { path: 'stdprofile/:id', component: StdProfileComponent },
  { path: 'students/:search', component: StudentsSearchComponent },
  { path: 'employers/:search', component: EmployersSearchComponent },
  { path: 'empprofedit/:id,', component: EmpProfEditComponent},
  { path: 'dispemployers', component: DisplayEmployersComponent},
  { path: 'header', component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
