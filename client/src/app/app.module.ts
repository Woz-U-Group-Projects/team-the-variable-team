import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './core/material.module';
import { AppRoutingModule, } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpSignupComponent } from './employer/emp-signup/emp-signup.component';

import { StdProfileComponent } from './student/std-profile/std-profile.component';
import { StdSignupComponent } from './student/std-signup/std-signup.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { EmpProfEditComponent } from './employer/emp-prof-edit/emp-prof-edit.component';
import { AdminComponent } from './admin/admin.component';

import { HttpClientModule } from '@angular/common/http';
import { DisplayEmployersComponent } from './employer/display-employers/display-employers.component';
import { HeaderComponent } from './layout/header/header.component';
import { EmpJobpostsComponent } from './employer/emp-jobposts/emp-jobposts.component';
import { StdJobpostsComponent } from './student/std-jobposts/std-jobposts.component';
import { MatToolbarModule, MatSelectModule } from '@angular/material';
import { EmpProfileComponent } from './employer/emp-profile/emp-profile.component';
import { EmpPostJobModule } from './employer/emp-post-job/emp-post-job.module';
//Text Editor Imports
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { StudentsSearchComponent } from './students-search/students-search.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StdPostJobComponent } from './std-post-job/std-post-job.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpSignupComponent,
    
    StdProfileComponent,
    StdSignupComponent,
    LoginComponent,
    EmpProfEditComponent,
    AdminComponent,
    DisplayEmployersComponent,
    HeaderComponent,
    EmpJobpostsComponent,
    StdJobpostsComponent,
    EmpProfileComponent,
    StudentsSearchComponent,
    StudentsListComponent,
    StdPostJobComponent,
    
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    MatToolbarModule,
    MatSelectModule,
    EmpPostJobModule,
    //Text Editor Imports
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
