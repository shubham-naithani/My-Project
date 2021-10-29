import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { ResultComponent } from './result/result.component';
import { MyAssignmentComponent } from './my-assignment/my-assignment.component';
import {StudentRoutingModule} from './student.routing.module';
import {MaterialModule} from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import {SharedModule} from '../shared/shared.module'



@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    ProfileComponent,
    SubjectsComponent,
    UpcomingEventsComponent,
    ResultComponent,
    MyAssignmentComponent,
    AdmissionFormComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule ,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class StudentModule { }
