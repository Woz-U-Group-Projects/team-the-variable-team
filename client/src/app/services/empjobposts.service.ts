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
  EmpJobURL: string = 'http://localhost:4001/users/empjobposts';
  // Url to get employer job posts by created id
  EmpJobCreatedURL: string = 'http://localhost:4001/users/empjobpostsbycreated';
  // Url to get employer job posts by created id
  EmpJobUpdateURL: string = 'http://localhost:4001/users/empjobpostsupdate';
  // Add comment on jobPost 
  CommentURL: string = 'http://localhost:4001/users/emppostjobcomments';
  
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
  updateEmpJob(id, update): Observable<EmpJobPosts> {
    return this.http.put<EmpJobPosts>(`${this.EmpJobUpdateURL}/${id}`, update, httpOptions);
  }
  getEmpJobsByCreated(id) {
    return this.http.get(`${this.EmpJobCreatedURL}/${id}`);
  }
  addComment(comment) {
    return this.http.post(`${this.CommentURL}`, comment, httpOptions);
  }
  getComments(jobPostId) {
    return this.http.get(`${this.CommentURL}/${jobPostId}`);
  }
}
