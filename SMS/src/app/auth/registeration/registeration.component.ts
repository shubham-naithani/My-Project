import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  registerform: FormGroup;
  hide: boolean;
  spinner:boolean=false;

  constructor(private fb: FormBuilder, private service: AuthService, private route: Router, private toast: ToastrService,private router:Router) { }

  ngOnInit(){
    this.registerform = this.fb.group({
      FirstName: [""],
      LastName: [""],
      Email: [""],
      Password: [''],
      DOB: [""],
      ContactNo: [""],
      Role:[""]
    })
    this.hide=true;
  }
  getErrorMessage() {
    if (this.registerform.controls.Email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.registerform.controls.Email.hasError('email') ? 'Not a valid email' : '';
  }
 
  submit() {
    debugger
    if(this.registerform.invalid){
      return;
    }
    this.spinner=true;
    let data = this.registerform.value;
    this.service.registeration(data).subscribe((res: any) => {
      if(res.statusCode==200){
        this.toast.success(res.message);
        this.router.navigateByUrl("/VerifyOTP");
       }else{
        this.toast.error(res.message);
       }
     })
     this.spinner=false;

  }
}