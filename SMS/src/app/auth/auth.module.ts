import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';
import { MainComponent } from './main/main.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { ResendOtpComponent } from './resend-otp/resend-otp.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { LoginComponent } from './login/login.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    MainComponent,
    VerifyOtpComponent,
    ResendOtpComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    RegisterationComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthModule { }
