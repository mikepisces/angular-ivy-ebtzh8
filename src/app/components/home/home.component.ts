import { Component, OnInit } from '@angular/core';
import { CollegeService} from '../../services/college.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
   
   
   constructor(private collegeService: CollegeService){   }
   ngOnInit(){
      
   }

  

   

 // title = 'Angular: Getting Started';
}
