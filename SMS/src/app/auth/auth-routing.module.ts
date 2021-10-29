import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { ResendOtpComponent } from './resend-otp/resend-otp.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';


const routes: Routes = [
  {path:"",component:MainComponent,children:[
    {path:"",component:HomeComponent},
    {path:"Registeration",component:RegisterationComponent},
    {path:"Login",component:LoginComponent},
    {path:"VerifyOTP",component:VerifyOtpComponent},
    {path:"ResendOTP",component:ResendOtpComponent},
    {path:"Forget-password",component:ForgetPasswordComponent},
    {path:"Reset-password",component:ResetPasswordComponent},
  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
