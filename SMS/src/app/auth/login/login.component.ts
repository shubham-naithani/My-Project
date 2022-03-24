import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  successmessage: any;
  hide: boolean;
  spinner: boolean = false;
  Role: any;
  tokenData:any

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toat: ToastrService,
    private route: Router,
    private snackBar: MatSnackBar
  ) {
    this.initForm();
  }

  ngOnInit() {

  }

  initForm() {
    this.loginform = this.fb.group({
      Email: ['',
        [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]
      ],
      Password: ['',
        [Validators.required, Validators.minLength(4), Validators.maxLength(8)]
      ],
    })
    this.hide = true;
  }

  get Email(): AbstractControl {
    return this.loginform.get('Email') as FormControl;
  }
  get Password(): AbstractControl {
    return this.loginform.get('Password') as FormControl;
  }

  onSubmit() {
    this.loginform.markAllAsTouched();
    this.spinner = true;
    if (this.loginform.valid) {
      let data = {
        Email: this.loginform.value.Email,
        Password: this.loginform.value.Password
      }
      this.authService.login(data).subscribe((res: any) => {
        this.authService.tokenDecoder(res.token); 
        const tokenData = JSON.parse(localStorage.getItem('token')|| '{}');
         
        var name = tokenData.Name
        var role = tokenData.Role
        localStorage.setItem('userName',name)
        localStorage.setItem('userRole',role)

        if (res.statusCode == 200) {
          this.snackBar.open(res.message)
          if (role == 'Student') {
            this.route.navigateByUrl('/student');
            this.snackBar.open(res.message)
          }
          else if (role == 'Teacher') {
            this.route.navigateByUrl('/teacher');
            this.snackBar.open(res.message)
          }
          else if (role == 'admin') {
            this.route.navigateByUrl('/admin');
            this.snackBar.open(res.message)
          }
        } else {
          this.snackBar.open(res.message)
        }
        this.spinner = false;
      });
    } 
  }
};