import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetpass:FormGroup;
  successmessage:any;
  spinner:boolean=false;

  constructor(private rp:FormBuilder,private authservice:AuthService,private toast:ToastrService,private route :Router) { }

  ngOnInit() {
    this.resetpass = this.rp.group({
      Password:[""]
    })
  }
  get formcontrol(){return this.resetpass.controls}
  submitform(){
    if(this.resetpass.invalid){
      return;
    }
    this.spinner=true;   
    if(this.resetpass.valid){
      let data ={
        Password:String(this.resetpass.value.Password),
    }
      this.authservice.resetpassword(data).subscribe((res :any) =>{
     
        if(res.statusCode==200){
          this.successmessage=res.message;
          this.toast.success(res.message);
          this.route.navigateByUrl("/Login");
        }else{
          this.toast.error(res.message)
        }
        this.spinner=false;
      })
  } }}
