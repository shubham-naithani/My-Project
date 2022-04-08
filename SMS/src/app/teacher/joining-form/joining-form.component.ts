import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin/admin.service';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-joining-form',
  templateUrl: './joining-form.component.html',
  styleUrls: ['./joining-form.component.css']
})
export class JoiningFormComponent implements OnInit {
  joiningform: FormGroup;
  rejectedFormMsg: string;

  constructor(
    private fb: FormBuilder,
    private toast: ToastrService,
    private service: TeacherService,
    private route: Router,
    private snackBar: MatSnackBar,
    private adminSer: AdminService,
  ) {
    this.initForm();
  }

  ngOnInit() {
    this.adminSer.rejectedFormMsgSubject.subscribe(data => {
      if (data == 'Your joining form has been rejected') {
        this.rejectedFormMsg = data
        this.snackBar.open(this.rejectedFormMsg, 'Dismiss', {
          duration: 9000,
          horizontalPosition: 'end'
        })
      }
    })
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
        [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]
      ],
      ContactNo: ['',
        [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]
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
      SubjectsYouCanTeach: ['',
        [Validators.required]
      ],
      ExperienceOfTeaching: ['',
        [Validators.required]
      ]
    })
  }

  get FirstName(): AbstractControl {
    return this.joiningform.get('FirstName') as FormControl;
  }
  get LastName(): AbstractControl {
    return this.joiningform.get('LastName') as FormControl;
  }
  get DOB(): AbstractControl {
    return this.joiningform.get('DOB') as FormControl;
  }
  get Age(): AbstractControl {
    return this.joiningform.get('Age') as FormControl;
  }
  get Gender(): AbstractControl {
    return this.joiningform.get('Gender') as FormControl;
  }
  get Cast(): AbstractControl {
    return this.joiningform.get('Cast') as FormControl;
  }
  get Religion(): AbstractControl {
    return this.joiningform.get('Religion') as FormControl;
  }
  get Email(): AbstractControl {
    return this.joiningform.get('Email') as FormControl;
  }
  get ContactNo(): AbstractControl {
    return this.joiningform.get('ContactNo') as FormControl;
  }
  get ADDRESS(): AbstractControl {
    return this.joiningform.get('ADDRESS') as FormControl;
  }
  get Nationality(): AbstractControl {
    return this.joiningform.get('Nationality') as FormControl;
  }
  get MaritialStatus(): AbstractControl {
    return this.joiningform.get('MaritialStatus') as FormControl;
  }
  get Qualification(): AbstractControl {
    return this.joiningform.get('Qualification') as FormControl;
  }
  get SubjectsYouCanTeach(): AbstractControl {
    return this.joiningform.get('SubjectsYouCanTeach') as FormControl;
  }
  get ExperienceOfTeaching(): AbstractControl {
    return this.joiningform.get('ExperienceOfTeaching') as FormControl;
  }

  submit() {
    this.joiningform.markAllAsTouched();
    if (this.joiningform.valid) {
      let data = this.joiningform.value;
      this.service.Joiningform(data).subscribe((res: any) => {
        if (res.statusCode == 200) {
          this.snackBar.open(res.message, 'undo', {
            duration: 3000
          })
        } else {
          this.snackBar.open(res.message, 'undo', {
            duration: 3000
          })
        }
      })
    }
  }
}
