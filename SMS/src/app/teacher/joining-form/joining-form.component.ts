import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-joining-form',
  templateUrl: './joining-form.component.html',
  styleUrls: ['./joining-form.component.css']
})
export class JoiningFormComponent implements OnInit {
  joiningform:FormGroup;

  constructor(private fb: FormBuilder, private toast: ToastrService,private service:TeacherService,private route:Router) { }

  ngOnInit(){
    this.joiningform = new FormGroup({
      FirstName: new FormControl(""),
      LastName: new FormControl(""),
      DOB: new FormControl(""),
      Age: new FormControl(""),
      Gender: new FormControl(""),
      Cast: new FormControl(""),
      Religion: new FormControl(""),
      Email: new FormControl(""),
      ContactNo: new FormControl(""),
      ADDRESS: new FormControl(""),
      Nationality: new FormControl(""),
      MaritialStatus: new FormControl(""),
      Qualification: new FormControl(""),
      SubjectsYouCanTeach: new FormControl(""),
      ExperienceOfTeaching: new FormControl("")
    })
  }

  getErrorMessage() {
    if (this.joiningform.controls.Email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.joiningform.controls.Email.hasError('Email') ? 'Not a valid email' : '';
  }

  submit(){
    debugger
    let data = this.joiningform.value;
    this.service.Joiningform(data).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.toast.success(res.message);
      } else {
        this.toast.error(res.message);
      }
    })
  }

}
