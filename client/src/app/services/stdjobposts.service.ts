import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { StdJobPosts } from '../angular-models/Std_JobPosts';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class StdJobPostsService {
  // tslint:disable-next-line:no-inferrable-types
  StdJobURL: string = 'http://localhost:4001/users/students/stdjobposts';
  constructor(private http: HttpClient) { }
  getStdJobs() {
    return this.http.get(this.StdJobURL);
  }
  getStdJob(id) {
    return this.http.get(`${this.StdJobURL}/${id}`);
  }
  addStdJob(stdJobPosts: StdJobPosts): Observable<StdJobPosts> {
    return this.http.post<StdJobPosts>(this.StdJobURL, stdJobPosts, httpOptions);
  }
}
