import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { EmpUsers } from '../angular-models/Emp_Users';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};
@Injectable({
    providedIn: 'root'
})
export class EmpUsersService {
    // tslint:disable-next-line:no-inferrable-types
    
    constructor(private http: HttpClient) { }
    EmpURL: string = 'http://localhost:4001/users/employers';
    EmpSigninURL: string = 'http://localhost:4001/users/login';
    EmpSearchURL: string = 'http://localhost:4001/users/employerssearch';
    employerSignin(data) {
        return this.http.post(this.EmpSigninURL, data, httpOptions);
    }
    getEmployers() {
        return this.http.get(this.EmpURL);
    }
    getEmployersWithJobPosts() {
        let options = { 
            params: new HttpParams().set('expand', 'jobpoststotal')
        };
        return this.http.get(this.EmpURL, options);
    }
    getEmployer(id) {
        return this.http.get(`${this.EmpURL}/${id}`);
    }
    addEmployer(empUsers): Observable<EmpUsers> {
        return this.http.post<EmpUsers>(this.EmpURL, empUsers, httpOptions);
    }
    searchEmployers(search) {
      return this.http.get(`${this.EmpSearchURL}/${search}`);
    }
}
