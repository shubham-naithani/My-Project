import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ClassComponent } from './class/class.component';
import { FeeStructureComponent } from './fee-structure/fee-structure.component';
import { ResultComponent } from './result/result.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import {MaterialModule} from '../material/material.module'
import { ReactiveFormsModule } from '@angular/forms';
import {AdminRoutingModule} from '../admin/admin.routing.module'
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    ClassComponent,
    FeeStructureComponent,
    ResultComponent,
    StudentsComponent,
    TeachersComponent    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
