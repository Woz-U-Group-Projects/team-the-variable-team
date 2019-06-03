import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpParams } from '@angular/common/http';
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
  // tslint:disable-next-line:no-inferrable-types
  StdURL: string = 'http://localhost:4001/users/students';
  StdSearchURL: string = 'http://localhost:4001/users/studentssearch';
  constructor(private http: HttpClient) { }
  getStudents() {
    return this.http.get(this.StdURL);
  }
  getStudentsWithJobPosts() {
      let options = { 
          params: new HttpParams().set('expand', 'jobpoststotal')
      };
      return this.http.get(this.StdURL, options);
  }
  getStudent(id) {
    return this.http.get(`${this.StdURL}/${id}`);
  }
  searchStudents(search) {
    return this.http.get(`${this.StdSearchURL}/${search}`);
  }
  addStudent(stdUsers: StdUsers): Observable<StdUsers> {
    return this.http.post<StdUsers>(this.StdURL, stdUsers, httpOptions);
  }
}
