import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {CollegeService} from './CollegeService';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule,HttpClientModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ],

  providers : [CollegeService],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
