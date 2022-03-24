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
  {path:"class",component:ClassComponent},
  {path:"fee-structure",component:FeeStructureComponent},
  {path:"result",component:ResultComponent},
  {path:"student",component:StudentsComponent},
  {path:"teacher",component:TeachersComponent},
  {path:"salary",component:TeacherSalaryComponent},
  {path:"joining-form-approval",component:JoiningFormApprovalComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
