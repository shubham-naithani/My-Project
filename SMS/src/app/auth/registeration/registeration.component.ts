import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(
    private fb: FormBuilder, 
    private service: AuthService, 
    private route: Router, 
    private toast: ToastrService,
    private router:Router,
    private snackBar:MatSnackBar
    ) { }

  ngOnInit(){
    this.registerform = this.fb.group({
      FirstName: ['',
    [Validators.required]
  ],
      LastName: ['',
    [Validators.required]
  ],
      Email: ['',
    [Validators.required,Validators.email]
  ],
      Password: ['',
    [Validators.required,Validators.minLength(4),Validators.maxLength(8)]
  ],
      DOB: ['',
    [Validators.required]
  ],
      ContactNo: ['',
    [Validators.required,Validators.minLength(10)]
  ],
      Role:['',
    [Validators.required]
  ]
    })
    this.hide=true;
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
        this.snackBar.open(res.message)
        this.router.navigateByUrl("/VerifyOTP");
       }else{
        this.snackBar.open(res.message)
       }
     })
     this.spinner=false;

  }
}