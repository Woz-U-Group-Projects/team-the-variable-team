import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { EmpJobPosts } from '../angular-models/Emp_JobPosts';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class EmpJobPostsService {
  // tslint:disable-next-line:no-inferrable-types
  EmpJobURL: string = 'http://localhost:4001/users/employers/empjobposts';
  constructor(private http: HttpClient) { }
  getEmpJobs() {
    return this.http.get(this.EmpJobURL);
  }
  getEmpJob(id) {
    return this.http.get(`${this.EmpJobURL}/${id}`);
  }
  addEmpJob(empJobPosts: EmpJobPosts): Observable<EmpJobPosts> {
    return this.http.post<EmpJobPosts>(this.EmpJobURL, empJobPosts, httpOptions);
  }
}
