import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {CollegeService} from './services/college.service';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { AdminComponent } from './components/admin/admin.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule,HttpClientModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, AdminComponent],

  providers : [CollegeService],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
