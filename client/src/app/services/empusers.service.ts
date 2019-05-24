import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
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
    EmpURL: string = 'http://localhost:4001/users/employers';
    constructor(private http: HttpClient) {}

    options = { withCredentials: true };

    loggedIn: boolean = false;

    loginEmp(employer: EmpUsers): Observable<string> {
        return this.http.post<string>(this.EmpURL + "/login", employer, this.options);
    }

    logoutEmp(): Observable<string> {
        return this.http.get<string>(this.EmpURL + "/logout", this.options);
    }
    
    getEmployers() {
        return this.http.get(this.EmpURL);
    }
    getEmployer(id) {
        return this.http.get(`${this.EmpURL}/${id}`);
    }

    addEmployer(empUsers: EmpUsers): Observable<EmpUsers> {
        return this.http.post<EmpUsers>(this.EmpURL, empUsers, httpOptions);
    }
}
