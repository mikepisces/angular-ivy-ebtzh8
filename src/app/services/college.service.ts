import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable()
export class CollegeService{

  constructor(private http: HttpClient) { }

  getForms(){
    return this.http.get('/server/ap1/v1/students');
  }
}


