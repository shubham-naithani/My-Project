import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  forgetpassword:FormGroup;
  successmessage:any;
  showreset:boolean=false;
  showsignup:boolean=false;
  enable:string="block";
  spinner:boolean=false;


  constructor(
    private fp:FormBuilder,
    private authservice:AuthService,
    private toast:ToastrService,
    private rout:Router,
    private snackBar:MatSnackBar
    ) { }

  ngOnInit(){
    this.forgetpassword = this.fp.group({
      ContactNo:["",
    [Validators.required]
  ]
    });
  }

  get formcontrol(){return this.forgetpassword.controls}
  submitform(){
    if(this.forgetpassword.invalid){
      return;
    }
    this.spinner=true;
     let data=this.forgetpassword.value
     this.authservice.forgetpassword(data).subscribe((forget: any)=>{      
       if(forget.statusCode==200){
         this.snackBar.open(forget.messages)
         if (this.successmessage=="Reset") {
           this.showreset=true;
          this.rout.navigateByUrl("/Reset-password");
         }else if (this.successmessage=="SignUp") {
           this.showsignup=true;
          this.rout.navigateByUrl("/Registeration");
         }
       }else{
        this.snackBar.open(forget.messages)
       }
     })
     this.spinner=false;

  }
  

}
