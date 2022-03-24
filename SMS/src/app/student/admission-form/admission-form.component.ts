import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(
    private fb: FormBuilder,
    private toast: ToastrService,
    private service: StudentService,
    private route: Router,
    private snackBar: MatSnackBar
  ) {
    this.initForm();
   }

  ngOnInit() {
   
  }

  initForm() {
    this.admissionform = this.fb.group({
      FirstName: ['',
        [Validators.required]
      ],
      LastName: ['',
        [Validators.required]
      ],
      FathersName: ['',
        [Validators.required]
      ],
      DOB: ['',
        [Validators.required]
      ],
      ADDRESS: ['',
        [Validators.required]
      ],
      Email: ['',
      [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]
      ],
      ContactNo: ['',
      [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]
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
      Nationality: ['',
        [Validators.required]
      ],
      City: ['',
        [Validators.required]
      ],
      Pincode: ['',
        [Validators.required,Validators.minLength(6)]
      ],
      State: ['',
        [Validators.required]
      ],
      Class: ['',
        [Validators.required]
      ],
    })
  }

  get FirstName(): AbstractControl {
    return this.admissionform.get('FirstName') as FormControl;
  }
  get LastName(): AbstractControl {
    return this.admissionform.get('LastName') as FormControl;
  }
  get FathersName(): AbstractControl {
    return this.admissionform.get('FathersName') as FormControl;
  }
  get DOB(): AbstractControl {
    return this.admissionform.get('DOB') as FormControl;
  }
  get ADDRESS(): AbstractControl {
    return this.admissionform.get('ADDRESS') as FormControl;
  }
  get Email(): AbstractControl {
    return this.admissionform.get('Email') as FormControl;
  }
  get ContactNo(): AbstractControl {
    return this.admissionform.get('ContactNo') as FormControl;
  }
  get Gender(): AbstractControl {
    return this.admissionform.get('Gender') as FormControl;
  }
  get Cast(): AbstractControl {
    return this.admissionform.get('Cast') as FormControl;
  }
  get Religion(): AbstractControl {
    return this.admissionform.get('Religion') as FormControl;
  }
  get Nationality(): AbstractControl {
    return this.admissionform.get('Nationality') as FormControl;
  }
  get City(): AbstractControl {
    return this.admissionform.get('City') as FormControl;
  }
  get Pincode(): AbstractControl {
    return this.admissionform.get('Pincode') as FormControl;
  }
  get State(): AbstractControl {
    return this.admissionform.get('State') as FormControl;
  }
  get Class(): AbstractControl {
    return this.admissionform.get('Class') as FormControl;
  }


  submit() {
    this.admissionform.markAllAsTouched();
    if(this.admissionform.valid){
    let data = this.admissionform.value;
    this.service.Admission(data).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.snackBar.open(res.message)
      } else {
        this.snackBar.open(res.message)
      }
    })
  }
  }
}

