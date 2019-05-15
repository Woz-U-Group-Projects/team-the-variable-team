import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { StdUsers } from '../angular-models/Std_Users';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class StdUsersService {
  StdURL: string = 'http://localhost:4001/users/students';
  constructor(private http: HttpClient) { }
  getStudents() {
    return this.http.get(this.StdURL)
  }
  getStudent(id) {
    return this.http.get(`${this.StdURL}/${id}`)
  }
  addStudent(stdUsers: StdUsers): Observable<StdUsers> {
    return this.http.post<StdUsers>(this.StdURL + '/sign-up', stdUsers, httpOptions);
  }
}
