import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetpass: FormGroup;
  successmessage: any;
  hide: boolean;

  constructor(
    private fb: FormBuilder,
    private authservice: AuthService,
    private toast: ToastrService,
    private route: Router,
    private snackBar: MatSnackBar,
  ) {
    this.initForm();
  }

  ngOnInit() {

  }

  initForm() {
    this.resetpass = this.fb.group({
      Password: ['',
        [Validators.required, Validators.minLength(4), Validators.maxLength(8)]
      ]
    })
  }

  get Password(): AbstractControl {
    return this.resetpass.get('Password') as FormControl;
  }

  get formcontrol() { return this.resetpass.controls }

  submitform() {
    this.resetpass.markAllAsTouched();
    if (this.resetpass.valid) {
      let data = this.resetpass.value
      this.authservice.resetpassword(data).subscribe((res: any) => {

        if (res.statusCode == 200) {
          this.snackBar.open(res.message)
          this.route.navigateByUrl("/Login");
        } else {
          this.snackBar.open(res.message)
        }
      })
    }
  }
}
