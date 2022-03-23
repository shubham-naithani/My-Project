import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(
    private fb: FormBuilder, 
    private toast: ToastrService,
    private service:TeacherService,
    private route:Router,
    private snackBar:MatSnackBar
    ) {
      this.initForm();
     }

  ngOnInit(){

  }

  initForm() {
    this.joiningform = this.fb.group({
      FirstName: ['',
    [Validators.required]
    ],
      LastName: ['',
      [Validators.required]
      ],
      DOB: ['',
      [Validators.required]
      ],
      Age: ['',
      [Validators.required]
      ],
      Gender: ['',
      [Validators.required]
      ],
      Cast: ['',
      [Validators.required]
      ],
      Religion: ['',
      [Validators.required]
      ],
      Email: ['',
      [Validators.required,Validators.email]
      ],
      ContactNo: ['',
      [Validators.required,Validators.minLength(10)]
      ],
      ADDRESS: ['',
      [Validators.required]
      ],
      Nationality: ['',
      [Validators.required]
      ],
      MaritialStatus: ['',
      [Validators.required]
      ],
      Qualification: ['',
      [Validators.required]
      ],
    })
  }

  get FirstName(): AbstractControl {
    return this.joiningform.get('FirstName') as FormControl;
  }
  get LastName(): AbstractControl {
    return this.joiningform.get('LastName') as FormControl;
  }
  get DOB(): AbstractControl {
    return this.joiningform.get('LastName') as FormControl;
  }
  get Age(): AbstractControl {
    return this.joiningform.get('LastName') as FormControl;
  }
  get Gender(): AbstractControl {
    return this.joiningform.get('LastName') as FormControl;
  }
  get Cast(): AbstractControl {
    return this.joiningform.get('LastName') as FormControl;
  }
  get Religion(): AbstractControl {
    return this.joiningform.get('LastName') as FormControl;
  }
  get Email(): AbstractControl {
    return this.joiningform.get('LastName') as FormControl;
  }
  get ContactNo(): AbstractControl {
    return this.joiningform.get('LastName') as FormControl;
  }
  get ADDRESS(): AbstractControl {
    return this.joiningform.get('LastName') as FormControl;
  }
  get Nationality(): AbstractControl {
    return this.joiningform.get('LastName') as FormControl;
  }
  get MaritialStatus(): AbstractControl {
    return this.joiningform.get('LastName') as FormControl;
  }
  get Qualification(): AbstractControl {
    return this.joiningform.get('LastName') as FormControl;
  }

  submit(){
    debugger
    let data = this.joiningform.value;
    this.service.Joiningform(data).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.snackBar.open(res.message)
      } else {
        this.snackBar.open(res.message)
      }
    })
  }

}
