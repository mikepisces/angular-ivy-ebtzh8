import { Component, OnInit } from '@angular/core';
import { CollegeService} from '../../services/college.service';
import {Observable} from 'rxjs';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})


export class ViewRegistrationComponent implements OnInit {
   
   public student;

   constructor(private collegeService: CollegeService){   }

   ngOnInit(){
   }

  getStudentDetail(id: number){
    this.collegeService.getStudentDetail(id).subscribe(

      data=> { this.student = data;
      },
      err=> console.error(err),
      ()=> console.log('Details loaded')
    );
  }

   

 // title = 'Angular: Getting Started';
}
