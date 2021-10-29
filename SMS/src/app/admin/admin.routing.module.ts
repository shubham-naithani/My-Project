import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ClassComponent } from './class/class.component';
import { FeeStructureComponent } from './fee-structure/fee-structure.component';
import { ResultComponent } from './result/result.component';
import { StudentsComponent } from './students/students.component';
import { TeacherSalaryComponent } from './teacher-salary/teacher-salary.component';
import { TeachersComponent } from './teachers/teachers.component';
import {AuthGuardGuard} from '../auth-guard.guard';
import { JoiningFormApprovalComponent } from './joining-form-approval/joining-form-approval.component';

const routes: Routes = [
  {path:"",component:AdminDashboardComponent,canActivate:[AuthGuardGuard],children:[
  {path:"admin-class",component:ClassComponent},
  {path:"admin-fee-structure",component:FeeStructureComponent},
  {path:"admin-result",component:ResultComponent},
  {path:"admin-student",component:StudentsComponent},
  {path:"admin-teacher",component:TeachersComponent},
  {path:"admin-salary",component:TeacherSalaryComponent},
  {path:"teacher-joining-form-approval",component:JoiningFormApprovalComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
