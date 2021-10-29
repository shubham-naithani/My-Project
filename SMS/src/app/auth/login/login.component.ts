import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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

  constructor(private fb: FormBuilder, private authService: AuthService, private toat: ToastrService, private route: Router) { }

  ngOnInit() {
    this.loginform = new FormGroup({
      Email: new FormControl(''),
      Password: new FormControl(''),
    })
    this.hide=true;
  }

  // getErrorMessage() {
  //   if (this.loginform.controls.Email.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  //   return this.loginform.controls.Email.hasError('Email') ? 'Not a valid email' : '';
  // }

  get formcontrol() { return this.loginform.controls }
  submit() {
    debugger
    if(this.loginform.invalid){
      return;
    }
    this.spinner = true;
    if (this.loginform.valid) {
      let data = {
        Email: this.loginform.value.Email,
        Password: this.loginform.value.Password
      }
      this.authService.login(data).subscribe((res: any) => {
        if (res.statusCode == 200) {
          this.toat.success(res.message);
          localStorage.setItem("token", "Qnw56WdvUdwxbxwwU6930edwRjwduuVbwnmTU");debugger
          localStorage.setItem("Role", res.responseData);
          if (res.responseData === "student") {
            this.route.navigateByUrl("/student");
            this.toat.success(res.message);

          } else if (res.responseData === "teacher") {
            this.route.navigateByUrl("/teacher");
            this.toat.success(res.message);
          }
          else if (res.responseData === "admin") {
            this.route.navigateByUrl("/admin");
            this.toat.success(res.message);
          }
        } else {
          this.toat.error(res.message);
        }
        this.spinner = false;
      });
    }
  }
};