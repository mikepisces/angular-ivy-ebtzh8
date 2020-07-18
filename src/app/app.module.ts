import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AdminComponent } from './components/admin/admin.component';
import {CollegeService} from './services/college.service';
import { HomeComponent } from './components/home/home.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule,HttpClientModule, FormsModule, AppRoutingModule,ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, AdminComponent, HomeComponent],

  providers : [CollegeService],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
