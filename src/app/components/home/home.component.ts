import { Component, OnInit } from '@angular/core';
import { CollegeService} from '../../services/college.service';
import {Observable} from 'rxjs';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
   
   studentform: FormGroup;
   phonePattern = "^((\\+91-?)|0)?[0-9]{10}$";
   validMessage: string="";

   constructor(private collegeService: CollegeService){   }
   ngOnInit(){
      this.studentform = new FormGroup({
        name: new FormControl('', Validators.required),
        email:  new FormControl('', Validators.required),
        fatherName:  new FormControl('', Validators.required)
      })
   }

  submitRegistration(){

    if(this.studentform.valid) {
      this.validMessage = "Your details for admission have been submitted. Thank you!";
      this.collegeService.createStudentForm(this.studentform.value).subscribe(
        data=>{
          this.studentform.reset();
          return true;
        },
        error=>{
          return Observable.throw(error);
        }
      )
    }
    else {
      this.validMessage = "Please fill out the form before submitting";
    }
  }

   

 // title = 'Angular: Getting Started';
}
