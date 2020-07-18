import { Component, OnInit } from '@angular/core';
import { CollegeService} from '../../services/college.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent implements OnInit {
   
   public students;
   constructor(private collegeService: CollegeService){

   }
   ngOnInit(){

   }

   getStudents(){

     this.collegeService.getStudents().
   }

   

  title = 'Angular: Getting Started';
}
