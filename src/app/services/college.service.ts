import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

const httpOptions = {

  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class CollegeService{

  constructor(private http: HttpClient) { }

  getStudentDetails(){
    return this.http.get('/server/ap1/v1/students');
  }

  getStudentDetails(id: number){
    return this.http.get('/server/ap1/v1/students/' + id);
  }

  createStudentForm(student){
    let body = JSON.stringify(student);
    return this.http.post('/server/ap1/v1/students',body,httpOptions);
  }
}


