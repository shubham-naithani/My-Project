import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  forgetpassword: FormGroup;
  successmessage: any;
  showreset: boolean = false;
  showsignup: boolean = false;
  enable: string = "block";

  constructor(
    private fp: FormBuilder,
    private authservice: AuthService,
    private toast: ToastrService,
    private rout: Router,
    private snackBar: MatSnackBar
  ) {
    this.initForm();
  }

  ngOnInit() {

  }

  initForm() {
    this.forgetpassword = this.fp.group({
      ContactNo: ["",
        [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]
      ]
    })
  }

  get ContactNo(): AbstractControl {
    return this.forgetpassword.get('ContactNo') as FormControl;
  }

  get formcontrol() { return this.forgetpassword.controls }

  submitform() {
    this.forgetpassword.markAllAsTouched();
    let data = this.forgetpassword.value
    this.authservice.forgetpassword(data).subscribe((forget: any) => {
      if (forget.statusCode == 200) {
        if (forget.message == "Reset") {
          this.showreset = true;
          this.rout.navigateByUrl("/Reset-password");
          this.snackBar.open('ok now you can reset your password')
        } else if (forget.message == "SignUp") {
          this.rout.navigateByUrl("/Registeration");
          this.snackBar.open('contact no invalid signup first')
        }
      } else {
        this.snackBar.open('something error')
      }
    })
  }


}
