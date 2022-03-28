import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { TeacherModule } from './teacher/teacher.module';
import { CommonModule } from '@angular/common';
import { StudentModule } from './student/student.module';
import { AdminModule } from './admin/admin.module';
import { LogoutDialogComponent } from './shared/logout-dialog/logout-dialog.component';
import { ApprovedDialogComponent } from './admin/joining-form-approval/approved-dialog/approved-dialog.component';


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
  ], 
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[LogoutDialogComponent,ApprovedDialogComponent]
})
export class AppModule { }
