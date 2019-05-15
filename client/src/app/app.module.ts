import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './core/material.module';
import { AppRoutingModule, } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpSignupComponent } from './employer/emp-signup/emp-signup.component';
import { EmpProfileComponent } from './employer/emp-profile/emp-profile.component';
import { StdProfileComponent } from './student/std-profile/std-profile.component';
import { StdSignupComponent } from './student/std-signup/std-signup.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { EmpProfEditComponent } from './employer/emp-prof-edit/emp-prof-edit.component';
import { AdminComponent } from './admin/admin.component';
import { MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { DisplayEmployersComponent } from './employer/display-employers/display-employers.component';
import { HeaderComponent } from './layout/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpSignupComponent,
    EmpProfileComponent,
    StdProfileComponent,
    StdSignupComponent,
    LoginComponent,
    EmpProfEditComponent,
    AdminComponent,
    DisplayEmployersComponent,
    HeaderComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
