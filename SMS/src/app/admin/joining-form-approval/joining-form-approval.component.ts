import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-joining-form-approval',
  templateUrl: './joining-form-approval.component.html',
  styleUrls: ['./joining-form-approval.component.css']
})
export class JoiningFormApprovalComponent implements OnInit {
  data:any;
  item:any;
  message:any;

  constructor(
    private fb: FormBuilder, 
    private adminservice:AdminService, 
    private route: Router, 
    private toast: ToastrService,
    private snackBar:MatSnackBar
    ) { }

  ngOnInit(){
    this.teacherGet();
  }

  teacherGet(){
    this.adminservice.teacherGet().subscribe((Response:any)=>{
      if (Response.statusCode == 200) {
        this.snackBar.open(Response.message)
        this.data = Response.responseData;
      } else {
        this.snackBar.open(Response.message)
      }
    });
  }
}
