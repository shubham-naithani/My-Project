import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from 'src/app/app.component';
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

  constructor(
    private res:FormBuilder,
    private authservice:AuthService,
    private toast:ToastrService,
    private snackBar:MatSnackBar,
    ) { 
      this.initForm();
    }

  ngOnInit(){
   
  }

  initForm() {
    this.resendotpform=this.res.group({
      ContactNo:['',
    [Validators.required,Validators.minLength(10)]
  ]
    })
  }

  get ContactNo(): AbstractControl {
    return this.resendotpform.get('ContactNo') as FormControl;
  }

  get formcontrol(){return this.resendotpform.controls}
  submitForm(){
    if(this.resendotpform.invalid){
      return;
    }
    let data = this.resendotpform.value
    this.authservice.resendOTP(data).subscribe((resend:any)=>{
      if (resend.statusCode == 200) {
        this.snackBar.open(resend.message)
      } else {
        this.snackBar.open(resend.message)
      }
    })
  }
  }

