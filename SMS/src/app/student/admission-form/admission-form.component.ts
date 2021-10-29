import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css']
})
export class AdmissionFormComponent implements OnInit {
  admissionform: FormGroup
  form: FormGroup
  successmessage: any;

  constructor(private fb: FormBuilder, private toast: ToastrService, private service: StudentService, private route: Router) { }

  ngOnInit() {
    this.admissionform = new FormGroup({
      FirstName: new FormControl(""),
      LastName: new FormControl(""),
      FathersName: new FormControl(""),
      DOB: new FormControl(""),
      ADDRESS: new FormControl(""),
      Email: new FormControl(''),
      ContactNo: new FormControl(""),
      Gender: new FormControl(""),
      Cast: new FormControl(""),
      Religion: new FormControl(""),
      Nationality: new FormControl(""),
      City: new FormControl(""),
      Pincode: new FormControl(""),
      State: new FormControl(""),
      Class: new FormControl("")
    })
  }

  getErrorMessage() {
    if (this.admissionform.controls.Email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.admissionform.controls.Email.hasError('Email') ? 'Not a valid email' : '';
  }

  submit() {
    debugger
    let data = this.admissionform.value;
    this.service.Admission(data).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.toast.success(res.message);
      } else {
        this.toast.error(res.message);
      }
    })
  }
}

