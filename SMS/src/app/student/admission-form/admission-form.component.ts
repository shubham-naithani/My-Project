import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  ) { }

  ngOnInit() {
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
        [Validators.required,Validators.email]
      ],
      ContactNo: ['',
        [Validators.required,Validators.minLength(10)]
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

  submit() {
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

