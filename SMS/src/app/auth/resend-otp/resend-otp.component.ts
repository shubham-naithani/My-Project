import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(
    private res:FormBuilder,
    private authservice:AuthService,
    private toast:ToastrService,
    private snackBar:MatSnackBar
    ) { }

  ngOnInit(){
    this.resendotpform=this.res.group({
      ContactNo:['',
    [Validators.required,Validators.minLength(10)]
  ]
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
        this.snackBar.open(resend.message)
      } else {
        this.snackBar.open(resend.message)
      }
      this.spinner=false;
    })
  }
  }

