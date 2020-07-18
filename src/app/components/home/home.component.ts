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
   validMessage: string="";

   constructor(private collegeService: CollegeService){   }
   ngOnInit(){
      this.studentform = new FormGroup({
        name: new FormControl('', Validators.required),
        email:  new FormControl('', Validators.required),
        phone:  new FormControl('', Validators.required)
      })
   }

  

   

 // title = 'Angular: Getting Started';
}
