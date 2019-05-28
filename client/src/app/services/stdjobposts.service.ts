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
  StdJobURL: string = 'http://localhost:4001/users/empjobposts';
  // Url to get student job posts by created id
  StdJobCreatedURL: string = 'http://localhost:4001/users/empjobpostsbycreated';
  // Url to get student job posts by created id
  StdJobUpdateURL: string = 'http://localhost:4001/users/empjobpostsupdate';
  
  constructor(private http: HttpClient) { }

  getStdJobs() {
    return this.http.get(this.StdJobURL);
  }
  getStdJob(id) {
    return this.http.get(`${this.StdJobURL}/${id}`);
  }
  addStdJob(empJobPosts: StdJobPosts): Observable<StdJobPosts> {
    return this.http.post<StdJobPosts>(this.StdJobURL, empJobPosts, httpOptions);
  }
  updateStdJob(id, update): Observable<StdJobPosts> {
    return this.http.put<StdJobPosts>(`${this.StdJobUpdateURL}/${id}`, update, httpOptions);
  }
  getStdJobsByCreated(id) {
    return this.http.get(`${this.StdJobCreatedURL}/${id}`);
  }
}