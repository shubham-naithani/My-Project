import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { ThomeComponent } from './thome/thome.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { TprofileComponent } from './tprofile/tprofile.component';
import {AuthGuardGuard} from '../auth-guard.guard'
import { JoiningFormComponent } from './joining-form/joining-form.component';


const routes: Routes = [
 {path:"",component:TeacherDashboardComponent,canActivate:[AuthGuardGuard],children:[
   {path:"",component:ThomeComponent},
   {path:"teacher-joining-form",component:JoiningFormComponent},
   {path:"teacher-profile",component:TprofileComponent},
   {path:"teacher-time-table",component:TimeTableComponent}
   
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
