import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    ) { 
      this.initForm();
    }

  ngOnInit(){
  
  }

  initForm() {
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
    [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]
  ],
      Role:['',
    [Validators.required]
  ]
    })
    this.hide=true;
  }

   get FirstName(): AbstractControl {
    return this.registerform.get('FirstName') as FormControl;
  }
  get LastName(): AbstractControl {
    return this.registerform.get('LastName') as FormControl;
  }
  get Email(): AbstractControl {
    return this.registerform.get('Email') as FormControl;
  }
  get Password(): AbstractControl {
    return this.registerform.get('Password') as FormControl;
  }
  get DOB(): AbstractControl {
    return this.registerform.get('DOB') as FormControl;
  }
  get ContactNo(): AbstractControl {
    return this.registerform.get('ContactNo') as FormControl;
  }
  get Role(): AbstractControl {
    return this.registerform.get('Role') as FormControl;
  }

  submit() {
    this.registerform.markAllAsTouched();
    if(this.registerform.valid){
    this.spinner=true;
    let data = this.registerform.value;
    this.service.registeration(data).subscribe((res: any) => {
      if(res.statusCode == 200){ 
        this.snackBar.open(res.message)
        this.router.navigateByUrl("/VerifyOTP");
       }else{
        this.snackBar.open(res.message)
        this.route.navigateByUrl('/Login')
       }
     })
    }
     this.spinner=false;
  }
}