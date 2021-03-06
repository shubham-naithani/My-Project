import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProgressBarInterceptor } from './shared/interceptors/progress-bar.interceptor'
import { ToastrModule } from 'ngx-toastr';
import { TeacherModule } from './teacher/teacher.module';
import { CommonModule } from '@angular/common';
import { StudentModule } from './student/student.module';
import { AdminModule } from './admin/admin.module';
import { LogoutDialogComponent } from './shared/logout-dialog/logout-dialog.component';
import { ApprovedDialogComponent } from './admin/joining-form-approval/approved-dialog/approved-dialog.component';
import { AdminService } from './admin/admin.service';
import { SharedModule } from './shared/shared.module';
import { AuthService } from './auth/auth.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AuthModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    TeacherModule,
    StudentModule,
    AdminModule,
    SharedModule
  ],
  providers: [
    [AuthService],
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProgressBarInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [LogoutDialogComponent, ApprovedDialogComponent]
})
export class AppModule { }
