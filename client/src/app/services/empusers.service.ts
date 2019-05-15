import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class EmpUsersService {
    // tslint:disable-next-line:no-inferrable-types
    EmpURL: string = 'http://localhost:4001/users/employers';
    constructor(private http: HttpClient) { }
    getEmployers() {
        return this.http.get(this.EmpURL);
    }
    getEmployer(id) {
        return this.http.get(`${this.EmpURL}/${id}`);
    }
}
