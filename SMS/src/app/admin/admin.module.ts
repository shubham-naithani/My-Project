import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ClassComponent } from './class/class.component';
import { FeeStructureComponent } from './fee-structure/fee-structure.component';
import { ResultComponent } from './result/result.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import {MaterialModule} from '../material/material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AdminRoutingModule} from '../admin/admin.routing.module'
import {SharedModule} from '../shared/shared.module';
import { ApprovedRequestComponent } from './joining-form-approval/approved-request/approved-request.component';
import { PendingRequestComponent } from './joining-form-approval/pending-request/pending-request.component';
import { RejectedRequestComponent } from './joining-form-approval/rejected-request/rejected-request.component';
import { JoiningFormApprovalComponent } from './joining-form-approval/joining-form-approval.component';
import { ApprovedDialogComponent } from './joining-form-approval/approved-dialog/approved-dialog.component';
import { AdminService } from './admin.service';
import { AuthService } from '../auth/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProgressBarInterceptor } from '../shared/interceptors/progress-bar.interceptor';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    ClassComponent,
    FeeStructureComponent,
    ResultComponent,
    StudentsComponent,
    TeachersComponent,
    ApprovedRequestComponent,
    PendingRequestComponent,
    RejectedRequestComponent,
    JoiningFormApprovalComponent,
    ApprovedDialogComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    SharedModule,
  ],
  providers: [
    [AuthService],
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProgressBarInterceptor,
      multi: true,
    }
  ],
})
export class AdminModule { }
