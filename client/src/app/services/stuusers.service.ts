import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StuUsersService {
  StuURL: string ='http://localhost:4001/users/students';

  constructor(private http:HttpClient) { }
  getStudents() {
    return this.http.get(this.StuURL)
  }

  getStudent(id){
    return this.http.get(`${this.StuURL}/${id}`)
}

}
