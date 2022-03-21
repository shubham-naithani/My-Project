import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    ) { }

  ngOnInit(){
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
