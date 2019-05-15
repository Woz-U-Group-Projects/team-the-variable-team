import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmpJobPostService {
  JobURL: string = 'http://localhost:4001/users/jobListings';
  
  constructor(private http: HttpClient) {}
    getJobListings(){
        return this.http.get(this.JobURL)
    }
    getJobListing(id){
      return this.http.get(`${this.JobURL}/${id}`)
  }
  
}
