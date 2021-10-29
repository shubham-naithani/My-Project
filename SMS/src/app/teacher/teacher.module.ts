import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { ThomeComponent } from './thome/thome.component';
import { TeacherRoutingModule } from './teacher.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { TprofileComponent } from './tprofile/tprofile.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { JoiningFormComponent } from './joining-form/joining-form.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    ThomeComponent,
    TprofileComponent,
    TeacherDashboardComponent,
    TimeTableComponent,
    JoiningFormComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    TeacherRoutingModule,
    SharedModule
  ]
})
export class TeacherModule { }
