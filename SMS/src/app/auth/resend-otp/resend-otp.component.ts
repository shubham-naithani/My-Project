import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-resend-otp',
  templateUrl: './resend-otp.component.html',
  styleUrls: ['./resend-otp.component.css']
})
export class ResendOtpComponent implements OnInit {
  resendotpform:FormGroup;
  successmessage:string;
  verifyotp:boolean=true;
  spinner:boolean=false;

  constructor(private res:FormBuilder,private authservice:AuthService,private toast:ToastrService) { }

  ngOnInit(){
    this.resendotpform=this.res.group({
      ContactNo:[""]
    })
  }
  get formcontrol(){return this.resendotpform.controls}
  submitForm(){
    if(this.resendotpform.invalid){
      return;
    }
    this.spinner=true;
    let data = this.resendotpform.value
    this.authservice.resendOTP(data).subscribe((resend:any)=>{

      if (resend.statusCode == 200) {
        this.successmessage = resend.message;
        this.toast.success(resend.message)
      } else {
        this.toast.error(resend.message)
      }
      this.spinner=false;
    })
  }
  }

