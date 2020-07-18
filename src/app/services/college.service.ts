import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

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
    return this.http.get('/server/ap1/v1/students/' + id);
  }
}


