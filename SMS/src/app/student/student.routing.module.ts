import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../student/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { MyAssignmentComponent } from './my-assignment/my-assignment.component';
import { ProfileComponent } from './profile/profile.component';
import { ResultComponent } from './result/result.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import {AuthGuardGuard} from '../auth-guard.guard'
import { AdmissionFormComponent } from './admission-form/admission-form.component';


const routes: Routes = [

  {path:"",component:DashboardComponent,canActivate:[AuthGuardGuard],children:[
    {path:"student-home",component:HomeComponent},
    {path:"student-profile",component:ProfileComponent},
    {path:"student-subject",component:SubjectsComponent},
    {path:"student-upcoming-events",component:UpcomingEventsComponent},
    {path:"student-my-assignment",component:MyAssignmentComponent},
    {path:"student-result",component:ResultComponent},
    {path:"student-time-table",component:TimeTableComponent},
    {path:"student-Admission_form",component:AdmissionFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
