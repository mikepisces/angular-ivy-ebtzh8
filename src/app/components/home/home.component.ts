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
   constructor(private collegeService: CollegeService){   }
   ngOnInit(){
      this.getStudentDetails();
   }

   getStudentDetails(){

     this.collegeService.getStudentDetails().subscribe(
        data => {this.students = data },
        err => console.error(err),
        () => console.log('students loaded')
     );
   }

   

 // title = 'Angular: Getting Started';
}
