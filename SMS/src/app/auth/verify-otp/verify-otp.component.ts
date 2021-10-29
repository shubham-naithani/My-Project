import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent implements OnInit {
  verifyotp: FormGroup;
  successmessage:string;
  showresend:boolean = false;
  Contact_No:any;
  spinner:boolean=false;

  constructor(private otp: FormBuilder, private authservice: AuthService, private route: ActivatedRoute,private toast:ToastrService,private router:Router) { }

  ngOnInit() {
    this.verifyotp = this.otp.group({
      OTP:[""]
    })
    // this.Contact_No = this.route.snapshot.queryParamMap.get("Contact_No")
  }
  get formcontrol() {return this.verifyotp.controls}

  submitForm(){
    if(this.verifyotp.invalid){
      return;
    }
    this.spinner=true;
    if (this.verifyotp.valid) {
      let data = {
        OTP: this.verifyotp.value.OTP 
      }    

      this.authservice.verifyotp(data).subscribe((ver: any) => {
          if (ver.statusCode == 200) {
          this.successmessage = ver.message;
          if (this.successmessage == "OTP Verified") {
           this.toast.success('OTP Verified')
          this.router.navigateByUrl("/Login")
          } else if (this.successmessage == "OTP Expired!") {
            this.showresend == true;
            this.router.navigateByUrl("/ResendOTP");
          }
        } else {
          this.toast.error(ver.message)
        }
        this.spinner=false;
      });
    }
  }
}

